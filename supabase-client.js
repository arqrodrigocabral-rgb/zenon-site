/* ============================================================================
 * supabase-client.js · camada fina sobre @supabase/supabase-js
 * ----------------------------------------------------------------------------
 * Expõe `window.SupabaseAPI` com a mesma superfície que o velho `SistemaData`:
 *   SupabaseAPI.ready           → Promise<void> (resolve quando tiver dados)
 *   SupabaseAPI.get(tipo, id)   → registro único (ou lista se id === undefined)
 *   SupabaseAPI.list(tipo, opts)
 *   SupabaseAPI.update(tipo, id, patch)
 *   SupabaseAPI.insert(tipo, patch)
 *   SupabaseAPI.subscribe(tipo, callback)   → realtime
 *   SupabaseAPI.auth.*          → login/logout/session
 *
 * Fallback: se não tiver URL configurada em window.__SUPABASE_CONFIG__,
 * exporta SistemaData como fallback (mantém tudo funcionando offline / local).
 * ==========================================================================*/

(function () {
  'use strict';

  // --- Config: o HTML injeta window.__SUPABASE_CONFIG__ antes desse script --
  const cfg = (typeof window !== 'undefined' && window.__SUPABASE_CONFIG__) || {};
  const HAS_SUPABASE = !!(cfg.url && cfg.anonKey && typeof window !== 'undefined' && window.supabase);

  if (!HAS_SUPABASE) {
    console.info('[SupabaseAPI] sem credenciais, usando SistemaData local como fallback');
    // Se SistemaData já estiver exposto, aliaseia SupabaseAPI pra ele.
    if (typeof window !== 'undefined' && window.SistemaData) {
      window.SupabaseAPI = buildLocalAdapter(window.SistemaData);
    }
    return;
  }

  const sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  // --- Mapeamento de "tipos" usados pelo sistema antigo para tabelas Postgres
  const TABLE = {
    clientes:      { table: 'clientes',       pk: 'id', ordem: 'nome' },
    projetos:      { table: 'projetos',       pk: 'id', ordem: 'created_at DESC' },
    propostas:     { table: 'propostas',      pk: 'id', ordem: 'created_at DESC' },
    obras:         { table: 'obras',          pk: 'id', ordem: 'created_at DESC' },
    fornecedores:  { table: 'fornecedores',   pk: 'id', ordem: 'nome' },
    parcelas:      { table: 'parcelas',       pk: 'id', ordem: 'vencimento' },
    financeiro:    { table: 'financeiro',     pk: 'id', ordem: 'vencimento DESC' },
    leads:         { table: 'leads',          pk: 'id', ordem: 'created_at DESC' },
    etapas_obra:   { table: 'etapas_obra',    pk: 'id', ordem: 'ordem' },
    etapas_projeto:{ table: 'etapas_projeto', pk: 'id', ordem: 'ordem' },
    relatorios:    { table: 'relatorios_obra',pk: 'id', ordem: 'data_relatorio DESC' },
    mensagens:     { table: 'mensagens',      pk: 'id', ordem: 'created_at' },
    arquivos:      { table: 'arquivos',       pk: 'id', ordem: 'created_at DESC' },
    profiles:      { table: 'profiles',       pk: 'id', ordem: 'nome' }
  };

  // --- Cache em memória pra leituras rápidas (refresh on change) -----------
  const cache = Object.create(null);

  function fireEdit(tipo, id, patch) {
    try {
      document.dispatchEvent(new CustomEvent('sistema-edit-saved', {
        detail: { tipo, id, patch, source: 'supabase' }
      }));
    } catch (e) { /* jsdom / SSR */ }
  }

  async function list(tipo, opts) {
    opts = opts || {};
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    let q = sb.from(def.table).select(opts.select || '*');
    if (opts.where) {
      for (const [k, v] of Object.entries(opts.where)) {
        if (Array.isArray(v)) q = q.in(k, v);
        else q = q.eq(k, v);
      }
    }
    if (opts.orderBy !== false) {
      const orderStr = opts.orderBy || def.ordem;
      const [col, dir] = orderStr.split(/\s+/);
      q = q.order(col, { ascending: (dir || 'ASC').toUpperCase() !== 'DESC' });
    }
    if (opts.limit) q = q.limit(opts.limit);
    const { data, error } = await q;
    if (error) { console.error('[SupabaseAPI] list', tipo, error); throw error; }
    cache[tipo] = data;
    return data;
  }

  async function get(tipo, id) {
    if (id === undefined) return list(tipo);
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    const { data, error } = await sb.from(def.table).select('*').eq(def.pk, id).maybeSingle();
    if (error) { console.error('[SupabaseAPI] get', tipo, id, error); throw error; }
    return data;
  }

  async function update(tipo, id, patch) {
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    const { data, error } = await sb.from(def.table)
      .update(patch).eq(def.pk, id).select().maybeSingle();
    if (error) { console.error('[SupabaseAPI] update', tipo, id, error); throw error; }
    fireEdit(tipo, id, patch);
    return data;
  }

  async function insert(tipo, row) {
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    const { data, error } = await sb.from(def.table).insert(row).select().maybeSingle();
    if (error) { console.error('[SupabaseAPI] insert', tipo, error); throw error; }
    fireEdit(tipo, data && data[def.pk], row);
    return data;
  }

  async function remove(tipo, id) {
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    const { error } = await sb.from(def.table).delete().eq(def.pk, id);
    if (error) { console.error('[SupabaseAPI] remove', tipo, id, error); throw error; }
    fireEdit(tipo, id, { __removed: true });
  }

  // Realtime: observa mudanças em uma tabela inteira
  function subscribe(tipo, cb) {
    const def = TABLE[tipo];
    if (!def) throw new Error('tipo desconhecido: ' + tipo);
    const channel = sb
      .channel('rt-' + def.table)
      .on('postgres_changes', { event: '*', schema: 'public', table: def.table },
          payload => cb(payload))
      .subscribe();
    return () => sb.removeChannel(channel);
  }

  // --- RPC pro briefing público (não exige login) --------------------------
  async function criarLeadBriefing(nome, email, telefone, briefing) {
    const { data, error } = await sb.rpc('criar_lead_do_briefing', {
      p_nome: nome,
      p_email: email || '',
      p_telefone: telefone || '',
      p_briefing: briefing
    });
    if (error) { console.error('[SupabaseAPI] criarLeadBriefing', error); throw error; }
    return data;
  }

  // --- Auth wrappers ------------------------------------------------------
  const auth = {
    async session() { const { data } = await sb.auth.getSession(); return data.session; },
    async me() {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return null;
      const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).maybeSingle();
      return { user, profile };
    },
    async signInWithPassword(email, password) {
      return sb.auth.signInWithPassword({ email, password });
    },
    async signInWithMagicLink(email, redirectTo) {
      return sb.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo || window.location.origin }
      });
    },
    async signOut() { return sb.auth.signOut(); },
    onChange(cb) { return sb.auth.onAuthStateChange((e, sess) => cb(e, sess)); }
  };

  // --- API pública --------------------------------------------------------
  window.SupabaseAPI = {
    ready: Promise.resolve(),
    sb, // instância bruta se precisar
    list, get, update, insert, remove, subscribe,
    criarLeadBriefing,
    auth
  };

  // -------------------------------------------------------------------------
  // Adaptador local: envolve SistemaData na mesma assinatura que o cliente
  // remoto, pra qualquer UI poder chamar SupabaseAPI mesmo offline.
  // -------------------------------------------------------------------------
  function buildLocalAdapter(SD) {
    const mapTipo = {
      clientes: 'CLIENTES', projetos: 'PROJETOS', propostas: 'PROPOSTAS',
      obras: 'OBRAS', financeiro: 'FINANCEIRO', leads: 'LEADS'
    };
    function pick(tipo) {
      return SD[mapTipo[tipo] || tipo.toUpperCase()] || {};
    }
    return {
      ready: Promise.resolve(),
      async list(tipo) {
        const bucket = pick(tipo);
        return Object.values(bucket);
      },
      async get(tipo, id) {
        const bucket = pick(tipo);
        if (id === undefined) return Object.values(bucket);
        return bucket[id] || null;
      },
      async update(tipo, id, patch) {
        if (typeof SD.update === 'function') {
          for (const [k, v] of Object.entries(patch)) {
            SD.update(mapTipo[tipo] || tipo.toUpperCase(), id, k, v);
          }
        }
        fireEdit(tipo, id, patch);
        const bucket = pick(tipo);
        return bucket[id] || null;
      },
      async insert(tipo, row) {
        const bucket = pick(tipo);
        const id = row.id || row.codigo || ('NEW-' + Date.now());
        bucket[id] = Object.assign({}, bucket[id], row);
        fireEdit(tipo, id, row);
        return bucket[id];
      },
      async remove() { throw new Error('remove não suportado em modo local'); },
      subscribe() { return () => {}; }, // no-op local
      async criarLeadBriefing(nome, email, telefone, briefing) {
        const id = 'LEAD-' + Date.now();
        const lead = { id, codigo: id, nome, email, telefone, briefing,
                       status: 'novo', origem: 'briefing_site',
                       created_at: new Date().toISOString() };
        if (!SD.LEADS) SD.LEADS = {};
        SD.LEADS[id] = lead;
        fireEdit('leads', id, lead);
        return id;
      },
      auth: {
        async session() { return null; },
        async me() { return null; },
        async signInWithPassword() { throw new Error('auth indisponível offline'); },
        async signInWithMagicLink() { throw new Error('auth indisponível offline'); },
        async signOut() {},
        onChange() { return { data: { subscription: { unsubscribe: () => {} } } }; }
      }
    };
  }

})();

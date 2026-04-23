/* ============================================================
   SISTEMA-EDIT.JS
   Edição inline universal — clique em qualquer elemento com
   data-edit="tipo:id:caminho.campo" e edite no lugar.

   Atributos suportados:
     data-edit="proposta:PRO-1:itens.0.valor"
     data-edit-type="text|number|currency|textarea|select"
     data-edit-options="A,B,C"   (para select)
     data-edit-fmt="brl|brl-short|int"  (formato de exibição)
     data-raw="<valor cru>"   (opcional — se não houver, usa textContent)

   Eventos disparados:
     'sistema-edit-saved' { detail: { tipo, id, path, value } }
   ============================================================ */
(function (root) {
  'use strict';
  if (typeof document === 'undefined') return;
  const SD = root.SistemaData;
  if (!SD) { console.warn('[sistema-edit] SistemaData não disponível'); return; }

  function parseSpec(el) {
    const raw = el.getAttribute('data-edit');
    if (!raw) return null;
    const parts = raw.split(':');
    if (parts.length < 3) return null;
    return { tipo: parts[0], id: parts[1], path: parts.slice(2).join(':') };
  }
  function getType(el) { return el.getAttribute('data-edit-type') || 'text'; }
  function getFmt(el)  { return el.getAttribute('data-edit-fmt') || ''; }

  function fmtFor(el, t, raw) {
    const fmt = getFmt(el);
    if (raw === '' || raw == null || raw === '—') return '—';
    if (t === 'currency' || fmt === 'brl') return SD.fmtBRL(Number(raw));
    if (fmt === 'brl-short') return SD.fmtBRLshort(Number(raw));
    if (t === 'number' || fmt === 'int') {
      const n = Number(raw);
      return isNaN(n) ? String(raw) : n.toLocaleString('pt-BR');
    }
    return String(raw);
  }
  function parseFor(t, str) {
    if (t === 'currency' || t === 'number') {
      let s = String(str).trim().replace(/R\$\s*/g, '').replace(/\s/g,'');
      // pt-BR: 1.234,56  → JS: 1234.56
      if (s.indexOf(',') >= 0 && s.indexOf('.') >= 0) {
        s = s.replace(/\./g, '').replace(',', '.');
      } else if (s.indexOf(',') >= 0) {
        s = s.replace(',', '.');
      }
      const n = Number(s);
      return isNaN(n) ? 0 : n;
    }
    return String(str).trim();
  }
  function valueForInput(t, raw) {
    if (raw == null || raw === '' || raw === '—') return '';
    if (t === 'currency' || t === 'number') {
      const n = Number(raw);
      if (isNaN(n)) return String(raw);
      // exibe com vírgula brasileira
      return n.toLocaleString('pt-BR', { useGrouping:false, maximumFractionDigits: 2 }).replace('.', ',');
    }
    return String(raw);
  }

  function startEdit(el) {
    if (el.classList.contains('editing')) return;
    const spec = parseSpec(el);
    if (!spec) return;
    const t = getType(el);

    // valor cru atual
    let cur;
    if (el.hasAttribute('data-raw')) {
      cur = el.getAttribute('data-raw');
    } else {
      cur = el.textContent.trim();
    }

    const orig = el.innerHTML;
    el.classList.add('editing');

    let input;
    if (t === 'textarea') {
      input = document.createElement('textarea');
      input.rows = el.getAttribute('data-rows') || 3;
    } else if (t === 'select') {
      input = document.createElement('select');
      const opts = (el.getAttribute('data-edit-options') || '').split(',').map(s => s.trim()).filter(Boolean);
      opts.forEach(o => {
        const op = document.createElement('option');
        op.value = o; op.textContent = o;
        if (String(cur) === o) op.selected = true;
        input.appendChild(op);
      });
    } else {
      input = document.createElement('input');
      input.type = 'text';
    }
    input.className = 'inline-edit-input';
    if (input.tagName !== 'SELECT') input.value = valueForInput(t, cur);
    el.innerHTML = '';
    el.appendChild(input);
    input.focus();
    if (input.select) input.select();

    let done = false;
    function commit() {
      if (done) return; done = true;
      const v = parseFor(t, input.tagName === 'SELECT' ? input.value : input.value);
      const ok = SD.update(spec.tipo, spec.id, spec.path, v);
      el.classList.remove('editing');
      if (ok) {
        el.setAttribute('data-raw', v);
        el.innerHTML = fmtFor(el, t, v);
        el.classList.add('just-saved');
        setTimeout(() => el.classList.remove('just-saved'), 900);
        document.dispatchEvent(new CustomEvent('sistema-edit-saved', { detail: { tipo: spec.tipo, id: spec.id, path: spec.path, value: v } }));
      } else {
        el.innerHTML = orig;
      }
    }
    function cancel() {
      if (done) return; done = true;
      el.classList.remove('editing');
      el.innerHTML = orig;
    }
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && t !== 'textarea') {
        e.preventDefault(); input.blur();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        input.removeEventListener('blur', commit);
        cancel();
      }
    });
  }

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-edit]');
    if (!target) return;
    if (target.classList.contains('editing')) return;
    if (e.target.closest('a, button')) return; // não interceptar links/botões
    e.preventDefault();
    startEdit(target);
  });

  /* ----- barra "editado localmente" + reset ----- */
  function mountOverrideBar(tipo, id) {
    if (!SD.hasOverride(tipo, id)) return;
    const bar = document.createElement('div');
    bar.className = 'edit-overrides-bar';
    bar.innerHTML = '✎ Editado localmente <button type="button" id="__ovreset">Restaurar original</button>';
    bar.querySelector('#__ovreset').addEventListener('click', () => {
      if (confirm('Restaurar os valores originais deste registro? Suas edições locais serão descartadas.')) {
        SD.resetRecord(tipo, id);
      }
    });
    return bar;
  }

  /* ----- reset global (para configurações) ----- */
  root.SistemaEdit = {
    start: startEdit,
    mountOverrideBar: mountOverrideBar,
    resetAll: function () {
      if (confirm('Restaurar TODOS os valores originais? Todas as edições locais serão perdidas.')) SD.resetAll();
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

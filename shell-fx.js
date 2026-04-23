/* ============================================================
   shell-fx.js — cotação USD/BRL no header
   Fonte: AwesomeAPI (economia.awesomeapi.com.br) — pública, sem key.
   Atualiza a cada 60 s. Faz cache em localStorage pra render imediato.
   ============================================================ */
(function(){
  const API = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
  const CACHE_KEY = 'zenon_fx_usd_brl';
  const REFRESH_MS = 60 * 1000;    // 60s
  const STALE_MS   = 10 * 60 * 1000; // 10min → marca como "stale"

  function fmtBRL(n){
    if(n == null || isNaN(n)) return '—';
    return Number(n).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:4});
  }
  function fmtPct(n){
    if(n == null || isNaN(n)) return '';
    const s = (n >= 0 ? '+' : '');
    return s + Number(n).toFixed(2).replace('.',',') + '%';
  }
  function fmtTs(ts){
    if(!ts) return '';
    const d = new Date(ts);
    if(isNaN(d)) return '';
    return d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  }

  function render(quote, opts){
    opts = opts || {};
    const chips = document.querySelectorAll('.fx-chip');
    if(!chips.length) return;
    chips.forEach(chip => {
      if(!quote){
        chip.classList.add('loading');
        chip.querySelector('.fx-val').innerHTML = '<span class="cur">R$</span>—';
        chip.querySelector('.fx-delta').textContent = '…';
        return;
      }
      chip.classList.remove('loading');
      const bid = parseFloat(quote.bid);
      const pct = parseFloat(quote.pctChange);
      const varBid = parseFloat(quote.varBid);

      const valEl = chip.querySelector('.fx-val');
      valEl.innerHTML = '<span class="cur">R$</span>' + fmtBRL(bid);

      const dEl = chip.querySelector('.fx-delta');
      dEl.classList.remove('up','down','flat');
      if(isNaN(pct)) dEl.classList.add('flat');
      else if(pct > 0.01) dEl.classList.add('up');
      else if(pct < -0.01) dEl.classList.add('down');
      else dEl.classList.add('flat');
      dEl.textContent = fmtPct(pct);

      // tooltip com detalhes
      const tip = chip.querySelector('.fx-tip');
      if(tip){
        const ts = quote.create_date || (new Date()).toISOString();
        tip.innerHTML = [
          '<div class="t">Dólar comercial</div>',
          '<div class="r"><span class="l">Compra (bid)</span><span class="v">R$ '+fmtBRL(quote.bid)+'</span></div>',
          '<div class="r"><span class="l">Venda (ask)</span><span class="v">R$ '+fmtBRL(quote.ask)+'</span></div>',
          '<div class="r"><span class="l">Máx. dia</span><span class="v">R$ '+fmtBRL(quote.high)+'</span></div>',
          '<div class="r"><span class="l">Mín. dia</span><span class="v">R$ '+fmtBRL(quote.low)+'</span></div>',
          '<div class="r"><span class="l">Var. dia</span><span class="v">'+(isNaN(varBid)?'—':(varBid>=0?'+':'')+fmtBRL(varBid))+'</span></div>',
          '<div class="ts">Fonte: AwesomeAPI · '+fmtTs(ts)+(opts.stale?' · cache':'')+'</div>'
        ].join('');
      }

      // stale?
      const tsMs = quote.__fetchedAt || 0;
      if(opts.stale || (tsMs && (Date.now() - tsMs > STALE_MS))) chip.classList.add('stale');
      else chip.classList.remove('stale');
    });
  }

  function cacheGet(){
    try{
      const raw = localStorage.getItem(CACHE_KEY);
      if(!raw) return null;
      return JSON.parse(raw);
    }catch(e){ return null; }
  }
  function cacheSet(q){
    try{ localStorage.setItem(CACHE_KEY, JSON.stringify(q)); }catch(e){}
  }

  function fetchQuote(){
    // render cache primeiro (mesmo que velho)
    const cached = cacheGet();
    if(cached) render(cached, { stale: true });

    fetch(API, { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(data => {
        // AwesomeAPI devolve {USDBRL: {bid,ask,pctChange,varBid,high,low,create_date,...}}
        const q = data && data.USDBRL;
        if(!q) return;
        q.__fetchedAt = Date.now();
        cacheSet(q);
        render(q);
      })
      .catch(err => {
        // silencia — mantém cache
        if(cached) render(cached, { stale: true });
        else {
          // fallback estático
          const fb = { bid:'5.1200', ask:'5.1250', pctChange:'0.00', varBid:'0.0000', high:'5.1350', low:'5.1100', create_date:new Date().toISOString(), __fetchedAt:Date.now() };
          render(fb, { stale: true });
        }
      });
  }

  function init(){
    if(!document.querySelector('.fx-chip')) return;
    fetchQuote();
    setInterval(fetchQuote, REFRESH_MS);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

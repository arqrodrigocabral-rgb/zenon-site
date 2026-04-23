/* ============================================================
   shell-user.js — comportamento do menu de usuário
   - Toggle do dropdown ao clicar no nome/avatar
   - Fecha ao clicar fora ou apertar Esc
   - Sincroniza foto de perfil via localStorage ("zenon_user_photo")
   - Sincroniza nome via localStorage ("zenon_user_name")
   ============================================================ */
(function(){
  const STORAGE_PHOTO = 'zenon_user_photo';
  const STORAGE_NAME  = 'zenon_user_name';
  const STORAGE_ROLE  = 'zenon_user_role';

  function applyUserProfile(){
    let photo='', name='', role='';
    try{
      photo = localStorage.getItem(STORAGE_PHOTO) || '';
      name  = localStorage.getItem(STORAGE_NAME)  || '';
      role  = localStorage.getItem(STORAGE_ROLE)  || '';
    }catch(e){}

    // aplica em todas as instâncias de avatar do header/dropdown
    document.querySelectorAll('.avatar[data-user="me"]').forEach(av => {
      if(photo){
        av.style.backgroundImage = 'url("'+photo+'")';
        av.classList.add('has-photo');
      } else {
        av.style.backgroundImage = '';
        av.classList.remove('has-photo');
        // fallback: 1ª letra do nome
        const ini = (name || 'R').trim().charAt(0).toUpperCase();
        if(av.textContent.trim().length <= 1) av.textContent = ini;
      }
    });

    // aplica nome
    if(name){
      document.querySelectorAll('[data-user-name]').forEach(el => { el.textContent = name; });
    }
    if(role){
      document.querySelectorAll('[data-user-role]').forEach(el => { el.textContent = role; });
    }
  }

  function toggleUserDropdown(e){
    e && e.preventDefault && e.preventDefault();
    e && e.stopPropagation && e.stopPropagation();
    const trigger = document.querySelector('.user-trigger');
    const dd = document.querySelector('.user-dropdown');
    if(!trigger || !dd) return;
    const was = dd.classList.contains('open');
    dd.classList.toggle('open');
    trigger.classList.toggle('open');
    if(!was){
      // fecha outros menus abertos
      document.querySelectorAll('.row-menu.open,.menu-list.open').forEach(m=>m.classList.remove('open'));
    }
  }

  document.addEventListener('click', function(e){
    const dd = document.querySelector('.user-dropdown.open');
    if(!dd) return;
    if(!e.target.closest('.user-menu')) {
      dd.classList.remove('open');
      const trigger = document.querySelector('.user-trigger');
      if(trigger) trigger.classList.remove('open');
    }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      document.querySelectorAll('.user-dropdown.open').forEach(dd => dd.classList.remove('open'));
      document.querySelectorAll('.user-trigger.open').forEach(t => t.classList.remove('open'));
    }
  });

  // expõe pro perfil.html salvar foto
  window.ZenonUser = {
    setPhoto: function(dataUrl){
      try{ localStorage.setItem(STORAGE_PHOTO, dataUrl || ''); }catch(e){}
      applyUserProfile();
    },
    clearPhoto: function(){
      try{ localStorage.removeItem(STORAGE_PHOTO); }catch(e){}
      applyUserProfile();
    },
    setName: function(n){
      try{ localStorage.setItem(STORAGE_NAME, n || ''); }catch(e){}
      applyUserProfile();
    },
    setRole: function(r){
      try{ localStorage.setItem(STORAGE_ROLE, r || ''); }catch(e){}
      applyUserProfile();
    },
    getPhoto: function(){ try{ return localStorage.getItem(STORAGE_PHOTO)||''; }catch(e){ return ''; } },
    getName:  function(){ try{ return localStorage.getItem(STORAGE_NAME) ||'Rodrigo'; }catch(e){ return 'Rodrigo'; } },
    getRole:  function(){ try{ return localStorage.getItem(STORAGE_ROLE) ||'Sócio · Arquiteto responsável'; }catch(e){ return 'Sócio · Arquiteto responsável'; } },
    apply: applyUserProfile,
    toggleDropdown: toggleUserDropdown
  };

  document.addEventListener('DOMContentLoaded', applyUserProfile);
  if(document.readyState !== 'loading') applyUserProfile();
})();

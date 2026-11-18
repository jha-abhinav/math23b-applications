/* Collapsible weeks sidebar. Loaded in <head> (not deferred) so the saved state applies before the page paints. */
(function(){
'use strict';
const KEY='atw80-weeks-collapsed',root=document.documentElement;
let collapsed=false;
try{collapsed=localStorage.getItem(KEY)==='1';}catch(e){}
root.classList.toggle('weeks-collapsed',collapsed);
function sync(){
 const c=root.classList.contains('weeks-collapsed');
 for(const b of document.querySelectorAll('[data-sidebar-toggle]'))b.setAttribute('aria-expanded',String(!c));
}
document.addEventListener('DOMContentLoaded',sync);
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-sidebar-toggle]');if(!button)return;
 const c=!root.classList.contains('weeks-collapsed');
 root.classList.toggle('weeks-collapsed',c);sync();
 try{localStorage.setItem(KEY,c?'1':'0');}catch(e){}
 const target=document.querySelector(c?'.sidebar-reopen':'.sidebar-toggle');if(target)target.focus();
});
})();

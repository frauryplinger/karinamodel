/* Sprachauswahl im Kopfbereich: schließt bei Klick daneben und mit Escape */
(()=>{'use strict';
const menu=document.querySelector('.lang');if(!menu)return;
document.addEventListener('click',e=>{if(menu.open&&!menu.contains(e.target))menu.open=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});
})();

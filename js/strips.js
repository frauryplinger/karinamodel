/* Pfeil-Knöpfe für die seitlichen Fotostreifen (am Computer) */
(()=>{'use strict';
const L={ru:['Назад','Вперёд'],en:['Previous','Next'],kk:['Артқа','Алға']}[document.documentElement.lang]||['←','→'];
document.querySelectorAll('.strip').forEach(strip=>{
 const wrap=document.createElement('div');wrap.className='strip-wrap';strip.before(wrap);wrap.append(strip);
 const mk=(cls,txt,label,dir)=>{const b=document.createElement('button');b.type='button';b.className='strip-btn '+cls;b.textContent=txt;b.setAttribute('aria-label',label);b.tabIndex=-1;
  b.addEventListener('click',()=>strip.scrollBy({left:dir*strip.clientWidth*0.8,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));wrap.append(b);return b;};
 const prev=mk('prev','←',L[0],-1),next=mk('next','→',L[1],1);
 const update=()=>{prev.disabled=strip.scrollLeft<=2;next.disabled=strip.scrollLeft+strip.clientWidth>=strip.scrollWidth-2;};
 strip.addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
});
})();

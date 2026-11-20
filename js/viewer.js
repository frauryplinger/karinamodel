/* Foto-Ansicht (Lightbox): Vor/Zurück, Pfeiltasten, Zurück-Taste des Browsers */
(()=>{
'use strict';
const dialog=document.getElementById('viewer');
if(!dialog||typeof dialog.showModal!=='function')return;
const items=[...document.querySelectorAll('[data-viewer]')],picture=document.getElementById('viewer-img'),title=document.getElementById('viewer-title'),count=document.getElementById('viewer-count');
let selected=0,lastTrigger=null,historyAdded=false,closing=false;
function draw(){
const img=items[selected].querySelector('img');
picture.src=img.dataset.full||img.currentSrc||img.src;
picture.alt=img.alt;
title.textContent=img.alt;
count.textContent=(selected+1)+' / '+items.length;
}
function finish(){
if(dialog.open)dialog.close();
document.body.classList.remove('viewer-open');
historyAdded=false;
closing=false;
if(lastTrigger)lastTrigger.focus({
preventScroll:true}
);
}
function close(){
if(closing)return;
closing=true;
if(historyAdded){
history.back();
}
else finish();
}
function open(i,trigger){
if(dialog.open)return;
selected=i;
lastTrigger=trigger;
draw();
dialog.showModal();
document.body.classList.add('viewer-open');
history.pushState({
karinaViewer:true}
,'','#view-'+(i+1));
historyAdded=true;
document.getElementById('viewer-close').focus();
}
function move(step){
selected=(selected+step+items.length)%items.length;
draw();
history.replaceState({
karinaViewer:true}
,'','#view-'+(selected+1));
}
items.forEach((card,i)=>{
card.tabIndex=0;
card.setAttribute('role','button');
card.setAttribute('aria-haspopup','dialog');
card.setAttribute('aria-label','Увеличить: '+card.querySelector('img').alt);
card.addEventListener('click',()=>open(i,card));
card.addEventListener('keydown',e=>{
if(e.key==='Enter'||e.key===' '){
e.preventDefault();
open(i,card);
}
}
);
}
);
document.getElementById('viewer-close').addEventListener('click',close);
document.getElementById('viewer-prev').addEventListener('click',()=>move(-1));
document.getElementById('viewer-next').addEventListener('click',()=>move(1));
dialog.addEventListener('cancel',e=>{
e.preventDefault();
close();
}
);
dialog.addEventListener('click',e=>{
if(e.target===dialog){
const r=dialog.getBoundingClientRect();
if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();
}
}
);
dialog.addEventListener('keydown',e=>{
if(e.key==='ArrowRight'){
e.preventDefault();
move(1);
}
if(e.key==='ArrowLeft'){
e.preventDefault();
move(-1);
}
}
);
window.addEventListener('popstate',()=>{
if(dialog.open)finish();
}
);
dialog.addEventListener('close',()=>{
document.body.classList.remove('viewer-open');
}
);
}
)();


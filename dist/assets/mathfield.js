/* Visual math entry (MathLive) layered over the plain answer inputs.
   The original text input stays in the form as the single source of truth: app.js reads,
   saves, restores, and resets it exactly as before. The editor writes LaTeX into it, which
   the answer checker understands. If MathLive is unavailable, the plain inputs remain. */
(function(){
'use strict';
const MF=window.MathfieldElement||(window.MathLive&&window.MathLive.MathfieldElement);
if(!MF||!window.customElements)return;
const MODE_KEY='coastal-calculus-input-mode';
function readMode(){try{return localStorage.getItem(MODE_KEY)==='text'?'text':'math';}catch(e){return 'math';}}
function writeMode(mode){try{localStorage.setItem(MODE_KEY,mode);}catch(e){}}
try{
 MF.fontsDirectory=new URL('assets/vendor/mathlive/fonts/',document.baseURI).href;
 MF.soundsDirectory=null;
}catch(e){}
const looksLikeLatex=s=>/[\\{}]/.test(s);
function toPlain(latex){
 if(!latex||!looksLikeLatex(latex))return latex||'';
 try{return window.AnswerChecker.normalize(latex).replace(/\s+/g,' ').trim();}catch(e){return latex;}
}
function setEditor(mf,value){
 if(!value){mf.value='';return;}
 if(looksLikeLatex(value)){mf.value=value;return;}
 try{mf.setValue(value,{format:'ascii-math',silenceNotifications:true});}catch(e){mf.value=value;}
}
const editors=[];
function applyMode(mode){
 for(const {mf,input,toggle} of editors){
  const text=mode==='text';
  if(text&&looksLikeLatex(input.value))input.value=toPlain(input.value);
  if(!text)setEditor(mf,input.value);
  mf.hidden=text;input.hidden=!text;
  toggle.textContent=text?'Use the math editor':'Type as plain text';
  toggle.setAttribute('aria-pressed',String(text));
 }
}
for(const form of document.querySelectorAll('[data-answer-form]')){
 const input=form.querySelector('.answer-input-wrap input[type=text]');
 if(!input)continue;
 const mf=new MF();
 mf.className='answer-math';
 const label=form.querySelector('label[for="'+input.id+'"]');
 mf.setAttribute('aria-label',(label?label.textContent:'Answer')+' (math editor)');
 mf.mathVirtualKeyboardPolicy='auto';
 try{mf.menuItems=[];}catch(e){}
 input.parentNode.insertBefore(mf,input);
 setEditor(mf,input.value);
 mf.addEventListener('input',()=>{input.value=mf.value;});
 mf.addEventListener('keydown',event=>{
  if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();input.value=mf.value;form.requestSubmit();}
 });
 form.addEventListener('submit',()=>{if(!mf.hidden)input.value=mf.value;},true);
 form.addEventListener('reset',()=>setTimeout(()=>setEditor(mf,''),0));
 const toggle=document.createElement('button');
 toggle.type='button';toggle.className='input-mode-toggle';
 toggle.addEventListener('click',()=>{const mode=mf.hidden?'math':'text';writeMode(mode);applyMode(mode);(mode==='text'?input:mf).focus();});
 const note=form.querySelector('.format-note');
 if(note)note.after(toggle);else form.appendChild(toggle);
 editors.push({mf,input,toggle});
}
applyMode(readMode());
document.documentElement.classList.add('has-math-editor');
})();

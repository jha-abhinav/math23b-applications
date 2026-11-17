(function(){
'use strict';
const data=window.WORKBOOK;if(!data)return;
const questions=new Map(),weeks=new Map();
for(const w of data.weeks){weeks.set(w.week,w);for(const p of w.problems)for(const q of p.questions)questions.set(q.id,q);}
const key='coastal-calculus-v1';let state={answers:{},hints:{},notes:{}};
try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&typeof saved==='object')for(const k of ['answers','hints','notes'])if(saved[k]&&typeof saved[k]==='object'&&!Array.isArray(saved[k]))state[k]=saved[k];}catch(e){}
let baseline=JSON.parse(JSON.stringify(state));
function save(){
 try{
  const stored=JSON.parse(localStorage.getItem(key)||'null'),merged={answers:{},hints:{},notes:{}};
  for(const section of ['answers','hints','notes']){
   if(stored&&stored[section]&&typeof stored[section]==='object')merged[section]={...stored[section]};
   for(const id of new Set([...Object.keys(baseline[section]),...Object.keys(state[section])])){
    if(JSON.stringify(state[section][id])!==JSON.stringify(baseline[section][id])){
     if(Object.prototype.hasOwnProperty.call(state[section],id))merged[section][id]=state[section][id];
     else delete merged[section][id];
    }
   }
  }
  localStorage.setItem(key,JSON.stringify(merged));state=merged;baseline=JSON.parse(JSON.stringify(state));
 }catch(e){baseline=JSON.parse(JSON.stringify(state));}
}
window.addEventListener('storage',event=>{
 if(event.key!==key)return;
 try{const latest=JSON.parse(event.newValue);if(latest&&latest.answers&&latest.hints&&latest.notes){state=latest;baseline=JSON.parse(JSON.stringify(state));updateProgress();}}catch(e){}
});
function currentInput(id){const f=document.querySelector('[data-answer-form="'+id+'"]');if(!f)return '';const q=questions.get(id);return q.kind==='choice'?f.querySelector('input:checked')?.value??'':f.querySelector('input[type=text]').value;}
function feedback(id,result){
 const section=document.querySelector('[data-question="'+id+'"]');if(!section)return;
 const line=section.querySelector('.feedback'),input=section.querySelector('input[type=text]');
 section.classList.toggle('correct',!!result?.correct);section.classList.toggle('needs-work',!!result&&!result.correct&&!result.invalid);
 if(!result){line.textContent='';if(input)input.removeAttribute('aria-invalid');return;}
 line.textContent=result.correct?'✓ Correct. Check that your written setup and units support this result.':result.invalid?result.message:'Not quite. Check your bounds, orientation, and any area or speed factors. A hint is available.';
 line.className='feedback '+(result.correct?'success':result.invalid?'format-error':'retry');if(input)input.setAttribute('aria-invalid',String(!result.correct));
}
function updateProgress(){
 for(const [n,w] of weeks){const qs=w.problems.flatMap(p=>p.questions);let count=0;for(const q of qs){const saved=state.answers[q.id];if(saved&&saved.checked&&window.AnswerChecker.check(q,saved.value).correct)count++;}
  document.querySelectorAll('[data-week-progress="'+n+'"]').forEach(e=>e.textContent=count+' of '+qs.length+' checked');
  document.querySelectorAll('[data-progress-bar="'+n+'"]').forEach(e=>{e.max=qs.length;e.value=count;});
 }
}
function renderHints(id){
 const q=questions.get(id),count=Math.min(q.hints.length,Number(state.hints[id])||0),panel=document.getElementById('hints-'+id),button=document.querySelector('[data-hint="'+id+'"]');
 if(!panel)return;panel.hidden=count===0;button.setAttribute('aria-expanded',String(count>0));const list=panel.querySelector('ol');list.replaceChildren();
 for(let i=0;i<count;i++){const li=document.createElement('li');li.textContent=q.hints[i];list.append(li);}
 button.textContent=count===0?'Need a hint?':count<q.hints.length?'Another hint':'All hints shown';button.disabled=count>=q.hints.length;
}
for(const form of document.querySelectorAll('[data-answer-form]')){
 const id=form.dataset.answerForm,q=questions.get(id),saved=state.answers[id];
 if(saved){if(q.kind==='choice'){const radio=form.querySelector('input[value="'+String(saved.value).replace(/[^0-9]/g,'')+'"]');if(radio)radio.checked=true;}else form.querySelector('input').value=String(saved.value??'');if(saved.checked)feedback(id,AnswerChecker.check(q,saved.value));}
 form.addEventListener('submit',event=>{event.preventDefault();const value=currentInput(id),result=AnswerChecker.check(q,value);state.answers[id]={value,checked:!result.invalid};feedback(id,result);save();updateProgress();});
 form.addEventListener('input',()=>{state.answers[id]={value:currentInput(id),checked:false};feedback(id,null);save();updateProgress();});
}
for(const button of document.querySelectorAll('[data-hint]')){
 const id=button.dataset.hint;renderHints(id);button.addEventListener('click',()=>{state.hints[id]=(Number(state.hints[id])||0)+1;renderHints(id);save();});
}
for(const textarea of document.querySelectorAll('[data-reflection]')){const id=textarea.dataset.reflection;textarea.value=String(state.notes[id]||'');textarea.addEventListener('input',()=>{state.notes[id]=textarea.value;save();});}
for(const button of document.querySelectorAll('[data-reset-week]'))button.addEventListener('click',()=>{
 const n=Number(button.dataset.resetWeek),w=weeks.get(n);if(!window.confirm('Clear saved answers, hints, and notes for Week '+n+' on this browser?'))return;
 for(const p of w.problems){delete state.notes[p.id];const notes=document.querySelector('[data-reflection="'+p.id+'"]');if(notes)notes.value='';for(const q of p.questions){delete state.answers[q.id];delete state.hints[q.id];const form=document.querySelector('[data-answer-form="'+q.id+'"]');if(form)form.reset();feedback(q.id,null);renderHints(q.id);}const details=document.querySelector('[data-solution="'+p.id+'"]');if(details)details.open=false;}
 save();updateProgress();const toast=document.querySelector('.toast');toast.textContent='Week '+n+' reset.';setTimeout(()=>toast.textContent='',2500);
});
updateProgress();
})();

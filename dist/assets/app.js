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
const attempts={};  // wrong tries per part in this visit, so a repeated wrong answer visibly registers
function fmt(x){return Number.isFinite(x)?String(Number(x.toPrecision(6))):String(x);}
function feedback(id,result,restoring){  // restoring: re-showing a saved check on page load (no attempt count, no animation)
 const section=document.querySelector('[data-question="'+id+'"]');if(!section)return;
 const line=section.querySelector('.feedback'),input=section.querySelector('input[type=text]'),q=questions.get(id);
 section.classList.toggle('correct',!!result?.correct);section.classList.toggle('needs-work',!!result&&!result.correct&&!result.invalid);
 line.replaceChildren();line.className='feedback';
 if(!result){if(input)input.removeAttribute('aria-invalid');return;}
 const head=document.createElement('strong'),body=document.createElement('span');line.append(head,' ',body);
 if(result.correct){head.textContent='✓ Correct.';body.textContent='Check that your written setup and units support this result.';line.classList.add('success');}
 else if(result.invalid){head.textContent='⚠ Not checked yet:';body.textContent=result.message;line.classList.add('format-error');}
 else{
  if(!restoring)attempts[id]=(attempts[id]||0)+1;
  head.textContent='✗ Incorrect'+(attempts[id]>1?' (try '+attempts[id]+').':'.');
  const notes=[];
  if(q.kind==='choice')notes.push('That option is not the right one.');
  if(typeof result.value==='number'&&Number.isFinite(result.value))notes.push('Your answer works out to '+fmt(result.value)+(q.units?' '+q.units:'')+'.');
  if(result.close)notes.push('That is close: check your rounding (two decimal places) or a small arithmetic slip.');
  else if(result.wrongParts&&result.wrongParts.length)notes.push((result.wrongParts.length===1?'Component ':'Components ')+result.wrongParts.join(' and ')+(result.wrongParts.length===1?' is':' are')+' not right.');
  else if(q.kind!=='choice')notes.push('Check your bounds, orientation, and any area or speed factors.');
  const hintButton=section.querySelector('[data-hint]');
  notes.push(hintButton&&!hintButton.disabled?'Try “Need a hint?” for a step in the right direction.':'Compare your work with the full solution below.');
  body.textContent=notes.join(' ');line.classList.add('retry');
  if(!restoring){void line.offsetWidth;line.classList.add('pulse');}  // restart the nudge animation on every wrong try
 }
 if(input)input.setAttribute('aria-invalid',String(!result.correct));
}
function updateProgress(){
 for(const [n,w] of weeks){const qs=w.problems.flatMap(p=>p.questions);let count=0;for(const q of qs){const saved=state.answers[q.id];if(saved&&saved.checked&&window.AnswerChecker.check(q,saved.value).correct)count++;}
  document.querySelectorAll('[data-week-progress="'+n+'"]').forEach(e=>e.textContent=count+' of '+qs.length+' checked');
  document.querySelectorAll('[data-progress-bar="'+n+'"]').forEach(e=>{e.max=qs.length;e.value=count;});
 }
}
function renderHints(id){
 // Written hints first, then (if the part has one) a picture hint already in the page.
 const q=questions.get(id),figure=document.querySelector('[data-hint-figure="'+id+'"]'),total=q.hints.length+(figure?1:0);
 const count=Math.min(total,Number(state.hints[id])||0),panel=document.getElementById('hints-'+id),button=document.querySelector('[data-hint="'+id+'"]');
 if(!panel)return;panel.hidden=count===0;button.setAttribute('aria-expanded',String(count>0));const list=panel.querySelector('ol');if(window.MathJax&&MathJax.typesetClear)MathJax.typesetClear([list]);list.replaceChildren();
 for(let i=0;i<Math.min(count,q.hints.length);i++){const li=document.createElement('li');li.textContent=q.hints[i];list.append(li);}
 if(count&&window.typesetCoastalMath)window.typesetCoastalMath(list);  // hints may contain $...$ math
 if(figure)figure.hidden=count<=q.hints.length;
 button.textContent=count===0?'Need a hint?':count>=total?'All hints shown':(figure&&count===q.hints.length)?'Show a picture':'Another hint';button.disabled=count>=total;
}
for(const form of document.querySelectorAll('[data-answer-form]')){
 const id=form.dataset.answerForm,q=questions.get(id),saved=state.answers[id];
 if(saved){if(q.kind==='choice'){const radio=form.querySelector('input[value="'+String(saved.value).replace(/[^0-9]/g,'')+'"]');if(radio)radio.checked=true;}else form.querySelector('input').value=String(saved.value??'');if(saved.checked)feedback(id,AnswerChecker.check(q,saved.value),true);}
 form.addEventListener('submit',event=>{event.preventDefault();const value=currentInput(id),result=AnswerChecker.check(q,value);state.answers[id]={value,checked:!result.invalid};feedback(id,result);save();updateProgress();});
 form.addEventListener('input',()=>{state.answers[id]={value:currentInput(id),checked:false};feedback(id,null);save();updateProgress();});
}
// Videos: replace a card's play button with a YouTube player only when clicked. (The youtube-nocookie.com domain gave
// "error 153" for visitors, so the standard youtube.com embed is used; nothing loads before a click.)
for(const card of document.querySelectorAll('.video-card')){
 const play=card.querySelector('.video-play');if(!play)continue;
 play.addEventListener('click',()=>{
  const id=card.dataset.videoId,start=Number(card.dataset.videoStart)||0;
  if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
  // YouTube refuses to play ("error 153") when the page sends no referrer, as with a copy opened from disk (file://).
  // In that case open the video on YouTube itself instead of embedding it.
  if(location.protocol!=='http:'&&location.protocol!=='https:'){window.open('https://www.youtube.com/watch?v='+id+(start?'&t='+start+'s':''),'_blank','noopener');return;}
  const frame=document.createElement('iframe');
  frame.referrerPolicy='strict-origin-when-cross-origin';
  frame.src='https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&playsinline=1&origin='+encodeURIComponent(location.origin)+(start?'&start='+start:'');
  frame.title=card.dataset.videoTitle||'Video';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  frame.allowFullscreen=true;
  const box=document.createElement('div');box.className='video-frame';box.append(frame);
  play.replaceWith(box);card.classList.add('playing');
 });
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

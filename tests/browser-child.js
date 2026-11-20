window.addEventListener('load',()=>{
 let checks=[],failed=false;
 const assert=(ok,text)=>{if(!ok)throw Error(text);checks.push(text)};
 try{
  const n=Number(document.querySelector('[data-current-week]').dataset.currentWeek),week=WORKBOOK.weeks.find(w=>w.week===n);
  if(n===2&&sessionStorage.getItem('coastal-qa-reload')){
   checks=JSON.parse(sessionStorage.getItem('coastal-qa-reload'));sessionStorage.removeItem('coastal-qa-reload');
   assert(document.querySelector('[data-reflection="w02-p1"]').value==='QA discussion note','Note restored after reload');
   assert(document.querySelectorAll('#hints-w02-p1-a li').length===2,'Hints restored after reload');
   assert(document.querySelector('[data-question="w02-p1-b"]').classList.contains('correct'),'Correct feedback restored');
   assert(document.querySelector('[data-week-progress]').textContent==='14 of 15 checked','Progress restored');
   window.confirm=()=>true;document.querySelector('[data-reset-week]').click();assert(document.querySelector('[data-week-progress]').textContent==='0 of 15 checked','Reset progress');assert(!document.querySelector('[data-hint="w02-p1-a"]').disabled&&document.querySelector('[data-reflection="w02-p1"]').value==='','Reset hints and notes');
   parent.postMessage({type:'coastal-qa',week:n,desktop:false,checks,failed:false},'*');return;
  }
  for(const p of week.problems)for(const q of p.questions){const form=document.querySelector('[data-answer-form="'+q.id+'"]'),value=Array.isArray(q.expected)?q.expected.join(', '):q.expected;
   if(q.kind==='choice'){const input=form.querySelector('input[value="'+value+'"]');input.checked=true;input.dispatchEvent(new Event('input',{bubbles:true}));}else{const input=form.querySelector('input');input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));}form.requestSubmit();assert(document.querySelector('[data-question="'+q.id+'"]').classList.contains('correct'),q.id+' form');
  }
  assert(document.querySelector('[data-week-progress]').textContent==='15 of 15 checked','Progress 15/15');
  assert(document.documentElement.scrollWidth<=innerWidth,'No horizontal overflow at '+innerWidth+' px');
  if(n===2){
   const id='w02-p1-a',form=document.querySelector('[data-answer-form="'+id+'"]'),input=form.querySelector('input');
   input.value='0';input.dispatchEvent(new Event('input',{bubbles:true}));form.requestSubmit();assert(document.getElementById('feedback-'+id).textContent.includes('Incorrect'),'Wrong-answer feedback');
   input.value='sqrt(';input.dispatchEvent(new Event('input',{bubbles:true}));form.requestSubmit();assert(document.getElementById('feedback-'+id).textContent&&!document.querySelector('[data-question="'+id+'"]').classList.contains('correct'),'Malformed-answer feedback');
   const hint=document.querySelector('[data-hint="'+id+'"]');hint.click();hint.click();assert(document.querySelectorAll('#hints-'+id+' li').length===2&&hint.disabled,'Two progressive hints');
   const solution=document.querySelector('[data-solution="w02-p1"]');solution.querySelector('summary').click();assert(solution.open,'Solution opens');
   const note=document.querySelector('[data-reflection="w02-p1"]');note.value='QA discussion note';note.dispatchEvent(new Event('input',{bubbles:true}));const stored=JSON.parse(localStorage.getItem('coastal-calculus-v1'));assert(stored.notes['w02-p1']==='QA discussion note','Note saved');assert(stored.hints[id]===2,'Hints saved');assert(stored.answers['w02-p1-b'].checked,'Answer saved');
   if(new URLSearchParams(location.search).has('reload')){sessionStorage.setItem('coastal-qa-reload',JSON.stringify(checks));location.reload();return;}
   window.confirm=()=>true;document.querySelector('[data-reset-week]').click();assert(document.querySelector('[data-week-progress]').textContent==='0 of 15 checked','Reset progress');assert(!hint.disabled&&note.value==='','Reset hints and notes');
  }
 }catch(e){failed=true;checks.push('FAIL: '+e.message)}
 parent.postMessage({type:'coastal-qa',week:Number(document.querySelector('[data-current-week]').dataset.currentWeek),desktop:new URLSearchParams(location.search).has('desktop'),checks,failed},'*');
});

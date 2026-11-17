const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const C=require('../dist/assets/checker.js');
const embedded=fs.readFileSync(path.resolve(__dirname,'../dist/assets/workbook.js'),'utf8');
const data=JSON.parse(embedded.replace(/^window\.WORKBOOK=/,'').replace(/;\s*$/,''));
let count=0;
for(const w of data.weeks)for(const p of w.problems)for(const q of p.questions){
 const value=Array.isArray(q.expected)?q.expected.join(', '):q.expected;
 assert.equal(C.check(q,value).correct,true,q.id+' expected '+value);
 let wrong=q.kind==='choice'?String((Number(q.expected)+1)%q.options.length):q.kind==='vector'?q.expected.map((x,i)=>i?'('+x+')':'('+x+')+11').join(','):q.kind==='potential'?'('+q.expected+')+x+y':q.kind==='expression'?'('+q.expected+')+11':'('+q.expected+')*1.1+11';
 assert.equal(C.check(q,wrong).correct,false,q.id+' wrong answer');
 assert.equal(C.check(q,'').invalid,true,q.id+' empty');
 if(q.kind==='potential')assert.equal(C.check(q,q.expected+'+C+7').correct,true,q.id+' constant');
 count++;
}
for(const [input,want] of [['-2^2',-4],['2^-2',.25],['2^3^2',512],['2pi',2*Math.PI],['3(2+1)',9],['sqrt(2)^2',2],['sin(pi/2)',1],['ln(e)',1],['1e-3',.001],['\\frac{1}{2}',.5],['π/4',Math.PI/4],['2xy',12]])assert.ok(Math.abs(C.evaluate(input,{x:2,y:3})-want)<1e-10,input);
for(const bad of ['alert(1)','window.location','1/0','sqrt(-1)','exp(9999)','process.exit()','NaN','Infinity','2**3','<script>','constructor(1)','((((('])assert.throws(()=>C.evaluate(bad));
assert.deepEqual(C.splitVector('(0, (x+1)/2, 3)'),['0','(x+1)/2','3']);
assert.equal(C.check({kind:'vector',expected:['x','y','z'],tolerance:1e-6},'x,y').invalid,true);
console.log(`Passed ${count} correct-answer cases, ${count} incorrect-answer cases, empty-input cases, equivalent potentials, parser precedence, and rejection tests.`);

const curlQuestion=data.weeks.at(-1).problems.at(-1).questions[1];
assert.equal(C.check(curlQuestion,'0, x^2/2+2*y, y^2/2-x*z+2*z').correct,true,'Alternative vector potential');
assert.equal(C.check(curlQuestion,'0, x^2/2, y^2/2+x*z').correct,false,'Wrong curl sign');

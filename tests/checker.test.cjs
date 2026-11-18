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
 let wrong=q.kind==='choice'?String((Number(q.expected)+1)%q.options.length):q.kind==='vector'?q.expected.map((x,i)=>i?'('+x+')':'('+x+')*1.1+11').join(','):q.kind==='potential'?'('+q.expected+')+x+y':q.kind==='expression'?'('+q.expected+')*1.1+11':'('+q.expected+')*1.1+11';
 assert.equal(C.check(q,wrong).correct,false,q.id+' wrong answer');
 assert.equal(C.check(q,'').invalid,true,q.id+' empty');
 if(q.kind==='potential')assert.equal(C.check(q,q.expected+'+C+7').correct,true,q.id+' constant');
 count++;
}
for(const [input,want] of [['-2^2',-4],['2^-2',.25],['2^3^2',512],['2pi',2*Math.PI],['3(2+1)',9],['sqrt(2)^2',2],['sin(pi/2)',1],['ln(e)',1],['1e-3',.001],['\\frac{1}{2}',.5],['π/4',Math.PI/4],['2xy',12]])assert.ok(Math.abs(C.evaluate(input,{x:2,y:3})-want)<1e-10,input);
for(const bad of ['alert(1)','window.location','1/0','sqrt(-1)','exp(9999)','process.exit()','NaN','Infinity','2**3','<script>','constructor(1)','((((('])assert.throws(()=>C.evaluate(bad));
assert.deepEqual(C.splitVector('(0, (x+1)/2, 3)'),['0','(x+1)/2','3']);
assert.equal(C.check({kind:'vector',expected:['x','y','z'],tolerance:1e-6},'x,y').invalid,true);
// Rounded answers: every numerical answer, rounded to its required decimal places, is accepted.
let rounded=0;
for(const w of data.weeks)for(const p of w.problems)for(const q of p.questions)if(q.kind==='number'){
 const exact=C.evaluate(q.expected),places=q.decimals??C.defaultPlaces(exact);
 assert.equal(C.check(q,exact.toFixed(places)).correct,true,q.id+' rounded '+exact.toFixed(places));rounded++;
}
// Tolerance: two decimal places; answers below 0.1 need two significant digits.
for(const [expected,input,want] of [['6*pi*sqrt(37)','114.66',true],['6*pi*sqrt(37)','114.65',false],['6*pi*sqrt(37)','119.57',false],['0.002','0',false],['0.002','0.0020',true],['0.042412','0.04',false],['0','0.004',true],['0','0.01',false]])
 assert.equal(C.check({kind:'number',expected},input).correct,want,'tolerance '+expected+' vs '+input);
// LaTeX and Unicode input, as produced by the visual math editor or typed by hand.
const sphere={kind:'expression',expected:'6371^2*sin(phi)',tolerance:1e-5},cone={kind:'number',expected:'6*pi*sqrt(37)'},normal={kind:'vector',expected:['6*u*cos(v)','6*u*sin(v)','u'],tolerance:1e-5};
for(const [q,input] of [[sphere,'6371^{2}\\sin\\left(\\phi\\right)'],[sphere,'6371^2\\sin\\phi'],[sphere,'6371^2 sin phi'],[sphere,'6371^2\\cdot\\sin(\\varphi)'],[sphere,'6371^2·sin(φ)'],[cone,'6\\pi\\sqrt{37}'],[cone,'6π√37'],[cone,'\\frac{12\\pi\\sqrt{37}}{2}'],[cone,'6\\pi\\sqrt[2]{37}'],[normal,'\\left(6u\\cos v,\\,6u\\sin v,\\,u\\right)'],[normal,'\\langle 6u\\cos v,6u\\sin v,u\\rangle']])
 assert.equal(C.check(q,input).correct,true,'LaTeX/Unicode input '+input);
for(const [q,input,message] of [[sphere,'\\placeholder{}\\sin\\phi','Fill in every empty box'],[sphere,'\\Gamma(\\phi)','does not know'],[sphere,'6371^2 sin 2phi','parentheses after sin']]){
 const r=C.check(q,input);assert.equal(r.invalid,true,input);assert.ok(r.message.includes(message),input+' -> '+r.message);
}
console.log(`Passed ${rounded} rounded-decimal cases, tolerance edge cases, and LaTeX/Unicode input cases.`);
console.log(`Passed ${count} correct-answer cases, ${count} incorrect-answer cases, empty-input cases, equivalent potentials, parser precedence, and rejection tests.`);

// Vector potentials: any A with curl A = F is accepted (here the expected A plus the gradient of yz),
// while a sign-flipped A is rejected.
const curlQuestions=data.weeks.flatMap(w=>w.problems.flatMap(p=>p.questions.filter(q=>q.semantic==='curl')));
assert.ok(curlQuestions.length>0,'at least one vector-potential question');
for(const q of curlQuestions){
 const [a0,a1,a2]=q.expected;
 assert.equal(C.check(q,[a0,'('+a1+')+z','('+a2+')+y'].join(', ')).correct,true,q.id+' alternative vector potential');
 assert.equal(C.check(q,['-('+a0+')','-('+a1+')','-('+a2+')'].join(', ')).correct,false,q.id+' wrong curl sign');
}

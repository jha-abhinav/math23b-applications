/* Elementary expression parser. No eval, Function constructor, network, or dependencies. */
(function(root){
'use strict';
const functions={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,exp:Math.exp,log:Math.log,ln:Math.log,abs:Math.abs,asin:Math.asin,acos:Math.acos,atan:Math.atan};
const variables=new Set(['x','y','z','u','v','w','r','t','a','b','h','c','phi','theta','rho']);
function normalize(input){
 let text=String(input).trim();
 if(text.length>500)throw Error('Please use an expression shorter than 500 characters.');
 text=text.replace(/\$/g,'').replace(/\\(?:left|right)/g,'').replace(/\\(?:cdot|times)/g,'*').replace(/[−–]/g,'-').replace(/[×·]/g,'*').replace(/π/g,'pi').replace(/θ/g,'theta').replace(/φ/g,'phi').replace(/ρ/g,'rho').replace(/²/g,'^2').replace(/³/g,'^3').replace(/⁴/g,'^4');
 for(let i=0;i<12;i++){
  const before=text;
  text=text.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'(($1)/($2))').replace(/\\sqrt\s*\{([^{}]*)\}/g,'sqrt($1)');
  if(text===before)break;
 }
 return text.replace(/\\(pi|sqrt|sin|cos|tan|exp|log|ln|abs)/g,'$1').replace(/[{}]/g,m=>m==='{'?'(':')').toLowerCase();
}
function tokenize(input){
 const text=normalize(input),tokens=[];let i=0;
 while(i<text.length){
  const rest=text.slice(i);if(/^\s/.test(rest)){i++;continue;}
  const num=rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/);
  if(num){tokens.push({type:'number',value:Number(num[0])});i+=num[0].length;continue;}
  const word=rest.match(/^[a-z]+/);
  if(word){
   const value=word[0];i+=value.length;
   if(value==='pi'||value==='e'||functions[value]||variables.has(value))tokens.push({type:'id',value});
   else if([...value].every(ch=>variables.has(ch)))for(const ch of value)tokens.push({type:'id',value:ch});
   else throw Error('Unknown name “'+value+'”. Use the stated variables and supported functions.');
   continue;
  }
  if('+-*/^()'.includes(text[i])){tokens.push({type:text[i],value:text[i]});i++;continue;}
  throw Error('Use numbers and mathematical expressions only; leave out units.');
 }
 tokens.push({type:'end'});return tokens;
}
function evaluate(input,env={}){
 const ts=tokenize(input);let pos=0,depth=0,ops=0;
 const peek=()=>ts[pos].type;
 function safe(fn){if(++depth>70||++ops>1500)throw Error('This expression is too complex.');try{return fn();}finally{depth--;}}
 function primary(){return safe(()=>{
  const token=ts[pos++];
  if(token.type==='number')return token.value;
  if(token.type==='('){const x=add();if(peek()!==')')throw Error('Check your parentheses.');pos++;return x;}
  if(token.type==='id'){
   if(token.value==='pi')return Math.PI;if(token.value==='e')return Math.E;
   if(functions[token.value]){if(peek()!=='(')throw Error('Use parentheses after '+token.value+'.');pos++;const x=add();if(peek()!==')')throw Error('Check your function parentheses.');pos++;return functions[token.value](x);}
   if(Object.prototype.hasOwnProperty.call(env,token.value))return env[token.value];
   throw Error('This answer should not contain the variable '+token.value+'.');
  }
  throw Error('Enter a complete expression, such as 3/2 or sqrt(2).');
 });}
 function power(){let x=primary();if(peek()==='^'){pos++;x=Math.pow(x,unary());}return x;}
 function unary(){return safe(()=>{if(peek()==='+'){pos++;return unary();}if(peek()==='-'){pos++;return -unary();}return power();});}
 function multiply(){let x=unary();while(true){if(peek()==='*'){pos++;x*=unary();}else if(peek()==='/'){pos++;x/=unary();}else if(['number','id','('].includes(peek())){x*=unary();}else break;}return x;}
 function add(){let x=multiply();while(peek()==='+'||peek()==='-'){const op=ts[pos++].type,y=multiply();x=op==='+'?x+y:x-y;}return x;}
 if(peek()==='end')throw Error('Enter an answer first.');const result=add();
 if(peek()!=='end')throw Error('Check for extra symbols or unmatched parentheses.');
 if(!Number.isFinite(result))throw Error('The expression is not finite at the values being checked.');return result;
}
function splitVector(text){
 text=String(text).trim();
 if((text[0]==='['&&text.at(-1)===']')||(text[0]==='<'&&text.at(-1)==='>'))text=text.slice(1,-1);
 if(text[0]==='('&&text.at(-1)===')'){
  let d=0,wrap=true;for(let i=0;i<text.length-1;i++){if(text[i]==='(')d++;if(text[i]===')')d--;if(d===0){wrap=false;break;}}
  if(wrap)text=text.slice(1,-1);
 }
 let d=0,current='',parts=[];
 for(const ch of text){if('({['.includes(ch))d++;if(')}]'.includes(ch))d--;if((ch===','||ch===';')&&d===0){parts.push(current.trim());current='';}else current+=ch;}
 parts.push(current.trim());if(d!==0)throw Error('Check your vector parentheses.');return parts;
}
const points=[
 {x:.31,y:.47,z:.61,u:.23,v:.37,w:.17,r:.41,t:.52,phi:.43,theta:.82,rho:.57,a:1.3,b:.7,h:2,c:3.7},
 {x:1.17,y:.83,z:.39,u:.71,v:1.31,w:.52,r:1.23,t:1.47,phi:1.12,theta:2.13,rho:.81,a:2.1,b:.9,h:3,c:3.7},
 {x:-.63,y:1.29,z:.72,u:1.41,v:.91,w:.34,r:.68,t:2.31,phi:.78,theta:3.14,rho:1.11,a:.9,b:1.2,h:1.5,c:3.7},
 {x:2.13,y:-.37,z:1.41,u:.43,v:2.17,w:.73,r:1.71,t:4.11,phi:2.11,theta:4.71,rho:1.39,a:1.7,b:1.1,h:2.4,c:3.7},
 {x:.79,y:2.31,z:-.53,u:2.37,v:.61,w:.91,r:2.11,t:5.37,phi:1.53,theta:5.29,rho:2.13,a:2.3,b:1.4,h:3.1,c:3.7}
];
function close(a,b,tol=1e-6){return Math.abs(a-b)<=Math.max(1e-7,tol*Math.abs(b));}
function sameExpression(input,expected,kind,tol){
 const vals=points.map(env=>evaluate(input,env)),refs=points.map(env=>evaluate(expected,env));
 if(kind==='potential')return vals.every((x,i)=>close(x-vals[0],refs[i]-refs[0],tol));
 return vals.every((x,i)=>close(x,refs[i],tol));
}
function check(question,input){
 try{
  if(question.kind==='choice'){
   if(input===null||input===undefined||input==='')return {correct:false,invalid:true,message:'Choose an answer first.'};
   return {correct:String(input)===String(question.expected),invalid:false};
  }
  if(!String(input||'').trim())return {correct:false,invalid:true,message:'Enter an answer first.'};
  if(question.kind==='vector'){
   const parts=splitVector(input);
   if(parts.length!==question.expected.length)return {correct:false,invalid:true,message:'Enter '+question.expected.length+' components separated by commas.'};
   if(question.semantic==='curl'){
    const derivative=(expr,variable,env)=>{const h=1e-5*Math.max(1,Math.abs(env[variable]));return (evaluate(expr,{...env,[variable]:env[variable]+h})-evaluate(expr,{...env,[variable]:env[variable]-h}))/(2*h);};
    const valid=points.every(env=>{
     if(question.firstComponentZero&&!close(evaluate(parts[0],env),0))return false;
     const actual=[derivative(parts[2],'y',env)-derivative(parts[1],'z',env),derivative(parts[0],'z',env)-derivative(parts[2],'x',env),derivative(parts[1],'x',env)-derivative(parts[0],'y',env)];
     return actual.every((value,i)=>close(value,evaluate(question.curlTarget[i],env),3e-5));
    });
    return {correct:valid,invalid:false};
   }
   return {correct:parts.every((x,i)=>sameExpression(x,question.expected[i],'expression',question.tolerance)),invalid:false};
  }
  if(question.kind==='expression'||question.kind==='potential')return {correct:sameExpression(input,question.expected,question.kind,question.tolerance),invalid:false};
  return {correct:close(evaluate(input),evaluate(question.expected),question.tolerance),invalid:false};
 }catch(error){return {correct:false,invalid:true,message:error.message};}
}
const api={evaluate,check,splitVector,normalize};root.AnswerChecker=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

/* Self-hosted MathJax: no CDN, API key, or root-relative paths. */
(function(){
 const base=new URL('assets/vendor/mathjax/',document.baseURI).href.replace(/\/$/,'');
 window.MathJax={
  loader:{paths:{mathjax:base},load:['input/tex-full','output/chtml']},
  tex:{inlineMath:[['\\(','\\)'],['$','$']],displayMath:[['\\[','\\]'],['$$','$$']],processEscapes:true,tags:'none'},
  chtml:{fontURL:base+'/output/chtml/fonts/woff-v2',scale:1,matchFontHeight:false},
  options:{renderActions:{addMenu:[0,'','']}},
  startup:{ready(){
   MathJax.startup.defaultReady();
   MathJax.startup.promise.then(()=>{
    document.documentElement.dataset.mathReady='true';
    document.dispatchEvent(new CustomEvent('coastal-math-ready'));
   });
  }}
 };
 window.typesetCoastalMath=function(element){
  if(window.MathJax&&MathJax.startup&&MathJax.startup.promise){
   return MathJax.startup.promise.then(()=>MathJax.typesetPromise(element?[element]:undefined)).catch(()=>{});
  }
  return Promise.resolve();
 };
})();

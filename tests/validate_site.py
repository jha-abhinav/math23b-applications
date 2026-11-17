"""Validate static assets, downloads, content consistency, and project-subpath links."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,urljoin,unquote
import json,re
ROOT=Path(__file__).resolve().parents[1];DIST=ROOT/'dist'
assert not list(DIST.glob('browser-qa*.html')),'Remove temporary QA pages with tests/prepare_browser_qa.py --clean'
raw=(DIST/'assets/workbook.js').read_text();data=json.loads(re.sub(r';\s*$','',re.sub(r'^window\.WORKBOOK=','',raw)))
assert [w['week'] for w in data['weeks']]==list(range(2,11))
assert len(data['sources'])==7
assert sum(len(w['problems']) for w in data['weeks'])==45
questions=[q for w in data['weeks'] for p in w['problems'] for q in p['questions']]
assert len(questions)==135
assert len({q['id'] for q in questions})==135
assert all(len(q['hints'])==2 for q in questions)
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=[];self.forms=[];self.images=[];self.solutions=[];self.discussions=0
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.append(d['id'])
  for a in ('href','src'):
   if a in d:self.links.append(d[a])
  if tag=='img':self.images.append(d)
  if 'data-answer-form' in d:self.forms.append(d['data-answer-form'])
  if 'data-solution' in d:self.solutions.append(d['data-solution'])
  if 'discussion-answer' in d.get('class',''):self.discussions+=1
pages={}
for path in DIST.glob('*.html'):
 parser=Page();parser.feed(path.read_text());pages[path.name]=parser
 assert len(parser.ids)==len(set(parser.ids)),(path,'duplicate IDs')
 assert all('alt' in image and image['alt'] for image in parser.images),(path,'missing alt')
assert len(pages)==11,(len(pages),'expected home, sources, and nine weeks')
links=0
for filename,page in pages.items():
 for link in page.links:
  parsed=urlparse(link)
  if parsed.scheme or parsed.netloc:continue
  assert not parsed.path.startswith('/'),(filename,'root-relative link breaks project Pages',link)
  resolved=(DIST/unquote(parsed.path or filename)).resolve()
  assert resolved.is_relative_to(DIST.resolve()),(filename,'link escapes site',link)
  assert resolved.is_file(),(filename,'missing file',link)
  hosted=urljoin('https://example.github.io/math23b/'+filename,link)
  assert urlparse(hosted).path.startswith('/math23b/'),(filename,'project subpath',link)
  if parsed.fragment and resolved.suffix=='.html':
   assert unquote(parsed.fragment) in pages[resolved.name].ids,(filename,'missing anchor',link)
  links+=1
for week in data['weeks']:
 n=week['week'];page=pages[f'week-{n:02d}.html'];expected=[q['id'] for p in week['problems'] for q in p['questions']]
 assert page.forms==expected
 assert len(page.solutions)==5 and page.discussions==5
 assert sum(not p['extension'] for p in week['problems'])==4
 for p in week['problems']:
  assert p['discussionSolution'] and p['model'] and all(k in data['sources'] for k in p['sources'])
 for suffix in ('','_solutions'):
  pdf=DIST/'downloads'/f'application_worksheet_week_{n:02d}{suffix}.pdf'
  assert pdf.read_bytes().startswith(b'%PDF-'),pdf
for key in data['sources']:assert (DIST/'downloads/data'/f'{key}.csv').is_file()
assert (DIST/'.nojekyll').exists()
for file in DIST.rglob('*'):assert not file.is_symlink(),file
# MathJax loads its core, TeX input, CHTML output, and fonts at runtime, so check the whole vendored bundle.
MJ=DIST/'assets/vendor/mathjax';manifest=json.loads((MJ/'manifest.json').read_text())
for name,size in manifest['files'].items():assert (MJ/name).is_file() and (MJ/name).stat().st_size==size,('MathJax bundle',name)
config=(DIST/'assets/mathjax-config.js').read_text()
for component in re.findall(r"'((?:input|output)/[\w-]+)'",config):assert (MJ/(component+'.js')).is_file(),('MathJax component',component)
assert not re.search(r'https?:|//[a-z]',config),'MathJax must stay self-hosted'
print(f'PASS: 11 pages, 45 problems, 135 forms, 45 discussions, 18 PDF downloads, 7 CSV datasets, {links} local links/assets, and GitHub project-subpath compatibility.')

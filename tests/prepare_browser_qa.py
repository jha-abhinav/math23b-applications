"""Prepare local-file browser tests; remove test pages with --clean before publishing."""
from pathlib import Path
import argparse
root=Path(__file__).resolve().parents[1];dist=root/'dist'
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--clean',action='store_true');args=p.parse_args()
if args.clean:
 for file in dist.glob('browser-qa*.html'):file.unlink()
 print('Removed temporary browser QA pages.')
else:
 child=(root/'tests/browser-child.js').read_text()
 for week in range(2,11):
  text=(dist/f'week-{week:02d}.html').read_text().replace('</body>','<script>'+child+'</script></body>')
  (dist/f'browser-qa-week-{week:02d}.html').write_text(text)
 (dist/'browser-qa.html').write_text((root/'tests/browser-qa.html').read_text())
 print('Open dist/browser-qa.html in a browser. It runs tests without a server. Remove generated QA pages before deployment.')

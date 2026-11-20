"""Render every page in headless Chromium, reveal every hint, and check that all math typesets.

Usage: python3 tests/browser_math_check.py   (needs chromium or google-chrome on PATH)
Serves dist/ on a local port, injects a small probe into temporary copies of each page, and
fails if MathJax reports an error anywhere (page text, model panels, solutions, or hints).
"""
import http.server
import re
import shutil
import socketserver
import subprocess
import sys
import tempfile
import threading
from pathlib import Path

DIST = Path(__file__).resolve().parents[1] / 'dist'
PROBE = """<script>
document.addEventListener('coastal-math-ready', () => {
  // Reveal every hint (two clicks each), then typeset and count math inside the hint panels.
  for (const b of document.querySelectorAll('[data-hint]')) { for (let k = 0; k < 5 && !b.disabled; k++) b.click(); }
  setTimeout(() => window.typesetCoastalMath().then(() => {
    const errors = document.querySelectorAll('mjx-merror').length;
    const hintMath = document.querySelectorAll('.hint-panel mjx-container').length;
    const hints = document.querySelectorAll('.hint-panel li').length;
    const pics = [...document.querySelectorAll('.hint-figure')].filter(f => !f.hidden).length;
    const broken = [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').length;
    const out = document.createElement('pre'); out.id = 'probe';
    out.textContent = `PROBE errors=${errors} hints=${hints} hintmath=${hintMath} pictures=${pics}`;
    document.body.append(out);
    localStorage.clear();
  }), 500);
});
</script></body>"""


def main():
    browser = shutil.which('chromium') or shutil.which('chromium-browser') or shutil.which('google-chrome')
    if not browser:
        sys.exit('No headless Chromium found; skipping browser math check.')
    with tempfile.TemporaryDirectory() as tmp:
        site = Path(tmp) / 'site'
        shutil.copytree(DIST, site)
        pages = sorted(p.name for p in site.glob('*.html'))
        for name in pages:
            page = site / name
            page.write_text(page.read_text().replace('</body>', PROBE, 1))
        class Quiet(http.server.SimpleHTTPRequestHandler):
            def log_message(self, *args):
                pass
        handler = lambda *a: Quiet(*a, directory=str(site))
        with socketserver.TCPServer(('127.0.0.1', 0), handler) as httpd:
            threading.Thread(target=httpd.serve_forever, daemon=True).start()
            port = httpd.server_address[1]
            failures = []
            for name in pages:
                dom = subprocess.run([browser, '--headless=new', '--disable-gpu', '--virtual-time-budget=30000', '--dump-dom',
                                      f'http://127.0.0.1:{port}/{name}'], capture_output=True, text=True, timeout=180).stdout
                m = re.search(r'PROBE errors=(\d+) hints=(\d+) hintmath=(\d+) pictures=(\d+)', dom)
                if not m:
                    failures.append(f'{name}: math never finished typesetting')
                    continue
                errors, hints, hint_math, pictures = map(int, m.groups())
                print(f'{name}: {errors} math errors, {hints} hints shown, {hint_math} formulas in hints, {pictures} picture hints shown')
                if errors:
                    failures.append(f'{name}: {errors} MathJax errors')
            httpd.shutdown()
    if failures:
        sys.exit('FAIL: ' + '; '.join(failures))
    print(f'PASS: {len(pages)} pages typeset without MathJax errors, including every hint.')


if __name__ == '__main__':
    main()

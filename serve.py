#!/usr/bin/env python3
"""Serve the self-contained practice site on localhost. No third-party packages."""
from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import argparse,webbrowser
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--port',type=int,default=8765)
parser.add_argument('--open',action='store_true',help='Open the site in your default browser')
args=parser.parse_args()
root=Path(__file__).resolve().parent/'dist'
server=ThreadingHTTPServer(('127.0.0.1',args.port),partial(SimpleHTTPRequestHandler,directory=str(root)))
url=f'http://127.0.0.1:{server.server_port}/'
print(f'Coastal Calculus: {url}\nPress Ctrl+C to stop.',flush=True)
if args.open:webbrowser.open(url)
try:server.serve_forever()
except KeyboardInterrupt:pass
finally:server.server_close()

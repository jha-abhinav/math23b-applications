# Coastal Calculus — Application Worksheets website

A self-contained Math 23B practice website for Weeks 2–10: 45 problems, 135 final-answer checks, progressive hints, complete solutions, and discussion prompts. All pages, the bundled MathJax 3 math renderer and its fonts, diagrams, CSV data, and PDF downloads are local files; there are no external fonts, scripts, API calls, accounts, or analytics.

## Host on GitHub Pages

Follow [the GitHub Pages setup guide](GITHUB_PAGES.md). This folder includes a deployment workflow that validates and publishes only `dist/`. Push this folder as its own repository root, or use the guide’s larger-repository instructions.

## Open it

Open [the website](dist/index.html) in your browser. Each week is its own HTML page. Answer checks, hints, and solutions work without a server.

For consistent progress sharing between pages, serve it locally. Some browsers isolate local-file storage separately for each HTML file.

```sh
python3 serve.py --open
```

Run that command from this folder. It serves only `dist/` at `http://127.0.0.1:8765/`. Use `--port 8766` if needed. Stop it with Ctrl+C. The server is an optional convenience; the site itself is static.

To host it elsewhere, upload the contents of `dist/` to a static web host. No deployment or account configuration has been performed. Keep the assets and downloads folders beside index.html.

## Student tools

- Check an answer beside each part; fractions and expressions such as `pi/4`, `sqrt(2)`, `exp(1)-1`, and equivalent formulas are accepted.
- Vectors and bounds use comma-separated expressions. Angles use radians; `^` means exponentiation. Leave units out of the input because units are supplied next to it.
- Scalar potentials may differ by any additive constant. The vector-potential task checks the curl numerically and the requested zero first component, so alternative valid constructions are accepted.
- “Need a hint?” reveals one of two written hints at a time. These are authored hints, not AI chat.
- “View full solution” reveals the derivation, final answers, and discussion guidance.
- Answers, checked status, hint counts, and optional discussion notes are saved in this browser. Reset clears the selected week. If storage is unavailable, the tools still work during the current visit.
- Grading is for practice. The checker does not evaluate written reasoning, sketches, theorem assumptions, or units entered on paper. Formula equivalence is checked at multiple sample points rather than proven by a computer algebra system; curl checking uses finite differences.
- Expected answers and solutions are intentionally included in the downloaded site files. This is not a secure exam system or a teacher gradebook.

## Source and rebuild

The adjacent `Application Worksheets/` folder contains printable PDFs, the shared `workbook.json`, authoring/build scripts, a mathematical validator, sources, and course mapping. That shared content generates all nine webpages and both printable versions.

From the parent folder:

```sh
python3 'Application Worksheets/source/author_workbook.py'
python3 'Application Worksheets/source/make_diagrams.py'
python3 'Application Worksheets/source/build.py'
python3 'Application Worksheets/source/validate_math.py'
node 'Application Worksheets Website/tests/checker.test.cjs'
python3 'Application Worksheets/source/build_pdfs.py'
```

The site has no npm dependencies. The build uses Python with SymPy, LaTeX with common AMS/TikZ/tcolorbox packages, pdflatex, and Poppler tools. The finished site needs none of those tools to run.

## Validation

All 135 answer parts were independently derived in SymPy or reviewed for the qualitative conclusion. Node tests cover all expected and deliberately incorrect answers, malformed inputs, expression precedence, equivalent potentials, and alternative vector potentials. A real Firefox run exercised all nine mobile pages and a desktop page, including form submission, hints, disclosures, storage, reload restoration, and reset behavior. Browser QA evidence and its reproducible harness are in `tests/`. Socket-based WebDriver testing was unavailable in the build environment, so the actual browser tests used local-file pages and a test-only postMessage harness.

No local server remains running. See the worksheet folder’s review report for mathematical and PDF validation details.

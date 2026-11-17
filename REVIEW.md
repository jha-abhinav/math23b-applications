# Review of the application worksheets and website

The new collection is separate from the original worksheets. It contains nine student worksheets and nine detailed solution keys, numbered Weeks 2–10, plus nine interactive weekly pages.

## Mathematical content

- All 135 final-answer parts were independently checked against integrals, derivatives, Jacobians, cross products, geometry, or reviewed qualitative conclusions in `source/validate_math.py`.
- Reviewed all 45 problem setups and discussion solutions for units, orientation, bounds, source/model distinction, and theorem hypotheses.
- Explicitly distinguished scalar surface area from vector area; surface density from volume density; 2D line flux from 3D volume flow; and numerical equality from dimensional equality.
- Included integrability at jump sets, cutoff limits for singular models, absolute-integrability requirements for Fubini, and domain restrictions for potentials and singular vortices.
- Each week retains written-work requirements. The checker does not replace sketches, derivative calculations, bounds, or explanations.

## Data provenance

Seven compact source tables are transcribed to CSV with primary-source links: NOAA Monterey tidal datums, historical USGS San Lorenzo discharge, UCSC reserve areas, Aquarium facts, Aquarium pump capacity, MBARI rover dimensions, and MARS node depth.

No invented data are labeled as observations. In particular, no fabricated HF-radar velocity measurements or surveyed reserve coordinates are supplied. Most analytical fields and geometric surfaces are explicitly labeled teaching models anchored by a published scale. The river extension uses four actual historical daily mean observations; tide problems use statistical datums and do not claim event-specific water levels.

## PDF validation

All 18 PDFs compiled without LaTeX errors or overfull-box warnings. Text extraction verified week labels, five step-by-step solutions and five discussion answers per solution key, and their absence from student worksheets. Representative student and solution pages were rendered and visually inspected. Final PDFs are copied into the website downloads directory.

## Website validation

- All 135 correct-answer cases and 135 deliberately incorrect cases tested in Node, with additional empty/malformed input, precedence, implicit multiplication, LaTeX-style fraction, equivalent potential, and alternative vector-potential tests.
- Parser uses a restricted mathematical grammar, not JavaScript `eval`.
- Real Firefox local-file browser tests exercised the nine mobile pages and a desktop page, actual form submissions, feedback, two-stage hints, solution disclosure, saved notes/answers, reset behavior, and page-width fit.
- A separate reload run verified restored notes, hints, correct feedback, and progress. Browser QA screenshots are retained in the website `tests/` folder.
- Static validation verifies all 11 deployed HTML pages, 45 problems and discussion solutions, 135 forms, all local asset/anchor links, seven CSV downloads, 18 PDF downloads, and compatibility with a GitHub project-site URL prefix.
- Math is typeset by a locally bundled MathJax 3 (with its WOFF fonts) under `dist/assets/vendor/mathjax/`; no CDN or external math service is used. A headless Chromium run confirmed every math span on every week page renders with no TeX errors. Bare unit exponents such as m$^2$ are emitted as HTML superscripts rather than separate math boxes.

## GitHub Pages readiness and verification limits

The website folder contains a GitHub Actions Pages deployment workflow, `.nojekyll`, deployment instructions, and a self-contained `dist/` directory. It uses repository-relative links and needs no server runtime or build on GitHub. Its workflow uses the action versions documented by GitHub and runs local static/checker validation before deployment.

GitHub deployment itself has not been performed: the user can upload the prepared repository files, select GitHub Actions as the Pages source, and push to main. A live GitHub URL is therefore not part of the completed local verification.

Local socket creation is restricted in the build environment, preventing a localhost/WebDriver server test. Actual browser tests used file pages instead. Some browsers partition local-file storage per page, so a localhost server or GitHub Pages is recommended for consistent cross-page progress. Formula equivalence and curl comparisons are sampled numerical checks, not proofs; the practice site does not automatically grade reasoning or submissions to an instructor.

# Review of Around the World in 80 Integrals

Designed by [Abhinav Jha](https://abhinav_jha.codeberg.page/). Status of the rebuilt worksheets (all nine weeks rebuilt from week modules).

## Content
- 45 problems (9 weeks × 4 core + 1 extension), 135 checked parts, two hints per part, a full solution and discussion answer per problem.
- 61 cited sources (see DATA_SOURCES.md), 35 openly licensed photographs with credits, 45 model diagrams drawn from the problem equations, and a home-page map of the places the problems visit.
- Every core skill from the traditional worksheets is mapped to a core problem; see SKILL_COVERAGE.md for where each one is practiced.

## Verification
- `validate_week.py` (per week): structure, model panels, photo licenses and credits, sources, LaTeX-safe text, skill coverage, figures.
- `validate_math.py`: every checked answer independently derived in SymPy.
- `checker.test.cjs`: every expected answer accepted, a wrong answer rejected, rounded decimals accepted, LaTeX/Unicode input, vector potentials checked by their curl.
- `build_pdfs.py`: all 18 PDFs compile without errors or overfull boxes; solutions absent from student versions.
- `validate_site.py`: all pages, links, assets, PDFs, CSVs, MathJax and MathLive bundles, photo attribution, and GitHub Pages subpath compatibility.
- Browser checks (headless Chromium): every formula typesets with no TeX errors and no page scrolls sideways at desktop or phone width.

## Limits
- The answer checker samples formulas numerically; it does not grade reasoning, sketches, or hypotheses.
- Some published values come from secondary sources; each is labeled in its source note.
- Models are teaching simplifications; several solutions discuss where a model departs from published figures.

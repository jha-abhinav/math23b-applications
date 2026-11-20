# Playbook: build an application-first course companion for any course

Give this file to an AI assistant (or a person) who will build a website and worksheets like **Around the World in 80 Integrals** (UCSC Math 23B, vector calculus), but for a different course and syllabus. It records what worked here, in the order to do it, including the research that comes first and the standard of writing to aim for.

Worked example to study: the Math 23B project this file sits in. Its website is https://jha-abhinav.github.io/math23b-applications/. Its source is in `Application Worksheets/source/` (week modules in `source/weeks/`). Its writing standard is `source/weeks/EXPOSITION_GUIDE.md` and its format rules are `source/weeks/AUTHORING_GUIDE.md`. The original collection was designed by [Abhinav Jha](https://abhinav_jha.codeberg.page/); credit it if you reuse its code or structure (MIT License).

---

## 0. Roles and ground rules

- **The instructor decides; you research, write, build, and verify.** Ask before anything outward-facing (publishing, pushing, emailing). Topic choices, titles, tone, and anything about students are the instructor's call.
- **Honesty over vividness.** Every published number comes from a source you actually opened and read. Never invent data, quotes, history, or superlatives. Simplifications are labeled as assumptions.
- **Nothing lost.** The companion must cover every core skill of the course's existing (traditional) materials. Applications are added on top of the skills, never instead of them.
- **Privacy (FERPA and similar).** The site collects nothing: no accounts, analytics, or external requests. Progress lives only in the student's browser. Anything identifiable (names, grades, submissions) goes through the institution's LMS, never the companion.
- **Credit everyone.** Data sources, photographers, software, and teaching ideas are credited on the site (an Acknowledgements page plus per-item credits).

## 1. Intake: questions to ask the instructor first

1. Course, level, and audience (majors? non-majors? prerequisites?). How is section run (in person, Zoom, group size, minutes per section)?
2. The syllabus by week, and the traditional worksheets or problem sets (with solutions) that define the skills. Which items are "core" and which are "if time"?
3. Shape per week, e.g. here: 4 core problems × 3 auto-checked parts + 1 optional extension, each with a written "show on paper" task.
4. Answer checking: numeric precision (here: two decimal places; answers below 0.1 need two significant figures), whether formulas, vectors, multiple choice, or potentials are needed.
5. Diversity goals (here: applications from all continents and oceans, plus one local anchor per week where natural), and places or topics to avoid.
6. Name, credit line, license, hosting (here: GitHub Pages, MIT License, "Designed by …" linked to the designer's page).
7. Whether PDFs (student and solutions) and whiteboard images for online groups are wanted.

## 2. Research phase (do this before writing anything)

### 2a. Skill inventory
Read every traditional worksheet and its solutions. Build a table (here `SKILL_COVERAGE.md`): week, skill ID, skill, traditional problem, core or "if time". This table is the contract: later, every core skill maps to a required part or whiteboard task in a core problem (`SKILL_MAP` in each week module), and a validator checks the mapping.

### 2b. How others write this kind of material
Find and actually read exemplary application-driven materials in the course's discipline and in general modeling education, and distill concrete writing principles. Start with interdisciplinary courses at strong universities; UCLA's Life Sciences 30 sequence is a model. Sources that shaped this project's writing:

- UCLA LS 30 (Garfinkel et al., "Teaching Dynamics to Biology Undergraduates: the UCLA Experience," *Bull. Math. Biol.* 2022): build models from plain questions ("what makes this go up or down?"); give terms names students can say aloud; the application is the motivation, not decoration.
- GAIMME (SIAM/COMAP): explicit formulation at the start, explicit reconciliation with reality at the end; check sign, size, sensitivity.
- *Calculus in Context* (Five College): every assumption with its reason; say openly when a simplification fails.
- Dan Meyer, "The Three Acts of a Mathematical Story": open with a vivid question in few words; predict before computing.
- COMAP HiMCM problem statements: short sourced scenario, numbered verb-led tasks, loaded terms defined.
- SIMIODE scenarios: a few plain questions; report messy data honestly.
- Active Calculus (Schlicker, Austin, Boelkins): motivating questions; what one small piece means before the whole; units.
- MIT 18.02 (Mattuck's notes): name the physical quantity before the integral; sign conventions in words.
- Harvard Math 21a (Knill, "Curl and Div"): tie each abstract object to an instrument you could hold.
- Stull, *Practical Meteorology* exercises: apply → justify → "what if…".
- MOSAIC Calculus (Kaplan): dimensions and units as a guide to thinking; "good enough" criteria.

For a different discipline, look for its equivalents (modeling courses, problem-based textbooks, contest problems, field-science problem sets). Record each source's URL and 2–4 quotable observations about *how it is written*. Then write your own writing guide (see section 4) and put the sources on the Acknowledgements page.

### 2c. Applications
For each week, brainstorm several real settings per skill across world regions (Africa, Asia, Europe, Latin America, North America, Oceania, polar, space, global). Prefer settings where the mathematics is the natural way to answer a real question. Keep one per region per week where you can, and do not reuse a place across weeks. Then, for each chosen setting:

- Find authoritative published values (government agencies, observatories, official sites, manufacturer datasheets, peer-reviewed papers, official rulebooks). **Open the page or PDF and read the exact row or sentence.** If a site blocks you, find another authoritative source; never cite what you could not read.
- Record a source card: title, URL, kind, a note (who, when accessed, caveats; label secondary sources as secondary), and a table of the exact published values used. These cards become the "sources" page and per-source CSV downloads.
- Look for an openly licensed photo of the real place or object (Wikimedia Commons: public domain, CC0, CC BY, CC BY-SA only). Look at the image before using it, and write accurate alt text and credit.
- Think about what is *not* published (shapes, profiles, fields): those become labeled assumptions.

## 3. Architecture (what to build)

One source of truth generates everything:

```
source/weeks/week_NN.py          # text, answers, hints, solutions, model panels, photos, captions, skill map, regions
source/weeks/week_NN_math.py     # independent symbolic derivation of every checked answer (SymPy)
source/weeks/week_NN_figures.py  # one model diagram per problem, drawn from the model equations (Matplotlib)
author_workbook.py → workbook.json → build.py → website pages + LaTeX → PDFs; make_whiteboard_kits.py → 16:9 kit images
validators: validate_week.py (per unit), validate_math.py, checker tests, build_pdfs.py checks, validate_site.py, browser math check
build_all.py runs every step in order (slow steps in parallel) and stops at the first failure
```

Per problem: `title`, `context` (story), `model` (one-line data-versus-model summary), `sources`, `work` (whiteboard checklist, a list of 3–6 steps), three `questions` (prompt, expected answer in calculator syntax, units, kind, two hints, a picture hint), `solution` steps with solution pictures, `reflection` (discussion prompt), discussion answer, a three-part model panel (`data` / `assume` / `model`), figure (alt + caption), photo (alt, credit, license, page), region.

Website essentials: static pages; MathJax and a visual math input (MathLive) bundled locally; an answer checker that evaluates expressions numerically (so 3/2, 1.5, and 6/4 all pass; formulas are compared at sample points; decimals to the stated precision; LaTeX input accepted); hints revealed one at a time; full worked solutions behind a disclosure; progress in localStorage only; a sources page with every source card, image credits, and how the tools work; an Acknowledgements page; an instructor guide. PDFs: student worksheet and solutions per week, with source tables. Whiteboard kits: one 1920×1080 image of material per problem (figure, model panel, checklist, the week’s formulas, and the three parts; no blank space), for groups to paste or crop onto a shared whiteboard.

## 4. The writing standard (summary; the full version is `EXPOSITION_GUIDE.md`)

Audience: students working in small groups, and the TA. Plain words, short sentences, active voice, consistent spelling, one word for one thing.

- **Context (60–130 words).** Open with the concrete place or object and why someone there cares. Name quantities physically before naming the math ("how much spin the wind carries around a loop" before "circulation"). Define each technical term once. At most two or three numbers; the rest go in the data column. End with the question a non-specialist would ask. No hype.
- **Model panel.** *Data:* one published fact per line, with units, flagged if rounded or derived. *Assume:* one simplification per line, with its reason or where it fails. *Model:* equations with every symbol glossed (meaning, units, domain), in the exact notation of the parts and figure. Never give away what students must construct or choose.
- **Whiteboard checklist (3–6 items).** Verb-first, one task each, in working order. Item 1 is the picture: sketch and mark where the integrand (or quantity) is positive, negative, large, small. Include one prediction before a checked part ("bigger, smaller, or the same as (a)? why?"). Tag items "Before (b)" or "After (c)". Must fit a box on a 16:9 image.
- **Parts (three, auto-checked).** Self-contained: the quantity, the object, orientation in words and symbols, units, and any conversion. One question each. The checked parts stay closed; openness lives in predictions and discussion.
- **Hints (two per part).** Math goes in `$...$` and is typeset when the hint is revealed (never Unicode imitations like g_x). Hint 1 names the idea (often: what does one small piece mean?); hint 2 gives a concrete next step. Across each problem, one hint gives a units or order-of-magnitude check. No hint gives the answer.
- **Solution.** Labeled steps ("Orientation:", "Area by Green's theorem:") in checklist order, words connecting equations, results with units. Close every prediction. Final step reconciles: sign, size against something real, which assumption matters most; say plainly where model and data disagree.
- **Discussion.** One focused question, often "What if…" breaking an assumption; the answer opens with the direct answer, then 1–3 sentences of reasoning. Only ask what you can answer correctly.
- **Pictures that help solve.** Besides the model figure, give every checked part a *picture hint* (revealed after the written hints: the region with bounds and a slice, the oriented curve, the surface with its normal, the small piece labeled; never the answer) and give every solution one or two *solution pictures* (the worked setup with values labeled, boundary pieces with their contributions, model versus data).
- **Figures.** Drawn from the model equations; text at least 9–11 pt; wide aspect (about 2:1) so it survives shrinking onto the kit; no overlapping labels; model notation; never label an answer.

## 5. Verification (every change, every time)

1. Re-derive every checked answer independently in a CAS from the model, never by copying the expected string; add `assert`s for sanity checks (a parametrization satisfies its surface; a model value matches the published one).
2. Checker tests: every expected answer accepted, a plausible wrong answer rejected, rounded decimals accepted, equivalent forms accepted.
3. Per-unit validator: structure (counts, hints, steps), model panels present, text safe for LaTeX, sources and photo licenses complete, skill map complete, figures drawn.
4. Build all PDFs; fail on errors, overfull boxes, or a kit page that spills onto a second page.
5. Site validator: every page, link, anchor, asset, PDF, CSV, and credit; works under a project subpath.
6. Render every page in a headless browser with every hint revealed: no math errors anywhere, no sideways scrolling at phone width.
7. **Look at every generated image** (figures, kits, map) and fix anything hard to read.
8. Giveaway scan: for every multiple-choice part, check the model panel, figure labels, caption, checklist, and other parts' prompts for the answer.
9. Re-read changed prose against the answers: reworded prompts must ask for exactly the same quantity (a "factor by which it falls" versus a ratio of 1/2 is a real bug).

## 6. Improvement loops (how this project raised its writing)

Run at least three passes over all units, one reviewer per unit in parallel:

1. **Cleanup pass:** bring everything to the writing guide; convert paragraphs to checklists; fix spelling and consistency; remove unsupported claims; report (do not silently change) any error in an answer, model number, or data.
2. **Research-informed pass:** apply the principles from section 2b (question-first contexts, glossed parameters, assumptions with limits, picture-and-signs first, one prediction, size-check hints, reconciliation, "what if" discussions); improve figure readability.
3. **Fresh-eyes pass:** a new reviewer re-derives every number and claim the previous pass added, closes every prediction, removes giveaways, trims what got wordy, and checks figures on the actual kits and PDFs.

Rules that kept parallel reviewers safe: each edits only its own unit's files; each uses a private scratch folder (shared folders caused overwrites here); answers, data, titles, sources, and licenses are frozen and verified by a script diff against a baseline snapshot; after each pass, rebuild everything, rerun every validator, and run a cross-check that no text landed in the wrong problem. A reviewer that only handles the specific item you flagged should be sent back to do the full brief.

## 7. Pitfalls this project actually hit

- A prompt asked "by what factor does it fall" while the answer was the ratio 1/2.
- Figure labels, model panels, and checklists revealed multiple-choice answers.
- A physics slip: adding a floating ship's mass on top of a full basin ignores Archimedes (a floating ship displaces its own weight).
- Unsourced superlatives ("tallest", "the only") and charming asides not in any source.
- Rounded values truncated instead of rounded; intermediate integrals mistyped while final answers were right.
- British and American spellings mixed; units missing.
- Hints that gave the final number.
- Figure text unreadable once shrunk onto a whiteboard kit; tall figures wasted kit space.
- Long display math overflowing narrow boxes; stale LaTeX aux files shifting layouts.
- Slow builds: thousands of individually drawn TikZ dots made each kit page take seconds (one dashed path per row with round caps draws the same dots in a fraction of the time); sequential compiles that could run in parallel; dead legacy code still computing results nobody used.
- Page weight: shipping all content as JSON to every page when the browser only needs answers and hints.

## 8. Definition of done

- Every core skill mapped and required; every unit validator passes.
- Every checked answer independently derived; checker tests pass.
- All PDFs and kits build cleanly; site validator passes; pages render without errors at desktop and phone widths.
- Every image looked at; every multiple-choice part checked for giveaways.
- Sources page, image credits, Acknowledgements page, instructor guide, data provenance, and skill coverage regenerated.
- The instructor has reviewed and approved before anything is published.

## 9. Prompt templates for helper agents

**Research (applications):** "For Week N (skills: …), propose 6–8 real settings across at least four world regions where [skill] answers a real question. For each, find and open an authoritative source, quote the exact published values with units and URL, note what must be assumed, and find an openly licensed photo. Do not cite anything you could not open."

**Research (writing):** "Find and read exemplary application-driven materials for [discipline] (start with interdisciplinary courses at UCLA and similar universities, modeling-education guidelines, contest problems, open textbooks). For each: URL and 2–4 quotable observations about how it is written. Then give 10–15 actionable writing principles for our problem format, each tied to its source, plus conflicts with our constraints."

**Author:** "Write Week N following AUTHORING_GUIDE.md and EXPOSITION_GUIDE.md: 4 core + 1 extension, three checked parts each, model panels, checklist, figures, independent CAS derivations; validate until PASS; report sources with exact quotes."

**Review pass:** "Review Week N against EXPOSITION_GUIDE.md (hard rules bind you). Edit only your unit's files; private scratch folder; answers, data, titles, sources frozen. Re-derive every number you touch; no new factual claims; look at every figure. Validate until PASS. Report changes, errors found, claims removed."

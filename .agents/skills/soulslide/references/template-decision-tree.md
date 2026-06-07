# SoulSlide Template Decision Tree

Use this before choosing a template. Each leaf has a matching desensitized golden sample in `references/golden-examples.md`.

## Fast Rule

Choose the template by the slide's job, not by the content you happen to have.

## Decision Tree

1. Is this the first page, a chapter opener, or a title-led stage page?
   - Use `assets/templates/cover.html`.

2. Is this the final page or a closing call-to-action?
   - Use `assets/templates/closing.html`.

3. Is the slide mainly one strong judgment, quote, or turning-point statement?
   - Use `assets/templates/quote-thesis.html`.
   - Use this when one sentence should dominate the room before supporting detail appears.

4. Does the slide compare exactly 3 groups, roles, conditions, benefits, requirements, or phases?
   - Use `assets/templates/three-column.html`.
   - If one column is the main focus, make that column dark.

5. Does the slide present 4-6 ideas where each needs visual evidence, a card title, body text, and citation/source metadata?
   - Use `assets/templates/image-grid.html`.
   - Use fixed image height or aspect ratio.

6. Does the slide explain "why now" with numbers, trend evidence, adoption signals, or a timeline?
   - Use `assets/templates/metric-timeline.html`.
   - Split metrics into number/unit/meta typography.

7. Does the slide explain "how it works" as a pipeline, operating routine, handoff, or repeatable process?
   - Use `assets/templates/workflow.html`.
   - Keep steps as action verbs.

8. Does the slide explain a conceptual frame such as a quadrant, gates, layers, walls, unlocks, or strategic map?
   - Use `assets/templates/matrix-map.html`.
   - Use numbers and accent lines to preserve scan order.

9. Does the slide summarize a portfolio, practice map, capability family, or project categories?
   - Use `assets/templates/category-overview.html`.
   - Use this when the audience needs a taxonomy rather than a detailed case.

10. Does the slide showcase one product, project, automation, or skill as a concrete case?
    - Use `assets/templates/case-study.html`.
    - Put the visual artifact on the left and capability/build path on the right.

11. Does the slide map many business scenes across functions, sectors, departments, or value/frequency dimensions?
    - Use `assets/templates/scenario-matrix.html`.
    - Use this for dense maps where every cell is a conversation starter.

12. Does the slide require a forced reveal order, gallery, before/after sequence, or demo walkthrough?
    - Use `assets/templates/interaction-sequence.html`.
    - Ensure `window.__seqHandleNav(key)` and `window.__seqBlockNav` are wired.

13. Does the slide feel like a profile intro, live poll, media essay, knowledge constellation, value ledger, or full system map?
    - Check `references/template-coverage-notes.md`.
    - Start from the listed fallback template unless the pattern recurs enough to promote.

## If Two Templates Fit

- Prefer `quote-thesis` when one sentence is the slide.
- Prefer `three-column` when the count is exactly three.
- Prefer `category-overview` when the page names families of work.
- Prefer `scenario-matrix` when the page has many cells across business functions.
- Prefer `case-study` when there is one concrete artifact to show.
- Prefer `workflow` when the story is temporal or operational.

## Missing-Type Check

Before inventing a new layout, ask:

- Can it be a stronger `quote-thesis`?
- Can it be reduced to `three-column`?
- Is it actually a `category-overview` instead of a generic card grid?
- Is it a `case-study` with proof missing?
- Is it a `scenario-matrix` that needs more structure?
- Is it one of the documented high-flavor candidates in `references/template-coverage-notes.md`?

Only create a new template if the answer to all of these is no.

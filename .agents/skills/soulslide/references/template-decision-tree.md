# SoulSlide Template Decision Tree

Use this before choosing a template. Each leaf has a matching desensitized golden sample in `references/golden-examples.md`.

## Fast Rule

Choose the template by the slide's job, not by the content you happen to have.

## Decision Tree

1. Is this the first page, a chapter opener, or a title-led stage page?
   - Use `assets/templates/cover.html`.

2. Is this the final page or a closing call-to-action?
   - Use `assets/templates/closing.html`.

3. Is this a full deck's index, development status page, or presentation entry point?
   - Use `assets/templates/navigation.html`.
   - Generate this first after the page plan is confirmed.

4. Is a person, speaker, project owner, or team role part of the argument?
   - Use `assets/templates/profile-intro.html`.
   - Use a supplied portrait only when permission-safe; otherwise use a non-likeness visual.

5. Is the slide mainly one large image, video still, artifact, or media frame with a short interpretation?
   - Use `assets/templates/media-essay.html`.
   - Read `references/art-direction.md` and `references/visual-assets.md`.
   - Use this when the visual is the argument, not just decoration.

6. Is the slide mainly one strong judgment, quote, or turning-point statement?
   - Use `assets/templates/quote-thesis.html`.
   - Use this when one sentence should dominate the room before supporting detail appears.

7. Does the slide compare exactly 3 groups, roles, conditions, benefits, requirements, or phases?
   - Use `assets/templates/three-column.html`.
   - If one column is the main focus, make that column dark.

8. Does the slide present 4-6 ideas where each needs visual evidence, a card title, body text, and citation/source metadata?
   - Use `assets/templates/image-grid.html`.
   - Use fixed image height or aspect ratio.

9. Does the slide explain "why now" with numbers, trend evidence, adoption signals, or a timeline?
   - Use `assets/templates/metric-timeline.html`.
   - Split metrics into number/unit/meta typography.

10. Does the slide explain "how it works" as a pipeline, operating routine, handoff, or repeatable process?
   - Use `assets/templates/workflow.html`.
   - Keep steps as action verbs.

11. Is the slide a single full architecture, operating model, product map, or system canvas that should be inspected as one diagram?
   - Use `assets/templates/full-system-map.html`.
   - Keep the core logic as HTML/CSS diagram labels; use generated bitmap art only as quiet supporting texture.

12. Does the slide explain a conceptual frame such as a quadrant, gates, layers, walls, unlocks, or strategic map?
   - Use `assets/templates/matrix-map.html`.
   - Use numbers and accent lines to preserve scan order.

13. Does the slide summarize a portfolio, practice map, capability family, or project categories?
   - Use `assets/templates/category-overview.html`.
   - Use this when the audience needs a taxonomy rather than a detailed case.

14. Does the slide showcase one product, project, automation, or skill as a concrete case?
    - Use `assets/templates/case-study.html`.
    - Put the visual artifact on the left and capability/build path on the right.

15. Does the slide map many business scenes across functions, sectors, departments, or value/frequency dimensions?
    - Use `assets/templates/scenario-matrix.html`.
    - Use this for dense maps where every cell is a conversation starter.

16. Does the slide require a forced reveal order, image-by-image playback, video playback, gallery, before/after sequence, or demo walkthrough?
    - Use `assets/templates/interaction-sequence.html`.
    - Ensure `window.__seqHandleNav(key)` and `window.__seqBlockNav` are wired.
    - For videos or multiple images, read `references/media-sequence.md`.

17. Does the slide feel like a live poll, knowledge constellation, or value ledger?
    - Check `references/template-coverage-notes.md`.
    - Start from the listed fallback template unless the pattern recurs enough to promote.

## If Two Templates Fit

- Prefer `quote-thesis` when one sentence is the slide.
- Prefer `media-essay` when one visual frame is the slide.
- Prefer `profile-intro` when the person's identity is part of the argument.
- Prefer `three-column` when the count is exactly three.
- Prefer `full-system-map` when the system must be inspected as one canvas.
- Prefer `category-overview` when the page names families of work.
- Prefer `scenario-matrix` when the page has many cells across business functions.
- Prefer `case-study` when there is one concrete artifact to show.
- Prefer `workflow` when the story is temporal or operational.

## Missing-Type Check

Before inventing a new layout, ask:

- Can it be a stronger `quote-thesis`?
- Is the person/role itself important enough for `profile-intro`?
- Is it a `media-essay` because one image/video should dominate?
- Can it be reduced to `three-column`?
- Is it a single inspectable system that should use `full-system-map`?
- Is it actually a `category-overview` instead of a generic card grid?
- Is it a `case-study` with proof missing?
- Is it a `scenario-matrix` that needs more structure?
- Is it one of the documented high-flavor candidates in `references/template-coverage-notes.md`?

Only create a new template if the answer to all of these is no.

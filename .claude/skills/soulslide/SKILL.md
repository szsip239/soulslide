---
name: soulslide
description: Use when the user wants to create, redesign, audit, standardize, or extend SoulSlide-style HTML presentation slides, decks, PPT pages, cover pages, closing pages, editorial Chinese slides, 16:9 projector-first slide templates, or a consistent editorial slide visual language.
---

# SoulSlide

SoulSlide creates editorial HTML slides: projector-first, warm paper palette, strong Chinese type hierarchy, restrained cards, and reliable 16:9 composition.

## Core Workflow

1. Identify the deliverable: a single slide, a deck section, a cover, a closing page, or a style audit.
2. Read `references/design-system.md` before visual work.
3. Pick the closest layout using `references/template-decision-tree.md`; copy or adapt the matching file from `assets/templates/`. If the request does not fit any leaf cleanly, check `references/template-coverage-notes.md` before inventing a new structure.
4. Link `assets/soulslide.css` or copy its relevant variables/components into the target project.
5. Write content for one clear idea per slide. Preserve hierarchy: page title > module title > body > source/metadata.
6. Apply `references/quality-gate.md`, then run `scripts/slide-font-audit.mjs` on changed slides. Use a 16:9 browser screenshot to verify no overflow, clipped text, broken images, or overlapping elements.

## Template Selection

- Cover or opening thesis: `cover.html`
- Closing or final call-to-action: `closing.html`
- One strong argument or turning-point statement: `quote-thesis.html`
- Three columns, requirements, comparisons, principles: `three-column.html`
- Image-led insight cards with citations: `image-grid.html`
- Big metric, market signal, timeline, proof points: `metric-timeline.html`
- Process, daily routine, handoff, pipeline: `workflow.html`
- Quadrant, map, layers, gates, walls: `matrix-map.html`
- Portfolio, project family, practice categories: `category-overview.html`
- Product/project/case with screenshots and capabilities: `case-study.html`
- Industry or enterprise scenario matrix: `scenario-matrix.html`
- Forced presenter-clicker sequence or gallery: `interaction-sequence.html`
- Special high-flavor structures not yet promoted to core templates: see `references/template-coverage-notes.md`

## Non-Negotiables

- Do not copy source-deck content, personal photos, production screenshots, client data, credentials, or local-only assets into shareable output.
- Do not shrink important body text below 16px to make content fit. Cut words, split the slide, or choose a denser template.
- Do not use decorative Latin display fonts for Chinese main content.
- Do not flatten the typography so titles, body, quotes, and citations all look the same.
- Do not ship a slide that fails the lightweight quality gate in `references/quality-gate.md`.
- Do not make key presentation steps mouse-only. Important interactions must work with keyboard or presenter clicker.

## Validation

Use the bundled audit script:

```bash
node .agents/skills/soulslide/scripts/slide-font-audit.mjs path/to/slide.html
```

For final work, open the slide at a 16:9 viewport such as 1280x720 or 1492x839 and inspect a screenshot. See `references/validation.md` for the checklist.

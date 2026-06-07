---
name: soulslide
description: Use when the user wants to create, redesign, audit, standardize, or extend SoulSlide-style HTML presentation slides, decks, PPT pages, cover pages, closing pages, editorial Chinese slides, 16:9 projector-first slide templates, or a consistent editorial slide visual language.
---

# SoulSlide

SoulSlide creates editorial HTML slides: projector-first, warm paper palette, strong Chinese type hierarchy, restrained cards, and reliable 16:9 composition.

## Core Workflow

1. Identify the deliverable: a single slide, a deck section, a cover, a closing page, or a style audit.
2. For a deck, section, or unclear request, read `references/briefing.md`. Interview the user for missing audience, goal, materials, asset paths, constraints, and page-count inputs before planning.
3. Return a page-by-page outline table with recommended templates and open questions. Do not start HTML until the user confirms the table, unless they explicitly ask to proceed with assumptions.
4. After confirmation, read `references/deck-shell.md` and `references/navigation-style.md`, then generate the navigation/index page first from `assets/templates/navigation.html`; ask the user to confirm that page before building the rest of the deck.
5. Read `references/design-system.md` before visual work. For cover, closing, profile, system-map, media-led, or other high-visibility pages, also read `references/aesthetic-review.md` and write a one-sentence design read before selecting the layout.
6. Pick the closest layout using `references/template-decision-tree.md`; copy or adapt the matching file from `assets/templates/`. If the request does not fit any leaf cleanly, check `references/template-coverage-notes.md` before inventing a new structure.
7. For cover, closing, media-led, case, image-grid, or interaction-sequence pages, read `references/art-direction.md` before visual work. If the selected template has required or useful bitmap assets, read `references/visual-assets.md`. For video or multiple images shown by clicker, read `references/media-sequence.md`. Codex must call `image2` or the active image generation tool for missing required visuals instead of leaving final text placeholders.
8. Link `assets/soulslide.css` or copy its relevant variables/components into the target project.
9. Write content for one clear idea per slide. Preserve hierarchy: page title > module title > body > source/metadata.
10. Preserve the deck navigation/index player shell and the home/previous/next/fullscreen control bar across presentation pages.
11. Apply `references/quality-gate.md`, then run `scripts/slide-font-audit.mjs` on changed slides. Use a 16:9 browser screenshot to verify no overflow, clipped text, broken images, or overlapping elements.

## Template Selection

- Cover or opening thesis: `cover.html` (optional immersive visual)
- Closing or final call-to-action: `closing.html`
- Deck navigation/index player shell: `navigation.html`
- Profile/person/speaker intro where identity is part of the argument: `profile-intro.html`
- Media-led key moment, artifact review, video/image interpretation: `media-essay.html` (required focal visual)
- One strong argument or turning-point statement: `quote-thesis.html`
- Three columns, requirements, comparisons, principles: `three-column.html`
- Image-led insight cards with citations: `image-grid.html` (required visual evidence)
- Big metric, market signal, timeline, proof points: `metric-timeline.html`
- Process, daily routine, handoff, pipeline: `workflow.html`
- Quadrant, map, layers, gates, walls: `matrix-map.html`
- Full architecture, operating model, product map, or system canvas: `full-system-map.html`
- Portfolio, project family, practice categories: `category-overview.html`
- Product/project/case with screenshots and capabilities: `case-study.html` (required proof visual)
- Industry or enterprise scenario matrix: `scenario-matrix.html`
- Forced presenter-clicker sequence, image carousel, video frame, or gallery: `interaction-sequence.html` (required visual frames when the sequence is media/demo-led)
- Special high-flavor structures not yet promoted to core templates: see `references/template-coverage-notes.md`

## Non-Negotiables

- Do not copy source-deck content, personal photos, production screenshots, client data, credentials, or local-only assets into shareable output.
- Do not shrink important body text below 16px to make content fit. Cut words, split the slide, or choose a denser template.
- Do not use decorative Latin display fonts for Chinese main content.
- Do not flatten the typography so titles, body, quotes, and citations all look the same.
- Do not leave final `image`, `screenshot`, `product shot`, or `visual` text placeholders in slots that require an actual asset.
- Do not add a tiny English eyebrow to every page, repeatedly use "不是 X，而是 Y", or rely on empty buzzwords such as `赋能`, `重塑`, `无缝`, `下一代`, `革命性`.
- Do not ship a slide that fails the lightweight quality gate in `references/quality-gate.md`.
- Do not make key presentation steps mouse-only. Important interactions must work with keyboard or presenter clicker.
- Do not enlarge image or video sequences by default; keep media inside the slide stage and use active frame labels unless the user asks for a lightbox.
- Do not turn the deck navigation page into a generic slide or remove previous/next/fullscreen controls when working on a complete presentation.

## Validation

Use the bundled audit script. It checks readable font sizes plus lightweight local-rendering and copy/style guardrails:

```bash
node .agents/skills/soulslide/scripts/slide-font-audit.mjs path/to/slide.html
```

For final work, open the slide at a 16:9 viewport such as 1280x720 or 1492x839 and inspect a screenshot. See `references/validation.md` for the checklist.

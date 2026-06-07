# soulslide

SoulSlide is an agent skill for creating editorial HTML presentation slides: projector-first, Chinese/English typographic hierarchy, warm paper palette, and reusable 16:9 layout templates.

Installable skill directories:

```text
.agents/skills/soulslide/   # Codex
.claude/skills/soulslide/   # Claude
```

## What Is Included

- `SKILL.md` — trigger rules and compact workflow for agents.
- `references/design-system.md` — SoulSlide visual language, typography, spacing, and anti-patterns.
- `references/layout-patterns.md` — categorized layout templates for common editorial slide patterns.
- `references/template-decision-tree.md` — direct rules for choosing the right template.
- `references/golden-examples.md` — desensitized golden sample mapping for each decision-tree leaf.
- `references/template-coverage-notes.md` — high-flavor source patterns that are documented but not yet core templates.
- `references/visual-assets.md` — template-by-template rules for supplied assets, generated images, and draft-only placeholders.
- `references/quality-gate.md` — lightweight audit checklist for style, hierarchy, layout, media, interaction, and shareability.
- `references/workflow.md` — slide creation and adaptation workflow.
- `references/validation.md` — font audit and screenshot validation rules.
- `assets/soulslide.css` — shared design variables and component primitives.
- `assets/templates/*.html` — safe placeholder templates for cover, closing, cards, maps, workflows, metrics, cases, category overviews, and interactive sequences.
- `assets/golden/*.png` — generated screenshots of desensitized golden samples.
- `scripts/slide-font-audit.mjs` — minimum readable font-size audit for slide cards and panels.

## Local Check

```bash
npm run check
```

## Keep Claude Copy In Sync

Edit the Codex skill directory first, then refresh the Claude-compatible copy:

```bash
npm run sync:claude
npm run check
```

The templates intentionally contain placeholder content. They preserve a consistent editorial layout grammar without copying source deck content or assets.

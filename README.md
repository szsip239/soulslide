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
- `references/workflow.md` — slide creation and adaptation workflow.
- `references/validation.md` — font audit and screenshot validation rules.
- `assets/soulslide.css` — shared design variables and component primitives.
- `assets/templates/*.html` — safe placeholder templates for cover, closing, cards, maps, workflows, metrics, cases, and interactive sequences.
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

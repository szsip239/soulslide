# Repository Guidelines

This repository packages the `soulslide` skill for Codex and Claude.

## Source of Truth

- Codex installable skill: `.agents/skills/soulslide/`
- Claude installable skill: `.claude/skills/soulslide/`
- Core workflow: `SKILL.md` in both provider directories
- Detailed guidance: `references/`
- Reusable templates and CSS: `assets/`
- Validation script: `scripts/slide-font-audit.mjs`

## Scope

SoulSlide distills a projector-first editorial presentation style into reusable templates. It should preserve layout grammar, typography, validation workflow, and interaction patterns without copying source-project content.

Do not add:

- Personal photos or non-shareable screenshots from a source deck.
- Client data, credentials, local-only paths, session material, or non-public URLs.
- Full copied slides from a source deck unless they have been converted into safe placeholder templates.

## Validation

After changing CSS, templates, or validation behavior, run:

```bash
npm run sync:claude
npm run check
```

For visible template changes, inspect at least one 16:9 screenshot manually.

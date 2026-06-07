# soulslide

[简体中文](README.md) | English

![SoulSlide hero](assets/readme/hero.png)

SoulSlide is an agent skill for creating editorial HTML presentation slides with a consistent visual language: projector-first 16:9 composition, warm paper palette, strong Chinese typography, restrained cards, and reusable slide templates for Codex and Claude.

## Core Advantages

![SoulSlide core advantages](assets/readme/core-advantages.png)

- Aesthetic-first workflow: decide the slide role, mood, visual center, and composition anchor before writing HTML/CSS.
- Warm unified style: paper-toned backgrounds, ink text, restrained gold, small red/blue/green accents, and strong Chinese type hierarchy.
- Complete template set: cover, closing, navigation, profile, system map, media essay, quote, three-column, image grid, metric timeline, workflow, matrix, case, scenario map, and interaction sequence.
- Visual-asset aware: clear image generation and asset-selection rules for covers, closings, key visual pages, image grids, and media-led pages.
- Built-in media playback: image/video sequences stay inside the slide, advance with presenter keys, highlight the active frame label, and support mp4 validation through a local Range-capable server.
- Practical page audit: readable type audit, remote font checks, copy/style guardrails, 16:9 screenshots, and non-16:9 preview checks.
- Dual-agent packaging: Codex and Claude skill directories share the same templates, fonts, golden samples, and validation workflow.
- Recoverable and shareable: bundled WOFF2 fonts, desensitized golden examples, local image assets, and MIT licensing for easy reuse.

## Template Gallery

The skill includes desensitized golden samples. These are the visual target for agents when adapting templates, and are regenerated from the current HTML/CSS templates.

![SoulSlide golden sample grid](assets/readme/golden-grid.png)

Core template families:

- `cover.html` — opening page, chapter opener, title-led stage
- `closing.html` — final page or closing call-to-action
- `navigation.html` — deck index, lightweight development status, playback entry, bottom-left controls
- `profile-intro.html` — person, speaker, owner, or role page where identity is proof
- `media-essay.html` — one large image, video still, or artifact carries the argument
- `quote-thesis.html` — one strong judgment or turning-point statement
- `three-column.html` — conditions, benefits, requirements, comparisons
- `image-grid.html` — image-led evidence cards with consistent crop rhythm
- `metric-timeline.html` — numbers, trend proof, timeline, adoption signal
- `workflow.html` — pipeline, routine, handoff, operating process
- `full-system-map.html` — architecture, operating model, product map, or system canvas
- `matrix-map.html` — quadrants, gates, layers, walls, decision maps
- `category-overview.html` — project families, capability categories, section overview
- `case-study.html` — product, project, automation, or skill proof page
- `scenario-matrix.html` — dense business scene map or portfolio matrix
- `interaction-sequence.html` — clicker-first gallery, demo reveal, before/after sequence
- media/video sequences use the same `interaction-sequence.html` template with active labels and HTTP-served mp4 assets

## Architecture

```text
.
├── .agents/skills/soulslide/          # Codex installable skill
│   ├── SKILL.md                       # trigger rules and compact workflow
│   ├── agents/openai.yaml             # Codex UI metadata
│   ├── assets/
│   │   ├── soulslide.css              # shared design variables and primitives
│   │   ├── fonts/                     # bundled WOFF2 fallback fonts and licenses
│   │   ├── images/                    # generated cover and closing visuals
│   │   ├── templates/*.html           # reusable slide templates
│   │   └── golden/*.png               # desensitized reference screenshots
│   ├── references/
│   │   ├── aesthetic-review.md       # design read, composition anchors, copy taste guardrails
│   │   ├── art-direction.md           # cover, closing, key image, and motion rules
│   │   ├── briefing.md                # prompt and customer brief patterns
│   │   ├── deck-shell.md              # navigation/index page and controls
│   │   ├── navigation-style.md        # fixed index/player shell visual reference
│   │   ├── design-system.md           # visual language and typography rules
│   │   ├── layout-patterns.md         # template catalog
│   │   ├── media-sequence.md          # clicker-driven image/video sequence rules
│   │   ├── template-decision-tree.md  # layout selection rules
│   │   ├── golden-examples.md         # sample-to-template mapping
│   │   ├── visual-assets.md           # image generation and asset rules
│   │   ├── quality-gate.md            # lightweight slide audit checklist
│   │   └── validation.md              # font and screenshot checks
│   └── scripts/
│       ├── slide-font-audit.mjs       # readable type + lightweight quality audit
│       └── serve-media.mjs            # local HTTP media server with mp4 Range support
├── .claude/skills/soulslide/          # Claude-compatible copy
├── scripts/sync-claude-skill.mjs      # refreshes Claude copy from Codex source
├── assets/readme/                     # README hero and gallery images
└── examples/                          # local example outputs
```

## Installation

Clone or download this repository, then install the provider directory you need.

Codex:

```bash
mkdir -p ~/.agents/skills
cp -R .agents/skills/soulslide ~/.agents/skills/soulslide
```

Claude:

```bash
mkdir -p ~/.claude/skills
cp -R .claude/skills/soulslide ~/.claude/skills/soulslide
```

Install both if you want the same slide style available in both agents.

## Included Guidance

- `references/design-system.md` — typography, palette, spacing, and anti-patterns
- `references/aesthetic-review.md` — design read, composition anchors, copy taste, and image-generation reminders
- `references/art-direction.md` — cover, closing, key visual, image generation, and motion rules
- `references/briefing.md` — prompt patterns and page-by-page customer brief structure
- `references/deck-shell.md` — navigation/index page and playback control rules
- `references/navigation-style.md` — fixed visual reference for the deck index/player shell
- `references/layout-patterns.md` — categorized template grammar
- `references/media-sequence.md` — image/video sequence behavior, active labels, and mp4 serving
- `references/template-decision-tree.md` — direct template selection rules
- `references/template-coverage-notes.md` — high-flavor patterns not yet promoted to core templates
- `references/visual-assets.md` — when to use supplied assets, generated images, or no image
- `references/quality-gate.md` — style, hierarchy, layout, media, interaction, and shareability audit
- `references/validation.md` — font audit, screenshot check, interaction check, and HTTP asset check

## License

SoulSlide is released under the [MIT License](LICENSE).

The templates intentionally use safe placeholder content. They preserve style and layout grammar without copying private source-deck content or non-shareable assets.

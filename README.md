# soulslide

[English](README.md) | [简体中文](README.zh-CN.md)

![SoulSlide hero](assets/readme/hero.png)

SoulSlide is an agent skill for creating editorial HTML presentation slides with a consistent visual language: projector-first 16:9 composition, warm paper palette, strong Chinese typography, restrained cards, and reusable slide templates for Codex and Claude.

## Current Highlights

- Interview-first workflow: the agent should gather audience, goal, materials, assets, constraints, and page count before writing HTML.
- Navigation/index page: decks start with a reusable status-and-playback shell, including previous, next, home, and fullscreen controls.
- Cover and closing pages: templates now include generated visual assets and light breathing/floating motion rules for key stage pages.
- Self-hosted typography: templates load bundled WOFF2 fallbacks from the repository and no longer depend on Google Fonts.
- Golden samples: README images and skill reference screenshots are regenerated from the current templates.

## What It Is For

Use SoulSlide when you want an AI coding agent to:

- create a new HTML slide or deck section in a recognizable editorial style
- redesign rough slide content into a clean projector-ready page
- choose the right layout template before writing CSS
- keep title, body, quote, citation, and metadata hierarchy consistent
- generate or request real visual assets where a template requires them
- improve cover, closing, and key visual pages with explicit art direction and light motion rules
- render consistently with bundled local WOFF2 font fallbacks instead of remote font links
- validate font size, image rhythm, clicker behavior, and 16:9 screenshot quality

SoulSlide is not a generic PPT theme. It is a compact production grammar for HTML slides that should look like they came from the same deck family.

## Best Prompting Pattern

For best results, ask the agent to plan the deck before it writes HTML.
If your inputs are incomplete, SoulSlide should interview you first, ask for missing details and local file paths, then return the confirmation table before development starts.

```text
Use SoulSlide. First create a page-by-page outline and recommended layout plan. Do not write HTML yet.

Audience:
Presentation goal:
Total pages or time:
Tone:
Materials I already have, with file paths if local:
Assets I can share, with file paths if local:
Must-include points:
Must-avoid points:

Return a table with: page number, one-sentence thesis, recommended SoulSlide template, content blocks, visual asset need, interaction need, development status, open questions.
```

After you approve the outline:

```text
Use SoulSlide to build pages [range] from the approved outline.
Generate the navigation/index page first and wait for confirmation before building the rest.
Follow the recommended template for each page.
Keep one thesis per page.
Use supplied assets where available.
Generate required visuals if the template needs them and no safe asset is supplied.
Keep previous, next, and fullscreen controls in the deck shell.
Validate each page with a 16:9 screenshot.
```

For customer alignment, agree on this table before production:

| Page | Thesis | Recommended template | Content blocks | Visual asset | Interaction | Status | Open question |
|---|---|---|---|---|---|---|---|
| 00 | How the audience navigates the deck and sees progress | `navigation.html` | tabs, sections, page cards, player controls | not needed | home/prev/next/fullscreen | generate first | confirm page grouping |
| 01 | What the audience should remember | `cover.html` | title, subtitle, speaker/event | optional background | none | planned | confirm title |
| 02 | One claim, comparison, process, or proof point | template name | 3-5 blocks max | supplied/generated/not needed | none/clicker | planned | missing data |

## Template Gallery

The skill includes desensitized golden samples. These are the visual target for agents when adapting templates, and are regenerated from the current HTML/CSS templates.

![SoulSlide golden sample grid](assets/readme/golden-grid.png)

Core template families:

- `cover.html` — opening page, chapter opener, title-led stage
- `closing.html` — final page or closing call-to-action
- `navigation.html` — deck index, lightweight development status, playback entry, bottom-left controls
- `media-essay.html` — one large image, video still, or artifact carries the argument
- `quote-thesis.html` — one strong judgment or turning-point statement
- `three-column.html` — conditions, benefits, requirements, comparisons
- `image-grid.html` — image-led evidence cards with consistent crop rhythm
- `metric-timeline.html` — numbers, trend proof, timeline, adoption signal
- `workflow.html` — pipeline, routine, handoff, operating process
- `matrix-map.html` — quadrants, gates, layers, walls, decision maps
- `category-overview.html` — project families, capability categories, section overview
- `case-study.html` — product, project, automation, or skill proof page
- `scenario-matrix.html` — dense business scene map or portfolio matrix
- `interaction-sequence.html` — clicker-first gallery, demo reveal, before/after sequence

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
│   │   ├── art-direction.md           # cover, closing, key image, and motion rules
│   │   ├── briefing.md                # prompt and customer brief patterns
│   │   ├── deck-shell.md              # navigation/index page and controls
│   │   ├── navigation-style.md        # fixed index/player shell visual reference
│   │   ├── design-system.md           # visual language and typography rules
│   │   ├── layout-patterns.md         # template catalog
│   │   ├── template-decision-tree.md  # layout selection rules
│   │   ├── golden-examples.md         # sample-to-template mapping
│   │   ├── visual-assets.md           # image generation and asset rules
│   │   ├── quality-gate.md            # lightweight slide audit checklist
│   │   └── validation.md              # font and screenshot checks
│   └── scripts/slide-font-audit.mjs   # readable font-size audit
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
- `references/art-direction.md` — cover, closing, key visual, image generation, and motion rules
- `references/briefing.md` — prompt patterns and page-by-page customer brief structure
- `references/deck-shell.md` — navigation/index page and playback control rules
- `references/navigation-style.md` — fixed visual reference for the deck index/player shell
- `references/layout-patterns.md` — categorized template grammar
- `references/template-decision-tree.md` — direct template selection rules
- `references/template-coverage-notes.md` — high-flavor patterns not yet promoted to core templates
- `references/visual-assets.md` — when to use supplied assets, generated images, or no image
- `references/quality-gate.md` — style, hierarchy, layout, media, interaction, and shareability audit
- `references/validation.md` — font audit, screenshot check, interaction check, and HTTP asset check

## License

SoulSlide is released under the [MIT License](LICENSE).

The templates intentionally use safe placeholder content. They preserve style and layout grammar without copying private source-deck content or non-shareable assets.

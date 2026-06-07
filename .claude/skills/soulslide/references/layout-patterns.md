# SoulSlide Layout Patterns

This catalog distills reusable editorial slide layout grammar. Use it to pick a template before writing CSS.

## Template Index

| Template | File | Use When |
|---|---|---|
| Cover Stage | `assets/templates/cover.html` | Opening page, talk title, big thesis, speaker/event metadata |
| Closing Signature | `assets/templates/closing.html` | Final page, call-to-action, memorable closing line |
| Quote Thesis | `assets/templates/quote-thesis.html` | One strong argument, turning point, field note, or quote-led claim |
| Three Column | `assets/templates/three-column.html` | Requirements, benefits, principles, comparisons, signup pages |
| Image Grid | `assets/templates/image-grid.html` | 4-6 ideas with visual evidence and citations |
| Metric Timeline | `assets/templates/metric-timeline.html` | Market signal, proof points, timeline, release history |
| Workflow | `assets/templates/workflow.html` | Daily process, pipeline, handoff, step-by-step operations |
| Matrix Map | `assets/templates/matrix-map.html` | Quadrants, layers, gates, walls, decision maps |
| Category Overview | `assets/templates/category-overview.html` | Project families, capability categories, practice maps, section overview |
| Case Study | `assets/templates/case-study.html` | Product/project page with screenshot, capabilities, build path |
| Scenario Matrix | `assets/templates/scenario-matrix.html` | Enterprise scene map, sector/function matrix, portfolio overview |
| Interaction Sequence | `assets/templates/interaction-sequence.html` | Presenter-clicker sequence, gallery, demo reveal |

For required, optional, and intentionally absent image slots, read `references/visual-assets.md`. Do not add bitmap art to structural templates just because the slide feels empty.

## 1. Cover Stage

Use this for opening pages, chapter dividers, and title-led stage pages.

Structure:

- Full 16:9 stage.
- Sparse top metadata.
- Large title as the first-viewport signal.
- Supporting thesis line.
- Event/speaker metadata near the bottom.
- Optional immersive background, but not a decorative gradient-only hero.

Use for:

- Deck openers.
- Chapter openers.
- One-sentence manifesto pages.

Avoid:

- Putting the title inside a card.
- Split hero layouts where text sits in one card and media sits in another.

## 2. Closing Signature

Use this for final pages, section endings, and memorable closing statements.

Structure:

- One strong closing sentence.
- Optional short body paragraph.
- Signature, event, or next action.
- Very low density, strong final rhythm.

Use for:

- Final slide.
- Section landing after a complex narrative.

## 3. Three Column

Use this for signup pages, principle pages, account requirements, and structured comparisons.

Structure:

- Three equal-height columns.
- Each column has an English label, number, Chinese heading, and 3-5 bullets.
- One column can be dark to create focal hierarchy.
- Optional bottom strip for bonus conditions or caveats.

Use for:

- Conditions / benefits / requirements.
- Before / during / after.
- People / process / platform.

## 4. Quote Thesis

Use this for a single strong claim, quote-led slide, turning point, or field note.

Structure:

- One dark quote block or thesis block.
- Three short notes or supporting claims.
- Minimal labels and one clear footer line.

Use for:

- A stance before evidence.
- A transition between sections.
- A memorable field observation.

## 5. Image Grid

Use this for multi-card visual argument pages.

Structure:

- 2x3 or 3x2 card grid.
- Stable image row height or aspect ratio.
- Card tag, title, body, citation.
- Citation is metadata and must be smaller than body.

Use for:

- Multiple viewpoints.
- Research-backed claims.
- Visual examples.

Avoid:

- Allowing long text to squeeze image heights.
- Making citations the same size as main body.

## 6. Metric Timeline

Source inspiration: market/tool signal page with GitHub stars, release timeline, and proof points.

Structure:

- One main narrative column.
- Metric cards with split number/unit/meta typography.
- Timeline or release strip.
- Optional figure/photo panel.

Use for:

- "Why now" arguments.
- Tool adoption or market momentum.
- Data-backed narrative.

## 7. Workflow

Use this for daily process pages, operational routines, and handoff loops.

Structure:

- 4-6 ordered steps.
- Each step has a number, action verb, short body.
- Optional side panel for inputs/outputs.
- Optional dark quote or warning strip.

Use for:

- Operating routines.
- Automation pipelines.
- Human/AI handoff loops.

## 8. Matrix Map

Source inspiration: taste/professionalism quadrant, five gates, five layers, five walls.

Structure:

- Central matrix, stack, or map.
- Cards around the map explain the logic.
- Use numbers and accent lines to preserve scan order.

Use for:

- Decision maps.
- Capability layers.
- Bottlenecks and unlocks.
- Strategy frameworks.

## 9. Category Overview

Use this for a portfolio, practice map, capability overview, or project family page.

Structure:

- Four category cards.
- Each card has a number, English tag, Chinese title, one short body, and 1-3 project labels.
- The page explains the taxonomy, not each project in detail.

Use for:

- "Here are my four practice areas."
- "These are the capability families."
- "This section contains these types of work."

## 10. Case Study

Source inspiration: TeamClaw, Skill case, product/platform pages.

Structure:

- Left visual proof: screenshot, architecture sketch, or product shot.
- Right capability stack or build path.
- Bottom proof strip: metrics, artifacts, next steps.
- Use real screenshots only when shareable and permission-safe.

Use for:

- Product demonstrations.
- Internal case studies.
- AI skill or automation examples.

## 11. Scenario Matrix

Source inspiration: enterprise AI full-scenario map.

Structure:

- Dense but organized matrix by business function or capability.
- Small tags for priority/frequency/value.
- Legend and one-line thesis.

Use for:

- Portfolio maps.
- Enterprise scenario discovery.
- Roadmap prioritization.

## 12. Interaction Sequence

Source inspiration: speaker photo gallery, TeamClaw build sequence, video reveal pages.

Structure:

- Visible thumbnails or one primary preview.
- Hidden overlay controlled by keyboard/clicker.
- `window.__seqHandleNav(key)` handles progression.
- `window.__seqBlockNav` blocks parent navigation until sequence is done.

Use for:

- Required reveal order.
- Before/after images.
- Demo walkthroughs.

Avoid:

- Making the talk depend on hover.
- Letting a generic lightbox hijack the sequence.

## Choosing a Pattern

- If the slide answers "what are the options?", start with `three-column` or `image-grid`.
- If the slide answers "what is the core judgment?", start with `quote-thesis`.
- If it answers "how does it work?", start with `workflow`.
- If it answers "why now?", start with `metric-timeline`.
- If it answers "where are we blocked?", start with `matrix-map`.
- If it answers "what families of work exist?", start with `category-overview`.
- If it answers "what did we build?", start with `case-study`.
- If it answers "what can this become across the business?", start with `scenario-matrix`.
- If it is the first or last page, use `cover` or `closing`.

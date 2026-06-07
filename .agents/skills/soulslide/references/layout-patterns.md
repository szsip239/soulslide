# SoulSlide Layout Patterns

This catalog distills reusable editorial slide layout grammar. Use it to pick a template before writing CSS.

## Template Index

| Template | File | Use When |
|---|---|---|
| Cover Stage | `assets/templates/cover.html` | Opening page, talk title, big thesis, speaker/event metadata |
| Closing Signature | `assets/templates/closing.html` | Final page, call-to-action, memorable closing line |
| Navigation Index | `assets/templates/navigation.html` | Deck index, lightweight development status, presentation player shell |
| Profile Intro | `assets/templates/profile-intro.html` | Speaker, owner, role, or team member introduction where identity is proof |
| Media Essay | `assets/templates/media-essay.html` | One large image, video still, or artifact carries the argument |
| Quote Thesis | `assets/templates/quote-thesis.html` | One strong argument, turning point, field note, or quote-led claim |
| Three Column | `assets/templates/three-column.html` | Requirements, benefits, principles, comparisons, signup pages |
| Image Grid | `assets/templates/image-grid.html` | 4-6 ideas with visual evidence and citations |
| Metric Timeline | `assets/templates/metric-timeline.html` | Market signal, proof points, timeline, release history |
| Workflow | `assets/templates/workflow.html` | Daily process, pipeline, handoff, step-by-step operations |
| Full System Map | `assets/templates/full-system-map.html` | One inspectable architecture, operating model, product map, or system canvas |
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

## 2.5 Navigation Index

Use this for the first generated page of a full deck after the page plan is confirmed.

Structure:

- Top tabs for related decks or sections.
- Masthead with left volume marker, centered large serif title, highlighted keyword, and right italic tagline.
- Hero strip with vertical red / blue / mustard rail, presentation-mode label, keyboard hints, and dark CTA.
- Section headers with roman numeral, Chinese label, italic English subtitle, and rule line.
- Three-column card grid maps pages to templates and statuses.
- Bottom-left dark control bar exposes home, previous, next, fullscreen, and keyboard help.

Use for:

- Deck index.
- Lightweight development progress.
- Presentation entry point.

Avoid:

- Treating it as a decorative title page.
- Rebuilding it as a generic status slide with a left panel and right list.
- Removing the control bar after content pages are built.

## 2.6 Media Essay

Use this when a single image, video still, object, interface, or generated frame should dominate the slide.

Structure:

- One large visual stage on the left or as the majority surface.
- One dark interpretation panel with page number, short label, title, body, and source.
- Minimal chrome; the visual is the first read.
- Optional light ambient motion on the visual stage only.

Use for:

- Video/photo interpretation.
- Artifact review.
- Emotional transition pages.
- Before/after hero frame when one frame is enough.

Avoid:

- Turning it into a card grid.
- Adding multiple unrelated images.
- Using a decorative stock image that does not carry the argument.

Read `references/art-direction.md` before using this template.

## 2.7 Profile Intro

Use this when a person, speaker, project owner, or role is part of the argument.

Structure:

- Portrait or safe non-likeness visual on the left.
- Compact identity block on the right.
- One thesis sentence explaining why the person matters to the topic.
- 3-4 proof points: practice range, representative output, audience value, question entry.
- Small image strip or field-note strip below the portrait.

Use for:

- Speaker introductions.
- Team member or founder profile pages.
- Project owner credibility pages.
- Role introductions before a case section.

Avoid:

- Fabricating a real person's likeness.
- Letting the portrait overlap or overpower the biography text.
- Turning the page into a resume timeline.

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

## 8. Full System Map

Use this for a single architecture, product map, operating model, puzzle map, or system canvas that should be inspected as one diagram.

Structure:

- One dominant diagram canvas.
- Central loop or core node.
- Peripheral input/output/governance/feedback areas.
- Small but readable labels; never rely on unreadable image text.
- Side legend and one thesis panel.

Use for:

- System architecture overview.
- AI operating model.
- Product map or platform capability map.
- End-to-end process landscape.

Avoid:

- Exporting the whole logic as a flat image with tiny labels.
- Adding decorative generated art that competes with the system labels.
- Cramming every implementation detail onto one slide.

## 9. Matrix Map

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

## 10. Category Overview

Use this for a portfolio, practice map, capability overview, or project family page.

Structure:

- Four category cards.
- Each card has a number, English tag, Chinese title, one short body, and 1-3 project labels.
- The page explains the taxonomy, not each project in detail.

Use for:

- "Here are my four practice areas."
- "These are the capability families."
- "This section contains these types of work."

## 11. Case Study

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

## 12. Scenario Matrix

Source inspiration: enterprise AI full-scenario map.

Structure:

- Dense but organized matrix by business function or capability.
- Small tags for priority/frequency/value.
- Legend and one-line thesis.

Use for:

- Portfolio maps.
- Enterprise scenario discovery.
- Roadmap prioritization.

## 13. Interaction Sequence

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
- If it answers "who is this person and why should we trust them?", start with `profile-intro`.
- If it answers "how does the whole system fit together?", start with `full-system-map`.
- If it answers "why now?", start with `metric-timeline`.
- If it answers "where are we blocked?", start with `matrix-map`.
- If it answers "what families of work exist?", start with `category-overview`.
- If it answers "what did we build?", start with `case-study`.
- If it answers "what can this become across the business?", start with `scenario-matrix`.
- If it is the first or last page, use `cover` or `closing`.

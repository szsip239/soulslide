# Briefing And Prompting

Use this reference before building a multi-page deck, a section, or any slide request where the outline is still ambiguous.

## Best First Prompt

Ask the user to provide or approve this brief before writing HTML:

```text
Use SoulSlide. First create a page-by-page outline and recommended layout plan. Do not write HTML yet.

Audience:
Presentation goal:
Total pages or time:
Tone:
Materials I already have:
Assets I can share:
Must-include points:
Must-avoid points:

Return a table with: page number, one-sentence thesis, recommended SoulSlide template, content blocks, visual asset need, interaction need, open questions.
```

## Minimum Brief

If the user cannot fill the full prompt, get these five items:

- Audience: who will watch it.
- Goal: what decision, belief, or action the deck should create.
- Length: page count or presentation time.
- Source material: notes, links, screenshots, data, or rough bullets.
- Constraints: public/private, brand tone, assets, deadline, and must-avoid content.

## Page Plan Table

Use this structure for customer alignment:

| Page | Thesis | Recommended template | Content blocks | Visual asset | Interaction | Open question |
|---|---|---|---|---|---|---|
| 01 | One sentence the audience should remember | `cover.html` | title, subtitle, speaker/event | optional background | none | confirm title |
| 02 | One claim, comparison, process, or proof point | template name | 3-5 blocks max | supplied/generated/not needed | none/clicker | missing data |

Rules:

- One page gets one thesis.
- The template is chosen by the page's job, not by available content volume.
- Mark visuals as supplied, generated, not needed, or draft-only.
- Do not start HTML for a full deck until the page plan is accepted or the user explicitly asks to proceed without approval.

## Template Recommendation Shorthand

- Opening or chapter title: `cover.html`
- Final line or call-to-action: `closing.html`
- One memorable stance: `quote-thesis.html`
- Three comparable groups: `three-column.html`
- Evidence cards with images: `image-grid.html`
- Numbers and timing: `metric-timeline.html`
- How something runs: `workflow.html`
- Strategic frame or blockers: `matrix-map.html`
- Portfolio/category overview: `category-overview.html`
- Concrete product or project proof: `case-study.html`
- Dense business landscape: `scenario-matrix.html`
- Required reveal order or demo frames: `interaction-sequence.html`

## Build Prompt After Approval

Once the page plan is approved, use this:

```text
Use SoulSlide to build pages [range] from the approved outline.

Follow the recommended template for each page.
Keep one thesis per page.
Use supplied assets where available.
Generate required visuals if the template needs them and no safe asset is supplied.
Validate each page with the font audit and a 16:9 screenshot.
Report any pages that need my content decision before finalizing.
```

## Redesign Prompt For Existing Slides

```text
Use SoulSlide to redesign these existing HTML slides.

First detect each page's current job and map it to a recommended template.
Preserve working navigation and interactions.
Improve hierarchy before changing decoration.
Do not replace every page with the same layout.
Return a page-by-page change plan before editing.
```

## Agent Behavior

- If the user gives a messy note dump, first propose a deck outline and template map.
- If the user gives a fixed outline, preserve the outline and recommend the best template per page.
- If the user asks for one slide, build directly after choosing the template.
- If key inputs are missing, ask only the few questions that change layout or content strategy.
- If the user says to proceed, make reasonable assumptions and list them briefly.

# Art Direction

Use this reference for cover pages, closing pages, media-led key pages, image grids, case studies, and interaction sequences.

This adapts anti-generic frontend design heuristics to projector-first slides. Do not copy website-specific patterns such as AIDA page structure, logo walls, or scroll-heavy marketing sections into a slide deck.

## Design Read First

Before writing or redesigning a high-visibility slide, state one compact design read:

```text
Reading this slide as: [slide job] for [audience], with [visual mood], where the image role is [stage / evidence / sequence / none].
```

If the read is ambiguous enough to change the image or motion plan, ask one focused question. Otherwise proceed.

## Three Dials

Set these internally for cover, closing, and key visual slides:

| Dial | Low | High | SoulSlide default |
|---|---|---|---|
| `ART_DIRECTION` | restrained editorial | bold art-directed statement | 7 |
| `MOTION_INTENSITY` | static / clicker only | cinematic but controlled | 4 |
| `VISUAL_DENSITY` | one visual moment | dense evidence wall | 3 for cover/closing, 5 for evidence pages |

Rules:

- Increase `ART_DIRECTION` when the slide opens/closes the talk or needs to be remembered.
- Keep `VISUAL_DENSITY` low on cover and closing pages.
- Use higher density only when the page is evidence-led, such as `image-grid.html`, `case-study.html`, or `scenario-matrix.html`.
- If motion cannot be implemented cleanly, lower `MOTION_INTENSITY`; do not ship broken or distracting animation.

## Cover Art Direction

The cover is an opening scene, not a title card.

Use one of these cover archetypes:

- **Immersive stage**: full-bleed generated or supplied image with a calm overlay and text-safe negative space.
- **Artifact close-up**: one concrete object, interface, place, or symbolic material crop carries the topic.
- **Kinetic typography**: mostly type, but with a deliberate background material, grain, or slow reveal.

Default away from:

- text-only cover on a flat gradient
- split text/media blocks that look like a website hero
- stock-photo smile, random people, generic AI robot, decorative blobs
- tiny badges, fake stats, or feature bullets in the first viewport

The cover headline should usually fit 2-3 strong lines. If it needs more than 3 lines, cut copy or make the title more specific.

## Closing Art Direction

The closing page is a final emotional landing.

Use one of these closing archetypes:

- **Quiet dark stage**: one strong sentence over a dark, low-detail visual field.
- **Final artifact**: one object, interface, document, or landscape that embodies the final action.
- **Typographic signature**: no image, but strong contrast, generous negative space, and a calm final motion.

Do not turn the closing page into another information page. No card grids, no new framework, no extra proof points.

## Key Visual Slides

For slides where an image or motion carries the argument:

- `image-grid.html`: generate or supply one coherent image per card. Same crop rhythm, lighting, color grade, and visual language.
- `case-study.html`: use a real shareable screenshot, product image, architecture sketch, or generated proof visual. Do not fake a product screenshot with random div rectangles.
- `interaction-sequence.html`: use one generated/supplied frame per reveal step. The frame should change meaningfully between steps.
- `media-essay.html`: one large image or video is the slide; title and caption only frame interpretation.

Do not compress many concepts into one unreadable collage. A key visual slide gets one clear visual job.

## Motion Rules

Motion must communicate one of:

- hierarchy: direct attention to the main idea
- sequence: reveal steps in presenter order
- state: show that playback or overlay state changed
- atmosphere: very slow cover/closing motion that supports the mood

Implementation rules:

- Use `transform` and `opacity`, not `top`, `left`, `width`, or `height`.
- Honor `prefers-reduced-motion`.
- Presenter-clicker sequence beats decorative motion.
- Use at most one ambient loop on a slide.
- Avoid scroll-driven motion inside a fixed 16:9 slide unless the slide itself intentionally embeds a scrollable demo.

## Image Generation Prompt Shape

For Codex, use `image2` or the active image generation tool for required visuals. For Claude, use the available image-generation capability or provide the exact prompt and mark the slot draft-only.

Prompt shape:

```text
Create one 16:9 editorial presentation image for [slide job/topic].
Mood: [grounded / cinematic / quiet / artifact-led].
Palette: warm paper compatible, deep ink, muted mustard/red/blue accents only if useful.
Composition: [full-bleed stage / object close-up / interface proof / sequence frame], with text-safe negative space at [left/right/center].
Constraints: no logos unless supplied, no readable fake UI text, no random people, no AI-purple glow, no decorative blobs, no stock-photo smile.
```

For sequence slides, generate separate frames:

```text
Create frame [n] of [total] for a clicker-driven slide sequence about [topic]. Keep the same palette, lens, and object world as the other frames, but show [specific change].
```

## Taste Pre-Flight

Before final screenshot approval, check:

- The slide has a design read, not a generic "make it premium" direction.
- The image has a structural role, not decorative filler.
- Cover and closing pages have one memorable visual moment or one unmistakable typographic decision.
- Motion has a reason and a reduced-motion fallback.
- No repeated same-size card grid is used when the content needs hierarchy.
- No fake precise numbers, fake product screenshots, or generic AI-marketing copy are introduced.
- Final required image slots contain real generated/supplied assets, not placeholder text.

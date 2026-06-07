# Visual Assets And Image Generation

Use this reference when a slide needs a bitmap image, generated illustration, screenshot replacement, photo-like scene, or visual proof area.

## Provider Rules

- Codex: when a required visual slot has no safe supplied asset, call `image2` or the active image generation tool such as `image_gen`. Do not finish with a text-only placeholder in a required visual slot.
- Claude: use the configured image generation capability when available. If no such capability is available, produce the exact image prompt and mark the slot as draft-only until an asset is supplied.
- Both providers: generated images must be saved or referenced as real assets in the slide, with stable dimensions and `object-fit` behavior.
- Generate one focused image per slide or per sequence frame. Do not generate one giant collage and crop it into many unclear pieces.
- For cover, closing, media-led, case, image-grid, or interaction-sequence pages, read `references/art-direction.md` first.

## Template Visual Needs

| Template | Need | Guidance |
|---|---|---|
| `cover.html` | Recommended for high-visibility decks | Use a 16:9 immersive background, object crop, or material field when it makes the topic more concrete. Keep enough quiet area for the title. |
| `closing.html` | Optional but useful | Keep it typographic unless a final artifact, place, object, or quiet stage can strengthen the closing sentence. |
| `navigation.html` | Usually none | Use tabs, section cards, and player controls; do not add decorative art. |
| `profile-intro.html` | Recommended | Use a supplied portrait when permission-safe. Do not fabricate a real person's likeness; if no portrait is provided, generate a non-likeness workspace, object, back-view, or silhouette scene. |
| `media-essay.html` | Required | One large image, video still, artifact photo, or generated frame is the slide's first read. |
| `quote-thesis.html` | Usually none | Do not add decorative images. Use a visual only when the claim is about a tangible scene or artifact. |
| `three-column.html` | Usually none | Prefer text hierarchy and accent rules. Small icons are optional, but avoid generic clip-art. |
| `image-grid.html` | Required | Use 4-6 related images with the same crop rhythm and visual language. Generate a coherent set when no safe assets exist. |
| `metric-timeline.html` | Optional | Add a figure/photo panel only when it strengthens the "why now" argument. Numbers and timeline remain primary. |
| `workflow.html` | Usually none | Prefer HTML/CSS process structure. Use generated images only for demo screenshots or before/after proof. |
| `full-system-map.html` | Usually none | Keep the map's labels and core logic as HTML/CSS. Use generated visuals only as quiet background texture or supporting proof, never as the only readable diagram. |
| `matrix-map.html` | Usually none | Use structured layout, connectors, and labels instead of decorative art. |
| `category-overview.html` | Usually none | Use chips and labels. Generate icons only when the user explicitly asks for visual categories. |
| `case-study.html` | Required | Prefer a real, shareable screenshot. If unavailable, generate an abstract interface mockup, architecture sketch, or product-like proof image. |
| `scenario-matrix.html` | Usually none | Keep dense maps readable. Do not add decorative images that compete with cells. |
| `interaction-sequence.html` | Required when media/demo-led | Use one generated or supplied frame per step when the sequence is about a gallery, video, demo, or before/after story. For multiple images or video, read `references/media-sequence.md`; keep media in the slide stage and use active frame labels. |

Candidate templates from `template-coverage-notes.md`:

- Live poll dashboard: usually no generated image; the QR/result area is interface structure.
- Knowledge constellation: prefer structured HTML/CSS diagramming; use generated background only if it remains quiet.
- Value ledger: usually no generated image.

## Prompt Recipe

Use prompts that specify:

- Subject: the concrete object, scene, product state, or metaphor.
- Style: editorial presentation, warm paper-compatible palette, restrained contrast, not glossy stock art.
- Composition: leave text-safe negative space where the slide title or captions will sit.
- Format: 16:9 background, card crop, product mockup, or sequence frame.
- Exclusions: no random logos, no unreadable fake UI text, no decorative blobs, no over-saturated neon, no unrelated people.

Example prompt shape:

```text
Create one 16:9 editorial presentation image for [topic]. Warm paper-compatible palette, documentary but polished, strong single focal object, quiet negative space on the left for Chinese title text, no logos, no readable fake UI text, no decorative blobs, no stock-photo smile.
```

For image grids, generate one cohesive set:

```text
Create six related card images for [topic], same lighting, same crop rhythm, warm editorial palette, each with one clear object or scene, no text inside images, no logos, no stock-photo look.
```

For interaction sequences, generate separate frames:

```text
Create frame [n] of [total] for a clicker-driven slide sequence about [topic]. Keep the same palette, lens, object world, and crop rhythm as the other frames, but show [specific change]. No embedded text, no logos, no decorative blobs.
```

For video sequences, do not generate a still image as a substitute unless the user only needs a poster frame. Keep the mp4/webm file as a real asset and verify through HTTP.

## HTML Integration

- Replace placeholder text inside `.ss-image-box`, `.ss-shot-box`, or `.ss-seq-preview` with an `<img>` or `<video>` element.
- Use `object-fit: cover` for photographic/card images and `object-fit: contain` for UI screenshots or diagrams.
- Keep all image groups at fixed height or aspect ratio.
- If an image is draft-only, label it visibly in the working file and remove the label before final delivery.

# SoulSlide Creation Workflow

## Before Writing HTML

1. Identify the slide's one-sentence thesis.
2. For a deck or unclear request, interview the user for missing audience, goal, materials, asset paths, constraints, and length.
3. Return a page-by-page outline table with recommended templates and open questions; wait for confirmation before development.
4. Decide whether each slide is navigation, opening, closing, profile, explanation, proof, system map, process, or case.
5. For high-visibility slides, read `references/aesthetic-review.md` and write the one-sentence design read plus one composition anchor.
6. Pick a template from `layout-patterns.md`.
7. For cover, closing, media-led, profile, case, image-grid, full-system-map, or interaction-sequence pages, read `references/art-direction.md` when visuals or motion matter, then define the visual plan.
8. Decide the information hierarchy before filling content.

## Content Compression

SoulSlide works best when the slide feels edited.

- Replace paragraphs with short claims.
- Keep each card to one idea.
- Move citations to metadata.
- Use numbers to create scan order.
- If content is still crowded, split the slide instead of shrinking text.

## Build Steps

1. For a full deck, create `navigation.html` first and ask the user to confirm it before building content pages.
2. Copy the chosen template.
3. Update title, page number, section label, and footer.
4. Replace placeholder content.
5. Replace required visual placeholders with generated or supplied assets before final delivery.
6. Preserve the deck navigation/index player shell and home/previous/next/fullscreen controls.
7. Keep existing CSS class names unless a new layout truly needs a new primitive.
8. Add page-specific CSS only after checking whether `soulslide.css` already has the component.
9. Run the SoulSlide audit script.
10. Screenshot the slide at 16:9 and inspect visually.

## Adapting an Existing Slide

1. Preserve working interaction and navigation code, including the deck navigation/index player shell and home/previous/next/fullscreen control bar.
2. Read the existing page's structural classes before editing.
3. Do not normalize every page to the same template; preserve the page's narrative role.
4. Improve hierarchy first: title > module title > body > metadata.
5. Fix image rhythm before copy tweaks on image-card pages.

## Deck-Level Consistency

- Use the same shell and footer language across related pages.
- Keep the navigation/index page style stable after the user confirms it.
- Keep home/previous/next/fullscreen controls available during playback.
- Keep page numbers in Playfair Display.
- Use one accent color family; red/blue/green are secondary semantic accents, not new themes.
- Do not make every page a grid. Alternate dense pages with editorial breathing pages.

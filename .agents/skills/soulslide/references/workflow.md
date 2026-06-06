# SoulSlide Creation Workflow

## Before Writing HTML

1. Identify the slide's one-sentence thesis.
2. Decide whether the slide is opening, closing, explanation, proof, map, process, or case.
3. Pick a template from `layout-patterns.md`.
4. Decide the information hierarchy before filling content.

## Content Compression

SoulSlide works best when the slide feels edited.

- Replace paragraphs with short claims.
- Keep each card to one idea.
- Move citations to metadata.
- Use numbers to create scan order.
- If content is still crowded, split the slide instead of shrinking text.

## Build Steps

1. Copy the chosen template.
2. Update title, page number, section label, and footer.
3. Replace placeholder content.
4. Keep existing CSS class names unless a new layout truly needs a new primitive.
5. Add page-specific CSS only after checking whether `soulslide.css` already has the component.
6. Run the font audit script.
7. Screenshot the slide at 16:9 and inspect visually.

## Adapting an Existing Slide

1. Preserve working interaction and navigation code.
2. Read the existing page's structural classes before editing.
3. Do not normalize every page to the same template; preserve the page's narrative role.
4. Improve hierarchy first: title > module title > body > metadata.
5. Fix image rhythm before copy tweaks on image-card pages.

## Deck-Level Consistency

- Use the same shell and footer language across related pages.
- Keep page numbers in Playfair Display.
- Use one accent color family; red/blue/green are secondary semantic accents, not new themes.
- Do not make every page a grid. Alternate dense pages with editorial breathing pages.


# SoulSlide Golden Examples

Golden examples are desensitized visual samples for each decision-tree leaf. They are intentionally generic and safe to share. Use them as the visual target when adapting templates.

Each entry maps:

- Decision-tree branch
- Template HTML
- Golden screenshot
- What to copy

## Golden Map

| Branch | Template | Golden Screenshot | Copy This |
|---|---|---|---|
| Opening / title-led stage | `assets/templates/cover.html` | `assets/golden/cover.png` | Sparse metadata, large title, paper stage |
| Closing / final statement | `assets/templates/closing.html` | `assets/golden/closing.png` | Low-density final line, dark close |
| Deck navigation/index shell | `assets/templates/navigation.html` | `assets/golden/navigation.png` | Tabs, masthead, hero strip, section card grid, player shell with bottom-left controls during playback |
| Person / speaker / role as proof | `assets/templates/profile-intro.html` | `assets/golden/profile-intro.png` | Portrait-safe proof area, identity block, four compact credibility notes |
| Media-led key moment | `assets/templates/media-essay.html` | `assets/golden/media-essay.png` | One dominant visual stage, one dark interpretation panel |
| Single strong judgment | `assets/templates/quote-thesis.html` | `assets/golden/quote-thesis.png` | Dark thesis block + three support notes |
| Three comparable groups | `assets/templates/three-column.html` | `assets/golden/three-column.png` | Equal columns, one dark focus, bottom caveat |
| Visual evidence cards | `assets/templates/image-grid.html` | `assets/golden/image-grid.png` | Fixed image rows, title/body/source hierarchy |
| Numbers and timeline | `assets/templates/metric-timeline.html` | `assets/golden/metric-timeline.png` | Split metrics, timeline proof strip |
| Repeatable process | `assets/templates/workflow.html` | `assets/golden/workflow.png` | Step numbers, action verbs, closing quote |
| Full architecture / operating model | `assets/templates/full-system-map.html` | `assets/golden/full-system-map.png` | One inspectable system canvas, central loop, side legend |
| Conceptual map | `assets/templates/matrix-map.html` | `assets/golden/matrix-map.png` | Map thesis, numbered cells, accent scan order |
| Portfolio/categories | `assets/templates/category-overview.html` | `assets/golden/category-overview.png` | Four families with short project labels |
| Concrete case | `assets/templates/case-study.html` | `assets/golden/case-study.png` | Visual proof left, capability stack right |
| Many business scenes | `assets/templates/scenario-matrix.html` | `assets/golden/scenario-matrix.png` | Legend + dense but organized scene cells |
| Required reveal/demo | `assets/templates/interaction-sequence.html` | `assets/golden/interaction-sequence.png` | Preview + clicker-first sequence list |

## How To Use

1. Choose a branch in `template-decision-tree.md`.
2. Open the screenshot first to absorb the visual target.
3. Copy the matching template.
4. Replace content while preserving the shell, hierarchy, and spacing.
5. Run the SoulSlide audit and screenshot validation.

## Updating Golden Examples

When a template changes visually:

1. Regenerate the screenshot at `1280x720`.
2. Keep the file name matching the template name.
3. Re-run `npm run check`.
4. Manually inspect the screenshot before committing.

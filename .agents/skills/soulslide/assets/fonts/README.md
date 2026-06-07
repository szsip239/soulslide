# SoulSlide Font Assets

SoulSlide ships these local webfonts so decks render consistently when the user's machine does not have the preferred fonts installed or cannot reach Google Fonts.

Fonts are loaded from `soulslide.css` through `fonts/soulslide-fonts.css`.

- `Noto Sans SC`: Simplified Chinese sans fallback when `Source Han Sans SC` is not installed.
- `Noto Serif SC`: Chinese serif headings.
- `Playfair Display`: English display, page numbers, large metrics.
- `Cormorant Garamond`: English italic ornament and footer lines.
- `JetBrains Mono`: code, commands, URLs, compact technical labels.

Keep `Source Han Sans SC` first in the main CSS stack when local machines have it installed. The packaged `Noto Sans SC` files are the stable fallback for users who do not have that font locally.

Do not add Google Fonts links to generated templates. If typography changes require a new family or weight, add the WOFF2 file here, update `soulslide-fonts.css`, and keep the license text in `licenses/`.

All font files are WOFF2 assets sourced from Fontsource packages and licensed under the SIL Open Font License 1.1. Full license texts are stored in `licenses/`.

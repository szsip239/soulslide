# SoulSlide Design System

SoulSlide is an editorial HTML slide style built for live projection, not web scrolling or SaaS marketing.

## Visual Register

- Mood: precise, grounded, editorial, slightly literary.
- Surface: warm paper instead of pure white.
- Composition: clear stage, restrained cards, strong typographic hierarchy.
- Tone: field report from someone doing the work, not generic AI marketing copy.

## Canvas

- Use fixed 16:9 composition.
- Important information must fit without vertical scrolling.
- Preferred verification viewports: `1280x720` and `1492x839`.
- Keep a stable page shell: top meta/header, title row, content area, footer.

## Color Variables

```css
--ss-bg: #FAF7F2;
--ss-paper: #F2EDE5;
--ss-ink: #1A1614;
--ss-ink-soft: #4A413A;
--ss-ink-mute: #756A61;
--ss-rule: #D9D1C5;
--ss-rule-soft: #E8E2D6;
--ss-accent: #C99B3D;
--ss-accent-deep: #805F18;
--ss-accent-soft: #F3E8CF;
--ss-red: #B95A4E;
--ss-blue: #315B86;
--ss-green: #687C5F;
```

Use accent sparingly: page numbers, thin rules, bullets, highlighted terms, and a single dark/active card.

## Typography

Recommended stack:

- Chinese body: Source Han Sans SC first; Noto Sans SC only as fallback.
- Chinese headings: Noto Serif SC or Source Han Sans SC depending on density.
- English display, page numbers, large metrics: Playfair Display.
- English italic ornament and footer center lines: Cormorant Garamond.
- Code, commands, URLs, compact technical labels: JetBrains Mono.

Default CSS variables:

```css
--ss-font-sans-cn: "Source Han Sans SC", "Noto Sans CJK SC", "Noto Sans SC", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--ss-font-serif-cn: "Noto Serif SC", "Source Han Serif SC", serif;
--ss-font-display-en: "Playfair Display", "Cormorant Garamond", serif;
--ss-font-italic-en: "Cormorant Garamond", "Playfair Display", serif;
--ss-font-mono: "JetBrains Mono", monospace;
```

## Font Roles

- Page title: 1.75rem to 2.25rem, high contrast, usually serif.
- Module title: 1.12rem to 1.35rem.
- Body in cards/panels/steps: normally 1rem or larger; prefer 1.03rem to 1.08rem for projector comfort.
- Metadata/source/citations: can be smaller, usually .78rem to .88rem, but must not carry the main story.
- Labels/eyebrows: usually .9rem to 1rem, often italic English display or compact Chinese sans.
- Large metrics: numeric part in Playfair Display; Chinese unit separated and smaller.

## Information Hierarchy

Every slide should make these layers visually distinct:

1. Page thesis/title.
2. Section or card headings.
3. Body explanations.
4. Sources, citations, labels, footer, and decorative metadata.

If everything has the same size and weight, the slide is not finished.

## Standard Shell

Use this structure unless the cover or closing template intentionally overrides it:

```html
<body class="ss-doc">
  <main class="ss-slide">
    <header class="ss-head">...</header>
    <section class="ss-title-row">...</section>
    <section class="ss-main">...</section>
    <footer class="ss-foot">...</footer>
  </main>
</body>
```

## Layout Rhythm

- Outer padding: about 42px to 56px on a 1280x720 slide.
- Gap between large regions: 12px to 18px.
- Card radius: 8px or less.
- Card borders: subtle warm gray rule; use accent border for emphasis.
- Avoid nested decorative cards. Panels inside a slide are fine; floating cards inside cards are not.

## Image Rules

- Image-card groups need fixed image height or aspect ratio.
- Do not let text length compress image height.
- Use captions and citations as metadata, not as the main message.
- For missing images, use a neutral placeholder block with a label instead of broken image icons.

## Metrics

Do not render `37.5万+` as one bold Chinese text run. Use a structured metric:

```html
<span class="ss-metric"><span class="ss-metric-num">37.5</span><span class="ss-metric-unit">万+</span><span class="ss-metric-meta">stars</span></span>
```

## Interaction

- Presenter-clicker and keyboard paths matter more than mouse-only polish.
- Full decks should keep a navigation/status page plus a visible previous / next / fullscreen control bar.
- Normal navigation: ArrowRight/PageDown/Space next, ArrowLeft/PageUp previous.
- Forced sequence slides should expose `window.__seqHandleNav(key)` and set `window.__seqBlockNav` while the sequence must consume navigation.
- Release `__seqBlockNav` when the sequence is complete.

## Anti-Patterns

- All text at the same size.
- Tiny Chinese decorative labels that carry real information.
- Purple/blue gradient SaaS hero pages.
- Decorative blobs, bokeh, or unrelated stock imagery.
- Dense paragraphs forced into cards by shrinking the font.
- Reusing a cover-style huge title inside small panels.
- Source/citation text visually competing with the main body.
- Mouse-only gallery or overlay interactions.

# SoulSlide Validation

## Font Audit

Run:

```bash
node .agents/skills/soulslide/scripts/slide-font-audit.mjs path/to/slide.html
```

Default thresholds:

- Body text in cards/panels/steps: `>= 16px`
- Labels and decorative chrome: `>= 14.5px`
- Source/citation/metadata: `>= 12.5px`

Passing the script is not enough. The visual hierarchy still matters.

## Quality Gate

Before screenshot approval, apply `references/quality-gate.md`.

The gate catches problems the numeric font audit cannot see:

- weak title/body/citation hierarchy
- generic card-grid or SaaS-like visual drift
- clipped media, inconsistent image heights, or nested panels
- decorative effects that do not help the argument
- reusable examples that accidentally expose private source material

## Screenshot Check

Use a 16:9 viewport:

- `1280x720`
- `1492x839`

Check:

- No text overflow or clipping.
- No element overlap.
- Images load and keep a stable ratio.
- Required visual slots have real supplied or generated assets, not final text placeholders.
- Cards in one group have consistent image heights.
- Title is stronger than cards.
- Body is stronger than citation metadata.
- Footer and labels are visible but not competing with the slide thesis.

## Interaction Check

For full decks:

- Navigation/index page is present and follows `references/navigation-style.md`.
- Previous, next, fullscreen, and home controls remain visible during playback and clickable.
- The control bar is the bottom-left dark rounded player bar, not a bottom-right group of text buttons.
- ArrowRight/PageDown/Space goes next; ArrowLeft/PageUp goes previous.

For sequence slides:

- ArrowRight/PageDown/Space advances the sequence first.
- ArrowLeft/PageUp can step backward when appropriate.
- Parent deck navigation resumes after the sequence completes.
- `window.__seqBlockNav` is released at the end.

## HTTP Check

When served from a project:

```bash
curl -k -I https://your-host/path/to/slide.html
```

Assets should also return 200. Do not reference `/tmp`, a private home directory, or another local-only project path.

## Acceptance Bar

A SoulSlide page is ready when it can be projected, read from the back of the room, navigated with a clicker, and understood as one coherent idea within 10 seconds.

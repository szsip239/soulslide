# Deck Shell And Navigation

Use this reference when building a complete deck, not just one standalone slide.

## Required Deck Shell

A full SoulSlide deck should keep:

- A navigation/status page generated first from `assets/templates/navigation.html`.
- A visible previous / next / fullscreen control bar for presentation playback.
- Keyboard navigation: ArrowRight/PageDown/Space for next, ArrowLeft/PageUp for previous.
- Sequence-slide compatibility: if `window.__seqHandleNav(key)` consumes a key, the deck shell must not also change pages.

## Navigation Page First

After the user confirms the page plan table:

1. Generate the navigation/status page first.
2. Populate it with the planned sections, page titles, recommended templates, and status values.
3. Use status labels such as `planned`, `draft`, `needs review`, and `final`.
4. Ask the user to confirm this navigation page before building the rest of the deck.
5. Keep the page's style and layout stable after confirmation; update status text as pages progress.

The navigation page is both an index and a development dashboard. It lets the user see progress before the deck content is complete.

## Playback Controls

Keep the control bar on deck pages:

- Previous: move to the prior slide.
- Next: move to the next slide.
- Fullscreen: request or exit browser fullscreen.

The default CSS class is `.ss-deck-controls`. Use text labels or compact symbols, but preserve accessible `title` or `aria-label` text.

## JavaScript Contract

The shell should expose:

```js
window.__soulslideDeck = {
  go(delta) {},
  toggleFullscreen() {}
};
```

Before handling keyboard navigation, check whether a sequence slide wants the event:

```js
if (typeof window.__seqHandleNav === 'function' && window.__seqHandleNav(event.key)) {
  event.preventDefault();
  return;
}
if (window.__seqBlockNav) return;
```

## Do Not Remove

- Do not remove the navigation page because it looks like an implementation detail.
- Do not remove previous/next/fullscreen buttons when polishing slides.
- Do not make fullscreen the only way to navigate.
- Do not make controls mouse-only; keyboard and clicker support must remain.

# Deck Shell And Navigation

Use this reference when building a complete deck, not just one standalone slide.

## Required Deck Shell

A full SoulSlide deck should keep:

- A navigation/index player shell generated first from `assets/templates/navigation.html`.
- The fixed navigation style in `references/navigation-style.md`.
- A bottom-left previous / next / fullscreen control bar for presentation playback.
- Keyboard navigation: ArrowRight/PageDown/Space for next, ArrowLeft/PageUp for previous.
- Sequence-slide compatibility: if `window.__seqHandleNav(key)` consumes a key, the deck shell must not also change pages.
- Media sequence compatibility: image and video sequences keep media inside the slide stage and use active labels; the shell must not turn them into overlays.

## Navigation Page First

After the user confirms the page plan table:

1. Generate the navigation/index page first.
2. Populate it with the planned sections, page titles, recommended templates, and status values.
3. Use status labels such as `planned`, `draft`, `needs review`, and `final`.
4. Ask the user to confirm this navigation page before building the rest of the deck.
5. Keep the page's style and layout stable after confirmation; update status text as pages progress.

The navigation page is both an index and a lightweight development status view. It lets the user confirm the structure before the deck content is complete.

Do not invent a new navigation layout. Start from `assets/templates/navigation.html`, inspect `assets/golden/navigation.png`, and follow `references/navigation-style.md`.

## Playback Controls

Keep the control bar on deck pages:

- Previous: move to the prior slide.
- Next: move to the next slide.
- Fullscreen: request or exit browser fullscreen.
- Home: return from playback to the navigation page.

The default CSS class is `.ss-player-bar`. Legacy `.ss-deck-controls` is styled as the same bottom-left dark control bar. Use compact symbols with accessible `title` or `aria-label` text.

## JavaScript Contract

The shell should expose:

```js
window.__soulslideDeck = {
  go(delta) {},
  startPlayer(pageNumber) {},
  closePlayer() {},
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

For image/video sequence slides, this means ArrowRight/PageDown/Space advances the internal media first. Only after the slide releases `window.__seqBlockNav = false` should the shell move to the next page.

## Do Not Remove

- Do not remove the navigation page because it looks like an implementation detail.
- Do not remove previous/next/fullscreen buttons when polishing slides.
- Do not move the playback controls to the bottom-right.
- Do not make fullscreen the only way to navigate.
- Do not make controls mouse-only; keyboard and clicker support must remain.

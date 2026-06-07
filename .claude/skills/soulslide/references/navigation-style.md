# Navigation Style

Use this reference whenever a full deck needs `assets/templates/navigation.html`.

## Role

The navigation page is a deck index and player shell. It is not a normal 16:9 slide and must not be redesigned as a generic status page.

Generate it first after the page plan is approved, then ask the user to confirm section grouping, page order, template choices, and status labels before building the remaining slides.

## Fixed Anatomy

Preserve this structure:

- Top tabs for related decks or sections. Use an active dotted tab and small italic English metadata.
- Masthead with left volume marker, centered large serif Chinese title, mustard highlight, optional `AI` typewriter mark, and right italic tagline.
- Uppercase tagline strip under the masthead.
- White hero strip with a vertical red / blue / mustard rail, presentation-mode label, keyboard hints, and a dark CTA.
- Repeated section headers with roman numeral, Chinese section name, italic English subtitle, and a rule line.
- Three-column card grid for page entries. Cards show page number, short tag, title, one-line description, and status dot.
- Optional notes area for build rules and playback rules.
- Footer with quiet metadata.
- Full-screen iframe player.
- Bottom-left dark rounded player bar with home, previous, page count, next, fullscreen, and keyboard help.

The golden reference is `assets/golden/navigation.png`. Use it as the visual target.

## Interaction Contract

The shell should expose:

```js
window.startPlayer(pageNumber);
window.__soulslideDeck = {
  go(delta) {},
  startPlayer(pageNumber) {},
  closePlayer() {},
  toggleFullscreen() {}
};
```

Keyboard behavior:

- ArrowRight, PageDown, Space: next page.
- ArrowLeft, PageUp: previous page.
- Home: first page.
- End: last page.
- H or Esc: return to the index page.
- F: fullscreen.

Before handling next/previous, check the active iframe slide:

```js
const slideWindow = frame.contentWindow;
if (slideWindow && typeof slideWindow.__seqHandleNav === 'function' && slideWindow.__seqHandleNav(sequenceKey)) {
  event.preventDefault();
  return;
}
if (slideWindow && slideWindow.__seqBlockNav) {
  event.preventDefault();
  return;
}
```

## Status Rules

Use short status labels:

- `planned`
- `draft`
- `needs review`
- `final`

Keep status as small metadata on cards. Do not turn the page into a project management dashboard.

## Do Not

- Do not use `.ss-slide` or the standard 16:9 page shell for `navigation.html`.
- Do not create a left-panel / right-list status slide.
- Do not move the control bar to the bottom-right.
- Do not replace the control bar with large text buttons.
- Do not remove home, previous, next, fullscreen, or keyboard help.
- Do not hide the section card grid behind a modal or only show it after playback starts.
- Do not add private source-deck names, production hostnames, local paths, real customer data, or personal images.

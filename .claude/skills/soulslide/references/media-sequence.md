# Media Sequence Slides

Use this when the user asks for video, multiple images, screenshots shown one by one, demo frames, or a clicker-driven media walkthrough.

## Core Behavior

- Start from `assets/templates/interaction-sequence.html`.
- Keep images and videos inside the slide's media area. Do not open a lightbox, fullscreen overlay, or enlarged modal unless the user explicitly asks for enlargement.
- Use `window.__seqHandleNav(key)` and `window.__seqBlockNav` so the deck shell gives page keys to the slide before changing pages.
- Right / PageDown / Space advances the internal media sequence first.
- Left / PageUp moves to the previous internal frame.
- After the last frame, release `window.__seqBlockNav = false` so the next key can move to the next slide.
- Escape may mark the internal sequence complete and release page navigation.

## Multiple Images

- Use one stable image/video stage; swap the media source in place.
- Keep all images at the same visible size and ratio.
- Add compact tabs above or below the media stage.
- Highlight the active tab with both border and background.
- Do not rely only on thumbnail scale or hover state to show the active frame.

Recommended structure:

```html
<div class="ss-seq-tabs">
  <button class="ss-seq-tab active" data-seq-jump="0">01 总览</button>
  <button class="ss-seq-tab" data-seq-jump="1">02 细节</button>
  <button class="ss-seq-tab" data-seq-jump="2">03 对比</button>
</div>
<div class="ss-seq-preview">
  <img id="seqImage" alt="">
  <video id="seqVideo" controls playsinline muted preload="metadata" hidden></video>
</div>
```

## Video

- Serve mp4 over HTTP when verifying locally. Browser video playback and seek behavior are less reliable from `file://`.
- Use `controls`, `playsinline`, `preload="metadata"`, and usually `muted` so clicker-triggered playback is less likely to be blocked.
- When switching away from a video frame, pause the video.
- When switching to a video frame from a key event, call `video.play().catch(() => {})`.
- Keep the video in the same stage as image frames; do not enlarge it automatically.

Use the bundled media server when a deck contains mp4/webm/mov/m4v:

```bash
node .agents/skills/soulslide/scripts/serve-media.mjs --root path/to/deck --port 18189
```

The server sends correct video MIME types and supports `Range` requests for mp4 seeking.

## Asset Paths

- Prefer project-relative paths such as `assets/demo-step-01.png` or `media/demo.mp4`.
- If a deck is served under a subpath, use paths that are valid from that served root.
- Avoid absolute local paths and private hostnames in reusable examples.

## Verification

- Open the slide through HTTP, not just `file://`, when it includes video.
- Press ArrowRight through every internal frame and verify the parent deck does not move early.
- Press ArrowLeft to confirm reverse navigation works.
- Confirm active tabs update on every frame.
- Confirm the key after the last frame moves to the next slide.

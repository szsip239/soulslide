# SoulSlide Aesthetic Review

Use this before writing HTML for visually important slides. It adds a light design read and a composition anchor without turning the workflow into a scoring exercise.

## 1. Design Read

Write one sentence before selecting the template:

```text
Reading this slide as: [slide job] for [audience], with [visual mood], where the visual role is [none / stage / proof / sequence / system].
```

This sentence decides five things:

- Template: whether the page is a profile, case, map, quote, media, workflow, or closing moment.
- Density: whether the audience should scan many items or remember one sentence.
- Visual need: whether the image is required proof, optional atmosphere, or a distraction.
- Motion: whether light breathing/floating motion helps the stage or should be absent.
- Title treatment: whether the title should dominate, support, or get out of the way.

Examples:

- Profile intro: `Reading this slide as speaker credibility for a live audience, with quiet editorial confidence, where the visual role is portrait proof.`
- Full system map: `Reading this slide as an inspectable operating model for a technical audience, with disciplined diagram clarity, where the visual role is system.`
- Cover: `Reading this slide as a first stage signal for a mixed audience, with poetic concreteness, where the visual role is atmosphere plus idea object.`
- Key media page: `Reading this slide as evidence interpretation for decision makers, with documentary focus, where the visual role is proof.`

## 2. Composition Anchors

A composition anchor is the first-read visual move inside a template. It is not a new template. It tells the agent where the eye lands before the viewer starts reading details.

Use one anchor per slide:

| Anchor | Use When | Visual Role | Main Risk |
|---|---|---|---|
| Text-safe stage | Cover or chapter opener needs a strong visual without hurting title readability | stage | image competes with H1 |
| Portrait proof | A person, role, or speaker identity is part of the argument | proof | portrait covers biography text |
| Artifact close-up | One screenshot, object, or demo state proves the point | proof | fake UI text or unclear crop |
| Full-system canvas | The slide is one architecture, operating model, or system map | system | labels too small to inspect |
| Dark thesis panel | One sentence should own the room | none/proof | aphorism becomes formulaic |
| Split proof | Text explains a concrete artifact or case | proof | left and right halves feel unrelated |
| Evidence wall | 4-6 visual examples share a common crop rhythm | proof | inconsistent image heights |
| Sequence frame | The presenter needs a forced reveal or demo walkthrough | sequence | clicker navigation conflicts |
| Metric field | Numbers and timeline establish a "why now" argument | none/proof | numbers lack hierarchy |
| Editorial offset | A quiet asymmetric layout improves pace between dense slides | none/stage | decorative whitespace without purpose |

## 3. Copy Taste Guardrails

Keep only these recurring copy checks:

- Do not add a tiny English eyebrow to every page. Use labels only when they help scanning.
- Do not repeatedly use the aphoristic cadence "不是 X，而是 Y".
- Avoid empty buzzwords in slide text: `赋能`, `重塑`, `无缝`, `下一代`, `革命性`.

## 4. Image Generation Reminder

- Codex: when a required visual has no safe supplied asset, call `image2` or the active `image_gen` tool and place the generated file into the slide.
- Claude: use the configured image generation path when available; otherwise return the exact prompt and mark the slot as draft-only.
- Generated images should be concrete: object, place, interface state, diagram texture, portrait-safe silhouette, or scene. Avoid generic AI glow, fake logos, decorative blobs, and unreadable fake text.

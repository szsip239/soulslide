# Template Coverage Notes

The current core set covers the repeated editorial grammar: cover, closing, navigation, profile intro, media essay, quote thesis, three columns, image grid, metric timeline, workflow, full system map, matrix map, category overview, case study, scenario matrix, and clicker-driven sequence.

Some high-flavor source patterns are intentionally documented here before becoming templates. Use these notes when a user asks for a slide that does not fit the decision tree cleanly.

## Promoted Patterns

### Profile Intro

Use for a speaker, founder, project owner, team member, or role introduction where the person is part of the argument.

- Signature ingredients: portrait or personal visual on one side, compact identity block, short biographical proof points, one controlled image strip or sequence.
- Core template: `assets/templates/profile-intro.html`.
- Golden sample: `assets/golden/profile-intro.png`.

### Full System Map

Use for a single full-slide architecture, product map, puzzle map, or operating model that must be inspected as one canvas.

- Signature ingredients: one large diagram, restrained legend, small but readable labels, minimal surrounding chrome.
- Core template: `assets/templates/full-system-map.html`.
- Golden sample: `assets/golden/full-system-map.png`.

## Strong Candidates Not Yet Promoted

### Live Poll Dashboard

Use for audience voting, quick quizzes, QR entry, and result bars.

- Signature ingredients: narrow scan/action zone, larger question/result zone, numbered answers, clear status states.
- Existing fallback: `scenario-matrix.html` for options, with custom interaction code.
- Keep optional because real voting usually needs a host app, network state, and fallback copy for offline presentation.

### Knowledge Constellation

Use for personal knowledge maps, graph memory, domain maps, or multi-node concept systems.

- Signature ingredients: central anchor, orbiting domains, thin connectors, sparse annotations, clear reading order.
- Existing fallback: `matrix-map.html`.
- Promote when the graph itself carries the argument rather than serving as decoration.

### Value Ledger

Use for two-sided cooperation, economics, incentive flow, or "who pays / who gains / who operates" framing.

- Signature ingredients: two or three actors, value arrows, ledger rows, risk and upside separated.
- Existing fallback: `matrix-map.html` or `case-study.html`.
- Promote when partnership or commercial-model slides recur.

## Promotion Rule

Do not add a new core template only because one slide is unusual. Promote a candidate when it recurs, when adapting existing templates creates fragile layout code, or when the candidate has a distinct reading pattern a presenter can name in one sentence.

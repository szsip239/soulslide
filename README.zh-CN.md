# soulslide

[English](README.md) | [简体中文](README.zh-CN.md)

![SoulSlide 主图](assets/readme/hero.png)

SoulSlide 是一个面向 Codex 和 Claude 的 agent skill，用于生成具有一致视觉语言的 HTML 演示页：16:9 投影优先、暖纸质感、强中文字体层级、克制卡片，以及可复用的页面模板。

## 用途

当你希望 AI coding agent 做这些事时，可以使用 SoulSlide：

- 创建新的 HTML 单页 slide 或 deck 章节
- 把粗糙内容重排成可直接投影的演示页
- 在写 CSS 之前先选择合适的布局模板
- 保持标题、正文、引用、来源和元信息的字体层级一致
- 在模板需要真实视觉资产时，生成或请求合适的图片
- 校验字号、图片节奏、翻页笔交互和 16:9 截图质量

SoulSlide 不是通用 PPT 主题，而是一套紧凑的 HTML slide 生产语法。它的目标是让不同页面看起来属于同一个 deck 家族。

## 模板图库

skill 内置脱敏 golden 样张。agent 改写模板时，应把这些样张作为视觉目标。

![SoulSlide 样张九宫图](assets/readme/golden-grid.png)

核心模板类型：

- `cover.html`：封面、章节开场、标题主导的舞台页
- `closing.html`：封底、结束页、最终行动号召
- `quote-thesis.html`：强观点、关键转折、判断句
- `three-column.html`：条件、收益、要求、对比
- `image-grid.html`：图文证据卡片，强调统一裁切节奏
- `metric-timeline.html`：数字、趋势证据、时间线、采用信号
- `workflow.html`：流程、日常例程、交接、操作路径
- `matrix-map.html`：四象限、门槛、层级、墙、决策地图
- `category-overview.html`：项目族、能力分类、章节总览
- `case-study.html`：产品、项目、自动化或 skill 案例页
- `scenario-matrix.html`：密集业务场景地图或组合矩阵
- `interaction-sequence.html`：翻页笔优先的图库、demo 展示、前后对比序列

## 架构

```text
.
├── .agents/skills/soulslide/          # Codex 可安装 skill
│   ├── SKILL.md                       # 触发规则和核心流程
│   ├── agents/openai.yaml             # Codex UI 元信息
│   ├── assets/
│   │   ├── soulslide.css              # 共享设计变量和组件原语
│   │   ├── templates/*.html           # 可复用 slide 模板
│   │   └── golden/*.png               # 脱敏参考截图
│   ├── references/
│   │   ├── design-system.md           # 视觉语言和字体规则
│   │   ├── layout-patterns.md         # 模板目录
│   │   ├── template-decision-tree.md  # 模板选择规则
│   │   ├── golden-examples.md         # 样张和模板映射
│   │   ├── visual-assets.md           # 生图和视觉资产规则
│   │   ├── quality-gate.md            # 轻量 slide 审计清单
│   │   └── validation.md              # 字号和截图校验
│   └── scripts/slide-font-audit.mjs   # 可读字号审计脚本
├── .claude/skills/soulslide/          # Claude 兼容副本
├── scripts/sync-claude-skill.mjs      # 从 Codex 源同步 Claude 副本
├── assets/readme/                     # README 主图和样张图
└── examples/                          # 本地示例输出
```

Codex 目录是源副本。先修改 `.agents/skills/soulslide/`，再同步到 Claude 目录。

## 安装

克隆或下载本仓库，然后安装你需要的 provider 目录。

Codex：

```bash
mkdir -p ~/.agents/skills
cp -R .agents/skills/soulslide ~/.agents/skills/soulslide
```

Claude：

```bash
mkdir -p ~/.claude/skills
cp -R .claude/skills/soulslide ~/.claude/skills/soulslide
```

如果希望 Codex 和 Claude 都使用同一套 slide 风格，可以两边都安装。

## 本地开发

```bash
npm run check
```

这个命令会对 Codex 模板、Claude 模板和 examples 运行字号审计。

修改 Codex skill 源副本后：

```bash
npm run sync:claude
npm run check
```

如果改动影响模板或 CSS 的视觉效果，提交前至少人工检查一张 16:9 截图。

## 内置参考

- `references/design-system.md`：字体、配色、间距和反模式
- `references/layout-patterns.md`：模板语法分类
- `references/template-decision-tree.md`：直接的模板选择规则
- `references/template-coverage-notes.md`：有风味但尚未升为核心模板的页型
- `references/visual-assets.md`：何时使用已有资产、生成图片或不配图
- `references/quality-gate.md`：风格、层级、布局、媒体、交互和可分享性审计
- `references/validation.md`：字号审计、截图检查、交互检查和 HTTP 资源检查

模板内容刻意使用安全占位。它们保留风格和布局语法，但不复制私有源 deck 内容或不可分享资产。

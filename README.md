# soulslide

简体中文 | [English](README.en.md)

![SoulSlide 主图](assets/readme/hero.png)

SoulSlide 是一个面向 Codex 和 Claude 的 agent skill，用于生成具有一致视觉语言的 HTML 演示页：16:9 投影优先、暖纸质感、强中文字体层级、克制卡片，以及可复用的页面模板。

## 核心优势

![SoulSlide 核心优势图](assets/readme/core-advantages.png)

## 模板图库

skill 内置脱敏 golden 样张。agent 改写模板时，应把这些样张作为视觉目标；这些样张从当前 HTML/CSS 模板重新生成。

![SoulSlide 样张拼图](assets/readme/golden-grid.png)

核心模板类型：

- `cover.html`：封面、章节开场、标题主导的舞台页
- `closing.html`：封底、结束页、最终行动号召
- `navigation.html`：deck 目录、轻量开发状态、播放入口、左下角控制栏
- `profile-intro.html`：人物、讲者、owner 或角色介绍，身份本身是论证的一部分
- `media-essay.html`：一张大图、视频帧或 artifact 承担核心论点
- `quote-thesis.html`：强观点、关键转折、判断句
- `three-column.html`：条件、收益、要求、对比
- `image-grid.html`：图文证据卡片，强调统一裁切节奏
- `metric-timeline.html`：数字、趋势证据、时间线、采用信号
- `workflow.html`：流程、日常例程、交接、操作路径
- `full-system-map.html`：架构、运转模型、产品地图或系统画布
- `matrix-map.html`：四象限、门槛、层级、墙、决策地图
- `category-overview.html`：项目族、能力分类、章节总览
- `case-study.html`：产品、项目、自动化或 skill 案例页
- `scenario-matrix.html`：密集业务场景地图或组合矩阵
- `interaction-sequence.html`：翻页笔优先的图库、demo 展示、前后对比序列
- 图片/视频序列也使用 `interaction-sequence.html`，保留当前标签高亮和 HTTP mp4 资源

## 架构

```text
.
├── .agents/skills/soulslide/          # Codex 可安装 skill
│   ├── SKILL.md                       # 触发规则和核心流程
│   ├── agents/openai.yaml             # Codex UI 元信息
│   ├── assets/
│   │   ├── soulslide.css              # 共享设计变量和组件原语
│   │   ├── fonts/                     # 内置 WOFF2 fallback 字体和许可证
│   │   ├── images/                    # 生成的封面和封底视觉资产
│   │   ├── templates/*.html           # 可复用 slide 模板
│   │   └── golden/*.png               # 脱敏参考截图
│   ├── references/
│   │   ├── aesthetic-review.md       # 设计读法、构图锚点和文案审美护栏
│   │   ├── art-direction.md           # 封面、封底、关键图片和动效规则
│   │   ├── briefing.md                # 提示词和客户 brief 模板
│   │   ├── deck-shell.md              # 导航/目录页和控制栏
│   │   ├── navigation-style.md        # 固定目录/播放器壳视觉参考
│   │   ├── design-system.md           # 视觉语言和字体规则
│   │   ├── layout-patterns.md         # 模板目录
│   │   ├── media-sequence.md          # 图片/视频序列、标签高亮和 mp4 服务规则
│   │   ├── template-decision-tree.md  # 模板选择规则
│   │   ├── golden-examples.md         # 样张和模板映射
│   │   ├── visual-assets.md           # 生图和视觉资产规则
│   │   ├── quality-gate.md            # 轻量 slide 审计清单
│   │   └── validation.md              # 字号和截图校验
│   └── scripts/
│       ├── slide-font-audit.mjs       # 可读字号 + 轻量质量审计脚本
│       └── serve-media.mjs            # 支持 mp4 Range 的本地 HTTP 媒体服务
├── .claude/skills/soulslide/          # Claude 兼容副本
├── scripts/sync-claude-skill.mjs      # 从 Codex 源同步 Claude 副本
├── assets/readme/                     # README 主图和样张图
└── examples/                          # 本地示例输出
```

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

## 内置参考

- `references/design-system.md`：字体、配色、间距和反模式
- `references/aesthetic-review.md`：设计读法、构图锚点、文案审美和生图提醒
- `references/art-direction.md`：封面、封底、关键视觉页、生图和动效规则
- `references/briefing.md`：提示词模板和逐页客户 brief 结构
- `references/deck-shell.md`：导航/目录页和播放控制栏规则
- `references/navigation-style.md`：deck 目录/播放器壳的固定视觉参考
- `references/layout-patterns.md`：模板语法分类
- `references/media-sequence.md`：图片/视频序列行为、当前标签和 mp4 服务
- `references/template-decision-tree.md`：直接的模板选择规则
- `references/template-coverage-notes.md`：有风味但尚未升为核心模板的页型
- `references/visual-assets.md`：何时使用已有资产、生成图片或不配图
- `references/quality-gate.md`：风格、层级、布局、媒体、交互和可分享性审计
- `references/validation.md`：字号审计、截图检查、交互检查和 HTTP 资源检查

## 协议

SoulSlide 采用 [MIT License](LICENSE) 发布。

模板内容刻意使用安全占位。它们保留风格和布局语法，但不复制私有源 deck 内容或不可分享资产。

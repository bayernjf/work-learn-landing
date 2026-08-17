# Work Learn Landing

Work Learn 落地页 —— 跨 AI Agent 的个人英语语料学习系统。基于 Astro 静态站点，中英双语，针对 SEO 与 GEO（生成式引擎优化，面向 AI 大模型）优化。

Work Learn 把用户与 Claude、ChatGPT、Hermes、OpenClaw 等 Agent 的真实工作对话，转化为可复用、可搜索、可复习的英语学习材料。落地页重点表达 Universal Learning Skill、MCP/API 和 CLI 三层接入方式，以及从真实对话到复习的学习闭环。

```text
Agent 中调用 Skill -> 整理当前对话 -> 用户确认 -> MCP/API 保存 -> Web 查看和复习
```

## 技术栈

- Astro 7（SSG，零运行时 JS）
- Tailwind CSS 4（浅色纸墨主题 + 荧光绿强调色）
- @astrojs/sitemap（带 i18n 的 sitemap）
- @bay/landing-ui（BayJF 品牌返链与 GitHub Star 组件）
- Node >= 22.12.0

## 本地开发

```bash
node -v          # 需要 Node 22+
npm install
npm run dev
```

## 构建

```bash
npm run build    # 产物输出到 dist/，并生成首页预览图
npm run preview  # 本地预览生产构建
npm run check    # astro check 类型与模板校验
```

## 目录结构

```
src/
├── components/      # Nav/Hero/Signals/HowItWorks/EveryAgent/Loop/CTA/Footer/SEO
├── layouts/         # BaseLayout（全站 SEO head）
├── pages/
│   ├── index.astro          # 英文首页（默认语言，位于根路径）
│   ├── privacy.astro        # 隐私政策
│   ├── terms.astro          # 服务条款
│   ├── 404.astro            # 404
│   └── zh/                  # 中文首页与法律页
├── i18n/            # ui 字典 + i18n 工具（getLangFromUrl/useTranslations/localizePath）
├── consts.ts        # 站点常量（URL/名称/描述/社交链接/OG 图）
└── styles/global.css        # Tailwind 4 @theme 设计令牌
public/
├── robots.txt       # 放行 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot/Bytespider 等）
├── llms.txt         # 中文 llms.txt（向 AI 模型自述产品）
├── llms-en.txt      # English llms.txt
├── brand/           # Work Learn `W` 路径标志与备用 Logo 方案
└── favicon.svg
```

英文为默认语言、位于根路径，中文位于 `/zh/*`。中文页面不复制内容，只以 `lang="zh"` 复用同一批组件。

## 部署到 Cloudflare Pages（推荐：Git 集成）

1. 代码推到 GitHub 仓库
2. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git
3. 选择仓库，配置构建：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION = 22`
4. Save and Deploy。Cloudflare Pages 构建 `main` 分支，日常开发在 `dev` 分支进行

绑定自定义域名：Pages 项目 → Custom domains → 添加 `work-learn.bayjf.com` → 按提示设置 CNAME。

## SEO 优化

- 全站 meta（title/description/canonical/robots）通过 [SEO.astro](src/components/SEO.astro) 统一管理
- Open Graph + Twitter Card，中英各一张 OG 图（`OG_IMAGE` in `consts.ts`）
- hreflang 中英互指（`zh-CN` / `en-US` / `x-default`）
- JSON-LD `@graph`：`Organization` + `WebSite` + `SoftwareApplication`
- sitemap-index.xml 自动生成（含 i18n alternate）

## GEO 优化（针对 AI 大模型）

目标：让 ChatGPT/Perplexity/Claude/Gemini/豆包 在回答「AI 对话学英语」「跨 Agent 语料库」类问题时引用 Work Learn。

- **robots.txt 显式放行 AI 爬虫**：GPTBot、ClaudeBot、PerplexityBot、Bytespider、Applebot-Extended、Google-Extended、CCBot、anthropic-ai
- **llms.txt / llms-en.txt**：根目录 Markdown，向模型自述产品定义、三层接入、差异化、技术栈、关键链接与非目标
- **SoftwareApplication JSON-LD**：标明产品实体与 featureList，便于模型识别
- **段落结论前置**：模型偏好摘取首句与可引用断言

## 待补充

- `public/og/og-zh.png` 与 `public/og/og-en.png`（1200×630）尚未生成，`consts.ts` 中的 `OG_IMAGE` 已指向该路径

产品方案见 [work-learn](https://github.com/bayernjf/work-learn) 仓库。

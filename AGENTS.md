# AGENTS.md — work-learn-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Work Learn 落地页：跨 AI Agent 的个人英语语料学习系统官网。把用户与 Claude、ChatGPT、Hermes、
OpenClaw 等 Agent 的真实工作对话，转化为可复用、可搜索、可复习的英语学习材料。
重点表达 Universal Learning Skill、MCP/API 与 CLI 三层接入方式，以及「真实对话 → 整理 → 复习」闭环。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，零运行时 JS） |
| 样式 | Tailwind CSS 4（浅色纸墨主题 + 荧光绿强调色） |
| SEO | `@astrojs/sitemap`（含 i18n）、`src/components/SEO.astro` 统一管理 meta |
| OG 图 | 中英各一张，构建时截出 `/preview-zh.png`、`/preview-en.png`（2560×1600），由 `consts.ts` 的 `OG_IMAGE` 引用 |
| 共享包 | `@bay/landing-ui` |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- **分支策略**：Pages 构建 `main` 分支发生产，日常开发在 `dev`——`dev` 上的改动必须合入 `main` 才生效。
- 文案紧跟产品现状（MCP 工具数、接入端点、支持的目标 Agent 列表都是易过期数字），
  主仓库 `work-learn` 变更后回来核对。
- 站点 URL 在 `astro.config.mjs` 的 `site` 与 `src/consts.ts` 的 `SITE_URL`，改域名一并同步 `robots.txt`。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要把 `dev` 上的改动当成已发布（必须合 `main`）。
- 不要写死产品能力数字而不回查主仓库。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。

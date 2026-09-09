# Handoff — work-learn-landing

更新时间：2026-09-09

## 项目概况
Work Learn 落地页：跨 AI Agent 的个人英语语料学习系统。把用户与 Claude、ChatGPT、Hermes、
OpenClaw 等 Agent 的真实工作对话，转化为可复用、可搜索、可复习的英语学习材料
（`Agent 中调用 Skill → 整理当前对话 → 用户确认 → MCP/API 保存 → Web 查看和复习`）。
落地页重点表达 Universal Learning Skill、MCP/API 与 CLI 三层接入方式，以及学习闭环。

Astro 7 静态站点（零运行时 JS）+ Tailwind CSS 4（浅色纸墨主题 + 荧光绿强调色），
中英双语，针对 SEO 与 GEO（生成式引擎优化）优化，`@bay/landing-ui` 提供品牌返链。

- 产品仓库：`https://github.com/bayernjf/work-learn`
- 自定义域名：`work-learn.bayjf.com`

## 当前状态（分支 dev，与 origin/dev 同步，工作区干净）
最近提交：
- `b1975c3` feat(copy): update MCP tool count to 21 and API endpoint to pages.dev
- `56b4138` feat(copy): mention macOS menu-bar Companion as a capture option
- `2f206f6` feat(copy): reflect shipped product features (SRS, multi-format quiz, reuse nudge, 17 tools)
- `98ab5ba` feat: add dashboard section showing practice and review

## 注意点
- Cloudflare Pages 构建 **`main` 分支**，日常开发在 `dev`：`dev` 上的改动要合进 `main` 才生效。
- `npm run build` 内含 `node scripts/shot.mjs`，构建时用 Playwright 截图产出预览 / OG 图，
  `public/preview.png` 不在版本库里，属于构建产物。
- 文案紧跟产品现状（MCP 工具数、接入端点、支持的目标 Agent 列表都是易过期数字），
  产品侧变更后需回来核对 `src/i18n/` 与页面文案。
- 需要 Node >= 22.12。

## 下一步
1. 把 `dev` 合入 `main`，验证生产站点双语页面、OG 图与 sitemap。
2. 产品新增能力（如 Companion、新增 MCP 工具）后同步更新落地页对应章节与工具数量。
3. 与 hub 站 bayjf 的产品卡片封面保持一致（引用的是构建产出的 preview.png）。

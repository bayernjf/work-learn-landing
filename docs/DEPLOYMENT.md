# 部署 — work-learn-landing

更新时间：2026-09-09

## 站点信息
- 自定义域名：`work-learn.bayjf.com`
- 技术栈：Astro 7（SSG，零运行时 JS）+ Tailwind CSS 4 + `@astrojs/sitemap`（含 i18n）+ `@bay/landing-ui`
- OG 图：中英各一张，构建时截出 `/preview-zh.png`、`/preview-en.png`（2560×1600），
  由 `consts.ts` 的 `OG_IMAGE` 引用
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## Cloudflare Pages（Git 集成）
| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22` |

**分支策略**：Pages 构建 `main` 分支 → 生产；日常开发在 `dev` 分支，
`dev` 上的改动必须合入 `main` 才会发版。

自定义域名：Pages 项目 → Custom domains → 添加 `work-learn.bayjf.com` → 按提示设置 CNAME。

## 发布后验证
1. 中英双语首页与语言切换正常。
2. `robots.txt`、`sitemap.xml` 可访问且域名一致。
3. 中英 OG 图（构建产物）可访问。
4. 文案与产品现状一致（MCP 工具数、接入端点、支持的 Agent 列表等数字型文案易过期）。

## 改域名时的同步点
- `astro.config.mjs` 的 `site` 与 `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 的 Sitemap 行
- `OG_IMAGE` 指向的预览图路径

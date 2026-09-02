// 站点级常量，集中管理便于跨页面/组件复用
// 绑定自定义域名后，需同步修改 astro.config.mjs 的 site 字段

// Cloudflare Pages 默认域名：<project-name>.pages.dev
export const SITE_URL = 'https://work-learn.bayjf.com';
export const SITE_NAME = 'Work Learn';
export const SITE_NAME_EN = 'Work Learn';
export const SITE_TITLE = 'Work Learn | 把 AI 工作对话变成你自己的英语课';
export const SITE_TITLE_EN = 'Work Learn | Learn the English your work already needs';
export const SITE_DESCRIPTION =
  'Work Learn 是一个跨 AI Agent 的个人英语语料学习系统，把你与 Claude、ChatGPT、Hermes、OpenClaw 等 Agent 的真实工作对话，转化为可复用、可搜索、可复习的英语学习材料。提供 Universal Learning Skill、MCP/API 与 CLI 三层接入方式，形成「提取语料 → 短练习 → 新对话复用 → 记录掌握情况」的学习闭环。';
export const SITE_DESCRIPTION_EN =
  'Work Learn is a cross-agent English learning system that turns your real working conversations with Claude, ChatGPT, Hermes, OpenClaw and other agents into reusable, searchable, reviewable study material. It ships three ways in — a Universal Learning Skill, MCP/API, and a CLI — closing the loop from captured language to short practice to reuse in your next conversation.';
export const AUTHOR = 'Work Learn';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 产品 Web 端与入口地址
export const APP_URL = 'https://work-learn.pages.dev';

// 线上 API 与远程 MCP 端点（Streamable HTTP，无状态，带 Bearer token）
// 统一使用 Cloudflare Pages 入口（国内可达），API 由 Pages worker 代理到 Vercel
export const API_URL = 'https://work-learn.pages.dev';
export const MCP_REMOTE_URL = `${API_URL}/api/mcp`;

export const SOCIAL = {
  github: 'https://github.com/bayernjf/work-learn',
  rawBase: 'https://raw.githubusercontent.com/bayernjf/work-learn/main',
  email: 'b4yernjf@gmail.com',
  docs: 'https://github.com/bayernjf/work-learn/blob/main/docs/product-proposal.md',
};

// 默认 OG 图片（按语言切换）。
// 指向 `npm run build` 里 scripts/shot.mjs 截出的首屏图，而不是一组需要手工维护的
// 单独素材 —— 手工素材没人生成，og:image 就一直是 404。
export const OG_IMAGE = {
  zh: '/preview-zh.png',
  en: '/preview-en.png',
};

# Work Learn Landing

Work Learn 是一个跨 AI Agent 的个人英语语料学习系统。它把用户与 Claude、ChatGPT、Hermes、OpenClaw 以及其他 Agent 的真实工作对话，转化为可复用、可搜索、可复习的英语学习材料。

核心承诺：让用户直接从每天已经发生的 AI 工作对话中，获得属于自己的英语课程，而不是再维护一套脱离工作场景的学习材料。

## 第一版定位

第一版面向使用 AI Agent 进行全栈开发的独立开发者，先提供一条固定的对话整理与复习闭环。英语学习是首个产品场景，底层能力可扩展到技术知识、工作决策和个人 AI 工作资产沉淀。

落地页重点表达 Universal Learning Skill、MCP/API 和 CLI 三层接入方式，以及从真实对话到复习的学习闭环。

```text
Agent 中调用 Skill -> 整理当前对话 -> 用户确认 -> MCP/API 保存 -> Web 查看和复习
```

## 文档索引

### 产品定义

- [产品方案](https://github.com/bayernjf/work-learn/blob/main/docs/product-proposal.md)：产品定位、用户流程、核心架构和平台策略。

### 当前实施

- [项目交接](https://github.com/bayernjf/work-learn/blob/main/handoff.md)：产品决策和跨项目交接信息。

## 当前状态

当前仓库是 Work Learn 的 Astro 静态落地页，不是产品服务本身。页面已完成首版产品叙事和响应式布局，后续随产品方案演进同步更新。

当前已表达：

- Universal Learning Skill 是跨 Agent 的主入口；
- MCP/API 是统一保存、搜索和复习能力层；
- CLI 覆盖终端和无 Skill Agent 的兼容场景；
- Work Learn 把真实工作语料转化为可复用的英语学习材料；
- 学习闭环是“提取语料 -> 短练习 -> 新对话复用 -> 记录掌握情况”。

## 页面内容

- Universal Learning Skill 的产品定位；
- Skill、MCP、CLI 三层接入方式；
- 从真实对话到复习的学习闭环；
- 面向开发者工作流的会话学习预览；
- 响应式桌面和移动端布局。
- Work Learn `W` 路径标志和浏览器图标。
- 三个备用的 `W + L` Logo 方案，位于 `public/brand/concepts/`。

## 本地运行

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 技术栈

- Astro
- 原生 CSS
- 静态 HTML 交互预览
- SVG brand mark

产品方案见 [work-learn](https://github.com/bayernjf/work-learn) 仓库。

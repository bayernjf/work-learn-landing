// 双语文案字典：扁平点号键，通过 useTranslations(lang) 取值
export const languages = {
  zh: '简体中文',
  en: 'English',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.howItWorks': 'How it works',
    'nav.everyAgent': 'For every agent',
    'nav.loop': 'The loop',
    'nav.cta': 'Get started',
    'nav.langSwitch': '中文',
    'nav.home': 'Work Learn home',

    'hero.eyebrow': 'A learning layer for your AI workflow',
    'hero.title': 'Learn the English your work already needs.',
    'hero.lede': 'Turn conversations with AI into a personal course you can actually reuse.',
    'hero.cta.app': 'Open Work Learn',
    'hero.cta.primary': 'Connect your agent',
    'hero.cta.secondary': 'See how it works',
    'cta.comingSoon': 'Coming soon',

    'hero.stage.label': 'A preview of a saved learning moment',
    'hero.stage.note': 'saved from a real conversation',
    'hero.stage.status': 'learning layer on',
    'hero.stage.user': 'Can we decouple the validation layer from persistence?',
    'hero.stage.assistantLabel': 'assistant',
    'hero.stage.assistant':
      'Yes. That keeps the domain rules independent from the database adapter and makes the module easier to test.',
    'hero.stage.caption': 'The useful part stays close to the work.',
    'hero.drawer.heading': 'Worth learning',
    'hero.drawer.explanation': 'Separate two things so each can change independently.',
    'hero.drawer.exampleLabel': 'your next use',
    'hero.drawer.example': '“We should decouple the API layer from the queue.”',

    'signals.label': 'Built for the way developers work',
    'signals.terminal': 'your terminal',

    'how.title': 'Connect once. Learn from every agent.',
    'how.subtitle':
      'The MCP server does the saving, searching, and reviewing. The optional Skill tells your agent when and how to use it. CLI covers the terminal.',
    'how.mcp.title': 'MCP server',
    'how.mcp.copy': 'Connect it once to give every agent the same memory, search, and review.',
    'how.skill.title': 'Skill (optional)',
    'how.skill.copy': 'Drop in SKILL.md so your agent knows when to save and how to shape it.',
    'how.skill.code': 'organize this conversation',
    'how.cli.title': 'CLI',
    'how.cli.copy': 'Capture terminal sessions when an agent has no MCP support.',

    'agents.eyebrow': 'The same learning layer, everywhere',
    'agents.title': 'Your agents can have different voices. Your learning history should not.',
    'agents.mapLabel': 'A map of Work Learn integrations',
    'agents.center.title': 'your learning',
    'agents.center.sub': 'one memory',
    'agents.skill.sub': 'guides the agent',
    'agents.mcp.sub': 'save and search',
    'agents.cli.sub': 'capture the terminal',

    'loop.eyebrow': 'A loop, not a notebook',
    'loop.title': 'The point is not more notes.',
    'loop.subtitle': 'The point is the next time you can say it without thinking.',
    'loop.01.title': 'Keep the good sentence',
    'loop.01.copy':
      'Work Learn finds expressions worth reusing, not every word you happened to see.',
    'loop.02.title': 'Make it yours',
    'loop.02.copy':
      'See the natural version, why it works, and an example shaped around your codebase.',
    'loop.03.title': 'Use it again',
    'loop.03.copy': 'The next practice starts from the language your work already made meaningful.',
    'loop.visual.contextLabel': 'in your work',
    'loop.visual.practiceLabel': 'next practice',
    'loop.visual.practice': 'Use it in a sentence',

    'cta.eyebrow': 'Start with the conversations you already have',
    'cta.advanced': 'Advanced setup — install the Skill',
    'cta.title': 'Make your work teach you.',
    'cta.copy': 'No new curriculum. No context switching. Just the useful English, when it matters.',
    'cta.button': 'Join the early build',
    'cta.auto.label': 'Let your agent set it up',
    'cta.auto.copy': 'Paste this into any agent that can edit files. It writes the config for you.',
    'cta.auto.note': 'It will ask you for a token — a well-behaved agent never invents one.',
    'cta.auto.prompt': `Set up the Work Learn remote MCP server in this agent for me.

Endpoint: {endpoint} (Streamable HTTP, stateless)
Auth: Authorization: Bearer <token> request header
Server name: work-learn

Steps:
1. Work out which agent client I'm running and find its MCP config file (e.g. ~/.codex/config.toml, ~/.claude.json, ~/.cursor/mcp.json, ~/.config/opencode/opencode.json). Ask me if you're unsure.
2. If this client supports OAuth for remote MCP, write only the URL and tell me to authorize in the browser.
3. Otherwise ask me for a Personal Access Token — I copy it from the account page at {app}. Never invent or guess a token.
4. Add the server as "work-learn", leave every other MCP server in the file untouched, and back the file up before editing.
5. Tell me to restart the client, then confirm these five tools are available: create_session, save_material, search_corpus, get_review_items, mark_mastered.`,
    'cta.manual.label': 'Manual setup',
    'cta.step1.title': 'Sign in to Work Learn',
    'cta.step1.copy': 'Open the web app and copy a personal access token from the account page.',
    'cta.step2.title': 'Connect the remote MCP',
    'cta.step2.copy': 'Paste one URL into your agent\'s MCP settings — no clone, no install. Restart the agent afterwards.',
    'cta.remote.label': 'Remote MCP endpoint',
    'cta.remote.json': 'Or paste this JSON config',
    'cta.remote.note': 'Agents that support OAuth can just add the URL and authorize in the browser — tokens refresh themselves. For manual setup, use a Personal Access Token: the account page access token is a short-lived JWT that expires in about an hour.',
    'cta.local.summary': 'Client without remote MCP support? Use local stdio',
    'cta.local.note': 'The developer path: clone the repo, run pnpm install, then point your agent at the local server process.',
    'cta.step3.title': 'Grab the Skill (optional)',
    'cta.step3.copy': 'The Skill tells your agent when to save. Drop SKILL.md into a skills folder below, then restart the agent.',
    'cta.step3.prereq': 'Requires the MCP server connected above.',
    'cta.step3.install': 'One-line install (all detected agents):',
    'cta.step3.chooseAgent': 'Or choose one agent below.',
    'cta.agent.universal': 'Universal',
    'cta.agent.codex': 'Codex',
    'cta.agent.claude': 'Claude',
    'cta.agent.codebuddy': 'CodeBuddy',
    'cta.agent.cursor': 'Cursor',
    'cta.agent.opencode': 'OpenCode',
    'cta.agent.pi': 'Pi',
    'cta.agent.universal.note': 'Installs into every detected skills folder, including shared agent folders.',
    'cta.agent.codex.note': 'Installs to ~/.codex/skills/work-learn/SKILL.md. Restart Codex after installing.',
    'cta.agent.claude.note': 'Installs to ~/.claude/skills/work-learn/SKILL.md. Restart Claude Code after installing.',
    'cta.agent.codebuddy.note': 'Installs to ~/.codebuddy/skills/work-learn/SKILL.md. CLI and desktop share this folder.',
    'cta.agent.cursor.note': 'Installs to ~/.cursor/skills/work-learn/SKILL.md. Restart Cursor after installing.',
    'cta.agent.opencode.note': 'Installs to ~/.config/opencode/skills/work-learn/SKILL.md. Restart OpenCode after installing.',
    'cta.agent.pi.note': 'Installs to ~/.pi/agent/skills/work-learn/SKILL.md. Restart Pi after installing.',
    'cta.step3.paths': 'Codex: ~/.codex/skills/work-learn/SKILL.md · Claude Code: ~/.claude/skills/work-learn/SKILL.md · CodeBuddy: ~/.codebuddy/skills/work-learn/SKILL.md',
    'cta.step3.usage': 'Then ask: “Save the useful English from this conversation.”',
    'cta.step3.without': 'Without the Skill, the MCP tools still work — you just call them by hand.',
    'cta.config.copy': 'Copy',
    'cta.config.copied': 'Copied',
    'cta.skill': 'View SKILL.md',
    'cta.docs': 'Full setup docs',
    'cta.tokenNote': 'Your token stays on your machine and is sent only to the Work Learn API.',

    'footer.tagline': 'Language from the work.',
    'footer.rights': '© 2026 Work Learn',
  },
  zh: {
    'nav.howItWorks': '如何运作',
    'nav.everyAgent': '适配每个 Agent',
    'nav.loop': '学习闭环',
    'nav.cta': '开始接入',
    'nav.langSwitch': 'English',
    'nav.home': 'Work Learn 首页',

    'hero.eyebrow': '为 AI 工作流准备的学习层',
    'hero.title': '学你工作里真正要用的英语。',
    'hero.lede': '把你与 AI 的对话，变成一门真正能复用的个人课程。',
    'hero.cta.app': '打开 Work Learn',
    'hero.cta.primary': '接入你的 Agent',
    'hero.cta.secondary': '看它如何运作',
    'cta.comingSoon': '即将上架',

    'hero.stage.label': '一次学习记录的预览',
    'hero.stage.note': '来自一段真实对话',
    'hero.stage.status': '学习层已开启',
    'hero.stage.user': 'Can we decouple the validation layer from persistence?',
    'hero.stage.assistantLabel': 'assistant',
    'hero.stage.assistant':
      'Yes. That keeps the domain rules independent from the database adapter and makes the module easier to test.',
    'hero.stage.caption': '有用的部分，留在工作现场。',
    'hero.drawer.heading': '值得学的表达',
    'hero.drawer.explanation': '把两个部分拆开，让它们各自独立演进。',
    'hero.drawer.exampleLabel': '下次这样用',
    'hero.drawer.example': '“We should decouple the API layer from the queue.”',

    'signals.label': '按开发者的工作方式设计',
    'signals.terminal': '你的终端',

    'how.title': '接一次，所有 Agent 都能学。',
    'how.subtitle':
      'MCP 服务器负责保存、搜索与复习；可选的 Skill 告诉 Agent 何时保存、如何整理；CLI 覆盖终端场景。',
    'how.mcp.title': 'MCP 服务器',
    'how.mcp.copy': '接入一次，让每个 Agent 共用同一套记忆、搜索与复习。',
    'how.skill.title': 'Skill（可选）',
    'how.skill.copy': '放入 SKILL.md，Agent 就知道何时保存、如何整理成学习材料。',
    'how.skill.code': '整理刚才这段对话',
    'how.cli.title': 'CLI',
    'how.cli.copy': 'Agent 不支持 MCP 时，用命令行采集终端里的会话。',

    'agents.eyebrow': '同一个学习层，处处可用',
    'agents.title': '你的 Agent 可以各有脾气，你的学习记录不该如此。',
    'agents.mapLabel': 'Work Learn 接入方式示意',
    'agents.center.title': '你的学习记录',
    'agents.center.sub': '统一存储',
    'agents.skill.sub': '指导 Agent 如何保存',
    'agents.mcp.sub': '保存与搜索',
    'agents.cli.sub': '采集终端会话',

    'loop.eyebrow': '是闭环，不是笔记本',
    'loop.title': '重点不是攒更多笔记。',
    'loop.subtitle': '重点是下一次你能不假思索地说出来。',
    'loop.01.title': '留下那句好表达',
    'loop.01.copy': 'Work Learn 只挑值得复用的表达，而不是你碰巧看过的每个词。',
    'loop.02.title': '变成你自己的',
    'loop.02.copy': '看到地道说法、它为什么成立，以及贴着你代码库写的例句。',
    'loop.03.title': '再用一次',
    'loop.03.copy': '下一次练习，从你工作里已经赋予意义的语言开始。',
    'loop.visual.contextLabel': '在你的工作里',
    'loop.visual.practiceLabel': '下一次练习',
    'loop.visual.practice': '造一个句子',

    'cta.eyebrow': '就从你已经有的那些对话开始',
    'cta.advanced': '高级接入 —— 安装 Skill',
    'cta.title': '让你的工作教你。',
    'cta.copy': '不用新教材，不用切换上下文，只在需要时给你有用的英语。',
    'cta.button': '加入早期版本',
    'cta.auto.label': '让 Agent 帮你配置',
    'cta.auto.copy': '把这段话粘给任意有文件读写能力的 Agent，它会替你写好配置。',
    'cta.auto.note': '它会主动向你索要 token —— 正常的 Agent 不该自己编一个。',
    'cta.auto.prompt': `帮我在这个 Agent 里接入 Work Learn 的远程 MCP 服务器。

端点：{endpoint}（Streamable HTTP，无状态）
认证：请求头 Authorization: Bearer <token>
服务器名称：work-learn

请按以下步骤做：
1. 判断我当前用的是哪个 Agent 客户端，找到它的 MCP 配置文件（例如 ~/.codex/config.toml、~/.claude.json、~/.cursor/mcp.json、~/.config/opencode/opencode.json）。不确定就先问我。
2. 如果该客户端支持远程 MCP 的 OAuth 授权，只写入 URL，并告诉我去浏览器完成授权。
3. 否则向我索要 Personal Access Token —— 我从 {app} 的账号页复制。不要凭空编造或猜测 token。
4. 以 "work-learn" 为名写入配置，保留文件里已有的其他 MCP 服务器不变，修改前先备份该文件。
5. 告诉我需要重启客户端，然后确认这 5 个工具可用：create_session、save_material、search_corpus、get_review_items、mark_mastered。`,
    'cta.manual.label': '手动配置',
    'cta.step1.title': '登录 Work Learn',
    'cta.step1.copy': '打开 Web 应用，从账号页面复制一个 Personal Access Token。',
    'cta.step2.title': '连接远程 MCP',
    'cta.step2.copy': '把一条 URL 填进 Agent 的 MCP 设置，无需 clone、无需安装。填好后重启 Agent。',
    'cta.remote.label': '远程 MCP 端点',
    'cta.remote.json': '或粘贴这份 JSON 配置',
    'cta.remote.note': '支持 OAuth 的 Agent 只需填 URL，浏览器授权后由 Agent 自动续期。手动填写请用 Personal Access Token：账号页那个 access token 是短期 JWT，约 1 小时过期。',
    'cta.local.summary': '客户端不支持远程 MCP？改用本地 stdio',
    'cta.local.note': '开发者路径：先 clone 仓库并执行 pnpm install，再让 Agent 指向本机的服务进程。',
    'cta.step3.title': '获取 Skill（可选）',
    'cta.step3.copy': 'Skill 告诉 Agent 何时保存、如何整理。把 SKILL.md 放进下面任意 skills 目录，然后重启 Agent。',
    'cta.step3.prereq': '需要先配好上面的 MCP 服务器。',
    'cta.step3.install': '一行命令安装（自动检测所有 Agent）：',
    'cta.step3.chooseAgent': '也可以只选择一个 Agent。',
    'cta.agent.universal': '通用',
    'cta.agent.codex': 'Codex',
    'cta.agent.claude': 'Claude',
    'cta.agent.codebuddy': 'CodeBuddy',
    'cta.agent.cursor': 'Cursor',
    'cta.agent.opencode': 'OpenCode',
    'cta.agent.pi': 'Pi',
    'cta.agent.universal.note': '会安装到所有检测到的 skills 目录，也包括共享 Agent 目录。',
    'cta.agent.codex.note': '安装到 ~/.codex/skills/work-learn/SKILL.md，完成后重启 Codex。',
    'cta.agent.claude.note': '安装到 ~/.claude/skills/work-learn/SKILL.md，完成后重启 Claude Code。',
    'cta.agent.codebuddy.note': '安装到 ~/.codebuddy/skills/work-learn/SKILL.md，CLI 终端和桌面端共用该目录。',
    'cta.agent.cursor.note': '安装到 ~/.cursor/skills/work-learn/SKILL.md，完成后重启 Cursor。',
    'cta.agent.opencode.note': '安装到 ~/.config/opencode/skills/work-learn/SKILL.md，完成后重启 OpenCode。',
    'cta.agent.pi.note': '安装到 ~/.pi/agent/skills/work-learn/SKILL.md，完成后重启 Pi。',
    'cta.step3.paths': 'Codex：~/.codex/skills/work-learn/SKILL.md · Claude Code：~/.claude/skills/work-learn/SKILL.md · CodeBuddy：~/.codebuddy/skills/work-learn/SKILL.md',
    'cta.step3.usage': '然后说：“把这段对话里有用的英语保存下来。”',
    'cta.step3.without': '不装 Skill，MCP 工具仍然可用，只是需要你手动调用。',
    'cta.config.copy': '复制',
    'cta.config.copied': '已复制',
    'cta.skill': '查看 SKILL.md',
    'cta.docs': '完整接入文档',
    'cta.tokenNote': 'Token 只保存在你本机，仅发送给 Work Learn API。',

    'footer.tagline': '语言来自工作本身。',
    'footer.rights': '© 2026 Work Learn',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

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
    'nav.cta': 'Try the skill',
    'nav.langSwitch': '中文',
    'nav.home': 'Work Learn home',

    'hero.eyebrow': 'A learning layer for your AI workflow',
    'hero.title': 'Learn the English your work already needs.',
    'hero.lede': 'Turn conversations with AI into a personal course you can actually reuse.',
    'hero.cta.app': 'Open Work Learn',
    'hero.cta.primary': 'Get the skill',
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

    'how.title': 'One command turns context into progress.',
    'how.subtitle':
      'Work Learn sits beside your agents. You decide what is worth keeping. It does the sorting, shaping, and remembering.',
    'how.skill.title': 'Skill',
    'how.skill.copy': 'Ask your agent to save the useful parts of the conversation.',
    'how.mcp.title': 'MCP',
    'how.mcp.copy': 'Give every agent the same memory, search, and review tools.',
    'how.cli.title': 'CLI',
    'how.cli.copy': 'Capture terminal sessions when there is no native integration.',

    'agents.eyebrow': 'The same learning layer, everywhere',
    'agents.title': 'Your agents can have different voices. Your learning history should not.',
    'agents.mapLabel': 'A map of Work Learn integrations',
    'agents.center.title': 'your learning',
    'agents.center.sub': 'one memory',
    'agents.skill.sub': 'understand the moment',
    'agents.mcp.sub': 'save and search',
    'agents.cli.sub': 'capture the terminal',

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
    'cta.title': 'Make your work teach you.',
    'cta.copy': 'No new curriculum. No context switching. Just the useful English, when it matters.',
    'cta.button': 'Join the early build',

    'footer.tagline': 'Language from the work.',
    'footer.rights': '© 2026 Work Learn',
  },
  zh: {
    'nav.howItWorks': '如何运作',
    'nav.everyAgent': '适配每个 Agent',
    'nav.loop': '学习闭环',
    'nav.cta': '试用 Skill',
    'nav.langSwitch': 'English',
    'nav.home': 'Work Learn 首页',

    'hero.eyebrow': '为 AI 工作流准备的学习层',
    'hero.title': '学你工作里真正要用的英语。',
    'hero.lede': '把你与 AI 的对话，变成一门真正能复用的个人课程。',
    'hero.cta.app': '打开 Work Learn',
    'hero.cta.primary': '获取 Skill',
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

    'how.title': '一条指令，把上下文变成积累。',
    'how.subtitle':
      'Work Learn 就在你的 Agent 旁边。你决定什么值得留下，它负责整理、加工和记住。',
    'how.skill.title': 'Skill',
    'how.skill.copy': '让 Agent 直接保存这段对话里有用的部分。',
    'how.mcp.title': 'MCP',
    'how.mcp.copy': '让每个 Agent 共用同一套记忆、搜索与复习能力。',
    'how.cli.title': 'CLI',
    'how.cli.copy': '没有原生集成时，用命令行采集终端里的会话。',

    'agents.eyebrow': '同一个学习层，处处可用',
    'agents.title': '你的 Agent 可以各有脾气，你的学习记录不该如此。',
    'agents.mapLabel': 'Work Learn 接入方式示意',
    'agents.center.title': '你的学习记录',
    'agents.center.sub': '统一存储',
    'agents.skill.sub': '理解当下这段对话',
    'agents.mcp.sub': '保存与搜索',
    'agents.cli.sub': '采集终端会话',

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
    'cta.title': '让你的工作教你。',
    'cta.copy': '不用新教材，不用切换上下文，只在需要时给你有用的英语。',
    'cta.button': '加入早期版本',

    'footer.tagline': '语言来自工作本身。',
    'footer.rights': '© 2026 Work Learn',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-config
export default [
  {
    text: '开发指南',
    collapsed: false,
    items: [
      { text: '组件库搭建流程', link: '/ghui/搭建组件库流程' },
      { text: '简介', link: '/ghui/简介' },
      { text: '快速上手', link: '/ghui/快速上手' },
    ],
  },
  {
    text: '组件',
    collapsed: false,
    items: [
      { text: '按钮', link: '/ghui/组件-button' },
      { text: '日历选择器', link: '/ghui/组件-calendar' },
      { text: '卡片', link: '/ghui/组件-card' },
      { text: '复选框', link: '/ghui/组件-checkbox' },
      { text: '倒计时', link: '/ghui/组件-countDown' },
      { text: '分割线', link: '/ghui/组件-divider' },
      { text: '图标', link: '/ghui/组件-icon' },
      { text: '抽屉', link: '/ghui/组件-popup' },
      { text: '进度条', link: '/ghui/组件-progressBar' },
      { text: '间隙组件', link: '/ghui/组件-space' },
      { text: '进步器', link: '/ghui/组件-stepper' },
      { text: '开关', link: '/ghui/组件-switch' },
      { text: '轻提示', link: '/ghui/组件-toast' },
      { text: '树形图', link: '/ghui/组件-tree' },
      { text: '验证码', link: '/ghui/组件-verificationCode' },
    ],
  },
] as DefaultTheme.Sidebar;

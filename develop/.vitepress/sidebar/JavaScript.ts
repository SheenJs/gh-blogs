import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-config
export default [
  {
    text: 'JS基础知识',
    collapsed: false,
    items: [
      {
        text: '基础',
        link: '/blogs/js/JS基础',
      },
      {
        text: '高级',
        link: '/blogs/js/JS高级',
      },
      {
        text: 'ES6',
        link: '/blogs/js/es6',
      },
      {
        text: 'typescript',
        link: '/blogs/js/TS',
      },
    ],
  },
  {
    text: '内置对象',
    collapsed: false,
    items: [
      {
        text: 'Array',
        link: '/blogs/js/Array',
      },
      {
        text: 'Date',
        link: '/blogs/js/Date',
      },
      {
        text: 'RegExp',
        link: '/blogs/js/正则',
      },
    ],
  },
  {
    text: '面试题',
    link: '/blogs/js/topic',
  },
] as DefaultTheme.Sidebar;

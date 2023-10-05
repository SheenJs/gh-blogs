import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-config
export default [
  {
    text: 'JS基础知识',
    items: [
      {
        text: '基础',
        link: '/js/JS基础',
      },
      {
        text: '高级',
        link: '/js/JS高级',
      },
      {
        text: 'ES6',
        link: '/js/es6',
      },
      {
        text: 'typescript',
        link: '/js/TS',
      },
    ],
  },
  {
    text: '内置对象',
    items: [
      {
        text: 'Array',
        link: '/js/Array',
      },
      {
        text: 'Date',
        link: '/js/Date',
      },
    ],
  },
] as DefaultTheme.Sidebar;

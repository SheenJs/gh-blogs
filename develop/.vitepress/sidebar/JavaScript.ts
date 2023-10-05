import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-config
export default [
  {
    text: 'JS基础知识',
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
    items: [
      {
        text: 'Array',
        link: '/blogs/js/Array',
      },
      {
        text: 'Date',
        link: '/blogs/js/Date',
      },
    ],
  },
] as DefaultTheme.Sidebar;

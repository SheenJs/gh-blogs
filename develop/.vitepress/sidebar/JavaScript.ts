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
        text: 'dom',
      },
      {
        text: 'bom',
      },
      {
        text: 'ES6',
        link: '/blogs/js/es6',
        items: [
          {
            text: 'ES7',
          },
          {
            text: 'ES8-9',
          },
          {
            text: 'ES10',
          },
          {
            text: 'ES11',
          },
          {
            text: 'ES12',
          },
          {
            text: 'ES13',
          },
        ],
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
      {
        text: 'string',
        link: '/blogs/js/string',
      },
      {
        text: 'Object',
      },
      {
        text: 'Function',
      },
      {
        text: 'Math',
      },
      {
        text: 'Number',
      },
      {
        text: 'und null NaN',
      },
      {
        text: 'set Map',
      },
      {
        text: 'parseInt',
      },
      {
        text: 'Promise',
      },
      {
        text: 'Json',
      },
    ],
  },
  {
    text: '面试题',
    link: '/blogs/js/topic',
  },
] as DefaultTheme.Sidebar;

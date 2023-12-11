import type { DefaultTheme } from 'vitepress';
const modules = import.meta.glob('/blogs/vitepress/**.md');
console.log(modules);

// https://vitepress.dev/reference/default-theme-config
export default [
  {
    text: 'vue基础知识',
    collapsed: false,
    items: [
      {
        text: 'vue 3.0',
        link: '',
      },
    ],
  },
] as DefaultTheme.Sidebar;

import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: 'vitepress',
    link: '/blogs/vitepress/项目初始化',
    activeMatch: '/blogs/vitepress/',
  },
] as DefaultTheme.NavItem[];

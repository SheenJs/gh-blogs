import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: 'vitepress',
    activeMatch: '/blogs/',
    items: [{ text: '起步', link: '/blogs/vitepress/1.起步', activeMatch: '/vitepress/' }],
  },
] as DefaultTheme.NavItem[];

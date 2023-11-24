import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  { text: 'UI库', link: '/ghui/搭建组件库流程', activeMatch: '/ghui/' },
  {
    text: '博客',
    activeMatch: '/blogs/',
    items: [
      { text: 'html', link: '/a' },
      { text: 'css', link: '/blogs/css/常用片段', activeMatch: '/css/' },
      { text: 'JavaScript', link: '/blogs/js/JS基础', activeMatch: '/js/' },
      { text: 'vue', link: '/blogs/vue/vue3', activeMatch: '/vue/' },
      { text: 'vite', link: '/blogs/vite/vite' },
      { text: 'mini program', link: '/blogs/miniprogram/base', activeMatch: '/miniprogram/' },
      { text: 'algorithm', link: '/a' },
      { text: 'uniApp', link: '/a' },
      { text: 'flutter', link: '/a' },
      { text: 'react', link: '/a' },
      { text: 'compiler', link: '/a' },
      { text: 'vitepress', link: '/blogs/vitepress/起步', activeMatch: '/vitepress/' },
      { text: 'git', link: '/blogs/git' },
      { text: 'back-end', link: '/b' },
    ],
  },
] as DefaultTheme.NavItem[];

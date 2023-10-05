import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: 'home', link: '/' },
  { text: 'GHUI', link: '/ghui/搭建组件库流程', activeMatch: '/ghui/' },
  {
    text: 'blogs',
    activeMatch: '/css/',
    items: [
      { text: 'html', link: '/a' },
      { text: 'css', link: '/css/常用片段', activeMatch: '/css/' },
      { text: 'JavaScript', link: '/js/JS基础', activeMatch: '/js/' },
      { text: 'vue', link: '/a' },
      { text: 'vite', link: '/a' },
      { text: 'mini program', link: '/a' },
      { text: 'algorithm', link: '/a' },
      { text: 'UniApp', link: '/a' },
      { text: 'flutter', link: '/a' },
      { text: 'react', link: '/a' },
      { text: 'compiler', link: '/a' },
      { text: 'vitepress', link: '/vitepress/起步', activeMatch: '/vitepress/' },
      { text: 'back-end', link: '/b' },
    ],
  },
] as DefaultTheme.NavItem[];

import type { DefaultTheme } from 'vitepress';

import nav from './nav';
import sidebar from './sidebar';
import socialLinks from './socialLinks';

// https://vitepress.dev/reference/default-theme-config
export default {
  logo: '/logo.webp', //logo
  //开启本地搜索
  search: {
    provider: 'local',
  },
  nav, //头部导航
  sidebar, //侧边栏
  socialLinks, //项目仓库地址
  outline: 'deep',
  outlineTitle: '章节导航', // 文章导航提示
  docFooter: {
    prev: '←上一篇',
    next: '下一篇→',
  }, //自定义上一篇下一篇按钮文字
  lastUpdatedText: '上次更新时间',
  //跳转到仓库编辑
  editLink: {
    text: '在github编辑该页面',
    pattern: 'https://github.com/SheenJs/gh-blogs/tree/main/src/:path',
  },
  markdown: {
    lineNumbers: true,
  },
  // 底部配置
  footer: {
    message: '',
    copyright: 'Copyright © 2023 YGHHJS',
  },
} as DefaultTheme.Config;

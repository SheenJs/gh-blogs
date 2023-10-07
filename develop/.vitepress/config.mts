import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/gh-blogs', //网站base url,如果你想部署到码云、github,需要与仓库名一样
  outDir: './../docs', //打包输出目录
  title: 'GH BLOGS', //网站标题
  titleTemplate: 'A blog site of Wu Guanghui', //网站副标题
  description: 'A blog site of Wu Guanghui',
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    }, //markdown中使用代码块
    lineNumbers: true,
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
  head: [['link', { rel: 'icon', href: './logo.webp' }]], //网页logo配置,浏览器tab页logo
  themeConfig, //主题配置
});

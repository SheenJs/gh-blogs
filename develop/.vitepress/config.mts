import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/gh-blogs',
  outDir: './../docs',
  title: 'title',
  description: 'description',
  markdown: {
    // 代码块插件
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
  head: [['link', { rel: 'icon', href: './logo.webp' }]],
  themeConfig,
});

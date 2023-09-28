import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: './',
  outDir: './../docs',
  title: 'GH BLOGS',
  description: 'A blog site of Wu Guanghui',
  markdown: {
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

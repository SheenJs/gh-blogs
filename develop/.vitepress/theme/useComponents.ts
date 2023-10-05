// Don't remove this file, because it registers the demo components.
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Antd from 'ant-design-vue';
import gitTalk from '../../components/gittalk.vue';

export function useComponents(app) {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.use(Antd);
  app.component('git-talk', gitTalk);
}

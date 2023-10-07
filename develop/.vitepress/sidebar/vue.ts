import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-config
export default [
  {
    items: [
      {
        text: 'vue 2.*',
        items: [
          {
            text: '2.**',
          },
        ],
      },
      {
        text: 'vue 3.*',
        link: '/blogs/vue/vue3',
        items: [
          {
            text: '3.3',
          },
        ],
      },
      {
        text: 'vue-router',
      },
      {
        text: 'pinia',
      },
    ],
  },
  {
    text: '组合式API',
    collapsed: false,
    items: [
      {
        text: 'h()',
        link: '/blogs/vue/h函数',
      },
    ],
  },
  {
    text: '面试题',
    collapsed: false,
    items: [
      {
        text: '待刷题',
      },
    ],
  },
  {
    items: [
      {
        text: 'vue辅助库',
        items: [
          {
            text: 'baidu map',
          },
          {
            text: 'echarts',
            link: '/blogs/vue/echarts/base',
          },
          {
            text: 'swiper',
            link: '/blogs/vue/swiper',
          },
          {
            text: 'vueuse',
          },
          {
            text: 'mockjs',
          },
        ],
      },
      {
        text: 'transition',
      },
    ],
  },
] as DefaultTheme.Sidebar;

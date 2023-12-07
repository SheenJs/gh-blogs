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
            link: '/blogs/vue/vue3_3',
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
    text: '百度地图',
    collapsed: false,
    items: [
      {
        text: '地图初始化',
        link: '/blogs/vue/bMap/1.百度地图初始化',
      },
      {
        text: '地图初始化',
        link: '/blogs/vue/bMap/2.百度地图类型切换',
      },
      {
        text: '控件',
        link: '/blogs/vue/bMap/3.控件',
      },
      {
        text: '拾取经纬度',
        link: '/blogs/vue/bMap/4.拾取经纬度',
      },
      {
        text: '添加清除覆盖物',
        link: '/blogs/vue/bMap/5.添加清除覆盖物',
      },
      {
        text: '区域模式',
        link: '/blogs/vue/bMap/6.区域模式',
      },
    ],
  },
  {
    items: [
      {
        text: 'vue辅助库',
        items: [
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
        items: [
          { text: 'transition基础', link: '/blogs/vue/transition' },
          {
            text: 'transition过渡收集',
          },
        ],
      },
    ],
  },
] as DefaultTheme.Sidebar;

vitepress [中文文档](https://xxy5.com/vitepress-cn/) [官网](https://vitepress.dev/guide/what-is-vitepress)

## Header Anchors

会自动为md文件标题添加锚链接

```md
## 标题
### 板块一
```

## Links

```md
[内部链接](./起步)
[外部链接](https://github.com/vuejs/vitepress)
```

- [内部链接](./起步)
- [外部链接](https://github.com/vuejs/vitepress)



## 表格

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

😁 :100:

[查看所有符号](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)


## 自定义容器

- 默认标题

::: info
This is an info box.
:::
::: tip
This is a tip.
:::
::: warning
This is a warning.
:::
::: danger
This is a dangerous warning.
:::
::: details
This is a details block.
:::

- 自定义标题

::: danger STOP
Danger zone, do not proceed
:::

::: details 查看源码
```js
console.log('Hello, VitePress!')
```
:::

## 代码语法高亮

```html
<span v-for="i in 3">{{ i }}</sspan>
```

```json{3}
{
  "semi": false,
  "overrides": [
    {
      "files": "*.test.js",
      "options": {
        "semi": true
      }
    },
    {
      "files": ["*.html", "legacy/**/*.js"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
```

## 给代码块开启行号

```js
export default defineConfig({
    markdown: {
        lineNumbers: true,
    }
})
```

## 静态资源绝对路径引入

```md
![图片](/logo.webp)
```
![图片](/logo.webp)

## 使用vue

```md
{{1 + 1}}
```
{{1 + 1}}

## 局部组件
<SvgLoading />
```md
<SvgLoading />
<script setup>
    import SvgLoading from '/components/css/SvgLoading.vue';
</script>
```

## 使用第三方组件库

- 全局引入

```ts
// /theme/index.ts
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
// @ts-ignore
import { useComponents } from './useComponents';
import './style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
      app.use(Antd);
  },
};
```

- md中直接使用
```markdown
<a-button>这是一个按钮</a-button>
```
<a-button>这是一个按钮</a-button>

## 使用demo

- 安装插件 `vitepress-theme-demoblock`
```bash
pnpm i -D vitepress-theme-demoblock
```

- 全局注册
```ts
// /theme/index.ts
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
// @ts-ignore
import { useComponents } from './useComponents';
import './style.css';
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
      app.component('Demo', Demo);
      app.component('DemoBlock', DemoBlock);
  },
};
```

- 用例

:::demo
```vue
<template>
  <div class="container" ref="charRef"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useECharts } from '../utils/useECharts';
  const charRef = ref();
  onMounted(() => {
    useECharts(charRef.value, {
      title: {
        text: '柱形图',
      },
      xAxis: {
        // x轴
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        // y轴
      },
      series: {
        // 图表类型
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    });
  });
</script>

<style lang="less" scoped>
  .container {
    height: 400px;
  }
</style>
```
:::

## code-group

::: code-group
```sh [npm]
$ npm add -D vitepress
$ npx vitepress init
```
```sh [pnpm]
$ pnpm add -D vitepress
$ pnpm dlx vitepress init
```
:::

<git-talk />

<script setup>
import {ref} from "vue"; 
import SvgLoading from '/components/css/SvgLoading.vue';
</script>

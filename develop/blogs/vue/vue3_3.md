# vue 3.3

## 导入复杂类型支持
* 组件
```vue
<script setup lang="ts">
  // type Props = {
  //   name: string;
  //   age: number;
  // };
  import { Props } from './type';

  // imported + intersection type
  defineProps<Props & { extraProp: string }>();
</script>
```
* 使用
```vue
<script lang="ts" setup>
  import ImportedAndComplexTypesSupport from './ImportedandComplexTypesSupport.vue';
</script>

<template>
  <ImportedAndComplexTypesSupport
    :age="18"
    name="哈哈哈"
    extra-prop=""
  ></ImportedAndComplexTypesSupport>
</template>
```

## DefineEmits

* 组件
```vue
<script setup lang="ts">
  const emits = defineEmits<{
    change: [num: number];
    update: [num: number, ...reset: any[]];
  }>();
</script>

<template>
  <a-button @click="emits('change', 666)">change</a-button>
  <a-button @click="emits('update', 666, 7777, '哈哈哈')">update</a-button>
</template>

<style scoped lang="less"></style>
```
* 使用
:::demo
```vue
<template>
  <DefineEmits @change='change' @update='update'></DefineEmits>
</template>
<script lang='ts' setup>
  import DefineEmits from './components/DefineEmits.vue';
  const change = (e) => {
    console.log(e)
  }
  const update = (a,b,c) => {
    console.log(a,b,c)
  }
</script>
```
:::

## Reactive Props

* 开启自定义属性结构解析
```js
// vite
defineConfig({
  // ...
  plugins: [
    vue({
      reactivityTransform: true,
    }),]
  // ...
})
// vitepress
export default defineConfig({
  // ...
  vue: {
    script: {
      propsDestructure: true,
    },
  },
  // ...
});
```

* 组件

```vue
<script setup lang="ts">
  //💥自定义属性机构赋值
  const { name, age } = defineProps<{
    name: string;
    age: number;
  }>();
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>
```

* 使用

:::demo

```vue

<template>
  <a-button @click='change'>change</a-button>
  <ReactiveProps v-bind='user'></ReactiveProps>
</template>
<script lang='ts' setup>
  import ReactiveProps from './components/ReactiveProps.vue';
  import { ref } from 'vue';

  const user = ref({
    name: 1,
    age: 18
  })

  const change = () => {
    user.value = {
      name: Math.random(),
      age: Math.random()
    }
  }
</script>
```
:::


## defineModel





# Transition

> `<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：
> - 由 v-if 所触发的切换
> - 由 v-show 所触发的切换
> - 由特殊元素 `<component>` 切换的动态组件
> - 改变特殊的 key 属性

:::demo
```vue
<template>
  <button @click="show = !show">Toggle</button>
  <transition>
    <div v-if="show">1</div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const show = ref(true);
</script>
<style>
  /* 下面我们会解释这些 class 是做什么的 */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
```
:::

# 赛贝尔曲线

:::demo
```vue
<template>
  <div ref="helloChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useECharts } from '/utils/useECharts';
  
  let chart;
  const helloChartRef = ref();
  const theme = ref('dark');

  onMounted(() => {
    chart = useECharts(helloChartRef.value,{
      title: {
        text: '自定义主题 JS版',
      },
      xAxis: {
        // x轴
      },
      yAxis: {
        // y轴
      },
      series: [
        {
          graphic: 'bezierCurve',
          shape: {
            x1: 100, y1: 100, x2: 300, y2: 300,
          },
          style: {
            stroke: 'red',
            lineWidth: 2
          }
        }
      ],
    })
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>
```
:::


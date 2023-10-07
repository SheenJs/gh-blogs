# echarts

## 基本使用

:::demo
```vue
<template>
  <a-select v-model:value="theme">
    <a-select-option value="dark">dark</a-select-option>
    <a-select-option value="infographic">infographic</a-select-option>
  </a-select>
  <div ref="helloChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import {useECharts} from '/utils/useECharts';
  import { HELLO_WORD } from './data'

  let chart;
  const helloChartRef = ref();
  const theme = ref('dark');

  onMounted(() => {
    chart = useECharts(helloChartRef.value,HELLO_WORD)
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>
```
:::


## 使用插件
:::demo
```vue
<template>
  <div ref="pluginChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {useECharts} from '/utils/useECharts';
import { ECHARTS_PLUGIN } from './data'

let chart;
const pluginChartRef = ref();

onMounted(() => {
  chart = useECharts(pluginChartRef.value,ECHARTS_PLUGIN)
});
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
```
:::

## 标题&定位

:::demo
```vue
<template>
  <div ref="titlePositionRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { ECHARTS_LOCATION_TITLE } from './data'

let chart;
const titlePositionRef = ref();

onMounted(() => {
  chart = useECharts(titlePositionRef.value,ECHARTS_LOCATION_TITLE)
});
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
```
:::

## 横坐标

:::demo
```vue
<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { ECHARTS_xAxis } from './data'

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,ECHARTS_xAxis)
});
</script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
```
:::

## 纵坐标

:::demo
```vue
<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { ECHARTS_yAxis } from './data'

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,ECHARTS_yAxis)
});
</script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
```
:::

## Series

:::demo
```vue
<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { ECHARTS_Series } from './data'

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,ECHARTS_Series)
});
</script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
```
:::

## 横向柱形图

:::demo
```vue
<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { Echarts_HorizontalBar } from './data'

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,Echarts_HorizontalBar)
});
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
```
:::


## 使用多个x轴实现15日内的天气预报

:::demo
```vue
<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import { WEATHER_POTION } from './data'

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,WEATHER_POTION)
});
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
```
:::

<git-talk />

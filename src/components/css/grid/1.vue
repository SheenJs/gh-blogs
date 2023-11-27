<script setup lang="ts">
  import mock from 'mockjs';
</script>

<template>
  <div class="container" v-bind="$attrs">
    <div
      class="item"
      :style="{ background: mock.mock('@color') }"
      v-for="i in 9"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    display: grid; // grid | subgrid |inline-grid
    height: 300px;
    grid-template-columns: repeat(3, calc(100% / 3)); /* 列宽 */
    grid-template-rows: repeat(3, calc(100% / 3)); /* 行高 */
    .item {
      height: 100px;
      border: pink;
    }
  }
</style>

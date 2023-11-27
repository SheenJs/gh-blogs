<script setup lang="ts">
  import mock from 'mockjs';
</script>

<template>
  <div class="container">
    <div
      class="item"
      :style="{ background: mock.mock('@color'), gridArea: i }"
      v-for="i in ['a', 'b', 'c', 'd', 'e']"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped lang="less">
  * {
    box-sizing: border-box;
  }
  .container {
    display: grid;
    height: 300px;
    grid-template-columns: repeat(3, calc(100% / 3));
    grid-template-rows: repeat(3, 100px);
    grid-template-areas:
      'b a c'
      'b e e'
      'd d d';
  }
</style>

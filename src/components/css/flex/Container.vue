<script setup lang="ts">
  import mock from 'mockjs';
</script>

<template>
  <div class="container" v-bind="$attrs">
    <div
      class="item"
      :style="{ height: `${mock.Random.integer(50, 100)}px` }"
      v-for="i in 18"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    display: flex;
    height: 500px;
    box-sizing: border-box;
    .item {
      width: calc((100% - 50px) / 5);
      box-sizing: border-box;
      height: 100px;
      background: pink;
      margin: 10px 10px 0 0;
    }
  }
</style>

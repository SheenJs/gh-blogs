<script setup lang="ts">
  import { ref } from 'vue';

  const cursorList = [
    'default',
    'auto',
    'crosshair',
    'pointer',
    'move',
    'e-resize',
    'ne-resize',
    'nw-resize',
    'n-resize',
    'se-resize',
    'sw-resize',
    's-resize',
    'w-resize',
    'text',
    'wait',
    'help',
  ];

  const cursor = ref<string>('default');
</script>

<template>
  <div class="box">
    <div class="test"></div>
    <a-select v-model:value="cursor">
      <a-select-option :value="item" v-for="item in cursorList">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped lang="less">
  .box {
    display: flex;
    align-items: center;
    .test {
      width: 100px;
      height: 100px;
      display: inline-block;
      background: pink;
      cursor: v-bind(cursor);
    }
  }
</style>

<script setup lang="ts">
  import Item from './Item.vue';
</script>

<template>
  <div class="container">
    <Item v-for="i in 3">{{ i }}</Item>
  </div>
</template>

<style scoped lang="less">
  .container {
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    border: 1px solid sandybrown;
  }
</style>

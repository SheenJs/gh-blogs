<template>
  <div class="loading__x">
    <div class="main">
      <div class="loading-item" v-for="comp in CSSLoadings">
        <component :is="comp"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { CSSLoadings } from './comp';
</script>

<style lang="less" scoped>
  .main {
    display: flex;
    flex-wrap: wrap;
    :deep(.com__box) {
      width: 100px;
      height: 100px;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      .explain {
        display: none;
      }
    }
  }
</style>

<script setup lang="ts">
  import mock from 'mockjs';
</script>

<template>
  <div class="container">
    <div
      class="col"
      v-for="i in 3"
      :key="i"
      :style="{ background: mock.mock('@color') }"
    >
      <div
        :style="{
          background: mock.mock('@color'),
          height: `${mock.Random.integer(200, 300)}px`,
        }"
      >
        other
      </div>
      <div style="color: white">target</div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .col {
      width: calc(100% / 3);
      height: 100%;
      div:nth-child(2) {
        background: blue;
      }
    }
    & > .col:nth-child(1) {
      div:nth-child(1) {
        height: 400px !important;
      }
      div:nth-child(2) {
        height: calc(100% - 400px);
      }
    }
    & > .col:nth-child(2) {
      display: flex;
      flex-direction: column;
      div:nth-child(2) {
        flex: 1;
      }
    }
    & > .col:nth-child(3) {
      display: grid;
      grid-template-rows: 200px auto;
    }
  }
</style>

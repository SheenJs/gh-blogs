<script setup lang="ts">
  import { ref } from 'vue';
  import { list } from './data';
  import { chatDateFormat, dateFormat } from './utils';
  const chatRecord = ref(list());
</script>

<template>
  <div class="container">
    <div class="item" v-for="{ name, time, img, content } in chatRecord">
      <img :src="img" />
      <div class="item-right">
        <div class="item-right-top">
          <div>{{ name }}</div>
          <span>
            {{ dateFormat('yyyy-MM-DD hh:mm', time) }} |
            <span style="color: red">{{ chatDateFormat(time) }}</span>
          </span>
        </div>
        <div class="content">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    max-height: 600px;
    overflow-y: scroll;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px #aaaaaa solid;
      img {
        width: 120px;
        height: 120px;
      }
      .item-right {
        width: calc(100% - 140px);
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item-right-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            font-size: 18px;
            font-weight: bold;
          }
          span {
            color: #aaa;
          }
        }
        .content {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>

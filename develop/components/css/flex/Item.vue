<script setup lang="ts">
  import mock from 'mockjs';
  import { ref } from 'vue';
  const order = ref(0);
  const flexGrow = ref(0);
  const flexShrink = ref(1);
  const align_self = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
  const alignSelf = ref('auto');
</script>

<template>
  <div class="item" :style="{ height: `${mock.Random.integer(80, 150)}px`, alignSelf }">
    <div>order:<input title="order" v-model="order" placeholder="order" /></div>
    <div>
      flexGrow:
      <input title="flex-grow" v-model="flexGrow" placeholder="flexGrow" />
    </div>
    <div>
      flexShrink:
      <input title="flex-grow" v-model="flexShrink" placeholder="flexShrink" />
    </div>
    <Select v-model:value="alignSelf" style="width: 100px">
      <SelectOption v-for="item in align_self" :value="item">
        {{ item }}
      </SelectOption>
    </Select>
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
  .item {
    width: 150px;
    background: pink;
    text-align: center;
    margin-left: 10px;
    order: v-bind(order);
    flex-grow: v-bind(flexGrow);
    flex-shrink: v-bind(flexShrink);
    > div {
      display: flex;
      align-items: center;
      input {
        width: 50px;
      }
    }
  }
</style>

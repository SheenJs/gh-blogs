<template>
  <div class="content">
    <div class="opt">
      <AButton @click="fn">执行</AButton>
    </div>

    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );

  const fn = () => {
    const { method, value } = props;

    if (method === 'splice') {
      list.value?.[method](...value);
    } else {
      list.value?.[method](
        value
          ? value
          : {
              value: mock.Random.integer(0, 50),
              color: mock.mock('@color'),
            }
      );
    }
  };
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>

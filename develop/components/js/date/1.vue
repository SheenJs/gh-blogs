<script setup lang="ts">
  import { ref } from 'vue';
  import { dateFormat } from './utils';

  const star = new Date('2023-03-01');
  const end = new Date('2023-07-05');

  const realStar = ref(
    dateFormat(
      'yyyy-MM-DD',
      star.setDate(star.getDate() - [6, 0, 1, 2, 3, 4, 5][star.getDay()])
    )
  );

  const realEnd = ref(
    dateFormat(
      'yyyy-MM-DD',
      end.setDate(end.getDate() + [0, 6, 5, 4, 3, 2, 1][end.getDay()])
    )
  );
</script>

<template>
  <h3>开始时间</h3>
  {{ realStar }}
  <h3>结束时间</h3>
  {{ realEnd }}
</template>

<style scoped lang="less"></style>

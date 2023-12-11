<script setup lang="ts">
  import { createOverload } from './utils';
  const getUsers = createOverload();
  getUsers.addImpl('number', 'number', (a, b) => {
    console.log('按照页码和数量查询', a, b);
  });
  getUsers.addImpl('string', (name) => {
    console.log('根据姓名查询', name);
  });

  getUsers(1, 2);
  getUsers('吴光辉');
</script>

<template></template>

<style scoped lang="less"></style>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  const list = ref([1, 2, 3, 4, 5]);

  const contentRef = ref<HTMLElement>();
  const source = ref();
  const children = ref();

  onMounted(() => {
    contentRef.value.addEventListener('dragstart', (e: DragEvent) => {
      e.target.classList.add('dragging');
    });
  });

  // const dragstart = (e: DragEvent) => {
  //   source.value = e.target;
  //   children.value = Array.from(contentRef.value.children);
  //   setTimeout(() => {
  //     e.target.classList.add('dragging');
  //   });
  // };
  //
  // const dragend = (e: DragEvent) => {
  //   children.value.forEach((item) => {
  //     item.classList.remove('cover');
  //   });
  //   e.target.classList.remove('dragging');
  // };
  //
  // const dragover = (e: any) => {
  //   if (e.target === contentRef.value) return;
  //   children.value.forEach((item) => {
  //     item.classList.remove('cover');
  //   });
  //   e.target.classList.add('cover');
  // };
</script>

<template>
  <div ref="contentRef" class="container">
    <div class="item" draggable="true" v-for="i in list" :key="i">
      {{ i }}
    </div>
  </div>
</template>

<style scoped lang="less">
  .item {
    height: 50px;
    margin: 10px 0;
    border: 1px solid #f2a579;
    user-select: none;
    border-radius: 8px;
  }

  .dragging {
    opacity: 0.5;
  }

  .cover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
</style>

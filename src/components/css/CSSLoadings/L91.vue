<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L91.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    border: 24px solid #ddd;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>

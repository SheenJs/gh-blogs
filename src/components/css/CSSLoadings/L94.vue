<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L94.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }

  .loading::after,
  .loading::before {
    content: '';
    width: 48px;
    height: 48px;
    border: 2px solid #ddd;
    position: absolute;
    left: 0;
    top: 0;
    animation: rotation 2s ease-in-out infinite alternate;
  }

  .loading::after {
    border-color: #ff3d00;
    animation-direction: alternate-reverse;
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

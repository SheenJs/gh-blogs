<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L64.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid #000;
    border-top: 2px solid #000;
    animation: loading-animation 1.8s ease-in-out infinite alternate;
  }

  .loading:before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 0px;
    right: 0px;
    bottom: 5px;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
  }

  @keyframes loading-animation {
    from {
      -webkit-transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(720deg);
    }
  }
</style>

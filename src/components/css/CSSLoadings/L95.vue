<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L95.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 2px solid #ddd;
    animation: rotation 2s linear infinite;
  }

  .loading:after,
  .loading:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid #ff3d00;
    width: 38px;
    height: 38px;
    animation: rotationBack 1.5s linear infinite;
    transform-origin: center center;
  }

  .loading:before {
    width: 28px;
    height: 28px;
    border-color: #ddd;
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

  @keyframes rotationBack {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
</style>

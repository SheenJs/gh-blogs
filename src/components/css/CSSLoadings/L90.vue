<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L90.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    width: 48px;
    height: 48px;
    border-width: 3px;
    border-style: dashed solid solid dotted;
    border-color: #ff3d00 #ff3d00 transparent #ff3d00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    animation: rotation 1s linear infinite;
  }

  .loading:after {
    content: '';
    position: absolute;
    left: 30px;
    top: 32px;
    border: 10px solid transparent;
    border-right-color: #ff3d00;
    -webkit-transform: rotate(-40deg);
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

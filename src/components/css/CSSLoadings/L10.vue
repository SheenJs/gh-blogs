<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L10.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    position: relative;
    width: 50px;
    perspective: 200px;
  }

  .loading:before,
  .loading:after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: '';
    animation: jumping 0.5s infinite alternate;
    background: rgba(0, 0, 0, 0);
  }

  .loading:before {
    left: 0;
  }

  .loading:after {
    right: 0;
    animation-delay: 0.15s;
  }

  @keyframes jumping {
    0% {
      -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
      -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
      background: #000;
      box-shadow: 0 25px 40px #000;
    }
  }
</style>

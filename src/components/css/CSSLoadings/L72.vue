<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L72.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .shape {
    width: 13px;
    height: 13px;
    position: absolute;
    border-radius: 2px;
  }

  .shape-1 {
    background-color: #1875e5;
    left: 0;
    animation: animationShape1 2s linear infinite;
  }

  .shape-2 {
    background-color: #c5523f;
    right: 0;
    animation: animationShape2 2s linear infinite;
  }

  .shape-3 {
    background-color: #499255;
    bottom: 0;
    animation: animationShape3 2s linear infinite;
  }

  .shape-4 {
    background-color: #f2b736;
    right: 0;
    bottom: 0;
    animation: animationShape4 2s linear infinite;
  }

  @keyframes animationShape1 {
    0% {
      -webkit-transform: translate(0);
    }

    25% {
      -webkit-transform: translateX(17px);
    }

    50% {
      -webkit-transform: translate(17px, 17px);
    }

    75% {
      -webkit-transform: translate(0, 17px);
    }

    100% {
      -webkit-transform: translateX(0);
    }
  }

  @keyframes animationShape2 {
    0% {
      -webkit-transform: translate(0);
    }

    25% {
      -webkit-transform: translateY(17px);
    }

    50% {
      -webkit-transform: translate(-17px, 17px);
    }

    75% {
      -webkit-transform: translate(-17px, 0);
    }

    100% {
      -webkit-transform: translate(0);
    }
  }

  @keyframes animationShape3 {
    0% {
      -webkit-transform: translate(0);
    }

    25% {
      -webkit-transform: translateY(-17px);
    }

    50% {
      -webkit-transform: translate(17px, -17px);
    }

    75% {
      -webkit-transform: translate(17px, 0);
    }

    100% {
      -webkit-transform: translate(0);
    }
  }

  @keyframes animationShape4 {
    0% {
      -webkit-transform: translate(0);
    }

    25% {
      -webkit-transform: translateX(-17px);
    }

    50% {
      -webkit-transform: translate(-17px, -17px);
    }

    75% {
      -webkit-transform: translate(0, -17px);
    }

    100% {
      -webkit-transform: translate(0);
    }
  }
</style>

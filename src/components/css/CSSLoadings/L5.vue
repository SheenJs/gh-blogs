<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L5.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .loading:before,
  .loading:after {
    position: absolute;
    width: 10px;
    height: 10px;
    content: '';
    border-radius: 100%;
    background-color: #000;
  }

  .loading:before {
    -webkit-transform: translate(0, 0);
    animation: ball-circle-before infinite 1.5s linear;
  }

  .loading:after {
    -webkit-transform: translate(30px, 30px);
    animation: ball-circle-after infinite 1.5s linear;
  }

  @keyframes ball-circle-after {
    0% {
      -webkit-transform: translate(30px, 30px);
    }

    25% {
      -webkit-transform: translate(0, 30px);
    }

    50% {
      -webkit-transform: translate(0, 0);
    }

    75% {
      -webkit-transform: translate(30px, 0);
    }

    100% {
      -webkit-transform: translate(30px, 30px);
    }
  }

  @keyframes ball-circle-before {
    0% {
      -webkit-transform: translate(0, 0);
    }

    25% {
      -webkit-transform: translate(30px, 0);
    }

    50% {
      -webkit-transform: translate(30px, 30px);
    }

    75% {
      -webkit-transform: translate(0, 30px);
    }

    100% {
      -webkit-transform: translate(0, 0);
    }
  }
</style>

<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- 说明：组件名 -->
    <h4 class="explain">L20.vue</h4>
  </div>
</template>

<style lang="less" scoped>
  .loading,
  .loading > div {
    position: relative;
    box-sizing: border-box;
  }

  .loading {
    display: block;
    font-size: 0;
    color: #000;
  }

  .loading.la-dark {
    color: #333;
  }

  .loading > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .loading {
    width: 54px;
    height: 18px;
  }

  .loading > div {
    width: 10px;
    height: 10px;
    margin: 4px;
    border-radius: 100%;
    opacity: 0;
    animation: ball-fall 1s ease-in-out infinite;
  }

  .loading > div:nth-child(1) {
    animation-delay: -200ms;
  }

  .loading > div:nth-child(2) {
    animation-delay: -100ms;
  }

  .loading > div:nth-child(3) {
    animation-delay: 0ms;
  }

  @keyframes ball-fall {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-145%);
    }

    10% {
      opacity: 0.5;
    }

    20% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }

    80% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }

    90% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(145%);
    }
  }
</style>

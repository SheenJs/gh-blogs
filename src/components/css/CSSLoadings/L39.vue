<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L39.vue</h4>
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
    width: 32px;
    height: 32px;
    animation: ball-spin-rotate 2s infinite linear;
  }

  .loading > div {
    position: absolute;
    top: 0;
    width: 60%;
    height: 60%;
    border-radius: 100%;
    animation: ball-spin-bounce 2s infinite ease-in-out;
  }

  .loading > div:last-child {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
  }

  .loading.la-sm {
    width: 16px;
    height: 16px;
  }

  .loading.la-2x {
    width: 64px;
    height: 64px;
  }

  .loading.la-3x {
    width: 96px;
    height: 96px;
  }

  @keyframes ball-spin-rotate {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes ball-spin-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }

    50% {
      -webkit-transform: scale(1);
    }
  }
</style>

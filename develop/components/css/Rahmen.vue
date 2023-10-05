<template>
  <div class="box"></div>
</template>

<style scoped lang="less">
  .box {
    width: 300px;
    height: 200px;
    background: url('./assets/image/img.png') no-repeat left center / auto 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .box::after {
    content: '';
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    left: 15px;
    top: 15px;
    border: 10px solid white;
    position: absolute;
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4);
  }
</style>

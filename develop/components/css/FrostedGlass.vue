<template>
  <div class="box">
    <div class="test"></div>
  </div>
</template>

<style scoped lang="less">
  .box {
    width: 300px;
    height: 200px;
    background: url('./assets/image/img.png') no-repeat left center / auto 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .test {
      width: 150px;
      height: 100px;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 30px 10px #0000004d;
      border-radius: 8px;
    }
  }
</style>

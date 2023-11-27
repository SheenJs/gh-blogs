<template>
  <div class="container">
    <div class="sifter sifter1">
      <div class="dot"></div>
    </div>
    <div class="sifter sifter2">
      <div class="dot" v-for="i in 2"></div>
    </div>
    <div class="sifter sifter3">
      <div class="dot" v-for="i in 3"></div>
    </div>
    <div class="sifter sifter4">
      <div v-for="i in 2">
        <div class="dot" v-for="i in 2"></div>
      </div>
    </div>
    <div class="sifter sifter5">
      <div>
        <div class="dot" v-for="i in 2"></div>
      </div>
      <div class="dot"></div>
      <div>
        <div class="dot" v-for="i in 2"></div>
      </div>
    </div>
    <div class="sifter sifter6">
      <div v-for="i in 2">
        <div class="dot" v-for="i in 3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    display: flex;
    justify-content: space-between;
    .sifter {
      border-radius: 20px;
      width: 100px;
      height: 100px;
      border: 2px solid #eee;
      display: flex;
      padding: 10px;
      div.dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #333;
      }
    }
    .sifter1 {
      align-items: center;
      justify-content: center;
    }
    .sifter2 {
      justify-content: space-between;
      div:nth-child(2) {
        align-self: flex-end;
      }
    }
    .sifter3 {
      justify-content: space-between;
      div:nth-child(2) {
        align-self: center;
      }
      div:nth-child(3) {
        align-self: flex-end;
      }
    }

    .sifter6,
    .sifter4 {
      flex-direction: column;
      justify-content: space-between;
      > div {
        display: flex;
        justify-content: space-between;
      }
    }

    .sifter5 {
      flex-direction: column;
      justify-content: space-between;
      > div:nth-child(2) {
        align-self: center;
      }
      > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>

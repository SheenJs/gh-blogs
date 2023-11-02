# 刷刷面试题

## type 判断数据类型

```md
String string
Number number
Boolean boolean
BigInt bigint
Symbol symbol
Undefined undefinded
Null object
Object object function
```

## js实现方法重载

:::demo
```vue
<template></template>
<script setup>
function createOverload() {
  const callMap = new Map();
  // 调用
  function overload(...args) {
    const key = args.map((arg) => typeof arg).join(',');
    const fn = callMap.get(key);
    if (fn) {
      return fn.apply(this, args);
    } else {
      new Error('no matching function');
    }
  }
  // 添加实现
  overload.addImpl = function (...args) {
    const fn = args.pop();
    if (typeof fn !== 'function') {
      return;
    }
    const types = args;
    callMap.set(types.join(','), fn);
  };
  return overload;
}
const getUsers = createOverload();
getUsers.addImpl('number', 'number', (a, b) => {
    console.log('按照页码和数量查询', a, b);
});
getUsers.addImpl('string', (name) => {
    console.log('根据姓名查询', name);
});
getUsers(1, 2);
getUsers('吴光辉');
</script>
```
:::

## clientWidth & offsetWidth

:::demo
```vue
<template>
  <div class="container" ref="targetRef">
    <div v-if="current === 'scrollHeight'" class="scrollHeight" :style="{ height: `${width}px` }"></div>
    从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
    蒂姆进入书本，发现自己身处一片神秘的森林。他探索了施了魔法的树木，遇到了会说话的动物和仙女。他沿着一条小路穿过森林，来到了一座城堡，在那里他遇到了一位勇敢的骑士和一位美丽的公主。
    骑士告诉蒂姆，一个邪恶的女巫对城堡施了魔法，他需要蒂姆的帮助来解除诅咒。他们一起寻找线索找到女巫，并发现她藏在一个附近的洞穴里。
    蒂姆和骑士勇敢地进入洞穴，面对女巫。她威胁要把他们变成蟾蜍，但蒂姆并不害怕。他用自己的智慧和敏捷的思维来智胜女巫。
    经过一场惊心动魄的战斗，蒂姆和骑士获得了胜利。他们打破了女巫的诅咒，把城堡恢复到以前的辉煌，并拯救了公主。感激的城堡居民为蒂姆举行了盛大的庆祝活动。
    当蒂姆告别他的新朋友时，他答应有一天会回来再次拜访他们。然后他走出书本，带着对阅读的新的热爱和难忘的冒险经历回到了现实世界。
  </div>
  <div
    v-if="current !== 'scrollHeight'"
    class="rule"
    :style="{
      width: `${width}px`,
    }"
  >
    {{ current }}
  </div>
  <div>
    <a-select v-model:value="current" @change="fn">
      <a-select-option value="clientWidth">clientWidth</a-select-option>
      <a-select-option value="offsetWidth">offsetWidth</a-select-option>
      <a-select-option value="scrollHeight">scrollHeight</a-select-option>
    </a-select>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  const width = ref(0);
  const targetRef = ref();
  const current = ref('clientWidth');

  const fn = (value: string) => {
    width.value = targetRef.value[value];
  };

  onMounted(() => {
    width.value = targetRef.value.clientWidth;
  });
</script>

<style lang="less" scoped>
  .container {
    box-sizing: border-box;
    position: relative;
    height: 100px;
    overflow-y: scroll;
    .scrollHeight {
      width: 10px;
      height: auto;
      background: pink;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .rule {
    display: inline-block;
    text-align: center;
    background: pink;
    margin: 10px 0;
  }
</style>
```
:::

## 防抖
> 事件触发n秒后再去执行回调函数，若在n秒内事件再次触发，则时间重新计时，实质是闭包。结果就是将频繁触发的事件合并为一次，且在最后执行。

:::demo
```vue
<template>
  <a-input placeholder='请输入' @input='fn' />
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const timeOut = ref<any>();
  const fn = (e:InputEvent) => {
    clearTimeout(timeOut.value);
    timeOut.value = setTimeout(() => {
      console.log(e.target.value)
    }, 2000)
  }
</script>
```
:::

## 节流
> 在频繁触发事件中，间隔n秒执行一次回调函数。

:::demo
```vue
<template>
  <a-input placeholder='请输入' @input='fn' />
</template>
<script lang='ts' setup>
  let time = new Date().getTime();
  const fn = (e:InputEvent) => {
    const now = new Date().getTime();
    if(now - time > 2000){
      console.log('节流');
      time = now; 
    }
  }

  // function throttleTimeOut(callback, wait) {
  //   let timeOut;
  //   return function() {
  //     if(!timeOut){
  //       timeOut = setTimeout(() => {
  //         timeOut = null;
  //         callback.apply(this,arguments);
  //       },wait)
  //     }
  //   }
  // }
</script>
```
:::

## 商品飞入购物车特效 TODO

:::demo

```vue

<template>
  <div class='box'>
    <div class='list'>
      <div class='goods-item' v-for='i of 10' :key='i'>
        <div>商品{{i}}</div>
        <div class='add' @click='addCar'>+</div>
      </div>
    </div>
    <div class='car'></div>
  </div>
</template>
<script lang='ts' setup>
  const addCar = (e:PointerEvent) => {
    // content 动画元素添加到这个元素
    const box = document.querySelector('.box');
    // 动画元素
    const plus = document.createElement('div');
    // 购物车
    const car = document.querySelector('.car');
    plus.classList.add('plus');
    plus.innerHTML = `<div class="inner"></div>`;
    // 点击按钮信息
    const targetReact = (e.target as HTMLBRElement).getBoundingClientRect();
    // 购物车位置信息
    const carReact = car.getBoundingClientRect();
    plus.style.setProperty('--left',`${targetReact.left + 5}px`);
    plus.style.setProperty('--top',`${targetReact.top - 20}px`);
    plus.style.setProperty('--x',`${carReact.left - targetReact.left}px`);
    plus.style.setProperty('--y',`${carReact.top - targetReact.top + 25}px`);
    box.appendChild(plus);
    // 动画结束后移除元素
    plus.addEventListener('animationend',() => {
      plus.remove();
    })
  }
</script>
<style lang='less'>
  .box {
    height: 500px;
    position: relative;
    overflow-y: scroll;

    .car {
      width: 50px;
      height: 50px;
      position: absolute;
      background: blue;
      left: 0;
      bottom: 0;
    }
    
    .goods-item {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      user-select: none;

      .add {
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid pink;
        user-select: none;
      }
    }
    
    .plus{
      position: fixed;
      left: var(--left);
      top: var(--top);
      animation: moveY 0.8s cubic-bezier(0.5,-0.5,1,1) forwards;
      .inner{
        width: 40px;
        height: 40px;
        background: pink;
        animation: moveX 0.8s linear forwards;
      }
    }
  }
  
  @keyframes moveY {
    to {
      transform: translateY(var(--y)) ;
    }
  }

  @keyframes moveX {
    to {
      transform: translateX(var(--x)) ;
    }
  }
</style>
```
:::

## keyof基础进阶用法

```typescript
type User = {
  name: string;
  age: number;
  sex: number
}

const user: User = {
  name: 'wgh',
  age: 18,
  sex: 1
};

function getUserProp<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getUserProp(user, 'name');

const key: string = '';
console.log(user[key as keyof User]);
```

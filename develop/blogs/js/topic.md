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

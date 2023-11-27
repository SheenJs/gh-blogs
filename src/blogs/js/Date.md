# date对象

[JSDate内置对象mdn文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 通过学期开始结束时间字符串计算学期周次
### 前言
最近项目中遇到一个需求,就是给两个时间段字符串,学期开始日期和结束日期('2023-03-01','2013-07-05'),计算出学期的周次,若开始日期不是周一,则把该周之前的天步入其中,结尾日期同理。

### 思路
先将字符串用new Date(),创建开学日期对象,在计算出周几,再用setDate方法往前设置到周一,最后得出结果:
```ts
const star = new Date('2023-03-01');
const realStar = star.setDate(star.getDate() - [6, 0, 1, 2, 3, 4, 5][star.getDay()]);
```
结束时间同理:
```ts
const end = new Date('2023-07-05');
const realStar = end.setDate(end.getDate() + [0, 6, 5, 4, 3, 2, 1][end.getDay()]);
```
<A />

## 计算日历月

### 前言
> 之前尝试过用js实现日历,记录一下

<B />

### 关键代码

::: details
```ts
  // 计算本月份有多少天
  const days = (() => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  })();
  // 月表盘尾部计算
  const calendarAfter: number = (() => {
    const lastDay = new Date(data);
    lastDay.setMonth(month);
    lastDay.setDate(days);
    return 6 - lastDay.getDay();
  })();
  // 月表盘头部计算
  const calendarPrevArr: number[] = (() => {
    const firstDay = new Date(data);
    firstDay.setMonth(month);
    firstDay.setDate(1);
    const calendarPrev = firstDay.getDay();
    const temp: number[] = [];
    for (let i = 0; i < calendarPrev; i++) {
      firstDay.setDate(firstDay.getDate() - 1);
      temp.unshift(firstDay.getDate());
    }
    return temp;
  })();
```
:::

### 全部代码

::: details
- vue
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { weeks, DateHelper } from './utils';
  const dateHelper = ref(DateHelper());
</script>

<template>
  <div class="calendar">
    <div class="calendar-week">
      <div class="week-item" v-for="week in weeks" :key="week">
        {{ week }}
      </div>
    </div>
    <div class="calendar-main">
      <div
        class="prev-day"
        v-for="prevDay in dateHelper.calendarPrevArr"
        :key="prevDay"
      >
        {{ prevDay }}
      </div>
      <div class="currentMonth-day" v-for="day in dateHelper.days">
        {{ day + 1 }}
      </div>
      <div class="after-day" v-for="afterDay in dateHelper.calendarAfter">
        {{ afterDay }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .calendar-week {
    display: flex;
    align-items: center;
    div {
      width: calc(100% / 7);
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
    }
  }

  .calendar-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    div {
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
    }
    .after-day,
    .prev-day {
      opacity: 0.5;
    }
  }
</style>
```
- utils
```ts
// utils
export function dateFormat(format, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    day = ['日', '一', '二', '三', '四', '五', '六'];
  return (
    format
      .replace(/YYYY|yyyy/g, Y)
      .replace(/YY|yy/g, Y.substr(2, 2))
      .replace(/MM/g, (M < 10 ? '0' : '') + M)
      .replace(/DD/g, (D < 10 ? '0' : '') + D)
      .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
      .replace(/mm/g, (m < 10 ? '0' : '') + m)
      .replace(/ss/g, (s < 10 ? '0' : '') + s) + `周${day[date.getDay()]}`
  );
}

export const DateHelper = (data = new Date()) => {
  const year = data.getFullYear();
  const month = data.getMonth();
  const date = data.getDate();
  const week = data.getDay();

  const days = (() => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  })();

  const calendarAfter: number = (() => {
    const lastDay = new Date(data);
    lastDay.setMonth(month);
    lastDay.setDate(days);
    return 6 - lastDay.getDay();
  })();

  const calendarPrevArr: number[] = (() => {
    const firstDay = new Date(data);
    firstDay.setMonth(month);
    firstDay.setDate(1);
    const calendarPrev = firstDay.getDay();
    const temp: number[] = [];
    for (let i = 0; i < calendarPrev; i++) {
      firstDay.setDate(firstDay.getDate() - 1);
      temp.unshift(firstDay.getDate());
    }
    return temp;
  })();

  return {
    year,
    month,
    date,
    week,
    days,
    calendarAfter,
    calendarPrevArr,
  };
};
export const weeks: string[] = ['日', '一', '二', '三', '四', '五', '六'];
```
:::

## 计算聊天列表的时间
>之前项目需求类似qq微信格式化聊天列表的时间,就简单尝试着做了一下

<C />

::: details 关键代码
```ts
export function chatDateFormat(t) {
  const date = new Date(t),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = addZero(date.getHours()),
    m = addZero(date.getMinutes()),
    s = addZero(date.getSeconds()),
    day = date.getDay();

  const nowDate = new Date(),
    NY = nowDate.getFullYear(),
    NM = nowDate.getMonth() + 1,
    ND = nowDate.getDate();

  const days = (nowDate.getTime() - date.getTime()) / 1000 / 84000;

  if (days < 1 && ND === D && NY === Y && NM === M) {
    return `${H}:${m}`;
  }
  if ((days < 2 && ND - D === 1) || D - ND > 27) {
    return `昨天 ${H}:${m}`;
  }
  if (1 < days && days <= 7) {
    return `周${weeks[day]} ${H}:${m}`;
  }
  if (days > 7 && Y === NY) {
    return `${M}月${D}日`;
  }
  if (days > 7 && NY > Y) {
    return `${Y}年${M}月${D}日`;
  }
  return '在未来';
}
```
:::

<script setup>
import A from '/components/js/date/1.vue';
import B from '/components/js/date/2.vue';
import C from '/components/js/date/3.vue';
</script>

<git-talk />

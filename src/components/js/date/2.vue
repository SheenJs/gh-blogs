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
        {{ day }}
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

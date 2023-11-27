<template>
  <div class="svg-loader">
    <svg :height="size" :width="size" class="svg-container">
      <circle :cx="r" :cy="r" :r="r - r / 10" class="loader-svg bg"></circle>
      <circle
        :cx="r"
        :cy="r"
        :r="r - r / 10"
        class="loader-svg animate"
      ></circle>
    </svg>
    <!--    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px"-->
    <!--         height="30px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">-->
    <!--				<path opacity="0.2" fill="#FF6700"-->
    <!--              d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946-->
    <!--      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634-->
    <!--      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>-->
    <!--      <path fill="#FF6700" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0-->
    <!--      C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(42.1171 20 20)">-->
    <!--					<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20"-->
    <!--                            to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>-->
    <!--				</path>-->
    <!--			</svg>-->
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, computed } from 'vue';
  const props = withDefaults(defineProps<{ size?: number }>(), {
    size: 20,
  });
  const r = computed(() => props.size / 2);
</script>

<style lang="less" scoped>
  .svg-loader {
    display: flex;
    position: relative;
    align-content: space-around;
    justify-content: center;
  }
  .loader-svg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    fill: none;
    stroke-width: v-bind(r / 10);
    stroke-linecap: round;
    stroke: #ccc;
  }
  .loader-svg.bg {
    stroke-width: v-bind(r / 10);
    stroke: #f2f2f2;
  }
  .animate {
    stroke-dasharray: 242.6;
    animation: fill-animation 1s cubic-bezier(1, 1, 1, 1) 0s infinite;
  }
  @keyframes fill-animation {
    0% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 141.3;
      stroke-dashoffset: 141.3;
    }
    100% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 282.6;
    }
  }
</style>

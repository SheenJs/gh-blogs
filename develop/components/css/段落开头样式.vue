<script setup lang="ts"></script>

<template>
  <div class="container" v-bind="$attrs">
    <slot>
      后来，我在远离家乡的城市安家立业，母亲也稍稍安了心，但牵挂如高飘的风筝，永远挣不脱细长的线绳。去年的秋冬之交，母亲第一次专程来看望我，我早早去车站接了她。由于母亲有晕车症，长途颠簸使得她在汽车上呕吐了一路，待到达家中时，已是面色苍白、四肢无力，但仍然掩抑不了激动喜悦的表情。开始些日子，母亲在家里行为拘束，总是小心翼翼，一次还因为紧张把大米撒了一地。早就听父亲说过，母亲年轻时就是勤快贤能的好手，家务活游刃有余。很明显，母亲并没有把自己当作家的主人，而更像是一位远道而来的客人。接下来的一段时间，在我的精心陪伴下，才逐渐溶解了母亲心中的耿耿心事，我也收获到了满满一箩筐幸福。这也应了一句话：陪伴是最好的孝道。
    </slot>
  </div>
</template>

<style scoped lang="less">
  .container {
    &:first-letter {
      color: red;
      font-size: 30px;
      text-transform: uppercase;
    }
  }
</style>

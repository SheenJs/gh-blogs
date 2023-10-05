# 复选框
<TFrame src='https://guanghuijs.gitee.io/ghui-next/#/checkbox' />

## 基础用法
```vue
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(false);
</script>

<template>
  <HCard :title="`复选框${value}`">
    <HCheckbox v-model:value="value" />
  </HCard>
</template>
```

## 自定义主题
```vue
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(false);
</script>

<template>
  <HCard title="自定义主题">
    <HCheckbox v-model:value="value" theme="pink" />
    <HCheckbox v-model:value="value" theme="red" />
    <HCheckbox v-model:value="value" theme="gold" />
  </HCard>
</template>
```
## 自定义label
```vue
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(false);
</script>

<template>
  <HCard title="自定义label">
    <div class="check-item">
      <HCheckbox v-model:value="value" theme="pink">
        <div class="label">啦啦啦</div>
      </HCheckbox>
    </div>
    <div class="check-item">
      <HCheckbox v-model:value="value" theme="pink">
        <div class="label">啦啦啦</div>
        <div class="label">我是卖包的小行家</div>
      </HCheckbox>
    </div>
  </HCard>
</template>
```


<script setup>
import TFrame from '/components/ghui/Frame.vue';
</script>

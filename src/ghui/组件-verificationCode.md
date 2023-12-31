# Toast（轻提示）
<TFrame src='https://guanghuijs.gitee.io/ghui-next/#/verificationCode' />

## 用例代码
```vue
<template>
  <HCard title="图形验证码">
    <VerificationCode ref="codeRef"></VerificationCode>
  </HCard>
  <HButton block @click="getCode">获取验证码</HButton>
</template>
<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import { toast } from 'vue-ghui';
  import type { TVerificationCode } from 'vue-ghui/type';
  const codeRef = ref<TVerificationCode | null>();
  const getCode = () => {
    const code = unref(codeRef)?.getCode();
    toast({
      message: code as string,
    });
  };
</script>
```

<script setup>
import TFrame from '/components/ghui/Frame.vue';
</script>

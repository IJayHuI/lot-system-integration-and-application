<script setup>
  import { progressData } from '@/storages/LsiaaViewData'
</script>
<template>
  <n-steps :current="progressData.current">
    <n-step title="萌芽预练" />
    <n-step title="新梢引练" />
    <n-step title="生长教练" />
    <n-step title="成熟自练" />
    <n-step title="采摘精练" />
    <n-step title="蓄势拓练" />
  </n-steps>
</template>

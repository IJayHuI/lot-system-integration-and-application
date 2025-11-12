<script setup>
  const appVersion = __APP_VERSION__
</script>
<template>
  <n-space vertical justify="center" align="center" class="h-40 sticky top-0 z-0">
    <n-space justify="center" align="center">
      <img src="/vite.svg" alt="logo" class="w-12 h-12" />
      <span class="text-3xl font-bold">物联网系统集成与应用</span>
    </n-space>
    <span class="text-xl">智评教系统</span>
    <span>系统版本：{{ appVersion }}</span>
  </n-space>
</template>

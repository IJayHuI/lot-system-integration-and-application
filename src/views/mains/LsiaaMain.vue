<script setup>
  import { useThemeVars } from 'naive-ui'

  import LsiaaMenu from '@/components/LsiaaMenu.vue'
  const themeVars = useThemeVars()
</script>
<template>
  <div :style="{ '--bodyColor': themeVars.bodyColor }" class="relative min-h-screen bg-(--bodyColor) z-10">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <n-layout-sider><lsiaa-menu /></n-layout-sider>
        <router-view />
      </n-layout>
    </n-layout>
  </div>
</template>

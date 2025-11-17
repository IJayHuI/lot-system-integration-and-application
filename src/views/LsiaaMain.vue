<script setup>
  import { useThemeVars } from 'naive-ui'

  import LsiaaProgress from '@/components/LsiaaProgress.vue'
  import LsiaaMenu from '@/components/LsiaaMenu.vue'

  import { mainData } from '@/storages/LsiaaViewData'

  const themeVars = useThemeVars()
</script>
<template>
  <div :style="{ '--bodyColor': themeVars.bodyColor }" class="relative min-h-screen bg-(--bodyColor) z-10">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <n-layout-sider><lsiaa-menu /></n-layout-sider>
        <n-layout-content content-class="flex flex-col gap-2 p-2">
          <n-layout-header class="min-h-16 flex items-center text-2xl font-bold !bg-transparent">{{ mainData.projectInfo.fullName }}</n-layout-header>
          <lsiaa-progress />
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup>
  import { useThemeVars } from 'naive-ui'
  import { mainData } from '@/storages/LsiaaViewData'

  import LsiaaMenu from '@/components/LsiaaMenu.vue'
  import LsiaaGroupPerformance from '@/components/LsiaaGroupPerformance.vue'
  import LsiaaMissionInfo from '@/components/LsiaaMissionInfo.vue'
  const themeVars = useThemeVars()
</script>
<template>
  <div :style="{ '--bodyColor': themeVars.bodyColor }" class="relative min-h-screen bg-(--bodyColor) z-10">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <n-layout-sider><lsiaa-menu /></n-layout-sider>
        <n-layout-content v-if="mainData.projectInfo">
          <n-layout-header class="h-16 flex items-center text-2xl pl-2 font-bold">{{ mainData.projectInfo.fullName }}</n-layout-header>
          <n-tabs pane-class="flex flex-col gap-2 !pl-2 !pr-2" animated justify-content="space-evenly">
            <n-tab-pane name="group-performance" tab="小组完成情况"><lsiaa-group-performance /></n-tab-pane>
            <n-tab-pane name="mission-info" tab="任务详情"><lsiaa-mission-info /></n-tab-pane>
          </n-tabs>
        </n-layout-content>
        <n-layout-content v-else content-class="flex items-center justify-center text-3xl font-bold">请选择一个项目</n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

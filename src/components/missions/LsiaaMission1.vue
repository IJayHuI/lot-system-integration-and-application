<script setup>
  import { mainData } from '@/storages/LsiaaViewData'

  import LsiaaProgress from '@/components/LsiaaProgress.vue'
</script>
<template>
  <n-layout-content content-class="flex flex-col gap-2 p-2">
    <n-layout-header class="h-16 flex items-center text-2xl font-bold !bg-transparent">{{ mainData.projectInfo.fullName }}</n-layout-header>
    <lsiaa-progress />
    <n-image class="rounded-lg" width="100%" src="/missions/mission1/image1.png" />
  </n-layout-content>
</template>

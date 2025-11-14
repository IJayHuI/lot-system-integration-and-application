<script setup>
  import LsiaaMission1 from '@/components/missions/LsiaaMission1.vue'
  import LsiaaMission2To8 from '@/components/missions/LsiaaMission2-8.vue'

  import { missionData } from '@/storages/LsiaaViewData'
</script>
<template>
  <div v-if="missionData.key">
    <lsiaa-mission1 v-if="['1'].includes(missionData.key.slice(-1))" />
    <lsiaa-mission2-to8 v-if="['2', '3', '4', '5', '6', '7', '8'].includes(missionData.key.slice(-1))" />
  </div>
  <div v-else class="w-full h-full flex-1 flex items-center justify-center text-3xl font-bold">请选择一个任务</div>
</template>

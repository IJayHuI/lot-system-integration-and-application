<script setup>
  import LsiaaMission1 from '@/components/missions/LsiaaMission1.vue'
  import LsiaaMission2 from '@/components/missions/LsiaaMission2.vue'
  import LsiaaMission3 from '@/components/missions/LsiaaMission3.vue'
  import LsiaaMission4 from '@/components/missions/LsiaaMission4.vue'
  import LsiaaMission5 from '@/components/missions/LsiaaMission5.vue'
  import LsiaaMission6 from '@/components/missions/LsiaaMission6.vue'
  import LsiaaMission7 from '@/components/missions/LsiaaMission7.vue'
  import LsiaaMission8 from '@/components/missions/LsiaaMission8.vue'

  import { missionData } from '@/storages/LsiaaViewData'
</script>
<template>
  <div v-if="missionData.key">
    <div v-if="missionData.key.slice(-1) === '1'">
        <lsiaa-mission1 />
    </div>
    <div v-if="missionData.key.slice(-1) === '2'">
        <lsiaa-mission2 />
    </div>
    <div v-if="missionData.key.slice(-1) === '3'">
        <lsiaa-mission3 />
    </div>
    <div v-if="missionData.key.slice(-1) === '4'">
        <lsiaa-mission4 />
    </div>
    <div v-if="missionData.key.slice(-1) === '5'">
        <lsiaa-mission5 />
    </div>
    <div v-if="missionData.key.slice(-1) === '6'">
        <lsiaa-mission6 />
    </div>
    <div v-if="missionData.key.slice(-1) === '7'">
        <lsiaa-mission7 />
    </div>
    <div v-if="missionData.key.slice(-1) === '8'">
        <lsiaa-mission8 />
    </div>
  </div>
  <div v-else class="w-full h-full flex-1 flex items-center justify-center text-3xl font-bold">请选择一个任务</div>
</template>

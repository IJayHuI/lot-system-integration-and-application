<script setup>
  import { groupPerformanceData } from '@/storages/LsiaaViewData'

  const getType = (score) => {
    if (score >= 80) return 'success'
    if (score >= 60) return 'warning'
    return 'error'
  }
</script>
<template>
  <n-button secondary v-for="group in groupPerformanceData" :type="group.score ? getType(group.score) : 'default'" class="*:w-full min-h-20">
    <div class="w-full flex flex-row items-center justify-between">
      <p class="text-xl">{{ group.name }}</p>
      <div class="flex flex-row gap-2">
        <n-tag size="large" v-for="member in group.groupMembers" round :bordered="false" :type="group.score ? getType(group.score) : 'default'">
          {{ member.name }}
          <template #avatar>
            <n-avatar :src="member.avatar" />
          </template>
        </n-tag>
      </div>
    </div>
  </n-button>
</template>

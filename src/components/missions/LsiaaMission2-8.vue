<script setup>
  import { missionData } from '@/storages/LsiaaViewData'

  const getType = (score) => {
    if (score >= 80) return 'success'
    if (score >= 60) return 'warning'
    return 'error'
  }
</script>
<template>
  <n-split class="mb-4" :min="0.5" :max="0.7" :default-size="0.5" pane1-class="pt-0 pr-2 pb-0 flex flex-col gap-2" pane2-class="pt-0 pb-0 pl-2 flex flex-col gap-2" direction="horizontal">
    <template #1>
      <n-card title="学生作品">
        <n-image-group>
          <n-image class="rounded-lg" width="100%" v-for="image in missionData.mission2To8.studentFiles" :src="image" />
        </n-image-group>
      </n-card>
    </template>
    <template #2>
      <n-card title="智评结果" content-class="flex flex-row gap-4">
        <div>
          <n-progress type="circle" :percentage="missionData.mission2To8.AI.score" :status="getType(missionData.mission2To8.AI.score)" />
        </div>
        <p class="text-base">{{ missionData.mission2To8.AI.text }}</p>
      </n-card>
      <n-card title="学生互评">
        <n-progress type="circle" :percentage="missionData.mission2To8.student.score" :status="getType(missionData.mission2To8.student.score)" />
      </n-card>
      <n-card title="教师评价" content-class="w-full flex flex-row gap-4">
        <n-progress type="circle" :percentage="missionData.mission2To8.teacher.score" :status="getType(missionData.mission2To8.teacher.score)" />
        <div class="flex-1 flex flex-col gap-2">
          <n-input-number v-model:value="missionData.mission2To8.teacher.score" clearable placeholder="请输入分数" />
          <n-input v-model:value="missionData.mission2To8.teacher.text" type="text" placeholder="请输入评语" />
        </div>
      </n-card>
    </template>
  </n-split>
</template>

<script setup>
  import { missionData, mainData } from '@/storages/LsiaaViewData'

  import LsiaaProgress from '@/components/LsiaaProgress.vue'

  const getType = (score) => {
    if (score >= 80) return 'success'
    if (score >= 60) return 'warning'
    return 'error'
  }
</script>
<template>
  <n-layout-content content-class="flex flex-col gap-2 p-2">
    <n-layout-header class="h-16 flex items-center text-2xl font-bold !bg-transparent">{{ mainData.projectInfo.fullName }}</n-layout-header>
    <lsiaa-progress />
    <n-button secondary :type="missionData.mission2To8.score ? getType(missionData.mission2To8.score) : 'default'" class="*:w-full min-h-20">
      <div class="w-full flex flex-row items-center justify-between">
        <p class="text-xl">{{ missionData.mission2To8.groupName }}</p>
        <div class="flex flex-row gap-2">
          <n-tag size="large" v-for="member in missionData.mission2To8.groupMembers" round :bordered="false" :type="missionData.mission2To8.score ? getType(missionData.mission2To8.score) : 'default'">
            {{ member.name }}
            <template #avatar>
              <n-avatar :src="member.avatar" />
            </template>
          </n-tag>
        </div>
      </div>
    </n-button>
    <n-split :min="0.3" :max="0.7" :default-size="0.5" pane1-class="pt-0 pr-2 pb-0 flex flex-col gap-2" pane2-class="pt-0 pb-0 pl-2 flex flex-col gap-2" direction="horizontal">
      <template #1>
        <n-card title="学生作品">
          <div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
            <n-image-group>
              <n-image class="rounded-lg" object-fit="cover" v-for="image in missionData.mission2To8.studentFiles" :src="image" />
            </n-image-group>
          </div>
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
  </n-layout-content>
</template>

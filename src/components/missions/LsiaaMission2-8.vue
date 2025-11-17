<script setup>
  import { missionData } from '@/storages/LsiaaViewData'
  import { ref } from 'vue'

  const showAnswer = ref(false)
  const getType = (score) => {
    if (score >= 90) return 'success'
    if (score >= 70) return 'warning'
    return 'error'
  }
</script>
<template>
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
  <n-split :min="0.3" :max="0.7" :default-size="0.7" pane1-class="pt-0 pr-2 pb-0 flex flex-col gap-2" pane2-class="pt-0 pb-0 pl-2 flex flex-col gap-2" direction="horizontal">
    <template #1>
      <n-card title="学生作品">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
          <n-image-group>
            <n-image class="rounded-lg" object-fit="cover" v-for="image in missionData.mission2To8.studentFiles" :src="image" />
          </n-image-group>
        </div>
      </n-card>
      <n-button type="success" size="large" secondary v-if="missionData.mission2To8.answerFiles && !showAnswer" @click="showAnswer = true">参考答案</n-button>
      <n-card title="参考答案" v-if="missionData.mission2To8.answerFiles && showAnswer">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
          <n-image-group>
            <n-image class="rounded-lg" object-fit="cover" v-for="image in missionData.mission2To8.answerFiles" :src="image" />
          </n-image-group>
        </div>
      </n-card>
    </template>
    <template #2>
      <n-card title="综合评分" content-class="flex flex-col gap-2 text-center" header-class="!text-3xl">
        <template #header-extra>
          <n-gradient-text :type="getType(missionData.mission2To8.score)" :size="32">
            <n-number-animation :from="0" :to="missionData.mission2To8.score" />
          </n-gradient-text>
        </template>
      </n-card>
      <n-card title="智评结果" content-class="flex flex-col gap-2">
        <n-tag size="large" type="error" :bordered="false" v-for="item in missionData.mission2To8.AI">{{ item }}</n-tag>
      </n-card>
      <n-card title="学生互评" content-class="flex flex-col gap-2">
        <n-tag size="large" :bordered="false" v-for="item in missionData.mission2To8.student">{{ item }}</n-tag>
      </n-card>
      <n-card title="教师评价" content-class="w-full flex flex-col gap-2">
        <n-input-number size="large" v-model:value="missionData.mission2To8.teacher.score" :max="100" :min="0" clearable placeholder="请输入分数">
          <template #suffix>分</template>
        </n-input-number>
        <n-progress
          v-if="missionData.mission2To8.teacher.score || missionData.mission2To8.teacher.score > 0"
          type="line"
          :show-indicator="false"
          :percentage="missionData.mission2To8.teacher.score"
          :status="getType(missionData.mission2To8.teacher.score)" />
        <n-input size="large" v-model:value="missionData.mission2To8.teacher.text" type="text" placeholder="请输入评语" />
      </n-card>
    </template>
  </n-split>
</template>

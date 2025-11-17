<script setup>
  import LsiaaRoutes from '@/storages/LsiaaRoutes'
  import LsiaaGroup from '@/storages/LsiaaGroup.json'
  import LsiaaStudent from '@/storages/LsiaaStudent.json'
  import LsiaaGroupPerformance from '@/storages/LsiaaGroupPerformance.json'

  import { groupPerformanceData, mainData, progressData, missionData } from '@/storages/LsiaaViewData'
  import { watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const getType = (score) => {
    if (score >= 80) return 'success'
    if (score >= 60) return 'warning'
    return 'error'
  }

  const handleClickGroup = (group) => {
    if (group.performance?.score) {
      const currentPath = route.path.split('/').filter(Boolean)
      const currentMissionPath = currentPath[1]?.split('/').filter(Boolean)[0] || null
      if (currentMissionPath === 'mission-1') router.push('/mission-1-info')
      else {
        missionData.value.mission2To8 = {
          groupName: group.name,
          groupId: group.id,
          groupMembers: group.groupMembers,
          score: group.performance.score,
          studentFiles: group.performance.studentFiles,
          AI: group.performance.AI,
          student: group.performance.student,
          teacher: group.performance.teacher,
          answerFiles: group.answerFiles
        }
        router.push('/mission-other-info')
      }
    }
  }

  const path = route.path.split('/').filter(Boolean)
  const projectPath = path[0].split('/').filter(Boolean)[0] || null
  const missionPath = path[1]?.split('/').filter(Boolean)[0] || null
  if (projectPath) {
    mainData.value.projectInfo = LsiaaRoutes.find((project) => project.path.split('/').filter(Boolean)[0] === projectPath) || null
    groupPerformanceData.value = LsiaaGroup.map((group) => {
      const groupMembers = LsiaaStudent.filter((student) => student.groupId === group.id)
      return {
        name: group.name,
        id: group.id,
        groupMembers: groupMembers,
        performance: null,
        answerFiles: null
      }
    })
    progressData.value.current = 0
  }
  if (missionPath) {
    const groupPerformance = LsiaaGroupPerformance.find((group) => group.projectId === projectPath).missions.find((mission) => mission.missionId === missionPath)
    groupPerformanceData.value.map((group) => {
      group.performance = groupPerformance.performance.find((g) => g.groupId === group.id)
      group.answerFiles = groupPerformance.answerFiles || null
    })
    progressData.value.current = 4
  }

  watch(
    () => route.path,
    (newPath) => {
      newPath = newPath.split('/').filter(Boolean)
      const newProjectPath = newPath[0].split('/').filter(Boolean)[0] || null
      const newMissionPath = newPath[1]?.split('/').filter(Boolean)[0] || null
      if (newProjectPath) {
        mainData.value.projectInfo = LsiaaRoutes.find((project) => project.path.split('/').filter(Boolean)[0] === newProjectPath) || null
        groupPerformanceData.value = LsiaaGroup.map((group) => {
          const groupMembers = LsiaaStudent.filter((student) => student.groupId === group.id)
          return {
            name: group.name,
            id: group.id,
            groupMembers: groupMembers,
            performance: null,
            answerFiles: null
          }
        })
        progressData.value.current = 0
      }
      if (newMissionPath) {
        const groupPerformance = LsiaaGroupPerformance.find((group) => group.projectId === newProjectPath).missions.find((mission) => mission.missionId === newMissionPath)
        groupPerformanceData.value.map((group) => {
          group.performance = groupPerformance.performance.find((g) => g.groupId === group.id)
          group.answerFiles = groupPerformance.answerFiles || null
        })
        progressData.value.current = 4
      }
    }
  )
</script>
<template>
  <n-button secondary v-for="group in groupPerformanceData" :type="group.performance?.score ? getType(group.performance.score) : 'default'" class="*:w-full min-h-20" @click="handleClickGroup(group)">
    <div class="w-full flex flex-row items-center justify-between">
      <p class="text-xl">{{ group.name }}</p>
      <div class="flex flex-row gap-2">
        <n-tag size="large" v-for="member in group.groupMembers" round :bordered="false" :type="group.performance?.score ? getType(group.performance.score) : 'default'">
          {{ member.name }}
          <template #avatar>
            <n-avatar :src="member.avatar" />
          </template>
        </n-tag>
      </div>
    </div>
  </n-button>
</template>

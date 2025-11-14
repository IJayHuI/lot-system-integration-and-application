<script setup>
  import LsiaaGroup from '@/storages/LsiaaGroup.json'
  import LsiaaGroupPerformance from '@/storages/LsiaaGroupPerformance.json'
  import LsiaaStudent from '@/storages/LsiaaStudent.json'
  import LsiaaClassStructure from '@/storages/LsiaaClassStructure.json'

  import { ref } from 'vue'
  import { mainData, groupPerformanceData, missionData, progressData } from '@/storages/LsiaaViewData'

  const menuOptions = ref(
    LsiaaClassStructure.map((project) => {
      return {
        label: project.name,
        key: project.key,
        children: project.missions?.map((mission) => {
          return {
            label: mission.name,
            key: mission.key
          }
        })
      }
    })
  )
  const handleClick = (key) => {
    missionData.value.key = key
    progressData.value.current = 4
    const groupPerformance = LsiaaGroupPerformance.find((performance) => performance.key === key)
    if (groupPerformance) {
      groupPerformanceData.value.map((group) => {
        group.score = groupPerformance.performance.find((g) => g.groupId === group.id).score
      })
    }
  }
  const handleUpdateExpandedKeys = (key) => {
    const project = LsiaaClassStructure.find((project) => project.key === key[0]) || null
    mainData.value.projectInfo = project
    if (project) {
      const group = LsiaaGroup.map((group) => {
        const groupInfo = LsiaaGroup.find((g) => g.id === group.id)
        const groupMembers = LsiaaStudent.filter((student) => student.groupId === group.id)
        return {
          name: groupInfo.name,
          id: groupInfo.id,
          groupMembers: groupMembers
        }
      })
      groupPerformanceData.value = group
    }
  }
</script>
<template>
  <div class="p-2">
    <img class="rounded-lg" src="/course.jpg" alt="课程图片" />
    <p class="text-xl font-bold">物联网系统集成与应用</p>
  </div>
  <n-menu accordion :options="menuOptions" @update:value="handleClick" @update:expanded-keys="handleUpdateExpandedKeys" />
</template>

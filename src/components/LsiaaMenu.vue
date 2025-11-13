<script setup>
  import LsiaaGroup from '@/storages/LsiaaGroup.json'
  import LsiaaGroupPerformance from '@/storages/LsiaaGroupPerformance.json'
  import LsiaaStudent from '@/storages/LsiaaStudent.json'
  import LsiaaClassStructure from '@/storages/LsiaaClassStructure.json'

  import { ref } from 'vue'
  import { mainData, groupPerformanceData, missionData } from '../storages/LsiaaViewData'

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
  }
  const handleUpdateExpandedKeys = (key) => {
    const project = LsiaaClassStructure.find((project) => project.key === key[0]) || null
    mainData.value.projectInfo = project
    if (project) {
      const projectPerformance = LsiaaGroupPerformance.find((project) => project.projectId === key[0]) || null
      const groupPerformance = projectPerformance.groupPerformances.map((group) => {
        const groupInfo = LsiaaGroup.find((g) => g.id === group.groupId)
        const groupMembers = LsiaaStudent.filter((student) => student.groupId === groupInfo.id)
        return {
          score: group.score,
          name: groupInfo.name,
          groupMembers: groupMembers,
          id: groupInfo.id
        }
      })
      groupPerformanceData.value = groupPerformance
      console.log(groupPerformance)
    }
  }
</script>
<template>
  <n-menu accordion :options="menuOptions" @update:value="handleClick" @update:expanded-keys="handleUpdateExpandedKeys" />
</template>

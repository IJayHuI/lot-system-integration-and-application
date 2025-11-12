<script setup>
  import { ref } from 'vue'
  import LsiaaClassStructure from '@/storages/LsiaaClassStructure.json'
  import { mainData } from '../storages/LsiaaViewData'
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
  const handleClick = (key) => {}
  const handleUpdateExpandedKeys = (key) => {
    mainData.value.projectInfo = LsiaaClassStructure.find((project) => project.key === key[0]) || null
  }
</script>
<template>
  <n-menu accordion :options="menuOptions" @update:value="handleClick" @update:expanded-keys="handleUpdateExpandedKeys" />
</template>

<script setup>
  import { ref } from 'vue'
  import { accountData } from '@/storages/LsiaaViewData'
  import { ArrowForwardIosRound } from '@vicons/material'

  import LsiaaBeian from '@/components/LsiaaBeian.vue'

  const appVersion = __APP_VERSION__
  const active = ref(false)
</script>
<template>
  <n-space vertical justify="center" align="center" class="h-40 sticky top-0 z-0">
    <n-space justify="center" align="center">
      <img src="/vite.svg" alt="logo" class="w-12 h-12" />
      <span class="text-3xl font-bold">物联网系统集成与应用课程智评系统</span>
    </n-space>
    <lsiaa-beian />
    <span>系统版本：{{ appVersion }}</span>
    <n-button round @click="active = true" class="!absolute right-2 top-2 !h-auto" secondary>
      <div class="flex flex-row gap-2 justify-center items-center pt-2 pb-2">
        <n-avatar round :src="accountData.avatar" />
        {{ accountData.nickName }}
      </div>
    </n-button>
  </n-space>
  <n-drawer v-model:show="active" :width="502" placement="right">
    <n-drawer-content body-content-class="flex flex-col gap-2" footer-class="flex flex-col">
      <div class="flex flex-col gap-2 justify-center items-center pt-2 pb-2">
        <n-avatar round :size="100" :src="accountData.avatar" />
        <p class="font-bold text-xl">
          {{ accountData.nickName }}
        </p>
      </div>
      <n-button secondary size="large" icon-placement="right" class="!justify-between">
        <p>个人中心</p>
        <template #icon><ArrowForwardIosRound /></template>
      </n-button>
      <n-button secondary size="large" icon-placement="right" class="!justify-between">
        <p>班级管理</p>
        <template #icon><ArrowForwardIosRound /></template>
      </n-button>
      <template #footer>
        <n-button size="large" type="error" secondary>退出登录</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

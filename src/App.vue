<script setup>
  import { darkTheme, zhCN, dateZhCN, NLoadingBarProvider, NDialogProvider, NConfigProvider, NGlobalStyle, NNotificationProvider, useOsTheme } from 'naive-ui'
  import LsiaaMain from '@/views/LsiaaMain.vue'
  import LsiaaHome from '@/views/LsiaaHome.vue'
  const overTheme = {
    common: {
      borderRadius: '0.5rem'
    },
    Tag: {
      fontSizeLarge: '16px',
      heightLarge: '40px',
      borderRadius: '0.5rem'
    }
  }
</script>
<template>
  <n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="darkTheme" :theme-overrides="overTheme">
    <n-global-style />
    <n-notification-provider>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <lsiaa-home />
          <lsiaa-main />
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

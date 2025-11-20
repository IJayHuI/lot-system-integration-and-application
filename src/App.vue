<script setup>
  import { darkTheme, zhCN, dateZhCN, NSpin, NDialogProvider, NConfigProvider, NGlobalStyle, NNotificationProvider, useOsTheme } from 'naive-ui'
  import LsiaaMain from '@/views/LsiaaMain.vue'
  import LsiaaHome from '@/views/LsiaaHome.vue'

  import { loading } from '@/main'
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
      <n-spin class="!absolute top-0 right-0 bottom-0 left-0" :show="loading.status" :size="200" :rotate="false">
        <n-dialog-provider>
          <lsiaa-home />
          <lsiaa-main />
        </n-dialog-provider>
      </n-spin>
    </n-notification-provider>
  </n-config-provider>
</template>

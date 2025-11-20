import { createApp, computed, ref } from 'vue'
import './style.css'
import App from './App.vue'

import 'vfonts/Lato.css'
import {
  create,
  NGradientText,
  NNumberAnimation,
  NInputNumber,
  NProgress,
  NImageGroup,
  NImage,
  NSteps,
  NStep,
  NAvatar,
  NTag,
  NMenu,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NButton,
  NSpace,
  NInput,
  NIcon,
  NCard,
  NForm,
  NFormItem,
  NDatePicker,
  NSelect,
  NDataTable,
  NTabs,
  NTabPane,
  NUpload,
  NUploadDragger,
  NDrawer,
  NDrawerContent,
  NSplit
} from 'naive-ui'

const naive = create({
  components: [
    NGradientText,
    NNumberAnimation,
    NInputNumber,
    NProgress,
    NImageGroup,
    NImage,
    NSteps,
    NStep,
    NAvatar,
    NTag,
    NMenu,
    NButton,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NSpace,
    NInput,
    NIcon,
    NCard,
    NForm,
    NFormItem,
    NDatePicker,
    NSelect,
    NDataTable,
    NTabs,
    NTabPane,
    NUpload,
    NUploadDragger,
    NDrawer,
    NDrawerContent,
    NSplit
  ]
})

// 全局加载状态
export const loading = ref({
  status: computed(() => {
    return loading.value.projectCount !== 0
  }),
  projectCount: 0,
  delay() {
    return Math.random() * (700 - 50) + 50
  }
})

import router from '@/routes'

createApp(App).use(router).use(naive).mount('#app')

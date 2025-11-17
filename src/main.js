import { createApp } from 'vue'
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

import router from '@/routes'

createApp(App).use(router).use(naive).mount('#app')

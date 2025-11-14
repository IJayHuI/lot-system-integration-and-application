import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vfonts/Lato.css'
import {
  create,
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
createApp(App).use(naive).mount('#app')

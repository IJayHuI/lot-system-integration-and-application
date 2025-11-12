import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vfonts/Lato.css'
import { create, NButton, NSpace, NInput, NIcon, NCard, NForm, NFormItem, NDatePicker, NSelect, NDataTable, NTabs, NTabPane, NUpload, NUploadDragger, NDrawer, NDrawerContent, NSplit } from 'naive-ui'

const naive = create({ components: [NButton, NSpace, NInput, NIcon, NCard, NForm, NFormItem, NDatePicker, NSelect, NDataTable, NTabs, NTabPane, NUpload, NUploadDragger, NDrawer, NDrawerContent, NSplit] })
createApp(App).use(naive).mount('#app')

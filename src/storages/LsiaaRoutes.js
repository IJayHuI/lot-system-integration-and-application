export default [
  {
    fullName: '项目一：西瓜催芽环境监测系统集成与应用',
    path: '/project-1',
    component: () => import('@/components/LsiaaGroup.vue'),
    label: '项目一：西瓜催芽',
    children: []
  },
  {
    fullName: '项目二：生菜物联网育苗系统集成与应用',
    path: '/project-2',
    component: () => import('@/components/LsiaaGroup.vue'),
    label: '项目二：生菜育苗',
    children: []
  },
  {
    fullName: '项目三：柑桔物联网保果系统集成与应用',
    path: '/project-3',
    component: () => import('@/components/LsiaaGroup.vue'),
    label: '项目三：柑橘保果',
    children: []
  },
  {
    fullName: '项目四：茶树物联网养护系统构建与应用',
    path: '/project-4/',
    component: () => import('@/components/LsiaaGroup.vue'),
    label: '项目四：茶树养护',
    children: [
      { path: 'mission-1', component: () => import('@/components/LsiaaGroup.vue'), label: '任务1：需求分析' },
      { path: 'mission-2', component: () => import('@/components/LsiaaGroup.vue'), label: '任务2：设备选型' },
      { path: 'mission-3', component: () => import('@/components/LsiaaGroup.vue'), label: '任务3：设备安装' },
      { path: 'mission-4', component: () => import('@/components/LsiaaGroup.vue'), label: '任务4：设备调试' },
      { path: 'mission-5', component: () => import('@/components/LsiaaGroup.vue'), label: '任务5：配置与上云' },
      { path: 'mission-6', component: () => import('@/components/LsiaaGroup.vue'), label: '任务6：边缘计算' },
      { path: 'mission-7', component: () => import('@/components/LsiaaGroup.vue'), label: '任务7：平台搭建' },
      { path: 'mission-8', component: () => import('@/components/LsiaaGroup.vue'), label: '任务8：验收与应用' }
    ]
  },
  {
    path: '/mission-1-info',
    component: () => import('@/components/missions/LsiaaMission1.vue')
  },
  {
    path: '/mission-other-info',
    component: () => import('@/components/missions/LsiaaMission2-8.vue')
  }
]

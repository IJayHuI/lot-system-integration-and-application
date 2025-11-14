import { ref } from 'vue'

export const mainData = ref({
  projectInfo: null
})

export const groupPerformanceData = ref([])

export const missionData = ref({
  mission1: {},
  mission2To8: {
    studentFiles: ['/missions/mission2/1.jpg', '/missions/mission2/2.jpg', '/missions/mission2/3.jpg', '/missions/mission2/4.jpg', '/missions/mission2/5.jpg'],
    AI: {
      score: 40,
      text: '温湿度、土壤设备选择存在异常,网关设备选择存在异常,性价比因素存在异常'
    },
    student: {
      score: 100,
      text: ''
    },
    teacher: {
      score: 0,
      text: ''
    }
  }
})

export const accountData = ref({
  username: 'sualan',
  nickName: '苏阿兰',
  avatar: '/avatars/avatar31.jpg'
})

export const progressData = ref({
  current: 0,
  currentStatus: null
})

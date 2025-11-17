import { ref } from 'vue'

export const mainData = ref({
  projectInfo: {
    fullName: '',
    path: '',
    label: '',
    children: []
  }
})

export const groupPerformanceData = ref([])

export const missionData = ref({
  mission1: {},
  mission2To8: {
    groupName: '',
    groupId: '',
    score: 0,
    groupMembers: [],
    studentFiles: [],
    AI: [],
    student: [],
    teacher: {
      score: 0,
      text: ''
    },
    answerFiles: null
  }
})

export const accountData = ref({
  username: 'sualan',
  nickName: '教师',
  avatar: '/avatars/avatar31.jpg'
})

export const progressData = ref({
  current: 0,
  currentStatus: null
})

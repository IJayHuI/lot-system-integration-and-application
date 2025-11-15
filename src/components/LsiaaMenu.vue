<script setup>
  import LsiaaRoutes from '@/storages/LsiaaRoutes'

  import { ref, h } from 'vue'
  import { RouterLink } from 'vue-router'

  const menuOptions = ref(
    LsiaaRoutes.filter((route) => route.path.includes('project'))
    .map((route) => {
      return {
        label: () => h(RouterLink, { to: route.path }, { default: () => route.label }),
        key: route.path.substring(1),
        children:
          route.children?.map((child) => {
            return {
              label: () => h(RouterLink, { to: `${route.path}${child.path}` }, { default: () => child.label }),
              key: child.path.substring(1)
            }
          }) || null
      }
    })
  )
</script>
<template>
  <div class="p-2">
    <img class="rounded-lg" src="/course.jpg" alt="课程图片" />
    <p class="text-xl font-bold">物联网系统集成与应用</p>
  </div>
  <n-menu accordion :options="menuOptions" />
</template>

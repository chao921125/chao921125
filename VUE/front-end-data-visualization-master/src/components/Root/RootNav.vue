<template>
  <el-menu class="root__nav" router :collapse="isCollapse" :default-active="currentPath">
    <RootNavList :routesList="routesList" />
  </el-menu>
</template>

<script>
export default {
  name: 'RootNav',
}
</script>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RootNavList from './RootNavList.vue'
import RootBus from "./RootBus"

const router = useRouter()
const route = useRoute()

// 导航是否展开
// const isCollapse = ref(false)
// RootBus.$on('change-menu-isCollapse', function() {
//   console.log(isCollapse)
//   isCollapse.value = !isCollapse.value
// })

const isCollapse = ref(RootBus.isCollapse)

// 路由列表规则
function filtterRoutes(routes, path = '') {
  let result = []

  for (let index in routes) {
    // 排除404，排除没有meta的路由，排除navState不为true的路由
    if (
      routes[index].name !== 'NotFound' &&
      routes[index].meta &&
      'navState' in routes[index].meta &&
      routes[index].meta.navState === true
    ) {
      // 重新子路由的path
      routes[index].path = path + routes[index].path

      // 出现children就递归
      if ('children' in routes[index] && routes[index].children.length > 0) {
        // 开始递归，并传入父级的path进行下一轮拼接
        const children = filtterRoutes(routes[index].children, routes[index].path + '/')
        // 结构路由参数
        const currentRoutes = {...routes[index]}
        // 重整children数据，将递归回来有用的子级数据替换掉原数据
        currentRoutes.children = children
        result.push(currentRoutes)
      } else {
        // 没有子级路由的就直接push进队列
        result.push(routes[index])
      }
    }
  }
  return result
}

// 按照指定规则获取路由列表
const routesList = computed(() => {
  return filtterRoutes(router.options.routes)
})

// 当前路由地址
const currentPath = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.root__nav {
  height: 100%;
  overflow: auto;
  scrollbar-width: thin; /* 滚动条的宽度：auto；thin */
  scrollbar-color: #bbcddf #f1f1f1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bbcddf;
  }

  // &::-webkit-scrollbar-thumb:hover {
  //   background-color: #5749d2;
  // }

  // &:hover {
  //   scrollbar-color: #5749d2 #e4e4e4;
  // }

  &:not(.el-menu--collapse) {
    width: 260px;
  }
}
</style>
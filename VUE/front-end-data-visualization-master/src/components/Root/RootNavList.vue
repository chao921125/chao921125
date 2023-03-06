<template>
  <template v-for="item in routesList">
    <el-menu-item v-if="!('children' in item)" :index="item.path" :key="item.path">
      <i :class="item.meta.icon"></i>
      <template #title>{{item.meta.navName}}</template>
    </el-menu-item>
    <el-sub-menu v-if="'children' in item" :index="item.path" :key="item.path">
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.navName}}</span>
      </template>
      <RootNavList :routesList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script>
export default {
  name: 'RootNavList',
  props: {
    routesList: {
      type: Array,
      required: true
    }
  }
}
</script>
<!--
 * @Author: zi.yang
 * @Date: 2021-03-30 07:51:18
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-07 23:15:25
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\App.vue
-->
<template>
  <div id="app">
    <!-- 
      keep-alive:
        当路由加载过一次后，就将该路由中的内容放到内存中，
        下一次在进入这个路由中时，就不需要重新渲染组件，
        直接从内存中拿出来用，这样可以减少ajax请求的次数 
      -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style></style>

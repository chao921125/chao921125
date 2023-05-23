<template>
  <!-- 底部导航 -->
  <div>
    <van-tabbar v-model="active" :fixed="false" route  >
      <van-tabbar-item name="home" icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" :to="{ name: 'Search' }"
        >搜索</van-tabbar-item
      >
      <van-tabbar-item name="mine" icon="user-o" :to="{ name: 'Mine' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabbar {
    position: fixed;
    bottom: 0;
    max-width: 800px;
}


</style>
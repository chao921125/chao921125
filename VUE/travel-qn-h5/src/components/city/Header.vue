<!--
 * @Author: zi.yang
 * @Date: 2021-03-30 19:19:26
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-01 07:21:19
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\city\Header.vue
-->
<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHieight
  line-height $headerHieight
  text-align center
  color #fff
  background $bgColor
  font-size .32rem
  .header-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>

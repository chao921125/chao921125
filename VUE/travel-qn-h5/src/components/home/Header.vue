<!--
 * @Author: zi.yang
 * @Date: 2021-03-30 19:19:26
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-02 08:10:27
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\home\Header.vue
-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// mapState 是vuex提供映射 state 的Api
import { mapState } from 'vuex';
export default {
  name: 'HomeHeader',
  computed: {
    // 通过计算属性扩展 city 可以使当前组件直接使用 this.city
    // 否则需要通过 this.$store.state.city 才能调用
    ...mapState(['city']),
  },
};
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
/**
 * 1rem = 50 px;
 * 1px = 0.02 rem;
 * 80px = 0.02 * 80 = 1.6 rem
 * 1.6 / 2 = 0.8 px (去除手机端1px2被像素)
 */
  .header
    display flex
    line-height $headerHieight
    background:$bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align:center
        font-size .4rem
    .header-input
      flex 1
      height:.64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>

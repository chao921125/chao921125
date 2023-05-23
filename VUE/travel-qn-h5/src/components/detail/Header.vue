<!--
 * @Author: zi.yang
 * @Date: 2021-04-06 17:37:35
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-30 11:48:53
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\detail\Header.vue
-->
<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div :style="opacityStyle" class="header-fiexd" v-show="!showAbs">
      <router-link to="/">
        <div class="iconfont header-fiexd-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeatilHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: 0,
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140 > 1 ? 1 : top / 140;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  // 因为在已经禁止了 Deatil 页面的 keep-alive 缓存的功能
  // 所以这里也不能在使用 activated 和 deactivated
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // 当页面被切换/隐藏时，解绑事件
    // 如不处理，则切换路由后，全局事件依然会被触发
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0,0,0,.8)
  text-align center
  line-height .8rem
  .header-abs-back
    color #fff
    font-size .4rem
.header-fiexd
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  overflow hidden
  height $headerHieight
  line-height $headerHieight
  text-align center
  color #fff
  background $bgColor
  font-size .32rem
  .header-fiexd-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>

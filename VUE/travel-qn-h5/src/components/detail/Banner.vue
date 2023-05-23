<!--
 * @Author: zi.yang
 * @Date: 2021-04-05 23:12:36
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-08 08:17:22
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\detail\Banner.vue
-->
<template>
  <div>
    <div class="banner" @click="handleToGallary">
      <img
        class="banner-img"
        alt="banner"
        src="../../assets/images/banner/banner-0.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">
          {{ sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe629;</span>
          {{ this.images.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        @closeGallary="closeGallary"
        :images="images"
        v-show="showGallary"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@common/gallary/Gallary.vue';
import FadeAnimation from '@common/fade/Fade.vue';
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
  },
  data() {
    return {
      showGallary: false,
      images: [],
    };
  },
  components: {
    CommonGallary,
    FadeAnimation,
  },
  mounted() {
    // 添加 banner 图片
    for (let i = 0; i < 5; i++) {
      const path = require('@images/banner/banner-' + i + '.jpg');
      this.images.push(path);
    }
  },
  methods: {
    handleToGallary() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 1rem
    color #fff
    background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .32rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .3rem
      padding 0 .32rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>

<!--
 * @Author: zi.yang
 * @Date: 2021-04-06 07:57:16
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-06 17:19:48
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\common\gallary\Gallary.vue
-->
<template>
  <div class="container" @click="handleGallaryClose">
    <swiper class="wrapper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img class="gallary-img" :src="item" :alt="'swiper-' + item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    images: {
      type: Array,
      default: function() {
        return [require('../../assets/images/swiper/swiper-1.jpg')];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        // 自动切换图配置
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true,
      },
    };
  },
  methods: {
    handleGallaryClose() {
      this.$emit('closeGallary');
    },
  },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    background #fff
    width 100%
    height 0
    // overflow hidden
    padding-bottom 55%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>

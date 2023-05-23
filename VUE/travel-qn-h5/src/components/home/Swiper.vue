<!--
 * @Author: zi.yang
 * @Date: 2021-03-30 22:34:07
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-07 22:19:38
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\home\Swiper.vue
-->
<template>
  <div>
    <swiper class="wrapper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in 5" :key="index">
        <img
          class="swiper-img"
          :src="getSwiper(item)"
          :alt="'swiper-' + item"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        // 自动切换图配置
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 箭头配置
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 环状轮播
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 3,
        loopAdditionalSlides: 0,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true,
      },
    };
  },
  methods: {
    getSwiper(index) {
      return require('@images/swiper/swiper-' + index + '.jpg');
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  .swiper-img
    width 100%
</style>

<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
            <img :src="item.src" alt class="slide_img">
      </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    }
};
</script>

<style lang="stylus" scoped>
.wrapper {
    overflow: hidden;
    width: 100%;
    height:120px;
    position: relative;
    .slide_img {
        width: 100%
    }
    >>>.swiper-pagination-bullet-active {
        background-color: #fff
    }
}
</style>
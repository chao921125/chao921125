<template>
<div class="gallery-con" @click="handleGalleryClick">
    <div class="gc-wrapper">
        <swiper :options="swiperOptions" class="swiper">
            <swiper-slide class="slide" v-for="(item,index) of imgs" :key="index">
                <img
            class="slide-img"
            :src="item"
            alt
          >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>

<script>
export default {
    name: "CommonGallary",
    props:{
        imgs:{
            type : Array,
            default(){
                return imgs
            }
        }
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction"
                },
                observeParents : true,
                observer : true
            }
        }
    },
    methods:{
        handleGalleryClick(){
            this.$emit("close");
        }
    }
};
</script>

<style lang="stylus" scoped>
.gallery-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    background-color: #000;

    .gc-wrapper {
        .slide-img {
            width: 100%;
        }

        .swiper-pagination {
            color: #fff;
        }
    }
}
</style>
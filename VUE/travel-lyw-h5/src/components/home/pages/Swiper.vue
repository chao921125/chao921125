<template>
    <div class="header-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for='item in swiperList' :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div> 
</template>
<script>
export default{
    data(){
        return {
            swiperList:[
                {
                    id:"01",
                    imgUrl:require("@/assets/images/swiper/1.jpg")
                },
                {// js中图片资源引入需要require()
                    id:"02",
                    imgUrl:require("@/assets/images/swiper/2.jpg")
                }
            ],
            swiperOption:{
                pagination:'.swiper-pagination',//分页圆点
                loop:true, //循环
            }
        }
    }
}
</script>
<style scoped>
.header-swiper{
    background: #ccc;
    height:0;
    padding-bottom: 33.45%; /* 防止掉块 */
}
.header-swiper img{
    width: 100%;
    height: 100%;
}
/* >>> 样式穿透 */
.header-swiper >>> .swiper-pagination-bullet-active{
    background: #fff;
}
</style>
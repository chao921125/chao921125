<template>
<div>
    <div class="banner-con" @click="hanleBannerClick">

    <div class="banner-pic">
        <img
        :src="bannerImg"
        alt
      >
    </div>
        <div class="banner-txt">
            <div class="bt-picnum">
                <span class="iconfont">&#xe635;</span>3
            </div>
            <div class="bt-tit">{{sightName}}</div>
        </div>
    </div>
     <fade>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="GalleryClose"></common-gallary>
    </fade>
</div>

</template>

<script>
import CommonGallary from "common/gallary/Gallary"
import fade from "common/animation/fade";
export default {
    name: "DetailBanner",
    components : {
        CommonGallary,
        fade
    },
    data(){
        return {
            showGallary : false,
          
        }
    },
        props:{
        sightName:String,
        bannerImg :String,
        gallaryImgs:Array
    },
    methods:{
        hanleBannerClick(){
            this.showGallary = true
        },
        GalleryClose(){
            this.showGallary = false
        }
    }
};
</script>

<style lang="stylus" scoped>
.banner-con {
    position: relative;
    color: #fff;

    .banner-return {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 0.72rem;
        height: 0.72rem;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        text-align: center;
        line-height: 0.72rem;
    }

    .banner-pic {
        height: 3.52rem;

        img {
            width: 100%;
        }
    }

    .banner-txt {
        position: absolute;
        left: 0.2rem;
        bottom: 0.2rem;

        .bt-picnum {
            background-color: rgba(0, 0, 0, 0.6);
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.24rem;
            border-radius: 0.2rem;

            .iconfont {
                font-size: 0.24rem;
            }
        }

        .bt-tit {
            font-size: 0.28rem;
            margin-top: 0.2rem;
        }
    }
}
</style>
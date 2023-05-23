<template>
<div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recomment :list="recommentList"></home-recomment>
    <home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeRecomment from "./components/recommend";
import HomeWeekend from "./components/weekend";
import axios from "axios";
import { mapState } from "vuex"

export default {
    name: "home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    },
    data() {
        return {
            lastCity:"",
            swiperList: [],
            iconList: [],
            recommentList: [],
            weekendList: []
        }
    },
    computed:{
    ...mapState(['city'])
},
    methods: {
        getHomeInfo() {
            axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(result) {
            result = result.data;
            if (result.ret && result.data) {
                const data = result.data;
              
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommentList = data.recommendList;
                this.weekendList = data.weekendList;
            }

        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated() {
    if(this.lastCity != this.city){
        this.lastCity = this.city
        this.getHomeInfo();
    }
}
};
</script>

<style lang="">
</style>
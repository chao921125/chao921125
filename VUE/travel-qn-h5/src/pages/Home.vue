<!--
 * @Author: zi.yang
 * @Date: 2021-03-30 08:31:04
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-02 08:44:12
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\pages\Home.vue
-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@components/home/Header';
import HomeSwiper from '@components/home/Swiper';
import HomeIcons from '@components/home/Icons';
import HomeRecommend from '@components/home/Recommend';
import HomeWeekend from '@components/home/Weekend';
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  // mounted 在路由返回时不会重新执行
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  // activated 当页面重新显示的时候，会被执行
  activated() {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.iconList = data.iconList;
        this.weekendList = data.weekendList;
        this.recommendList = data.recommendList;
      }
    },
  },
  computed: {
    ...mapState(['city']),
  },
};
</script>

<style scoped></style>

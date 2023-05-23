<!--
 * @Author: zi.yang
 * @Date: 2021-04-01 07:40:11
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-30 12:01:17
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\city\List.vue
-->
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },
  mounted() {
    const timer = setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { click: true });
      clearTimeout(timer);
    }, 500);
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit('changeCity', city);
      this.changeCity(city);
      this.$router.push('/');
    },
    // vuex 提供操作 mutations 的 API,通过 mapMutations 直接获取 mutation
    // this.$store.commit('mutation', arg) 简化为 this.mutatinon(arg);
    ...mapMutations(['changeCity']),
  },
  computed: {
    // 通过对象的方式给 city 起一个别名
    ...mapState({
      currentCity: 'city',
    }),
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.boder-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    fony-size .26rem
  .button-list
    // 触发 BFC
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>

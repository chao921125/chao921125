<!--
 * @Author: zi.yang
 * @Date: 2021-03-31 21:35:31
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-01 07:20:09
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\home\weekend.vue
-->
<template>
  <div>
    <div class="recommend-title">周末去哪儿玩？</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="(item, key) in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="getImg(key)" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array,
  },
  data() {
    return {};
  },
  methods: {
    getImg(key) {
      return require(`@images/weekend/img-${key}.jpg`);
    },
  },
};
</script>

<style lang="stylus" scoped>
// recommend
@import '~@styles/mixins.styl'
.recommend-title
  line-height .8rem
  background #eee
  //文本块中首行文本的缩进
  text-indent:.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height .54rem
    font-size .32rem
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>

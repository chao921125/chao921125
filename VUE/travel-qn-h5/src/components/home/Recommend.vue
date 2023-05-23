<!--
 * @Author: zi.yang
 * @Date: 2021-03-31 20:37:52
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-06 15:11:10
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\home\Recommend.vue
-->
<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <!-- 在 router-link 中使用个tag指定 router-link 渲染成什么标签，默认为 a 标签 -->
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(item, key) in recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="getImg(key)" alt="" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array,
  },
  data() {
    return {};
  },
  methods: {
    getImg(key) {
      return require(`@images/recommend/img-${key}.jpg`);
    },
  },
};
</script>

<style lang="stylus" scoped>
// recommend
@import '~@styles/mixins.styl'
.recommend-title
  margin-top .2rem
  line-height .8rem
  background #eee
  //文本块中首行文本的缩进
  text-indent:.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    // 文本超出盒子后，出现省略号
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>

<!--
 * @Author: zi.yang
 * @Date: 2021-03-31 07:42:02
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-01 00:05:41
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\home\Icons.vue
-->
<template>
  <!-- TODO:分页轮播 -->
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="getImg(item.imgName)" />
      </div>
      <p class="icon-desc">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array,
  },
  data() {
    return {
      imgUrl: '',
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        // 一页显示十个 Icon ; 9/10 = 0 , 10/10 = 1
        const page = Math.floor(index / 10);
        // 根据下标分页
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
  methods: {
    getImg(imgName) {
      return require('@images/icons/' + imgName);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~@styles/varibles.styl";
@import "~@styles/mixins.styl";
// padding和margin中如果取百分比的值，这个百分比都是根据宽度而言的。
// 如当前需要尺寸为 879*716
// padding-bottom 的值就是为 (716 / 879 * 100)% == 82%
.icons
  overflow hidden
  // 注意：通过 padding 撑开容器，
  // height 需要等于 0 或者 auto
  height 0
  padding-bottom 40%
  margin-top .1rem
  .icon
    position relative
    float left
    width 20%
    height 0
    padding-bottom 20%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      box-sizing border-box
      padding .1rem
      bottom .44rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkColor
      ellipsis()
</style>

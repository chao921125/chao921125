<!--
 * @Author: zi.yang
 * @Date: 2021-04-07 21:17:47
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-09 07:10:49
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\detail\List.vue
-->
<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span :class="getTitlePrefixIcon(item.tag)"></span>
        <span :class="getTitleFontSizeClass(item.tag)">
          {{ item.title }}
        </span>
        <div v-if="isTicket(item.tag)">
          <span class="item-price">
            ￥<span class="ticket-price">{{ item.price }}</span
            >起
          </span>
          <span class="iconfont icon-ticket-price">&#58978;</span>
        </div>
      </div>
      <div
        v-if="item.children"
        :style="{ padding: isTicket(item.children[0].tag) ? '.2rem' : '' }"
      >
        <div :class="{ 'item-child-border': isTicket(item.children[0].tag) }">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
  },
  data() {
    return {
      titleClass: 'top-title',
    };
  },
  computed: {
    // 是否是票券
    isTicket() {
      return (n) => {
        return n === 'ticket';
      };
    },
  },
  methods: {
    // 动态获取标题大小
    getTitleFontSizeClass(tag) {
      let titleClass = '';
      switch (tag) {
        case 'title':
          titleClass = 'top-title';
          break;
        case 'sub-title':
          titleClass = 'sub-title';
          break;
        case 'ticket':
          titleClass = 'ticket-title';
          break;
      }
      return titleClass;
    },
    //获取对应的前缀 Icon
    getTitlePrefixIcon(tag) {
      let icon = '';
      switch (tag) {
        case 'title':
          icon = '';
          break;
        case 'sub-title':
          icon = 'item-title-rim';
          break;
        case 'ticket':
          icon = 'item-title-icon';
          break;
      }
      return icon;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.item
  padding 0
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    display flex
    align-items center
    .item-title-icon
      width .36rem
      height .36rem
      background:url('~@images/sprites/detail.png') 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
    .item-title-rim
      border-radius: .06rem;
      height: .3rem;
      min-width: .08rem;
      margin-right: .12rem;
      background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
  .item-child-border
    box-shadow 0 .04rem .12rem 0 rgba(0,0,0,0.10);
    border-radius: .23rem;
    background: #fff;
    .item-title
      padding .26rem .2rem
      .item-price
        color $orangeColor
        .ticket-price
          font-size .4rem
      .icon-ticket-price
        color #ccc
        font-size .36rem

// title dynamic font-size
.top-title
  font-size .4rem
  font-weight bold
.sub-title
  font-size .34rem
  font-weight bold
.ticket-title
  font-size .33rem
  flex 2
</style>

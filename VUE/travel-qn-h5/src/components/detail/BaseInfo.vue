<!--
 * @Author: zi.yang
 * @Date: 2021-04-08 07:47:50
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-09 07:31:21
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\detail\BaseInfo.vue
-->
<template>
  <div class="baseinfo">
    <div class="baseinfo-warpper">
      <div class="baseinfo-card">
        <div class="baseinfo-card-item">
          <div class="baseinfo-commentcard">
            <span class="commentcard-score">{{ score }}</span>
            <span class="commentcard-text">分</span>
            <span class="commentcard-desc">{{ scoreText }}</span>
          </div>
          <div class="baseinfo-totalcomment">
            <span class="total-comment-num">{{ comment }}条评论</span>
            <span class="total-comment-num">{{ strategy }}条攻略</span>
            <span class="iconfont icon-right-arrow">&#58946;</span>
          </div>
        </div>
        <div class="baseinfo-card-item">
          <div class="sightcard-title">景点简介</div>
          <div>
            <span class="sightcard-text">开放时间、贴士</span>
            <span class="iconfont icon-right-arrow">&#58946;</span>
          </div>
        </div>
      </div>
      <div class="baseinfo-address">
        <span class="iconfont icon-address">&#xe604;</span>
        {{ address }}
        <span class="iconfont icon-right-arrow">&#58946;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    score: String,
    scoreText: String,
    comment: String,
    strategy: String,
    address: String,
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.baseinfo
  position relative
  height 0
  padding-bottom 31.5%
  margin-bottom .1rem
  background #eee
  .baseinfo-warpper
    width 100%
    box-sizing border-box
    position absolute
    top -.15rem
    padding .1rem .2rem 0 .2rem
    border-radius .2rem .2rem 0 0
    background-color #fff
    .baseinfo-card
      display flex
      height 1.3rem
      padding .1rem 0
      .baseinfo-card-item
        flex 1
        position relative
        padding .1rem 0
        .baseinfo-commentcard
          color $orangeColor
          .commentcard-score
            font-size .44rem
            line-height .48rem
          .commentcard-text
            font-size .28rem
            line-height .48rem
          .commentcard-desc
            font-size .28rem
            line-height .48rem
            margin-left .2rem
        .baseinfo-totalcomment
          color #9e9e9e
          font-size .24rem
          padding-top .05rem
          .total-comment-num
            margin-right .2rem
        .sightcard-title
          color #212121
          line-height .48rem
          padding-left .3rem
        .sightcard-text
          color $garyColor
          font-size .24rem
          padding-left .3rem
        .icon-right-arrow
          position absolute
          top .3rem
          right .2rem
          color $garyColor
    .baseinfo-address
      position relative
      width 100%
      height .7rem
      line-height .7rem
      font-size .31rem
      .icon-address
        margin .05rem
        color $garyColor
      .icon-right-arrow
        position absolute
        right .2rem
        color $garyColor
</style>

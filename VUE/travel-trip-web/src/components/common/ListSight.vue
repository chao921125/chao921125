<template>
  <router-link
  :to="{name:'SightDeatail', params: {id: item.id}}"
  class="sigh-item">
    <!-- 左侧大图 -->
    <img :src="item.main_img" alt="" />
    <!-- 右侧内容 -->
    <div class="right">
      <h5>{{ item.name }}</h5>
      <van-rate
        v-model="item.score"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
        readonly
      />
      <div class="tips">4人点评 | 100%满意</div>
      <div class="tips">{{ item.province }}-{{ item.city }}</div>
      <div class="line-price">￥ {{ item.min_price }}起</div>
    </div>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
      // value: 5
    }
  },
  props: ['item']
}
</script>

<style lang="less" >
.sigh-item {
  display: flex;
  border-bottom:1px solid #f6f6f6;
  padding-top: 10px;
  background-color: #fff;

  img {
    width: 100px;
    height: 100px;
  }

  h5 {
    color: #212121;
    font-size: 14px;
    padding: 5px 0px;
    margin: 0px;
  }

  .right {
    flex-grow: 1;
    text-align: left;
    justify-self: left;
    padding-left: 5px;
    position: relative;

    .line-price {
      position: absolute;
      right: 10px;
      top: 20px;
      display: inline-block;
      color: #f50;
      font-size: 16px;
      font-weight: bold;
    }

    .tips {
      font-size: 12px;
      color: #666;

      &.light {
        color: #999;
      }
    }
  }

}
</style>

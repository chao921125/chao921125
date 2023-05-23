<template>
    <!-- 热门组件 -->
    <div class="home-hot-box">
        <!-- 顶上导航 -->
        <van-cell title="热门推荐"
        icon="/static/home/hot/fire.png"
        is-link
        title-style='text-align:left'
        value='全部榜单'
        :to="{name: 'Search', query: {isHot: 1}}" />
        <!-- // 顶上导航 -->
        <!-- 景点列表 -->
        <div class="box-main">
          <router-link :to="{name:'SightDeatail', params: {id: item.id}}" class="hot-item"
          v-for="item in dataList" :key='item.id'
          >
            <div class="img">
              <span></span>
              <img :src="item.main_img" alt="">
            </div>
            <h5 class="van-ellipsis">{{ item.name }}</h5>
            <div class="line-price">
              <span class="price">￥{{ item.min_price }}</span>起
            </div>
          </router-link>
        </div>
        <!-- //景点列表 -->
    </div>
</template>

<script>

import { ajax } from '@/utils/ajax.js'
import { SightApis } from '@/utils/apis.js'

export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    getDataList () {
      ajax.get(SightApis.sightListUrl, {
        params: {
          is_hot: 1
        }
      }).then(res => {
        console.log('fine', res)
        this.dataList = res.data.objects
      })
    }
  },
  created () {
    this.getDataList()
  }
}
</script>

<style lang="less">
.home-hot-box {
  padding: 0 10px;

  .van-cell {
    padding: 10px 0px;
  }

  .box-main {
    width: 100%;
    display: flex;
    padding-top: 10px;
    overflow-x: scroll;
  }

  .hot-item {
    display: flex;
    flex-direction: column;
    width: 100px;
    margin-right: 10px;
    padding-bottom: 10px;

    h5 {
      color:#212121;
      padding: 2px 0px;
      font-size: 12px;
      margin: 0px;
    }

    .img {
      position: relative;

      span {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        width: 42px;
        height: 20px;
        z-index: 10;
      }

      img {
        width: 100px;
        height: 100px;
      }
    }

    .line-price {
      color:#212121;
      font-size: 12px;

      .price {
        color: #f50;
        font-size: 13px;
      }
    }

    &:nth-child(1) .img span {
      background: url(/static/home/hot/top1.png) no-repeat;
      background-size: 100% auto;
    }

    &:nth-child(2) .img span {
      background: url(/static/home/hot/top2.png) no-repeat;
      background-size: 100% auto;
    }

    &:nth-child(3) .img span {
      background: url(/static/home/hot/top3.png) no-repeat;
      background-size: 100% auto;
    }
  }

}

</style>

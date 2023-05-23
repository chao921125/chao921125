<template>
<div class="rec_wrap">
    <div class="rw_tit">猜你喜欢</div>
    <div class="rw_list">
        <router-link class="rl_li border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
    <div class="a">
        <div class="pic">
        <img :src="item.imgUrl" alt class="img">
        </div>
        <div class="info">
        <div class="tit">{{item.infoTit}}</div>
        <div class="txt">{{item.infoTxt}}</div>
        <div class="money">
            <b class="b">¥</b>
            <i class="i">{{item.infoMoney}}</i>起
        </div>
        </div>
        </div>
    </router-link>
    </div>
    <div class="rw_more">
        <a href class="a">查看所有产品</a>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props: {
        list: Array
    }
};
</script>

<style lang="stylus" scoped>
@import '~style/mixins';
@import '~style/varibles';
.rec_wrap {
  .rw_tit {
    font-size: 0.32rem;
    color: #333;
    padding: 0.2rem;
  }

  .rw_list {
    .rl_li {
      padding: 0.2rem;

      .a {
        color: #333;
        display: flex;

        .pic {
          width: 2rem;
          height: 2rem;

          .img {
            width: 100%;
          }
        }

        .info {
          flex: 1;
          min-width: 0;
          padding: 0.2rem;
          box-sizing: border-box;

          .tit {
            font-size: 0.28rem;
            ellipsic();
          }

          .txt {
            font-size: 0.22rem;
            color: #666;
            margin: 0.2rem 0;
            ellipsic();
          }

          .money {
            font-size: 0.22rem;
            color: #666;

            .b {
              font-size: 0.18rem;
              color: #ff7b00;
            }
                       .i {
              font-size: 0.38rem;
              color: #ff7b00;
            }
          }
        }
      }
    }
  }

  .rw_more {
    .a {
      display: block;
      text-align: center;
      font-size: 0.28rem;
      padding: 0.2rem 0;
      color: $ftColor;
    }
  }
}
</style>         
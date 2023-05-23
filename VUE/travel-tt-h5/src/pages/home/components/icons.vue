<template>
  <div class="icon_list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <ul class="ul">
          <li class="li" v-for="item of page" :key="item.id">
            <div class="a">
              <img :src="item.imgSrc" alt class="ico">
              <span class="txt">{{item.txt}}</span>
            </div>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: "HomeIcons",
  props:{
    list : Array
  },
  data() {
    return {
      swiperOption: {
        loop: false,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~style/mixins"
.icon_list >>> .swiper-container {
  height: 2.8rem;
  padding-bottom .2rem
}
.icon_list >>> .swiper-pagination{
  bottom 0
}
.icon_list {
  margin: 0.24rem 0;
  .ul {
    overflow: hidden;
    margin: 0 -0.1rem;
    .li {
      width: 25%;
      float: left;
      box-sizing: border-box;
      padding: 0.08rem 0.1rem;
      .a {
        color: #333;
        font-size: 0.26rem;
        text-align: center;
        display: block;
        .ico {
          width: 1rem;
          height: 1rem;
        }
        .txt {
          display: block;
          font-size: 0.24rem;
          padding:0 .1rem;
          ellipsic();
        }
      }
    }
  }
}
</style>
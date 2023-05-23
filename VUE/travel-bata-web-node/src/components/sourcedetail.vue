<template>
  <div class="detail_css">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    <div v-for="item in detail" :key="item.id" class="sourcedetail_css">
      <div>
        <h4>{{ item.title }}</h4>
        <p style="font-size: 15px;text-indent: 2em;">{{ item.msg }}</p>
        <div class="block">
          <el-carousel>
            <el-carousel-item>
              <img :src="item.img" alt="" width="100%" height="100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import eventshow from "../../static/config/event";
export default {
  data() {
    return {
      params: "",
      detail: [],
    };
  },
  methods: {
    // async GetSourcedetail() {
    //   this.$axios({
    //     url: "/api/source/tourist_resources/detail",
    //     methods: "get",
    //     params: this.params,
    //   }).then((res) => {
    //     this.detail = res.data
    //   });
    // },
    goBack() {
      // console.log('go back');
      this.$router.go(-1);
    },
  },
  created() {
    eventshow.$on("detailparams", (val) => {
      this.detail = val;
      // console.log(this.detail+112)
      // console.log(val+112123)
    });
    // this.GetSourcedetail();
  },
};
</script>

<style scoped>
.detail_css {
  margin: 10px auto;
}
.sourcedetail_css {
  margin: 0px auto;
  width: 50%;
  
}
</style>
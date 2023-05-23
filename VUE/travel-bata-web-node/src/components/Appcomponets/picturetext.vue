<template>
  <div
    style="
      height:100%
      padding: 0px;
      border-bottom: 1px solid grey;
      width: 100%;
    "
  >
    <h1 style="text-align: center">横州市景点</h1>
    <!-- <router-link to="/sourcedetail">xie cheng</router-link> -->

    <div style="width: 1320px; height: 1200px">
      <el-card
        shadow="hover"
        :body-style="{ padding: '0px' }"
        v-for="(item, index) in images"
        :key="item.id"
        style="width: 400px; float: left; height: 360px; margin: 15px"
      >
        <div style="width: 400px; height: 267px">
          <img
            :src="item.img"
            class="image multi-content"
            style="width: 100%; height: 100%"
          />
        </div>
        <!-- :style="{padding:'5px',height:'10px'}"v-bind一种写法 style="width: 400px; height: 267px;" 普通写法-->
        <div style="padding: 14px">
          <span>{{ item.title }}</span>
          <div class="bottom card-header">
            <span v-if="item.msg.length <= 25" :title="item.msg">{{
              item.msg
            }}</span>
            <span v-else :title="item.msg"
              >{{ item.msg.substr(0, 25) }}......</span
            >
            <el-button
              type="text"
              class="button"
              @click="GetSourceInfo(index, images)"
              :style="{ float: 'right' }"
              >查看更多</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import eventshow from "../../../static/config/event";
export default {
  // props:['show'],
  data() {
    return {
      loading: false,
      paramsdetail: "",
      images: [
        // {id:1,name:'img1',text:'中国移动',img:'https://img2.baidu.com/it/u=2317443502,2894783121&fm=26&fmt=auto',},
        // {id:2,name:'img2',text:'中国移动',img:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'},
        // {id:3,name:'img3',text:'中国移动',img:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'},
        // {id:4,name:'img4',text:'中国移动',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20210203%2F598ea89109a1400293a8290d9b7e8cea.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644321484&t=33e56e48ac4e5a259b4ff4c46cc7c242'},
        // {id:5,name:'img5',text:'中国移动',img:'https://img0.baidu.com/it/u=3613904737,3453130597&fm=253&fmt=auto&app=138&f=JPEG?w=798&h=500'},
        // {id:6,name:'img6',text:'中国移动',img:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'},
      ],
    };
  },
  methods: {
    async Getsource_list() {
      await this.$axios({
        url: "/api/source/tourist_resources",
        methods: "get",
      }).then((res) => {
        this.images = res.data;
        // for (var i = 0; i < res.data.length; i++) {
        //   console.log(res.data[i].img);
        // }
        // if(res){
        //   for(var i=0;i<res.data.length;i++){
        //     const myBlob = new window.Blob([res.data[i].img], {type: 'image/jpeg'})
        //     const qrUrl = window.URL.createObjectURL(myBlob)
        //     this.images[i].img = qrUrl;
        //     console.log(this.images[i].img)
        //     }
        //   }
      });
    },
    GetSourceInfo(index, rows) {
      const params = {
        id: index + 1,
        title: rows[index].title,
        msg: rows[index].msg,
      };
      this.paramsdetail = params;
      // console.log(params+'子组件');
      this.$emit("detail_fun", this.loading);
      this.$router.push({ path: "/sourcedetail" });
      this.$axios({
        url: "/api/source/tourist_resources/detail",
        methods: "get",
        params: params,
      }).then((res) => {
        this.paramsdetail = res.data;
        console.log(this.paramsdetail);
        eventshow.$emit("detailparams", this.paramsdetail);
      });
    },
  },
  mounted() {
    this.Getsource_list();
  },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>
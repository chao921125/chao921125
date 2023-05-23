<template>
  <el-container>
    <div class="head_main" v-if="detailshow">
      <el-main>
        <div class="left">
          <p style="width: 75%; float: left; height: 50%; padding-left: 40px">
            最新时间：{{ data }}
          </p>
          <downlaber
            style="
              height: 30px;
              width: 15%;
              text-align: center;
              padding-top: 14px;
            "
          ></downlaber>
          <div style="width: 100%; height: 100%">
            <ul
              v-for="item in datamsg"
              :key="item.id"
              style="width: 20%; float: left"
            >
              <el-card class="box-card">
                <li>
                  {{ item.msg }}
                  <a :href="item.herf" target="_blank" style="float: right;"
                    >更多</a
                  >
                </li>
              </el-card>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="center">
            <ShowMap></ShowMap>
          </div>
        </div>
      </el-main>
      <div>
      </div>
    </div>
  </el-container>
</template>

<script>
import ShowMap from "./Appcomponets/showMap.vue";
import downlaber from "./Appcomponets/downlabel.vue";
export default {
  data() {
    return {
      title: "友情链接",
      detailshow:true,
      datamsg: [
        {
          id: 1,
          msg: "广西招聘网",
          time: new Date(),
          status: true,
          herf: "http://www.gxzp.com/",
        },
        {
          id: 2,
          msg: "横州招聘网",
          time: new Date(),
          status: true,
          herf: "https://www.hzzp.cn",
        },
        {
          id: 3,
          msg: "横州人才网",
          time: new Date(),
          status: true,
          herf: "https://www.hzzp.cn",
        },
        {
          id: 4,
          msg: "南宁人才网",
          time: new Date(),
          status: true,
          herf: "https://www.nnrc.net",
        },
        {
          id: 5,
          msg: "钦州人才网",
          time: new Date(),
          status: true,
          herf: "https://www.qinzhou.net",
        },
        {
          id: 6,
          msg: "玉林招聘网",
          time: new Date(),
          status: true,
          herf: "https://www.ylzpw.com/",
        },
        {
          id: 7,
          msg: "瓦房店人才网",
          time: new Date(),
          status: true,
          herf: "http://www.wfdrcw.com/",
        },
        {
          id: 8,
          msg: "新平果招聘网",
          time: new Date(),
          status: true,
          herf: "http://www.jobxinpg.com/",
        },
        {
          id: 9,
          msg: "柳州人才网",
          time: new Date(),
          status: true,
          herf: "https://www.0772rc.cn/",
        },
        {
          id: 10,
          msg: "百色人才网",
          time: new Date(),
          status: true,
          herf: "https://www.bsrc.cn/",
        },
      ],
      data: "",
    };
  },

  methods: {
    dataFormat(time) {
      return `${time.getFullYear()}-${
        time.getMonth() + 1 >= 10
          ? time.getMonth() + 1
          : "0" + (time.getMonth() + 1)
      }-${time.getDate() >= 10 ? time.getDate() : "0" + time.getDate()}
            ${
              time.getHours() >= 10 ? time.getHours() : "0" + time.getHours()
            } : ${
        time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()
      } : ${
        time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds()
      }`;
    },
   
  },
  components: {
    downlaber,
    ShowMap,
  },
  created() {
    this.data = this.dataFormat(new Date());
  },
};
</script>

<style scoped>
.head_main {
  margin: auto;
  width: 100%;
  height: 100%;
}

.center {
  width: 100%;
  height: 400px;
}

ul,
li,
a {
  text-decoration: none;
  list-style: none;
}
li a:link {
  color: #a7aabd;
}

li a:visited {
  color: #a7aabd;
}

.left {
  float: left;
  width: 49%;
}

.right {
  float: right;
  width: 49%;
  margin-left: 10px;
  background-color: white;
}
</style>

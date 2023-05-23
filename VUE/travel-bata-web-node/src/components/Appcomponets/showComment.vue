<template>
  <div class="main">
    <p class="top-title">
      <span>热门评论</span>
      <i class="el-icon-s-opportunity"></i>
    </p>
    <div v-for="item in commenttableData" :key="item.id" class="commentmodules">
      <el-card style="padding: 10px">
        <div class="title">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="right_time">
          <p>{{ item.create_time }}</p>
        </div>
        <div class="box">
          <div class="leftimg">
            <div style="margin-top: 10px">
              <el-avatar :size="50" :src="item.head_img"></el-avatar>
            </div>
          </div>
          <!-- <div class="rightcontent" @mouseover="ShowContent(item.id)" @mouseout="NotShowContent(item.id)">
          <p v-if="item.content.length <= 89">{{ item.content }}</p>
          <p v-else>{{item.content.substr(0,89)}}......</p>
        </div> -->
          <div class="content">
            <div class="user-box">
              <p>{{ item.user }}</p>
            </div>
            <div class="content-box">
              <el-tooltip effect="dark" placement="bottom">
                <div slot="content" class="tooltip">{{ item.content }}</div>
                <p v-if="item.content.length <= 89">{{ item.content }}</p>
                <p v-else>{{ item.content.substr(0, 89) }}......</p>
              </el-tooltip>
            </div>
            <!-- <div class="content-reply">
              <el-button
                type="button"
                value="回复"
                @click="reply_show = !reply_show"
                size="mini"
                >回复</el-button
              >
            </div>
            <div v-if="reply_show" :for="'c' + item.id">
              <form>
                <el-input style="" placeholder="请输入内容"></el-input>
              </form>
              <div class="content-replybutton">
                <el-button type="button" value="回复">提交</el-button>
              </div>
            </div> -->
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import event from "../../../static/config/event.js";
export default {
  data() {
    return {
      commenttableData: "",
      loading: false,
      reply_show: false,
    };
  },
  methods: {
    async GetCommentList() {
      let _this = this;
      await _this.$axios
        .get("/api/comment/list")
        .then((res) => {
          // console.log(res.data)
          _this.commenttableData = res.data;
          _this.loading = false;
          // alert(_this.commenttableData.content[0])
        })
        .catch((err) => {
          _this.$message.error({
            message: "获取数据失败，请您点击F5刷新",
            showClose: true,
          });
        });
    },
  },
  mounted() {
    event.$on("commentclick", (val) => {
      if (val) {
        console.log(1);
        this.GetCommentList();
      }
    });
    this.GetCommentList();
  },
  // computed:mapState({
  //     username: (state) => state.username,
  //     myUsername: "username",
  //   }),
};
</script>

<style scoped>
.content-replybox {
  background-color: rebeccapurple;
  height: 100px;
  width: 100%;
}
.content-reply {
  float: right;
}
p {
  padding-left: 15px;
}

.commentmodules {
  padding: 10px;
}

.main {
  width: 50%;
  margin: 0px auto;
  height: 100%;
}

.box {
  display: flex;
}

.user-box {
  display: flex;
  padding-left: 5px;
  align-items: center;
}

.content-box {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  font-weight: 400;
  font-size: 14px;
  line-height: 2rem;
  color: #515767;
  margin-top: 8px;
  -webkit-line-clamp: 6;
}

.title {
  width: 80%;
  height: 40px;
}
.right_time {
  width: 10%;
  float: right;
  height: 40px;
  color: #515767 ;
}
.leftimg {
  float: left;
  width: 6%;
  height: 70px;
}

.content {
  flex: 1 1 auto;
  margin-left: 16px;
}
.top-title {
  position: relative;
  padding-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  color: #252933;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 30px;
}

.footleft {
  float: left;
  width: 50%;
  height: 30px;
  text-align: left;
  font-weight: 200;
}

.footright {
  float: right;
  width: 50%;
  height: 30px;
  text-align: left;
}

.dpop {
  position: absolute;
  z-index: 3;
  border: 1px dashed #eef;
  width: 800px;
  padding-left: 50px;
}

.tooltip {
  width: 650px;
  font-size: 14px;
}
</style>

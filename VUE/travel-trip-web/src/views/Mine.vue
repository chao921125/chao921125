<template>
  <!-- 个人中心 -->
  <dic class="page-mine">
    <!-- 标题 -->
    <van-nav-bar
      class="top-var"
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 用户基本信息：头像、昵称 -->
    <div class="user-header">
      <div class="avatar" v-if="user.avatar">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="avatar" v-else>
        <img src="/static/mine/avatar.png" alt="" />
      </div>

      <div>
        <p>欢迎您，{{ user.nickname }}</p>
        <a class="btn-link" @click="logout" >退出登陆</a>
      </div>
    </div>
    <!-- 订单的菜单列表 -->
    <van-row class="user-links">
      <van-col span="6">
        <router-link
          :to = "{name: 'OrderList', params: {status: constants.ORDER_STATUS_ALL}}"
          >
          <van-icon name="orders-o" />
          <span>全部订单</span>
        </router-link>
      </van-col>
      <van-col span="6">
         <router-link
          :to = "{name: 'OrderList', params: {status: constants.ORDER_STATUS_PAY}}"
         >
          <van-icon name="after-sale" />
          <span>待支付</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link
          :to = "{name: 'OrderList', params: {status: constants.ORDER_STATUS_DONE}}"
        >
          <van-icon name="certificate" />
          <span>已完成</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link
          :to = "{name: 'OrderList', params: {status: constants.ORDER_STATUS_CANCEL}}"
        >
          <van-icon name="close" />
          <span>已取消</span>
        </router-link>
      </van-col>
    </van-row>
    <!-- 底部导航 -->
    <MyFooter />
  </dic>
</template>

<script>
import MyFooter from "@/components/common/Footer.vue";
import { mapState } from "vuex";
import { ajax } from "@/utils/ajax.js";
import { AccountsApis } from "@/utils/apis.js";
import * as constants from '@/utils/constants.js'

export default {
  data () {
    return {
      constants
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 每次刷新获取用户信息
    getUserInfo() {
      ajax.get(AccountsApis.userInfoUrl).then(({ data }) => {
        this.$store.commit("updateUserInfo", data);
      });
    },
    logout() {
      ajax.get(AccountsApis.logoutUrl).then(() => {
        // 提示用户
        this.$notify({
          message: "欢迎下次再来",
          type: "success",
        });
        // 删除用户信息
        this.$store.commit("deleteUserInfo");
        // 跳转到首页
        this.$router.push({ name: "Home" });
      });
    },
  },
  components: {
    MyFooter,
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style lang="less" >
.page-mine {
  .top-var {
    background-color: transparent;
    .van-nav-bar__title {
      color: #fff;
    }
  }
  .user-header {
    background: url(/static/mine/bg.jpg) no-repeat center;
    background-size: 100% auto;
    color: #fff;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .avatar img {
      width: 80px;
      height: 80px;
    }
  }
  .btn-link {
    color: #fff;
  }
  .user-links {
    padding: 15px 0px;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
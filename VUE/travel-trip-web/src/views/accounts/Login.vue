<template>
  <!-- 用户登录 -->
  <div class="page-account-login">
    <!-- 导航条 -->
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单输入 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        clearable
        maxlength="11"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="ruleName"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 文字提示 -->
    <div class="tips">
      登录表示同意 <a href="#">用户使用协议及</a> <a href="#">隐私条款</a>
    </div>
    <div class="tips">
      没有账号？ <router-link :to="{name: 'AccountRegister'}">点击注册</router-link>
    </div>
    <!-- 版权信息 -->
    <Copyright />
  </div>
</template>

<script>
import Copyright from '@/components/common/Copyright'
import { AccountsApis } from '@/utils/apis.js'
import { ajax } from '@/utils/ajax.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      ruleName: [{
        required: true, message: '请填写用户名'
      }, {
        pattern: /1\d{10}/,
        message: '请输入正确的手机号'
      }]
    }
  },
  methods: {
    // 点击返回按钮
    onClickLeft () {
      this.$router.go(-1)
    },
    onSubmit () {
      // 用户表单提交
      console.log('提交')
      // 调用接口
      ajax.post(AccountsApis.loginUrl, {
        username: this.username,
        password: this.password
      }).then(
        // 取到值后进行存储
        ({ data }) => {
          console.log(data)
          this.$store.commit('updateUserInfo', data)
          this.$toast('登陆成功')
          this.$router.replace({name: 'Mine'})
          console.log('成功')
        }
      ).catch(({response: {data}}) => {
        // 如果出现了异常，需要给用户提示异常信息
        console.log(data)
        this.$toast(`${data.error_code},${data.error_msg}`)
      })
    }
  },
  components: {
    Copyright
  }
}
</script>

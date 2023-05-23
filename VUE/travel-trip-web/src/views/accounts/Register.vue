<template>
  <!-- 用户注册 -->
  <div class="page-account-register">
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
        v-model="form.username"
        type="tel"
        clearable
        maxlength="11"
        name="手机号码"
        label="手机号码"
        placeholder="请输入手机号码"
        :rules="ruleName"
        @input="onPhoneChange"
      />
      <!-- 验证码插入按钮 -->
      <van-field
        v-model="form.sms_code"
        center
        clearable
        label="短信验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <SendSmsCode :phoneNum="form.username" ref="refSms" />
        </template>
      </van-field>

      <van-field
        v-model="form.nickname"
        clearable
        maxlength="11"
        name="用户昵称"
        label="用户昵称"
        placeholder="请输入用户昵称"
        :rules="[{ required: true, message: '请输入用户昵称' }]"
      />

      <van-field
        v-model="form.password"
        clearable
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="form.passwordRepeat"
        clearable
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="重复输入一次密码"
        :rules="rulePassword"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>

    </van-form>
    <!-- 文字提示 -->
    <div class="tips">
      注册表示同意 <a href="#">用户使用协议及</a> <a href="#">隐私条款</a>
    </div>
    <div class="tips">
      已经有账号了？ <router-link :to="{name: 'AccountLogin'}">点击登陆</router-link>
    </div>
    <!-- 版权信息 -->
    <Copyright />
  </div>
</template>

<script>
import Copyright from '@/components/common/Copyright'
import SendSmsCode from '@/components/SendSmsCode'
import { ajax } from '@/utils/ajax.js'
import { AccountsApis } from '@/utils/apis.js'

export default {
  data () {
    return {
      form: {
        username: '',
        nickname: '',
        sms_code: '',
        password: '',
        passwordRepeat: '',

      },
      // 重复密码验证
      rulePassword: [{ 
        required: true, message: '请填写密码' 
        },{
        validator: () => this.form.password === this.form.passwordRepeat, message: '两次密码输入不一致'
        }
        ],
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
      ajax.post(AccountsApis.registerUrl,{
        username: this.form.username,
        password: this.form.passwordRepeat,
        sms_code: this.form.sms_code,
        nickname: this.form.nickname
      }).then(({ data }) => {
        // 注册成功返回接口
        this.$store.commit('updateUserInfo', data)
        // 提示用户
        this.$notify({
          message: '注册成功',
          type: 'success'
        })
        // 跳转到个人中心
        this.$router.replace({name: 'Mine'})
      })
    },
    // 手机号码发生变化时，重置验证码发送状态
    onPhoneChange () {
      this.$refs.refSms.reset()
    }
  },
  components: {
    Copyright,
    SendSmsCode
  }
}
</script>

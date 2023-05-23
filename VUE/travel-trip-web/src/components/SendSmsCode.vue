<template>
  <!-- 短信验证码发送相关的逻辑 -->
  <van-button size="small" type="primary" @click.prevent="sendSmsCode" :disabled="isSmsSend">{{ sendBtnText }}</van-button>
</template>

<script>
import { ajax } from '@/utils/ajax.js'
import { SystemApis } from '@/utils/apis.js'


export default {
  props: ['phoneNum'],
  data () {
    return {
      sendBtnText: '发送验证码',
      counter: 60,
      timer: null,
      // 是否已经发送了验证码
      isSmsSend: false
    }
  },
  methods: {
    reset () {
      this.isSmsSend = false
      this.sendBtnText = '发送验证码'

      if (this.timer) {
      clearInterval(this.timer)
      this.time = null
      this.counter = 60
      }
    },
    countDown () {
      // 倒计时
      this.timer = setInterval(() => {
        this.sendBtnText = `(${this.counter}秒)后重新发送`
        this.counter--
        if (this.counter < 0) {
          this.reset()
        }
      }, 1000)
    },
    // 发送验证码
    sendSmsCode () {
      // 判断手机号是否已经输入
      if (!this.phoneNum) {
        this.$notify('请输入手机号')
        return false
      }
      // 调用接口,发送短信验证码
      ajax.post(SystemApis.sendSmsCodeUrl,{phone_num: this.phoneNum}).then(({data}) => {
        console.log('data',data)
        this.$notify({
          message: `验证码为：${data.sms_code}，${data.timeout / 60}分钟内有效`,
          duration: 1000 * 10,
          type: 'success'
        })
      // 开启倒计时,60s后才能再次点击
      this.isSmsSend = true
      this.countDown()
      }).catch( (err) => {
        // 如果产生了异常，提示用户重新操作
        this.isSmsSend = false
        this.sendBtnText = '点击发送验证码'
        console.log(err)
      })

    }
  }
}
</script>
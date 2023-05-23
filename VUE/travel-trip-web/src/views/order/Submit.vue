<template>
  <!-- 填写订单 -->
  <div class="page-orde-submit">
    <!-- 顶部导航 -->
    <van-nav-bar
      class="top-var"
      title="填写订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 描述信息 -->
    <div class="order-info">
      <div class="left">
        <h3>{{ ticketDetail.name }}</h3>
        <div class="tips">{{ ticketDetail.desc }}</div>
        <div class="tags">
          <span>
            <van-icon name="clock-o" />明日可定
          </span>
          <span>
            <van-icon name="clock-o" />{{ ticketDetail.return_policy }}
          </span>
        </div>
      </div>
      <div class="right">
        <div class="text-waring">￥{{ ticketDetail.sell_price }}/张</div>
        <van-button plain hairline size="mini" type="info" @click="showPopup=true">预定须知</van-button>
        <!-- 预定须知弹出层 -->
        <van-popup
          v-model="showPopup"
          closeable
          position="bottom"
          :style="{ height: '80%' }"
        >
        <TicketTips :ticketDetail="ticketDetail" />
        </van-popup>
      </div>
    </div>
    <!-- 提交表单 -->
    <van-form @submit="onSubmit" class="form-box">
      <!-- 选择日期 -->
      <van-cell-group class="form-group">
        <van-cell title="选择出行日期" v-model="form.play_date" @click="showCalendar = true" />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
      </van-cell-group>
      <!-- 选择数量 -->
      <van-cell-group class="form-group">
        <van-cell title="购买数量" >
        <van-stepper v-model="form.buy_count" integer min="1" />
        </van-cell>
      </van-cell-group>
      <!-- 收件人和号码 -->
      <van-cell-group class="form-group">
        <van-field
          v-model="form.to_user"
          type="text"
          name="收件人"
          label="收件人"
          placeholder="请输入收件人"
          :rules="[{ required: true, message: '请输入收件人' }]"
        />
        <van-field
          v-model="form.to_phone"
          type="text"
          name="手机号码"
          label="手机号码"
          placeholder="请输入手机号码"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
      </van-cell-group>
      <!-- 提交按钮 -->
     <van-submit-bar :price="totalPrice" button-text="提交订单"  />
    </van-form>
  </div>
</template>

<script>
import { OrderApis, SightApis } from '@/utils/apis.js'
import { ajax } from '@/utils/ajax.js'
import { mapState } from 'vuex'
import TicketTips from '@/components/sight/TicketTips.vue'
export default {
  data() {
    return {
      // 门票id
      id:'',
      // 门票详细信息
      ticketDetail:'',
      showPopup: false,
      // 日期选择的弹窗
      showCalendar: false,
      price: 98,
      form: {
        play_date: '',
        buy_count: 1 ,
        to_user: '',
        to_phone: ''
      }
    }

  },
  methods: {
    // 返回按钮
    onClickLeft() {
      this.$router.go(-1);
    },
    // 格式化日期
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    // 选择日期
    onConfirm (date) {
      this.showCalendar = false
      this.form.play_date = this.formatDate(date)
    },
    // 获取门票详情
    getTicketDetail (){
      ajax.get(SightApis.ticketDetailUrl.replace('#{id}',this.id)).then(({ data }) => {
        this.ticketDetail = data
      }) 
    },
    // 提交表单
    onSubmit () {
      console.log('提交表单')
      ajax.post(OrderApis.ticketSubmitUrl,{
        ticket_id: this.id,
        ...this.form
      }).then(({ data }) => {
          this.$notify({
            type: 'sucess',
            message: '提交成功，请支付'
          })
      this.$router.replace({name: 'OrderPay', params: {sn: data.sn}})
      })
    }
  },
  computed: {
    totalPrice () {
    return this.ticketDetail.sell_price * this.form.buy_count *100
    },
    // 从vuex读取手机号码
    ...mapState({
      phoneNum: state => state.user.username,
      nickname: state => state.user.nickname
    })
  },
  components: {
    TicketTips
  },
  created () {
    // 门票id
    this.id = this.$route.params.id
    this.form.to_user = this.nickname || ''
    this.form.to_phone = this.phoneNum || ''
    this.getTicketDetail()
  }
  
}
</script>

<style lang="less" >
.page-orde-submit{
  // 门票信息
  .order-info{
    display: flex;
    padding: 10px;
    background-color: #fff;
    .left{
      flex: 1;
      text-align: left;
      h3{
        margin: 0;
        padding: 5px 0px;
      }
      .tips{
        padding: 10px 0px;
        color: #999;
        font-size: 12px;
      }
      .tags{
        font-size: 12px;
      }
    }
  }
  .form-box {
    .form-group{
      margin-top: 10px;
      background-color: #fff;
      .van-cell__title{
        text-align: left;
      }
    }
  }
}
</style>
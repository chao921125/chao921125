<template>
  <!-- 订单确认及支付 -->
  <div class="page-order-pay">
    <!-- 顶部导航 -->
    <van-nav-bar
      title="订单支付"
      left-text="返回"
      right-text="取消订单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 订单号 -->
    <van-cell title="订单号" 
      :value="OredrDetail.sn"
      :title-style="{'text-align': 'left'}" 
    />
    <!-- 描述信息 -->
    <div class="order-info" v-for="item in OredrDetail.items" :key="item.pk">
      <div class="left">
        <h3>{{ item.flash_name }}</h3>
        <div><van-icon name="clock-o" /> {{ item.remark }}</div>
        <div class="tips">短信接收</div>
      </div>
      <div class="right">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 提交表单 -->
    <van-submit-bar :price="OredrDetail.buy_amount * 100" button-text="立即支付" @submit="onSubmit" />

  </div>
</template>

<script>
import { OrderApis } from '@/utils/apis.js'
import { ajax } from '@/utils/ajax.js'
import { mapState } from 'vuex'
import { ORDER_STATUS_ALL } from '@/utils/constants.js'

export default {
  data () {
    return {
      sn: '',
      // 订单信息
      OredrDetail: ''
    }
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$dialog.confirm({
        title: '温馨提示',
        message: '您还没有支付，却放弃支付吗？',
      }).then(() => {
        // on confirm
        this.$router.go(-1);
      })

    },
    // 确认取消订单并且返回上一页
    onClickRight () {
      this.$dialog.confirm({
        title: '温馨提示',
        message: '确认取消该订单',
      }).then(() => {
          // todo 调用接口取消
        const url = OrderApis.orderDetailUrl.replace('#{sn}', this.sn)
        ajax.put(url).then( (res) =>{
          if (res.status === 201) {
          this.$notify({
            type: 'sucess',
            message: '订单已成功取消'
          })} else if (res === 200) {
            this.$notify({
            type: 'warning',
            message: '订单已被取消了。'
          })
          }
          this.$router.go(-1)
        })
        
      })
    },
    // 确认支付
    onSubmit () {
      this.$dialog.confirm({
        title: '温馨提示',
        message: `确认支付${this.OredrDetail.buy_amount} 吗？`,
      }).then(() => {
        // todo 调用接口支付
        const url = OrderApis.orderDetailUrl.replace('#{sn}', this.sn)
        ajax.post(url).then( () =>{
          this.$notify({
            type: 'sucess',
            message: '支付成功，正在为您跳转到订单列表'
          })
          this.$router.replace({name: 'OrderList',params: {status: ORDER_STATUS_ALL }})
        })
      })
    },
    getOredrDetail () {
      const url = OrderApis.orderDetailUrl.replace('#{sn}', this.sn)
      ajax.get(url).then(({data}) => {
        this.OredrDetail = data
      })
    } 
  },
  created () {
    this.sn = this.$route.params.sn
    // 获取订单信息
    this.getOredrDetail() 
  }
}
</script>

<style lang="less" >
.page-order-pay {
  .van-cell__value{
    flex: 3;
  }
  // 订单信息
  .order-info {
    display: flex;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    .left{
      flex: 1;
      text-align: left;
      h3 {
        padding: 5px 0px;
        margin: 0px;
      }
    }
    .right{
      width: 80px;
      text-align: right;
    }
  }
}

</style>
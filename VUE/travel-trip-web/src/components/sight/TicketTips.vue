<template>
  <div class="ticket-tips-box">
    <h3>预定须知</h3>
    <div>
      <h4>有效期</h4>
      <p>{{ ticketDetail.expire_date }} 日内有效</p>
    </div>
    <div>
      <h4>退改政策</h4>
      <p>{{ ticketDetail.return_policy }}</p>
    </div>
    <div>
      <h4>发票</h4>
      <p v-if="ticketDetail.has_invoice">我司提供发票</p>
      <p v-else>不提供发票</p>
    </div>
    <div>
      <h4>预定须知</h4>
      <div v-html="ticketDetail.tips" v-if="ticketDetail.tips"></div>
      <div v-else>暂无</div>
    </div>
    <div>
      <h4>入园方式</h4>
      <div>{{ ticketDetail.entry_way }}</div>
    </div>
    <div>
      <h4>备注信息</h4>
      <div v-html="ticketDetail.remark" v-if="ticketDetail.remark"></div>
      <div v-else>暂无</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['ticketDetail']
}
</script>
<style lang="less">
.ticket-tips-box {
  padding: 10px;
  h3, h4, p {
    text-align: left;
  }
  p {
    color: #666;
  }
}

</style>
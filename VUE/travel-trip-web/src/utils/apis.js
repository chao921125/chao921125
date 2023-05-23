
/**
 * 存放项目中所有的接口地址
 */
/**
 * 用户账户相关的接口
 */
// const apiHost = 'http://localhost:8080/api'
const apiHost = '/api'

const AccountsApis = {
  loginUrl: apiHost + '/accounts/user/api/login/',
  logoutUrl: apiHost + '/accounts/user/api/logout/',
  userInfoUrl: apiHost + '/accounts/user/api/info/',
  registerUrl: apiHost + '/accounts/user/api/register/'

}

// 系统模块的接口
const SystemApis = {
  sliderListUrl: apiHost + '/system/slider/list/',
  // 发送短信验证码
  sendSmsCodeUrl: apiHost + '/system/send/sms/'
}

// 景点模块
const SightApis = {
  sightListUrl: apiHost + '/sight/sight/list/',
  // 景点详情
  sightDetailUrl: apiHost + '/sight/sight/detail/#{id}/',
  // 获取门票
  sightTicketUrl: apiHost + '/sight/ticket/list/#{id}/',
  // 评论列表
  sightCommentUrl: apiHost + '/sight/comment/list/#{id}/',
  // 门票详情
  ticketDetailUrl: apiHost + '/sight/ticket/detail/#{id}/'
}
// 订单模块
const OrderApis = {
  // 订单提交
  ticketSubmitUrl: apiHost + '/order/ticket/submit/',
  // 订单详情接口 (订单的查询，删除，取消，支付)
  orderDetailUrl: apiHost + '/order/order/detail/#{sn}/',
  // 订单列表
  orderListUrl: apiHost + '/order/order/list/',

}

export {
  AccountsApis,
  SystemApis,
  SightApis,
  OrderApis
}
// 存放项目中所有接口的地址


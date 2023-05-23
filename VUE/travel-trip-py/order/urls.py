from django.urls import path

from order import views

urlpatterns = [
    # 订单提交接口
    path('ticket/submit/', views.TicketOrderSubmitView.as_view(), name='ticket_submit'),
    # 订单详情接口 (订单的查询，删除，取消，支付)
    path('order/detail/<int:sn>/', views.OrderDetail.as_view(), name='order_detail'),
    # 我的订单列表
    path('order/list/', views.OrderListView.as_view(), name='order_list'),

]
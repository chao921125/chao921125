from django.urls import path

from sight import views

urlpatterns = [
    # 景点列表接口
    path('sight/list/', views.SightListView.as_view(), name='sight_list'),
    # 景点详细信息
    path('sight/detail/<int:pk>/', views.SightDetailView.as_view(), name='sight_detail'),
    # 景点下的评论列表
    path('comment/list/<int:pk>/', views.SightCommentListView.as_view(), name='comment_list'),
    # 景点下的门票列表
    path('ticket/list/<int:pk>/', views.SightTicketListView.as_view(), name='ticket_list'),
    # 景点介绍
    path('sight/info/<int:pk>/', views.SightInfoDetailView.as_view(), name='info_detail'),
    # 门票详情
    path('ticket/detail/<int:pk>/', views.TicketDetailView.as_view(), name='ticket_detail')
]
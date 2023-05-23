from django.urls import path

from accounts import views

urlpatterns = [
    # 用户登录表单
    path('user/login/', views.user_login, name='user_login'),
    path('user/info/', views.user_info, name='user_info'),
    path('user/logout/', views.user_logout, name='user_logout'),

    path('user/api/login/', views.user_api_login, name='user_api_login'),
    path('user/api/logout/', views.user_api_logout, name='user_api_logout'),
    path('user/api/register/', views.UserRegisterView.as_view(), name='user_api_register'),

    # 用户详细信息
    path('user/api/info/', views.UserDetailView.as_view(), name='user_api_info')
]
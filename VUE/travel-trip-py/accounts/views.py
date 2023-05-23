from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.generic import FormView

from accounts.forms import LoginForm, RegisterForm
import json
from django import http
from utils.response import BadRequestJsonResponse, MethodNotAllowedJsonResponse, UnauthorizedJsonResponse, \
    ServerErrorJsonResponse
from accounts import serializer_accounts
from django.views import View


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(data=request.POST)

        if form.is_valid():
            form.do_login(request)
            print('表单验证通过')
        else:
            print(form.errors)
    else:
        form = LoginForm()

    return render(request, 'user_login.html', locals())


# @login_required
def user_info(request):
    return render(request, 'user_info.html', locals())


def user_logout(request):
    logout(request)
    return redirect('user_login')


def user_api_login(request):
    """用户登录接口"""
    if request.method == 'POST':
        # 利用LoginForm表单进行表单验证，如果通过验证就调用LoginForm的自定义方法登录
        form = LoginForm(request.POST)
        if form.is_valid():
            user = form.do_login(request)
            profile = user.profile  # 利用related_name反向查询得到
            data = {
                'user': serializer_accounts.UserSerializer(user).to_dict(),
                'profile': serializer_accounts.UserProfileSerializer(profile).to_dict()
            }
            return http.JsonResponse(data)
        else:
            # 当表单没有通过验证，返回表单的错误信息
            err = json.loads(form.errors.as_json())
            return BadRequestJsonResponse(err)
    else:
        # 请求不允许
        return MethodNotAllowedJsonResponse()


def user_api_logout(request):
    """用户退出接口"""
    logout(request)
    return http.HttpResponse(status=201)


class UserDetailView(View):
    """用户详细接口"""

    def get(self, request):
        """获取用户"""
        user = request.user
        """判断是否登陆"""
        if not user.is_authenticated:
            return UnauthorizedJsonResponse()
        else:
            profile = user.profile  # 利用related_name反向查询得到
            data = {
                'user': serializer_accounts.UserSerializer(user).to_dict(),
                'profile': serializer_accounts.UserProfileSerializer(profile).to_dict()
            }
            return http.JsonResponse(data)


class UserRegisterView(FormView):
    """用户注册接口"""
    form_class = RegisterForm
    http_method_names = ['post']

    def form_valid(self, form):
        """如果表单通过验证"""
        # 生成验证码并发送
        result = form.do_register(request=self.request)
        if result is not None:
            user, profile = result
            data = {
                'user': serializer_accounts.UserSerializer(user).to_dict(),
                'profile': serializer_accounts.UserProfileSerializer(profile).to_dict()
            }
            return http.JsonResponse(data, status=201)
        return ServerErrorJsonResponse()

    def form_invalid(self, form):
        """如果表单没有通过验证"""
        err_list = json.loads(form.errors.as_json())
        return BadRequestJsonResponse(err_list)

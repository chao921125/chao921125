import re

from django import forms
from django.contrib.auth import authenticate, login
from django.core.cache import cache
from django.db import transaction
from django.utils.timezone import now

from accounts.models import User, Profile
from utils import constants


class LoginForm(forms.Form):
    """登录表单"""
    username = forms.CharField(label='用户名',
                               max_length=100,
                               required=True,
                               help_text='使用帮助',
                               initial='admin'
                               )
    password = forms.CharField(label='密码',
                               max_length=100,
                               min_length=6,
                               widget=forms.PasswordInput)

    def __init__(self, *args, **kwargs):
        # 当前登录的用户，如果已经通过表单验证
        super().__init__(*args, **kwargs)
        self.user = ''

    # 局部钩子
    def clean_username(self):
        """验证用户名 钩子函数"""
        username = self.cleaned_data['username']
        pattern = r'^1[0-9]{10}$'
        if not re.search(pattern, username):
            raise forms.ValidationError('手机号%s输入不正确',
                                        code='invalid_phone',
                                        params=(username,))
        return username

    # 全局钩子
    # 当你需要给多个字段增加校验规则的时候可以使用
    def clean(self):
        data = super().clean()
        # 如果单个字段有错误，直接返回，不执行后面的验证
        if self.errors:
            return

        username = data.get('username', None)
        password = data.get('password', None)
        # 使用auth模块进行用户验证,验证通过会返回数据库里的记录对象
        user = authenticate(username=username, password=password)
        if user is None:
            raise forms.ValidationError('用户名或者密码不正确')
        else:
            if not user.is_active:
                raise forms.ValidationError('该用户已经被禁用')

        self.user = user
        return data

    # 自定义的登录方法
    def do_login(self, request):
        """执行用户登录"""
        user = self.user
        # 调用auth模块的登录
        login(request, user)
        # 更新登录的时间
        user.last_login = now()
        user.save()
        # todo 保存登录历史
        return user


class RegisterForm(forms.Form):
    """用户注册表单验证"""
    username = forms.CharField(label='手机号码', max_length=16, required=True,
                               error_messages={'required': '请输入手机号码'})
    password = forms.CharField(label='密码', max_length=128, required=True,
                               error_messages={'required': '请输入密码'})
    nickname = forms.CharField(label='昵称', max_length=16, required=True,
                               error_messages={'required': '请输入昵称'})
    sms_code = forms.CharField(label='验证码', max_length=6, required=True,
                               error_messages={'required': '请输入验证码'})

    def clean_username(self):
        """验证用户名 钩子函数"""
        username = self.cleaned_data['username']
        pattern = r'^1[0-9]{10}$'
        if not re.search(pattern, username):
            raise forms.ValidationError('手机号%s输入不正确',
                                        code='invalid_phone',
                                        params=(username,))
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError('手机号码已经被使用')
        return username

    def clean_nickname(self):
        """验证昵称是否重复"""
        nickname = self.cleaned_data['nickname']
        if User.objects.filter(nickname=nickname).exists():
            raise forms.ValidationError('该昵称已经被使用')
        return nickname

    def clean(self):
        data = super().clean()
        if self.errors:
            return
        # 判断验证码是否正确
        username = data.get('username', None)
        print('data', data)
        sms_code = data.get('sms_code', None)

        # 取出redis中的验证码
        key = "{}{}".format(constants.REGISTER_MSM_KEY, username)
        code = cache.get(key)

        # 判断验证码逻辑
        if code is None:
            raise forms.ValidationError('验证码已失效')
        if str(code) != str(sms_code):
            raise forms.ValidationError('验证码输入不正确')

        return data

    # 事务出现异常自动回滚
    @transaction.atomic
    def do_register(self, request):
        """执行注册"""
        data = self.cleaned_data
        try:
            #  创建基础信息表
            user = User.objects.create_user(
                username=data.get('username', None),
                password=data.get('password', None),
                nickname=data.get('nickname', None),
            )
            # 创建详细表
            version = request.headers.get('version', ''),
            source = request.headers.get('source', '')
            profile = Profile.objects.create(
                user=user,
                username=user.username,
                version=version,
                source=source
            )
            # 执行登陆
            login(request, user)
            # 记录登陆日志
            user.last_login = now()
            user.save()
            ip = request.META.get('REMOTE_ADDR', '')
            # 调用模型里的自定义方法添加LoginRecord表里的登陆记录
            user.add_login_record(username=user.username, ip=ip, source=source, version=version)

            return user, profile

        except Exception as e:
            print(e)
            return None
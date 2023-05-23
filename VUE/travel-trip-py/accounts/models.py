from django.db import models
from django.contrib.auth.models import AbstractUser
from utils.models import CommonModel


class User(AbstractUser):
    """ 用户模型 """
    avatar = models.ImageField('用户头像', upload_to='avatar/%Y%m', null=True, blank=True)
    nickname = models.CharField('昵称', max_length=32, unique=True, null=True)

    class Meta:
        db_table = 'account_user'

    def add_login_record(self, **kwargs):
        """保存登录历史"""
        # 相当于 User.login_records
        self.login_records.create(**kwargs)

    @property
    def avatar_url(self):
        return self.avatar.url if self.avatar else ''


class Profile(models.Model):
    """ 用户详细信息 """
    # 性别
    # 手机号码
    # 年龄
    # 生日
    # 真实姓名
    SEX_CHOICES = (
        (1, '男'),
        (0, '女'),
    )
    username = models.CharField('用户名', max_length=64, unique=True, editable=False)
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    real_name = models.CharField('真实姓名', max_length=32)
    email = models.CharField('电子邮箱', max_length=128, null=True, blank=True)
    is_email_valid = models.BooleanField('邮箱是否已经验证', default=False)
    phone_no = models.CharField('手机号码', max_length=20, null=True, blank=True)
    is_phone_valid = models.BooleanField('是否已经验证', default=False)
    sex = models.SmallIntegerField('性别', default=1, choices=SEX_CHOICES)
    age = models.SmallIntegerField('年龄', default=0)

    source = models.CharField('登录的来源', max_length=16, null=True)
    version = models.CharField('登录的版本', max_length=16, null=True)
    created_at = models.DateTimeField('创建时间', auto_now_add=True)
    updated_at = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        db_table = 'accounts_user_profile'


class LoginRecord(models.Model):
    """ 用户登录日志 """
    # 关联用户
    # 登录账号
    # 登录的时间
    # ip
    # 登录的来源
    # 登录的客户端版本号
    user = models.ForeignKey(User, related_name='login_records', on_delete=models.CASCADE)
    username = models.CharField('登录的账号', max_length=64)
    ip = models.CharField('IP', max_length=32)
    address = models.CharField('地址', max_length=32, null=True, blank=True)
    source = models.CharField('登录的来源', max_length=16, null=True)
    version = models.CharField('登录的版本', max_length=16, null=True)

    created_at = models.DateTimeField('登录时间', auto_now_add=True)

    class Meta:
        db_table = 'accounts_login_record'
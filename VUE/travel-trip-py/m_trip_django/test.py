#!/usr/bin/env python

# 测试环境去 manager.py把前四行拷贝过来，再自己写两行。
import sys
import os

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'm_trip_django.settings')
    import django
    django.setup()
    # 再下方进行 "导入" 文件，模块进行测试
    from accounts.models import User

    User.objects.create_user('abc', '12@qq.com', '123456')
    User.objects.create_user('aaa', 'aaa@qq.com', '123456')
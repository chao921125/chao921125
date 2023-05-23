#!/usr/bin/env python

# 测试环境去 manager.py把前四行拷贝过来，再自己写两行。
import sys
import os

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'm_trip_django.settings')
    import django
    django.setup()
    # 再下方进行 "导入" 文件，模块进行测试
    from sight.models import Comment, Sight

    sight = Sight.objects.filter(pk=1, is_valid=True).first()
    object_list = sight.comments.filter(is_valid=True)
    objects = []
    for item in object_list:
        print(item.user)

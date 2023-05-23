# from flask import g,redirect,url_for
# from  functools import wraps # 重要
#
# def login_required(func):
#     @wraps(func)
#     def wrapper(*args,**kwargs):#代表所有参数
#         if hasattr(g,'user'):
#             return func(*args,**kwargs)
#         else:
#             return redirect(url_for('user.login'))
#     return  wrapper()

# @login_required
# def abc():
#     return "xxx"
# 上方等价与下面这个
# login_required(abc)

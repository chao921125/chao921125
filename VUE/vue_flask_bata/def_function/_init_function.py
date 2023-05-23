from model import UserModel,db,SourceModel,CommentModel
import time

from werkzeug.security import generate_password_hash
from def_function.uplogger import loggerError


def get_request_ip(request):
    ip = request.remote_addr
    return ip

def get_time():
    T = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    return T




def admin_rigister():
    try:
        if UserModel.query.filter_by(email="admin@qq.com").first():
            pass
        else:
            t1 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            t2 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            admin_add = UserModel(username="admin", password=generate_password_hash('Admin@123456'), email="admin@qq.com",
                                  create_time=t1,
                                  update_time=t2, status=1,
                                  img='https://img2.baidu.com/it/u=3094149767,177600321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
            db.session.add(admin_add)
            db.session.commit()
            print("新建管理员账户成功")
    except Exception as e:
        db.Session.rollback(self=db)
        loggerError(get_time() + " " + get_request_ip(request) + str(e))

def resource_add():
    try:
        if SourceModel.query.filter_by().all():
           pass
        else:
            t1 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            t2 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            resource_add1 = SourceModel(source_title="初始化图片1",
                                       source_img='https://img2.baidu.com/it/u=3999091694,1705560228&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=3bd4a23e6ab6fc8cc63b73a1c424d3af',
                                       source_msg="请登录管理员账户进行替换",
                                       create_time=t1,
                                       update_time=t2, status=1)
            resource_add2 = SourceModel(source_title="初始化图片2",
                                       source_img='https://img2.baidu.com/it/u=3999091694,1705560228&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=3bd4a23e6ab6fc8cc63b73a1c424d3af',
                                       source_msg="请登录管理员账户进行替换",
                                       create_time=t1,
                                       update_time=t2, status=1)
            resource_add3 = SourceModel(source_title="初始化图片3",
                                       source_img='https://img2.baidu.com/it/u=3999091694,1705560228&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=3bd4a23e6ab6fc8cc63b73a1c424d3af',
                                       source_msg="请登录管理员账户进行替换",
                                       create_time=t1,
                                       update_time=t2, status=1)
            db.session.add(resource_add1)
            db.session.add(resource_add2)
            db.session.add(resource_add3)
            db.session.commit()
            print("初始化首页资源成功")
    except Exception as e:
        db.Session.rollback(self=db)
        loggerError(get_time() + " " + get_request_ip(request) + str(e))

def comment_add():
    try:
        if CommentModel.query.filter_by().all():
           pass
        else:
            t1 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            t2 = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            comment_add1 = CommentModel(title="初始化评论1",
                                       content='初始化评论、请登录管理员账户进行删除',
                                       create_time=t1,update_time=t2, status=1, Comment_id=1)
            comment_add2 = CommentModel(title="初始化评论2",
                                       content='初始化评论、请登录管理员账户进行删除',
                                       create_time=t1, update_time=t2, status=1, Comment_id=1)
            comment_add3 = CommentModel(title="初始化评论3",
                                       content='初始化评论、请登录管理员账户进行删除',
                                       create_time=t1, update_time=t2, status=1, Comment_id=1)
            db.session.add(comment_add1)
            db.session.add(comment_add2)
            db.session.add(comment_add3)
            db.session.commit()
            print("初始化评论成功")
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request) + str(e))
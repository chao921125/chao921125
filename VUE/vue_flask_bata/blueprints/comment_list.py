from flask import (Blueprint,
                   render_template,
                   request,
                   session,
                   redirect,
                   url_for,
                   jsonify,
                   flash,
                   make_response,
                   g,
                   json,

                   )
# from decorators import login_required
# 导入flask中的蓝图
from model import CommentModel, UserModel,db  # 导入model数据库表 migrate映射用和操作数据使用
from exts import Conn,get_time,loggerInfo,loggerError,loggerWarning,get_request_ip
from form import QuestionForm
# url_prefix:127.0.0.1:5000/book/list
bp = Blueprint("comment", __name__, url_prefix="/comment")


@bp.route('/list', methods=['GET', 'POST'])
# @login_required
def comment_list():
    Conn()
    if request.method == 'GET':
        comment_list = []
        try:
            # 定义为列表
            # try:
            # 查询该数据库长度(条数)
            count = CommentModel.query.count()
            # print(count)
            for i in range(0,count):
                list = CommentModel.query.filter_by(id=i + 1).all()[0]
                user = UserModel.query.filter_by(id=list.Comment_id).all()[0]
                # [0]列表 代表取第一个值
                # UserModel.query.filter_by(id=i).all() 返回的是[<UserModel 1>]这是一个列表 UserModel.query.filter_by(id=i).all()[0]取第一个值
                if list.content != '':
                    if list.status == 1:
                        # print(i)
                        # append 列表添加{}大括号 json数据 把多个字典变成列表
                        comment_list.append(
                            {"id": list.id, "title": list.title, "content": list.content, "user": user.username,"img":user.img})
                    else:
                        pass
                else:
                    i = list.id + 1
            # except:
            #     print("获取评论异常")
            Conn().close()
            loggerInfo(get_time()+" " + get_request_ip(request)+" " + "请求获取评论成功")
            return jsonify(comment_list)
        except Exception as e:
            loggerError(get_time() + " " + get_request_ip(request) + str(e))
            return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})
    else:
        try:
            da = request.get_data()
            # print(da)
            data = json.loads(da)  # json.loads 把传回来的值整成字典
            # print(data['email'])
            # 获取字典里面的key为email的值
            # 传回来的data 获取字典里面的title的值
            emailexec = data['title']
            emailcache = CommentModel.query.filter_by(title=emailexec)[0]
            # CommentModel.query.filter_by(id=emailcache.id).delete()
            emailcache.status = 0
            db.session.commit()
            Conn().close()
            loggerInfo(get_time()+" " + get_request_ip(request)+" " +"请求删除成功")
            return jsonify({"data": data, "code": 200, "msg": "删除成功"})
        except Exception as e:
            loggerError(get_time()+" "+get_request_ip(request)+str(e))
            return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


# 蓝图相当于每个界面处理的模板，模块分散
# 能够快速去处理
# 减少在父元素app的代码量
  # if hasattr(g,'user'):
    #     return render_template('comment.html')
    # else:
    #     return render_template("login.html")
    # if request.method =='GET':
    #     return render_template('comment.html')
    # else:
    #     form = QuestionForm(request.form)
    #     if form.validate():
    #         comment = CommentModel(title="abc", content="1232131")
    #         user = UserModel(username="abc123", password="123456",email="13705868261@qq.com",create_time='',update_time='',status='1s')
    #         comment.usercomment = user
    #         db.session.add(comment)
    #         db.session.commit()
    #         return "数据修改成功"

@bp.route('/Comment',methods = ["POST"])
def Comment_view():
    # 添加数据 insert tabble comment values(xx)
    # user = UserModel(username="abc",password="123213213",email="1370586826@qq.com")
    # comment = CommentModel(title="好看吗？",content="xxx")
    # db.session.add(user)
    # db.session.add(comment)
    # #提交操作
    # db.session.commit()

    # 查询数据 query.filter_by
    # comment = Comment.query.filter_by(id=1)[0]
    # print(comment.title)
    # db.session.commit()

    # 修改数据
    # comment = Comment.query.filter_by(id=1)[0]
    # comment.content = '你好啊'
    # db.session.commit()

    # 删除数据
    # Comment.query.filter_by(id=1).delete()
    # db.session.commit()
    Conn()
    form = QuestionForm(request.form)

    # 获取用户名字 全局变量g 在q求情前获取
    user_id = session.get('user_id')

    # 利用 user 赋值给 g.user 做全局变量 进而访问用户名username
    # g.user = user
    # print(g.user.username)
    try:
        if form.validate():
            title = form.title.data
            content = form.content.data
            usercomment = user_id
            createtime = get_time()
            updatatime = get_time()
            # print(usercomment)
            if usercomment:
                Comment = CommentModel(title=title, content=content, Comment_id=usercomment, status=1,
                                       create_time=createtime, update_time=updatatime)
                # 同时也给作者存数据
                # user = UserModel(username="abc123", password="123456",email="13705868261@qq.com",create_time='',updata_time='',status='1s')
                # comment.usercomment = user
                db.session.add(Comment)
                db.session.commit()
                loggerInfo(get_time()+" "+get_request_ip(request)+" "+"请求发布评论成功")
                Conn().close()
                return jsonify({"code": "200", "msg": "发布成功", "status": 1})
            else:
                return jsonify({"code": "401", "msg": "当前未登录，请您登录！", "status": 0})
        else:
            return jsonify({"code": "400", "msg": "非法请求，请检查后重新提交", "status": 0})
    except Exception as e :
        loggerError(get_time() + ' ' + ' ' + get_request_ip(request) + ' ' + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})

@bp.route('/Deletelist', methods=['GET', 'POST'])
# @login_required
def Deletelist():
    Conn()
    if request.method == 'GET':
        try:
            Delete_list = []
            # 定义为列表
            # try:
            # 查询该数据库长度(条数)
            count = CommentModel.query.count()
            # print(count)
            for i in range(0,count):
                list = CommentModel.query.filter_by(id=i + 1).all()[0]
                # print(i)
                user = UserModel.query.filter_by(id=list.Comment_id).all()[0]
                # [0]列表 代表取第一个值
                # UserModel.query.filter_by(id=i).all() 返回的是[<UserModel 1>]这是一个列表 UserModel.query.filter_by(id=i).all()[0]取第一个值
                if list.content != '':
                    if list.status == 0:
                        # print(i)
                        # append 列表添加{}大括号 json数据 把多个字典变成列表
                        Delete_list.append(
                            {"id": list.id, "title": list.title, "content": list.content, "user": user.username})
                    else:
                        pass
                else:
                    i = list.id + 1
            # except:
            #     print("获取评论异常")
            loggerInfo(get_time()+" " + get_request_ip(request)+ " " +"请求获取删除列表成功")
            Conn().close()
            return jsonify(Delete_list)
        except Exception as e:
            loggerError(get_time()+' '+' '+get_request_ip(request)+' '+str(e))
            return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})

    else:
        try:
            da = request.get_data()
            # print(da)
            data = json.loads(da)  # json.loads 把传回来的值整成字典
            # print(data['email'])
            # 获取字典里面的key为email的值
            # 传回来的data 获取字典里面的title的值
            title = data['title']
            # content= data['content']
            emailcache = CommentModel.query.filter_by(title=title)[0]
            # CommentModel.query.filter_by(id=emailcache.id).delete()
            emailcache.status = 1
            db.session.commit()
            Conn().close()
            loggerInfo(get_time()+" " + get_request_ip(request)+ " " + "请求恢复成功")
            return jsonify({"data": data, "code": 200, "msg": "恢复成功"})
        except Exception as e:
            loggerError(get_time() + ' ' + ' ' + get_request_ip(request) + ' ' + str(e))
            return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


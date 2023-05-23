from flask import (Blueprint,
                   render_template,
                   request,
                   session,
                   Response,
                   redirect,
                   url_for,
                   jsonify,
                   g,
                   )
from utils import CaptchaTool
from form import RigisterForm,LoginForm
from model import CatureModel, UserModel,db
from exts import Conn,loggerInfo,loggerError,loggerWarning,get_request_ip,get_time
import json
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from SqlConfig import redis_pool

from apps import token_required,dotdict


bp = Blueprint("user", __name__, url_prefix="/User")
r = redis_pool()

# mail = Mail()

# 获取验证码
@bp.route('/GetCaptcha', methods=["GET"])
def get_captcha():
    """
    获取图形验证码
    :return:
    """
    try:
        new_captcha = CaptchaTool()
        # 获取图形验证码
        img, code = new_captcha.get_verify_code()
        # 存入session
        session["code"] = code
        # print(session["code"])
        r.setex("code", 65, code)
        # time.sleep(5)
        # print("最新验证码：", code)
        # print("5s后redis：",r.get('code'))  # 5秒后，取值就从orange变成None
        Conn()
        cature = CatureModel(cature_code=code, cature_hash=img)
        db.session.add(cature)
        db.session.commit()
        Conn().close()
        loggerInfo(get_time()+ " " + get_request_ip(request) + " " +"获取验证码成功")
        return img
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request)+ " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


# 请求来了 对请求前处理

@bp.before_request
def before_request():
    user_id = session.get('user_id')
    if user_id:
        try:
            user = UserModel.query.get(user_id)
            # print(user.username)
            # 给g绑定一个user变量的值
            # setattr(g,"user",user)
            # 全局变量g
            g.user = user
            session['cookie'] = g.user.username
            # print(g.user.username)
        except Exception as e:
            loggerError(get_time() + " " + get_request_ip(request)+ " " + str(e))
            return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})
            # g.user = None
            pass


# 请求来了->before_request->视图函数->视图函数中返回模板->context_processor

# 上下文处理器 渲染所有模板都会执行这个
# @bp.context_processor
# def context_processor():
#     if hasattr(g,"user"):
#         print(g)
#         return {"user":g.user}
#     else:
#         return {}


@bp.route("/Logout")
def logout():
    # 清除session 所有数据
    try:
        session.clear()
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request)+ " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求 ！", "status": 1})
    return jsonify({"code": 200, "msg": "退出成功", "data": ""})


# 处理登录模块
# 普通界面 正常传值到后端进行处理
# 登录接口
@bp.route('/Login', methods=['POST','GET'])
def login():
    Conn()
    form_login = LoginForm(request.form)
    if form_login.validate():
        if request.method == 'GET':
            try:
                count = UserModel.query.count()
                user_list = []
                for i in range(0, count):
                    user = UserModel.query.filter_by(id=i + 1).first()
                    user_list.append({'msg':user.username})
                    Conn().close()
                    loggerInfo(get_time() + " " + get_request_ip(request)+ " " +"请求获取用户名成功")
                return jsonify({"msg":user_list,"code":200})
            except Exception as e:
                loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
                return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})
        else:
            email = form_login.email.data
            password = form_login.password.data
            # cc = request.get_data()  # 获取请求过来的数据request.data
            # cc = cc.decode()
            # 解码传过来的值
            # data = json.loads(cc)
            # data1 = json.dumps(data)
            # email = data['email']
            # password = data['password']
            auth = dotdict(form_login.data)
            try:
                if not auth or not auth.get('email') or not auth.get('password') :
                    return jsonify({"code": 201, "msg": 'Authentication login required!'})
                else:
                    try:
                        email_model = UserModel.query.filter_by(email=email).first()
                        if email_model:
                            session["user_id"] = email_model.id  # 设置session
                            session['username'] = email_model.username
                            if email == 'admin@qq.com':
                                try:
                                    if check_password_hash(email_model.password, password) :
                                        Conn().close()
                                        token = jwt.encode({'public_id': email_model.id,
                                                            'exp': datetime.datetime.utcnow() + datetime.timedelta(
                                                                minutes=30)}, "HS256")
                                        loggerInfo(get_time() + " " + get_request_ip(request)+ " " + "请求admin用户登录")
                                        # print("获取token:",token)
                                        return jsonify({'code': 201, 'msg': "admin登录", "user": email_model.username,"token":token})
                                    else:
                                        session.clear()
                                        Conn().close()
                                        return jsonify({"code": 400, "msg": "邮箱和密码不匹配！请仔细检查!"})
                                except Exception as e:
                                    loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
                                    return jsonify({"code": 400, "msg": "admin登录异常！"})
                            else:
                                if email_model.status == 0:
                                    session.clear()
                                    Conn().close()
                                    return jsonify({"code": 405, "msg": '邮箱已被管理员注销，若需要登录，请联系管理员！'})
                                else:
                                    if check_password_hash(email_model.password, password):
                                        token = jwt.encode({'public_id': email_model.id,
                                                            'exp': datetime.datetime.utcnow() + datetime.timedelta(
                                                                minutes=45)}, "HS256")
                                        Conn().close()
                                        loggerInfo(get_time() + " " + get_request_ip(request) + " " + "请求普通用户登录成功")
                                        return jsonify({"code": 200, "msg": '普通用户登录成功!', "user": email_model.username,"token":token})  # 跳转回首页
                                    else:
                                        # flash("邮箱和密码不匹配！请仔细检查")
                                        session.clear()
                                        Conn().close()
                                        loggerWarning(get_time() + " " + get_request_ip(request)+ " " +"邮箱和密码不匹配")
                                        return jsonify({"code": 400, "msg": "邮箱和密码不匹配，请仔细检查!"})
                        else:
                            session.clear()
                            Conn().close()
                            loggerWarning(get_time() + " " + get_request_ip(request) + " " + "邮箱不存在")
                            return jsonify({"code": 401, "msg": "邮箱不存在"})
                    except Exception as e:
                        loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
                        return jsonify({"code": 500, "msg": "登录异常 ！", "status": "10"})
            except Exception as e:
                loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
                return jsonify({"code": 500, "msg": "登录接口异常，清仔细检查！", "status": "10"})
    else:
        loggerWarning(get_time() + " " + get_request_ip(request) + " " + "登录表单异常，清仔细检查")
        return jsonify({"code": 500, "msg": "登录表单异常，清仔细检查！", "status": "10"})


# 个人登录信息模块 前端传后端 怎样的url信息 后端怎么去处理和找到该信息
# @bp.route('/Profile')
# def profile():
#     # 作为url组成部分:/Profile/1
#     # 作为查询字符串:/Profile?id=1
#     user_id = request.args.get('id')  # 收到传回的id值并返回那个界面 获取参数 args.get('id')
#     print(user_id)
#     if user_id:
#         return '用户个人中心'
#     else:
#         return redirect(url_for("user.rigister"))  # url_for指定里面是路径下的方法名


@bp.route('/Admin', methods=['GET'])
def admin():
    try:
        if hasattr(g, 'user'):
            # print(g.user.username)
            if g.user.username == 'admin':
                return jsonify({"code": 200, "msg": "存在登录可以跳转", "status": 1})
            else:
                return jsonify({"code": 400, "msg": "未登录admin", "status": 2})
        else:
            session.clear()
            return jsonify({"code": 400, "msg": "未登录admin", "status": 2})
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request)+ " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


# #登录jinja2表单处理
# @bp.route('/Login',methods=['POST','GET'])
# def login():
#     #解决跨域请求问题
#     if request.method == 'GET':
#         #return  render_template("login.html")
#         return render_template("login.html")
#     else:
#
#         form = LoginForm(request.form)  # 处理登录模块，若是post请求则去做表单验证
#         email = form.email.data
#         password = form.password.data
#         print(email,password)
#         if email == '' and password =='':#
#             return jsonify({"code": 200, "msg": '账号或者密码为空!'})
#         else:
#             # 这个⽅法是实现表单校验功能的 csrf，数据正确性 都通过了 则为真 否则为假
#             if form.validate():#判断表单是否为真值(验证正确) 用validate
#                 # print(form.email.data)  # 取出email⾥⾯的value值
#                 # print(form.password.data)
#                 email = form.email.data
#                 password = form.password.data
#                 user = UserModel.query.filter_by(email=email).first()
#                 if user and check_password_hash(user.password,password):
#                     session["user_id"] = user.id
#                     print("登录成功")
#                     return jsonify({"code": 200, "msg": '登录成功!'}) #跳转回首页
#                 else:
#                     flash("邮箱和密码不匹配！请仔细检查")
#                     return redirect(url_for("user.login"))
#             else:
#                 return jsonify({"code": 200, "msg": "邮箱或者密码输入错误"})

# 获取邮箱验证码
# @bp.route("/Mail", methods=['POST', 'GET'])
# def my_mail():
#     message = Message(
#         subject="邮箱测试",
#         recipients=['737709449@qq.com'],
#         # 收件人
#         body="您的验证码为:",
#         # 邮箱内容
#
#     )
#     mail.send(message)
#     return "wufa"


# 传值 json
# @bp.route("/Rigister",methods=['POST',"GET"])
# def rigister():
#     try:
#         if request.method == 'GET':
#             return render_template("rigisterceshi.html")
#         else:
#             cc = request.get_data()#获取请求过来的数据
#
#             #print(cc)#打印 数据
#             data = json.loads(cc)  # request.get_data(as_text=True) ：获取前端POST请求传过来的 json 数据,将已编码的 JSON 字符串解码为 Python 对象
#             data1 = json.dumps(data,indent=4)# 将data转换为json格式复制给data1  ，将python对象编码为json字符串
#             #print(data['email'])#输出对象内的email值
#             print(data1)#输出已经成为json格式的数据 json格式
#
#             password = data['password']
#             pwdcfm = data['pwdcomfirm']
#             user = data['user']
#             cature = data['cature']
#             email = data['email']
#
#             print("用户名为：",user)  # 取出user⾥⾯的value值
#             print("密码为：",password)  # 取出password⾥⾯的value值
#             print("确认密码为：", pwdcfm)  # 拿到email的整个标签
#             print("邮箱为：",email)  # 取出email⾥⾯的value值
#             print("验证码为：", cature)  # ⾥⾯的value值
#             hash_pwdcfm = generate_password_hash(pwdcfm)
#
#             #判断验证码和redis缓存中是否一致
#             if r.get("code") == cature:
#                 #if password == pwdcfm:
#                 email= data['email']
#                 print(email)
#                 if UserModel.query(user).filter_by(email=email).first():# 遍历数据库
#                     print(UserModel.query.filter_by(email=email).first())
#                     user = UserModel(username=user,password=hash_pwdcfm,email=email)
#                     db.session.add(user)
#                     db.session.commit()
#                     print("redis验证码为：",r.get('code'))  # 5秒后，取值就从orange变成None
#                     return jsonify({"code" : 200,"msg":'注册成功'})
#                 else:
#                     print(UserModel.query.filter_by(email=email).first())
#                     return jsonify({"code": 402,"msg": "邮箱已注册!"})
#             # else:
#             #     # redirect(url_for("user.login"))
#             #     print(cature)
#             #     print(r.get("code"))
#             #     return jsonify({"code": 400,"msg": "两次密码输入不一致!"})
#             else:
#                 return jsonify({"code":401,"msg":"验证码错误"})
#     except:
#         return jsonify({"code":500,"msg":"接口异常!"})

# 处理注册模块 jinja2使用正常 前端传回的json数据或者表单数据不能识别


# 注册接口
@bp.route('/Rigister', methods=['POST'])
def rigister():
    try:
        Conn()
        form = RigisterForm(request.form)
        # form = RigisterForm(request.form)  # 处理登录模块，若是post请求则去做表单验证
        # print(form.data)
        if form.validate():  # 判断表单是否为真值(验证正确) 用validate
            # print(form.user)  # 拿到user的整个标签
            # print("用户名为：", form.user.data)  # 取出user⾥⾯的value值
            # print("密码为：", form.password.data)  # 取出password⾥⾯的value值
            # print("确认密码为：", form.pwdcomfirm.data)  # 拿到email的整个标签
            # print("邮箱为：", form.email.data)  # 取出email⾥⾯的value值
            # print("验证码为：", form.cature.data)  # ⾥⾯的value值

            # 拿到前端传回来的值 并赋值到变量对象中
            user = form.user.data
            pwdcfm = form.pwdcomfirm.data
            email = form.email.data
            codedata = form.cature.data
            # 对获取到的密码进行hash加密(python内部的加密,非md5)
            hash_pwdcfm = generate_password_hash(pwdcfm)
            createtime = get_time()
            updatetime = get_time()

            emailcomfirm = UserModel.query.filter_by(email=email).first()
            user = UserModel(username=user, password=hash_pwdcfm, email=email, create_time=createtime,
                             update_time=updatetime, status='1',img="https://img2.baidu.com/it/u=3094149767,177600321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")

            # 判断验证码和redis缓存中是否一致
            if r.get("code") == codedata:
                if email == emailcomfirm:
                    if emailcomfirm.status == 0:
                        return jsonify({"code": 405, "msg": '邮箱已被管理员注销，若需要登录，请联系管理员！'})
                    else:
                        return jsonify({"code": 402, "msg": '邮箱存在，请重新注册！'})
                else:
                    db.session.add(user)
                    db.session.commit()
                    # print("redis验证码为：", r.get('code'))  # 5秒后，取值就从orange变成None
                    return jsonify({"code": 200, "msg": '注册成功'})
            else:
                # redirect(url_for("user.login"))
                # print(codedata)
                # print(r.get("code"))
                return jsonify({"code": 401, "msg": "验证码错误，请重新输入!"})
        else:
            Conn().close()
            return jsonify({"code": 400, "msg": "验证失败，邮箱已存在或格式有误，请重新输入！", "status": "1"})
    except Exception as e:
        loggerError(get_time()+" "+get_request_ip(request)+" "+str(e))
        # print("注册接口异常，清仔细检查！")
        return jsonify({"code": 500, "msg": "注册接口异常，清仔细检查！", "status": "10"})

# 查询数据表用户
@bp.route('/GetUser_List', methods=['GET'])
def getuser_list():
    user_list = []
    # 定义为列表
    try:
       for i in range(0,len(UserModel.query.all())):
            # list = UserModel.query.filter_by(id=i + 1).all()[0]
            list = UserModel.query.all()[i]
            # [0]列表 代表取第一个值
            # UserModel.query.filter_by(id=i).all() 返回的是[<UserModel 1>]这是一个列表 UserModel.query.filter_by(id=i).all()[0]取第一个值
            # print(list)
            if list.id != '':
                if list.status == 1:
                    user_list.append({"email": list.email, "username": list.username, "create_time": list.create_time,
                                      "update_time": list.update_time, "status": list.status, "id": list.id})
                # print(i)
                else:
                    pass
            else:
                i = list.id
                pass
            # append 列表添加{}大括号 json数据 把多个字典变成列表
       Conn().close()
       return jsonify(user_list)
    except Exception as e:
        loggerError(get_time()+" "+get_request_ip(request)+" "+str(e))
        return jsonify({"code": 500, "msg": "用户接口异常，清仔细检查！", "status": "10"})

# 获取被删除用户列表接口
@bp.route('/GetUserDelete_List', methods=['GET'])
def getuserdetele_list():
    userdetele_list = []
    # 定义为列表
    try:
        Conn()
        # 查询该数据库长度(条数)
        for i in range(0,len(UserModel.query.all())):
            # list = UserModel.query.filter_by(id=i + 1).all()[0]
            list = UserModel.query.all()[i]
            # [0]列表 代表取第一个值
            # UserModel.query.filter_by(id=i).all() 返回的是[<UserModel 1>]这是一个列表 UserModel.query.filter_by(id=i).all()[0]取第一个值
            if list.username != '':
                if list.status == 0:
                    userdetele_list.append({"email": list.email, "username": list.username, "create_time": list.create_time,
                                      "updata_time": list.updata_time, "status": list.status, "id": list.id})
                else:
                    pass
            else:
                i = list.id
                pass
        Conn().close()
        return jsonify(userdetele_list)
        # append 列表添加{}大括号 json数据 把多个字典变成列表
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request)+" " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})

# 删除账户(假状态删除)
@bp.route('/DeleteUser_List', methods=['POST','PUT'])
def deleteuser_list():
    Conn()
    try:
        da = request.get_data()
        # print(da)
        data = json.loads(da)  # json.loads 把传回来的值整成字典
        # print(data['email'])
        # 获取字典里面的key为email的值
        # 传回来的data 获取字典里面的msg的值
        emailexec = data['msg']
        # 修改数据 删除账户把账户状态值设为0
        emailcache = UserModel.query.filter_by(email=emailexec)[0]
        emailcache.status = 0
        db.session.commit()
        Conn().close()
        return data
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


# 恢复账户
@bp.route('/RecoverUser_List', methods=['POST','PUT'])
def RecoverUser_List():
    Conn()
    try:
        da = request.get_data()
        # print(da)
        data = json.loads(da)  # json.loads 把传回来的值整成字典
        # print(data['email'])
        # 获取字典里面的key为email的值
        # 传回来的data 获取字典里面的msg的值
        emailexec = data['msg']
        # 修改数据 删除账户把账户状态值设为0
        emailcache = UserModel.query.filter_by(email=emailexec)[0]
        emailcache.status = 1
        db.session.commit()
        Conn().close()
        return data
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


@bp.route('/changepasswd', methods=['POST','PUT'])
def changepasswd():
    Conn()
    try:
        da = request.get_data()
        # print(da)
        data = json.loads(da)  # json.loads 把传回来的值整成字典
        # print(data['email'])
        # 获取字典里面的key为email的值
        # 传回来的data 获取字典里面的oldpwd的值
        emailuser = data['user']
        emailpwd = data['oldpwd']
        nowpwd = data['nowpwd']
        # 修改数据 删除账户把账户状态值设为0
        emailcache = UserModel.query.filter_by(email=emailuser)[0]
        if check_password_hash(emailcache.password, emailpwd):
            hash_nowpwd = generate_password_hash(nowpwd)
            # hash加密
            emailcache.password = hash_nowpwd
            db.session.commit()
            Conn().close()
            return jsonify({"code": "200", "msg": "更改成功", "status": 1})
        else:
            return jsonify({"code":"400","msg":"密码输入错误，请重新输入","status":0})
    except Exception as e:
        loggerError(get_time() + " " + get_request_ip(request) + " " + str(e))
        return jsonify({"code": 400, "msg": "非法请求，请检查！", "status": 1})


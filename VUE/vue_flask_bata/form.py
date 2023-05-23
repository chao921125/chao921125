# 表单验证
#导入python中使用的 表单 库,与邮件和length

import wtforms
from wtforms.validators import length,email,DataRequired,EqualTo,Email,Regexp
#用到email邮箱了，需要安装email_validator
from model import UserModel,CatureModel


# # 自定义表单注册类
# class Register(wtforms.Form):
#     username = wtforms.StringField()  # 用户名  wtforms.StringField()
#     password = PasswordField()  # 密码  # PasswordField()
#     pwdagain = PasswordField()  # 重复密码
#     email = EmailField(validators=[Email("邮箱格式错误")])
#     # wtforms.validators中的Regexp类可以使用正则表达式
#     phonenum = StringField(validators=[Regexp(r'^(13\d|14[5|7]|15\d|166|17[3|6|7]|18\d)\d{8}$')])


#创建登录类判断表单
class LoginForm(wtforms.Form):
    email = wtforms.EmailField(validators=[length(min=3,max=20),email()])
    password = wtforms.PasswordField(validators=[length(min=6,max=20)])


class RigisterForm(wtforms.Form):
    email = wtforms.EmailField(validators=[length(max=20),email()])#email("邮箱格式错误")
    user = wtforms.StringField(validators=[length(min=2, max=20)])
    password = wtforms.PasswordField(validators=[length(min=6, max=20)])
    pwdcomfirm = wtforms.PasswordField(validators=[length(min=6, max=20),EqualTo("password")])#验证和password是否相等,EqualTo("password")
    cature = wtforms.StringField(validators=[length(min=4,max=4),DataRequired(message=None)])

#验证邮箱或者用户名（用户）是否存在
    def validate_email(self,field):
        email = field.data
        User_Model = UserModel.query.filter_by(email=email).first()
        if User_Model:
            raise wtforms.ValidationError("邮箱已经被注册！")
        else:
            return "数据正常！"
#验证验证码是否存储在数据库中 并在user_list 下注册方法中判断执行
    # def validate_cature_code(self,field):
    #     code = field.data
    #     Cature_Code = CatureModel.query.filter_by(cature_code=code).first()
    #     if Cature_Code:
    #         raise wtforms.ValidationError("验证码已经失效")

class QuestionForm(wtforms.Form):
    title = wtforms.StringField(validators=[length(min=2, max=50)])
    content = wtforms.StringField(validators=[length(min=5)])
    # Regexp('^[_a-zA-Z0-9\u4e00-\u9fa5]+$', flags=0, message=None)

class UpsourceForm(wtforms.Form):
    title = wtforms.StringField(validators=[length(min=2, max=20)])
    msg = wtforms.StringField(validators=[length(min=3)])
    name = wtforms.StringField(validators=[length(min=2)])
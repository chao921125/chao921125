from apps import create_db


db = create_db()
# print("model调用apps中的db")


class SourceModel(db.Model):
    __tablename__ = 'source'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    source_title = db.Column(db.String(100), nullable=True)
    source_img = db.Column(db.String(400), nullable=True)
    source_msg = db.Column(db.Text, nullable=True)
    create_time = db.Column(db.TIMESTAMP, nullable=True, default='CURRENT_TIMESTAMP')
    update_time = db.Column(db.TIMESTAMP, nullable=True,default='CURRENT_TIMESTAMP')
    status = db.Column(db.Integer, nullable=True)

#模型 user
class UserModel(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(200), nullable=True)
    password = db.Column(db.String(200), nullable=True)
    email = db.Column(db.String(100), nullable=False,unique=True)
    create_time = db.Column(db.TIMESTAMP, default='CURRENT_TIMESTAMP')
    update_time = db.Column(db.TIMESTAMP, default='CURRENT_TIMESTAMP')
    status = db.Column(db.Integer, nullable=True)
    img = db.Column(db.String(200), nullable=True)
    def __init__(self, username, password, email, create_time, update_time, status,img):
        # self.id =id
        self.email=email
        self.img=img
        self.username=username
        self.password=password
        self.create_time = create_time
        self.update_time = update_time
        self.status = status

#创建数据库中的表(评论表)
class CommentModel(db.Model):
    __tablename__='comment'
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    title = db.Column(db.String(200),nullable=True)
    content = db.Column(db.Text,nullable=True)
    status = db.Column(db.Integer, nullable=True)
    create_time = db.Column(db.TIMESTAMP, nullable=True)
    update_time = db.Column(db.TIMESTAMP, nullable=True)
    comment_level = db.Column(db.Integer, nullable=True)
    comment_contact = db.Column(db.String(100), nullable=True)
    #外键/不推荐直接在ORM使用
    Comment_id = db.Column(db.Integer,db.ForeignKey('user.id'))#db.Foreignkey("表名.字段")表名字
    #backref:代表反向引用 代表对方访问我的字段名称 后面需要是复数 加s
    usercomment = db.relationship("UserModel",backref="usercomments")#设置外键后进行绑定
    #usercomment = db.relationship("模板方法名",backref="一对多usercomments")

    def __init__(self,title,content,Comment_id,status,create_time,update_time):
        self.Comment_id=Comment_id
        self.status = status
        self.create_time = create_time
        self.update_time = update_time
        # self.id=id
        self.title=title
        self.content=content

class CatureModel(db.Model):
    __tablename__ = 'cature'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cature_code = db.Column(db.Integer,nullable=True)
    cature_hash = db.Column(db.Text,nullable=False)
#
# db.drop_all()
# db.create_all()
# db.metadata.clear()

# db.create_all()
# 模型
# class UserModel(db.Model):
#     __tablename__ = 'user'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     username = db.Column(db.String(200), nullable=True)
#     password = db.Column(db.String(200), nullable=True)
#     email = db.Column(db.String(100), nullable=False, unique=True)
#     create_time = db.Column(db.TIMESTAMP, default='CURRENT_TIMESTAMP')
#     update_time = db.Column(db.TIMESTAMP, default='CURRENT_TIMESTAMP')
#     status = db.Column(db.Integer, nullable=True)
#
#     def __init__(self, username, password, email, create_time, update_time, status):
#         # self.id =id
#         self.email = email
#         self.username = username
#         self.password = password
#         self.create_time = create_time
#         self.update_time = update_time
#         self.status = status
#
#
# # 创建数据库中的表(评论表)
# class CommentModel(db.Model):
#     __tablename__ = 'comment'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     title = db.Column(db.String(200), nullable=True)
#     content = db.Column(db.Text, nullable=True)
#     # 外键/不推荐直接在ORM使用
#     Comment_id = db.Column(db.Integer, db.ForeignKey('user.id'))  # db.Foreignkey("表名.字段")表名字
#     # backref:代表反向引用 代表对方访问我的字段名称 后面需要是复数 加s
#     usercomment = db.relationship("UserModel", backref="usercomments")  # 设置外键后进行绑定
#
#     # usercomment = db.relationship("模板方法名",backref="一对多usercomments")
#
#     def __init__(self, id, title, content, Comment_id):
#         self.Comment_id = Comment_id
#         self.id = id
#         self.title = title
#         self.content = content
#
#
# class CatureModel(db.Model):
#     __tablename__ = 'cature'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     cature_code = db.Column(db.Integer, nullable=True)
#     cature_hash = db.Column(db.Text, nullable=False)
# #
# while 1:
#     db.create_all()
#     print("创建数据表")


# #模型
# class UserModel(db.Model):
#     __tablename__ = 'user'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     username = db.Column(db.String(200),nullable=True)
#     password = db.Column(db.String(200),nullable=True)
#     email = db.Column(db.String(100),nullable=False,unique=True)
#
#
# #创建数据库中的表(评论表)
# class CommentModel(db.Model):
#     __tablename__='comment'
#     id = db.Column(db.Integer,primary_key=True,autoincrement=True)
#     title = db.Column(db.String(200),nullable=True)
#     content = db.Column(db.Text,nullable=True)
#     #外键/不推荐直接在ORM使用
#     Comment_id = db.Column(db.Integer,db.ForeignKey('user.id'))#db.Foreignkey("表名.字段")表名字
#     #backref:代表反向引用 代表对方访问我的字段名称 后面需要是复数 加s
#     usercomment = db.relationship("UserModel",backref="usercomments")#设置外键后进行绑定
#     #usercomment = db.relationship("模板方法名",backref="一对多usercomments")
#
# #db.drop_all()
# db.create_all()

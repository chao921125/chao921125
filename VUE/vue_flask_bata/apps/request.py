import pymysql
import time
import requests
import json
import os
import  random

user = 'root'
# pwd = '123456'
pwd = '1qazCDE#%TGB'
host = 'localhost'
port = 3306
database = 'lvwz'

def Conn():
    conn = pymysql.connect(host=host,port=port,user=user,password=pwd,database=database,charset='utf8')

# 定义好连接数据库的游标
    cursor = conn.cursor()
    return conn,cursor

# *参数host：连接的mysql主机，如果本机是
# 'localhost'
# *参数port：连接的mysql主机的端口，默认是3306
# *参数user：连接的用户名
# *参数password：连接的密码
# *参数database：数据库的名称
# *参数charset：通信采用的编码方式，推荐使用utf8

# 查询 SQL 语句
# sql = "SHOW PROCESSLIST;"
# 执行 SQL 语句 返回值就是 SQL 语句在执行过程中影响的行数
# row_count = cursor.execute(sql)
# print("SQL 语句执行影响的行数%d" % row_count)

# 取出结果集中一行数据,　例如:(1, '张三')
# print(cursor.fetchone())
# 取出结果集中的所有数据, 例如:((1, '张三'), (2, '李四'), (3, '王五'))

def get_namelist():
    sql = "SELECT USERNAME FROM user WHERE username = 'admin' LIMIT 1;"
    conn,cursor = Conn()
    row_count = []
    get_namelist = []
    row_count.append(cursor.execute(sql))
    for q in row_count:
        print("SQL 语句执行影响的行数为%d" % q)
    # time.sleep(1)
    for line in cursor.fetchall():
        print(line)
    print("输出名字为lhk")
    for i in range (0,10):
        try:
            print(line[i])
        except:
            pass
        # print(get_namelist)
    return get_namelist

def get_userlist():
    sql2 = "SELECT * FROM user ;"
    conn, cursor = Conn()
    get_userlist = []
    row_count = []
    row_count.append(cursor.execute(sql2))
    for q in row_count:
        print("SQL 2 的语句执行影响的行数为%d" % q)
    # time.sleep(1)
    for line in cursor.fetchall():
        print(line)
        get_userlist.append(line)
        # print(get_userlist)
    return get_userlist

# while 1 :
#     get_namelist()
#     get_userlist()

def test():
    url = "http://127.0.0.1:5000/User/Login"
    data = {
        "email" : "admin@qq.com",
        "password" : "admin123",
    }
    url2 = "http://127.0.0.1:5000/comment/list"
    url3 = "http://127.0.0.1:5000/User/Admin"

    params = json.dumps(data)
    resp = requests.post(url,params)
    t = resp.content.decode()
    tt = json.loads(t)
    print("----开始登陆！")
    print(tt['msg'])
    print("****")

    resp2 = requests.get(url)
    f = resp2.content.decode()
    # 解码后
    # print(f)
    # json格式化后
    ff = json.loads(f)
    print("输出格式化后的json格式")
    print(ff)
    print("遍历获取到的用户返回值")
    for i in range(0,len(ff['msg'])):
        print(ff['msg'][i])
        print(ff['msg'][i]['msg'])
    print("****")

    resp3 = requests.get(url2)
    print(resp3)
    if resp3:
        q = resp3.content.decode()
        if q[0] != "":
            return
        else:
            print("获取评论列表")
            print(q)
            qq = json.loads(q)
            print("获取评论json列表")
            print(qq)
            print("获取评论信息：%s " % qq[0]['content'])
            print("****")
            pass
    else:
        pass

    print("开始获取Admin状态")
    resp4 = requests.get(url3)
    s = resp4.content.decode()
    # 解码后
    # print(f)
    # json格式化后
    ss = json.loads(s)
    print("输出格式化后的json格式")
    print(ss)
    print("遍历获取到的Admin状态返回值")
    print(ss['msg'])
    print("****")



    print("结束----")
    time.sleep(1)
    # for i in range(0, len(q['msg'])):
    #     print(q['msg'][i])
    #     print(q['msg'][i]['msg'])
    # for i in ff.values():
    #     for j in range(0,2):
    #         print("获取的值为：%s" %i[j]['msg'])



while 1:
    try:
        # test()
        time.sleep(1)
        url4 = "http://127.0.0.1:5000/source/tourist_resources/detail"
        params4 = {
            "id": 1,
            "title": "初始化图片1",
            "msg": "请登录管理员账户进行替换",
        }
        resp5 = requests.get(url4, params4)
        f = resp5.content.decode()
        # print(f)
        # timename = str(int(time.time()))
        projectPath = os.path.dirname(os.path.dirname(__file__))
        print(projectPath)
        # test001文件的位置
        test001_Path = os.path.join(projectPath, "static/images/images_")
        print("最终目录：", test001_Path)
        name =test001_Path
        image_path = name +'.txt'
        with open(image_path, 'a' ,encoding='utf-8') as w:  # 使用with open()新建对象f
            print(f)
            w.write(f)  # 写入数据，文件保存在上面指定的目录，加\n为了换行更方便阅读
        w.close()
    except Exception as e:
        print(e)

i = 0
while 0:
    i = i + 1
    conn, cursor = Conn()
    print("______________")
    print("开始执行!")
    time.sleep(1)
    print("执行了第{}次".format(i))
    print("GET --- NAME ———")
    t1 = get_namelist()
    print("GET --- USER ———")
    t2 = get_userlist()
    print("**************")
    time.sleep(1)
    # conn.close()












# Vue+flask_旅游小网站_毕业设计

#### 介绍
毕业设计-flask-vue前后端分离
一款简单的旅游网站，带admin管理系统

#### 软件架构
软件架构说明
使用Python-flask 轻量级框架编写后端程序，前端采用Vue编写，后端接口都在蓝图blueprints中，前端界面后面提供。

#### 安装教程

1.  后端代码下载到本地后，环境需要python.3.9.7
2.  使用pycharm工具打开下载的文件夹，安装好部分库，可以使用 pip3 install requirements.txt
3.  安装完成后，pycharm执行启动即可
4.  数据库采用mysql，可以使用phpstuty创建本地数据库，连接的端口为：13306，用户名为：root，密码为：1qazCDE#%TGB，数据库为：lvwz，前期工作做好后
5.  flask拉起来，连接数据库，服务监听5000端口。浏览器网址上输入http://127.0.0.1:5000/_init_new_data，返回OK，则初始化建表完成

#### **项目部署** 

Linux
1. git clone https://gitee.com/liyixiang545/vue_flask_bata.git
2. cd vue_flask_bata
3. python -m venv venv  #创建python虚拟环境
4. source venv/bin/activate
5. pip install -r requirements.txt # 安装项目依赖，可能不全，根据提示自行安装即可
6. export FLASK_ENV=development
7. vi env # 修改数据库、redis等相关信息
8. flask run # 启动  或者 python app.py
9. flask 拉起来，连接数据库，服务监听5000端口。浏览器网址上输入 http://127.0.0.1:5000/_init_new_data ，返回OK，则初始化建表完成。
10. 若部署在服务器，前端代码打包在dist目录下，把对应前端代码目录在nginx配置文件进行部署，则需要修改nginx.conf

Windows
1. git clone https://gitee.com/liyixiang545/vue_flask_bata.git
2. cd vue_flask_batavue_flask_bata
3. python -m venv venv  #创建python虚拟环境
4. .\venv\Scripts\activate.bat #激活虚拟环境
5. pip install -r requirements.txt # 安装项目依赖，可能不全，根据提示自行安装即可
6. set FLASK_ENV=development
7. vi env # 修改数据库、redis等相关信息
8. flask run # 启动  或者 python app.py


```
location / {
    root xxx/xxx/dist;
    index index.html;
}


#代理访问后端接口 后面可以把5000端口关掉，不让外部去访问，只能本地访问，安全第一；
location /api {
    rewrite "^/prod-api/(.*)$" /$1 break;
    proxy_pass http://127.0.0.1:5000;
}
```



#### 特技

1.  使用 Readme.md 来支持不同的语言
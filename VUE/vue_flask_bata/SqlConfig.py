from sqlalchemy import create_engine
from configparser import ConfigParser
import redis

# 配置文件
cf = ConfigParser()
cf.read('.env')

# 获取配置文件数据库登录用户名
HOST = cf.get('mysql', 'host')
# HOSTNAME = '127.0.0.1'
PORT = cf.get('mysql', 'port')
# PORT = '3306'
USERNAME = cf.get('mysql', 'user')
PASSWORD = cf.get('mysql', 'password')
# DB = 'root'
database = cf.get('mysql', 'database')
# dialect + driver://username:passwor@host:port/database
DB_URI = f'mysql+pymysql://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{database}'
# DB_URI = f'mysql+pymysql://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DB}'.format(USERNAME,PASSWORD,HOSTANAME,PORT,DATABASE)


# 获取配置文件redis登录用户名
redis_HOST = cf.get('redis', 'host')
# HOSTNAME = '127.0.0.1'
redis_PORT = cf.get('redis', 'port')
# PORT = '3306'
redis_PASSWORD = cf.get('redis', 'password')
# DB = 'root'
redis_db = cf.get('redis', 'db')

# 配置数据库
SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_DATABASE_URI =DB_URI
# 配置数据库密钥
SECRET_KEY = "1qaz@WSX#EDC"

# 创建数据库引擎
engine = create_engine(DB_URI, pool_size =100, max_overflow = 50, pool_timeout = 20)  # 创建引擎

# redis使用 缓存池
pool = redis.ConnectionPool(host=redis_HOST, port=redis_PORT, password=redis_PASSWORD,decode_responses=True,max_connections=20)


def redis_pool():
    r = redis.Redis(connection_pool=pool)
    return r


def Conn():
    conn = engine.connect()  # 连接
    # print("建立数据库链接")
    return conn







# 在app配置用这个方式
# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# app.config['SECRET_KEY'] = "123456"


# 邮箱配置文件
# 当前使用的是QQ邮箱
# MAIL_SERVER = "smtp.qq.com"
# MAIL_PORT = 465
# MAIL_USE_TLS = False
# MAIL_USE_SSL = True
# MAIL_DEBUG = True
# MAIL_USERNAME = "1370586826@qq.com"
# MAIL_PASSWORD = "keaihhmmpspojigf"
# MAIL_DEFAULT_SENDER = "1370586826@qq.com"
# MAIL_MAX_EMAILS =
# MAIL_SUPPRESS_SEND =
# MAIL_ASCII_ATTACHMENTS =

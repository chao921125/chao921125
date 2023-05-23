# from flask_mail import Mail, Message
from apps import create_migrate
from SqlConfig import Conn
from def_function.uplogger import loggerError,loggerInfo,loggerWarning
from def_function._init_function import get_time,get_request_ip

Conn()

#
migrate = create_migrate()
# loggerInfo(get_time()+" "+" "+"调用migrate")

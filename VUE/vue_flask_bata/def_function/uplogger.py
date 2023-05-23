import logger,logging
# from logging import StreamHandler
from logging import FileHandler
import logging.config
# from os import path
import  os
# 加载配置
# logging.config.fileConfig('log.conf')
log_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'log.conf')
logging.config.fileConfig(log_file_path)

# 创建 logger
logger = logging.getLogger()

# logger = logging.getLogger(__name__)
# logging.basicConfig(format='%(asctime)s %(levelname)s %(name)s %(message)s')

# 设置为DEBUG级别
# logger.setLevel(logging.DEBUG)

# 标准流处理器，设置的级别为WARAING
# stream_handler = StreamHandler()
# stream_handler.setLevel(logging.INFO)
# logger.addHandler(stream_handler)

# 文件处理器，设置的级别为INFO
if not os.path.exists("./run"):
    os.mkdir("./run")
t = os.path.join(os.path.dirname(os.path.abspath(__file__)),"../run/run.log")
# file_handler = FileHandler(filename="../dist/run"+'.log')
file_handler = FileHandler(filename=t)
file_handler.setLevel(logging.DEBUG)
logger.addHandler(file_handler)

def loggerInfo(self):
    log = logger.info(self)
    return log

def loggerError(self):
    log = logger.error(self)
    return log

def loggerWarning(self):
    log = logger.warning(self)
    return log

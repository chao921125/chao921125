# 开发环境
[MYSQL 下载](https://dev.mysql.com/downloads/mysql/)
```text
Mac 下mysql无法启动解决：
sudo chown -R mysql /usr/local/mysql/data
sudo /usr/local/mysql/support-files/mysql.server start
设置自启动
sudo launchctl load -w /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist
```
[JDK 下载](https://www.oracle.com/cn/java/technologies/downloads/)
```text
多版本jdk请在系统配置文件中设置即可
```
[NodeJS 下载](https://nodejs.org/en/download/)
```text
多版本nodejs推荐使用nvm管理
nvm安装 https://github.com/nvm-sh/nvm
且推荐使用pnpm安装包，减少本地磁盘的不必要占用
pnpm安装 https://www.pnpm.cn/installation
```
[Python 下载](https://www.python.org/downloads/)
```text
不再建议安装P2版本
```
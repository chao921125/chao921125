# 开发、编程、软件运行环境
[MYSQL 下载](https://dev.mysql.com/downloads/mysql/) |
[MYSQL Windows 下载](https://dev.mysql.com/downloads/installer/) |
[MYSQL MacOS 下载](https://dev.mysql.com/downloads/mysql/)
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
[NodeJS 下载](https://nodejs.org/en/download/) |
[NodeJS 多版本管理](https://github.com/nvm-sh/nvm/) |
[pnpm 包管理](https://www.pnpm.cn/installation/)
```text
多版本nodejs推荐使用nvm管理
nvm安装 https://github.com/nvm-sh/nvm
安装指定的NodeJS版本：nvm install x.x.x
卸载对应的NodeJS版本：nvm uninstall x.x.x
查看当前安装的版本：nvm ls

且推荐使用pnpm安装包，减少本地磁盘的不必要占用
pnpm安装 https://www.pnpm.cn/installation
```
[Python 下载](https://www.python.org/downloads/)
```text
不再建议安装Python 2.x 版本
```
[Git 下载](https://git-scm.com/) |
[Git 官方客户端](https://desktop.github.com/) |
[Git 其他三方客户端](https://git-scm.com/downloads/guis)
```text
Mac自己会集成到XCode中去，如果更新Git服务的话执行一下命令即可
Homebrew
Install homebrew if you don't already have it, then:
$ brew install git

MacPorts
Install MacPorts if you don't already have it, then:
$ sudo port install git
```
# 开发、编程、软件工具
## 全能开发工具
[Visual Studio Code 简称VSCode 微软免费 强大 推荐](https://code.visualstudio.com/Download)
```text
VSCode 下载时请选择 System Installer
```
## Java
[IDEA 收费 但有免费的社区版](https://www.jetbrains.com/zh-cn/idea/) |
[Eclipse 老牌开发工具 免费](https://www.eclipse.org/ide/) |
[Netbeans 免费](https://netbeans.apache.org/)
```text
Jetbrains家族工具之一：IDEA
IDEA 收费 Ultimate
IDEA 社区版免费 Community Edition
```
## Web 前端
[Web Storm 收费](https://www.jetbrains.com/webstorm/)
```text
Jetbrains家族工具之一：Web Storm
```
## Python
[Pycharm 收费 但有免费的社区版](https://www.jetbrains.com/pycharm/)
```text
Jetbrains家族工具之一：Pycharm
Pycharm 收费 Professional
Pycharm 社区版免费 Community
```

http://puppeteerjs.com/


# Puppeteer
对应浏览器位置Mac /Users/huangchao/Works/GitHub/project-source/node_modules/puppeteer/.local-chromium/
[GitHub](https://github.com/puppeteer/puppeteer) \
[英文 API](https://pptr.dev/) \
[中文 API](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
```
npm i puppeteer
yarn add puppeteer

npm i puppeteer-core
yarn add puppeteer-core

node demo.js
```


puppeteer.launch([options])

options <Object> 在浏览器上设置的一组可配置选项。 有以下字段：
    ignoreHTTPSErrors <boolean> 是否在导航期间忽略 HTTPS 错误. 默认是 false。
    headless <boolean> 是否以 无头模式 运行浏览器。默认是 true，除非 devtools 选项是 true。
    executablePath <string> 可运行 Chromium 或 Chrome 可执行文件的路径，而不是绑定的 Chromium。如果 executablePath 是一个相对路径，那么他相对于 当前工作路径 解析。
    slowMo <number> 将 Puppeteer 操作减少指定的毫秒数。这样你就可以看清发生了什么，这很有用。
    defaultViewport <?Object> 为每个页面设置一个默认视口大小。默认是 800x600。如果为 null 的话就禁用视图口。
    width <number> 页面宽度像素。
    height <number> 页面高度像素。
    deviceScaleFactor <number> 设置设备的缩放（可以认为是 dpr）。默认是 1。
    isMobile <boolean> 是否在页面中设置了 meta viewport 标签。默认是 false。
    hasTouch<boolean> 指定viewport是否支持触摸事件。默认是 false。
    isLandscape <boolean> 指定视口是否处于横向模式。默认是 false。
    args <Array<string>> 传递给浏览器实例的其他参数。 这些参数可以参考 这里。
    ignoreDefaultArgs <(boolean|<Array<string>>)> 如果是 true，那就不要使用 puppeteer.defaultArgs()。 如果给出了数组，则过滤掉给定的默认参数。这个选项请谨慎使用。默认为 false。
    handleSIGINT <boolean> Ctrl-C 关闭浏览器进程。默认是 true。
    handleSIGTERM <boolean> 关闭 SIGTERM 上的浏览器进程。默认是 true。
    handleSIGHUP <boolean> 关闭 SIGHUP 上的浏览器进程。默认是 true.
    timeout <number> 等待浏览器实例启动的最长时间（以毫秒为单位）。默认是 30000 (30 秒). 通过 0 来禁用超时。
    dumpio <boolean> 是否将浏览器进程标准输出和标准错误输入到 process.stdout 和 process.stderr 中。默认是 false。
    userDataDir <string> 用户数据目录 路径。
    env <Object> 指定浏览器可见的环境变量。默认是 process.env。
    devtools <boolean> 是否为每个选项卡自动打开DevTools面板。如果这个选项是 true，headless 选项将会设置成 false。
    pipe <boolean> 通过管道而不是WebSocket连接到浏览器。默认是 false。
returns: <Promise<Browser>> 浏览器实例支持 Promise。


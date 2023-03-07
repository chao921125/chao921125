### 浏览器跨域
###### 问题
```text
什么是跨域
为什么会跨域
为什么有跨域限制
怎么解决跨域
```
###### 答案及解析
```text
关键词：1、CORS；2、同源策略

跨域问题的来源是浏览器为了请求安全而引入的基于同源策略的安全特性。
当页面和请求的协议、主机名或端口不同时，浏览器判定两者不同源，即为跨域请求。
需要注意的是跨域是浏览器的限制，服务端并不受此影响。
当产生跨域时，我们可以通过JSONP、CORS、postMessage、Proxy等方式解决。

1. 跨域问题的来源
跨域问题的来源是浏览器为了请求安全而引入的基于**同源策略（Same-origin policy）**的安全特性。同源策略是浏览器一个非常重要的安全策略，基于这个策略可以限制非同源的内容与当前页面进行交互，从而减少页面被攻击的可能性。
当页面和请求的协议、主机名或端口不同时，浏览器判定两者不同源，从而产生跨域。需要注意的是跨域是浏览器的限制，实际请求已经正常发出和响应了。

2. 如何判定跨域
一个 origin 由协议（Protocol）、主机名（Host）和端口（Port）组成，这三块也是同源策略的判定条件，只有当协议、主机名和端口都相同时，浏览器才判定两者是同源关系，否则即为跨域。
3. 跨域的解决方案
前端常见的跨域解决方案有 CORS、反向代理（Reverse Proxy）、JSONP 等。

3.1 CORS (Cross-Origin Resource Sharing)
CORS 是目前最为广泛的解决跨域问题的方案。方案依赖服务端/后端在响应头中添加 Access-Control-Allow-* 头，告知浏览器端通过此请求。

涉及到的端

CORS 只需要服务端/后端支持即可，不涉及前端改动。

具体实现方式

CORS 将请求分为简单请求（Simple Requests）和需预检请求（Preflighted requests），不同场景有不同的行为：

简单请求

不会触发预检请求的称为简单请求。当请求满足以下条件时就是一个简单请求：

请求方法：GET、HEAD、POST。
请求头：Accept、Accept-Language、Content-Language、Content-Type。
Content-Type 仅支持：application/x-www-form-urlencoded、multipart/form-data、text/plain。
需预检请求

当一个请求不满足以上简单请求的条件时，浏览器会自动向服务端发送一个 OPTIONS 请求，通过服务端返回的 Access-Control-Allow-* 判定请求是否被允许。

CORS 引入了以下几个以 Access-Control-Allow-* 开头：

Access-Control-Allow-Origin 表示允许的来源
Access-Control-Allow-Methods 表示允许的请求方法
Access-Control-Allow-Headers 表示允许的请求头
Access-Control-Allow-Credentials 表示允许携带认证信息
当请求符合响应头的这些条件时，浏览器才会发送并响应正式的请求。

3.2 反向代理
反向代理解决跨域问题的方案依赖同源的服务端对请求做一个转发处理，将请求从跨域请求转换成同源请求。

涉及到的端

反向代理只需要服务端/后端支持，几乎不涉及前端改动，只用切换接口即可。

具体实现方式

反向代理的实现方式为在页面同域下配置一套反向代理服务，页面请求同域的服务端，服务端请求上游的实际的服务端，之后将结果返回给前端。

3.3 JSONP
JSONP 是一个相对古老的跨域解决方案。主要是利用了浏览器加载 JavaScript 资源文件时不受同源策略的限制而实现跨域获取数据。

涉及到的端

JSONP 需要服务端和前端配合实现。

具体实现方式

JSONP 的原理是利用了浏览器加载 JavaScript 资源文件时不受同源策略的限制而实现的。具体流程如下：

全局注册一个函数，例如：window.getHZFEMember = (num) => console.log('HZFE Member: ' + num);。
构造一个请求 URL，例如：https://hzfe.org/api/hzfeMember?callback=getHZFEMember。
生成一个 <script> 并把 src 设为上一步的请求 URL 并插入到文档中，如 <script src="https://hzfe.org/api/hzfeMember?callback=getHZFEMember" />。
服务端构造一个 JavaScript 函数调用表达式并返回，例如：getHZFEMember(17)。
浏览器加载并执行以上代码，输出 HZFE Member: 17。
非常用方式
postMessage
即在两个 origin 下分别部署一套页面 A 与 B，A 页面通过 iframe 加载 B 页面并监听消息，B 页面发送消息。
window.name
主要是利用 window.name 页面跳转不改变的特性实现跨域，即 iframe 加载一个跨域页面，设置 window.name，跳转到同域页面，可以通过 $('iframe').contentWindow.name 拿到跨域页面的数据。
document.domain
可将相同一级域名下的子域名页面的 document.domain 设置为一级域名实现跨域。
可将同域不同端口的 document.domain 设置为同域名实现跨域（端口被置为 null）。

1. LocalStorage / SessionStorage 跨域
LocalStorage 和 SessionStorage 同样受到同源策略的限制。而跨域读写的方式也可以使用前文提到的 postMessage。

2. 跨域与监控
前端项目在统计前端报错监控时会遇到上报的内容只有 Script Error 的问题。这个问题也是由同源策略引起。在 <script> 标签上添加 crossorigin="anonymous" 并且返回的 JS 文件响应头加上 Access-Control-Allow-Origin: * 即可捕捉到完整的错误堆栈。

3. 跨域与图片
前端项目在图片处理时可能会遇到图片绘制到 Canvas 上之后却不能读取像素或导出 base64 的问题。这个问题也是由同源策略引起。解决方式和上文相同，给图片添加 crossorigin="anonymous" 并在返回的图片文件响应头加上 Access-Control-Allow-Origin: * 即可解决。

参考内容：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin
```
### 浏览器的重排重绘
###### 问题
```text
如何提升页面渲染性能
如何减少页面重排重绘
哪些行为会引起重排/重绘
```
###### 答案及解析
```text
渲染性能 Layout Paint

浏览器渲染大致分为四个阶段，其中在解析 HTML 后，会依次进入 Layout 和 Paint 阶段。样式或节点的更改，以及对布局信息的访问等，都有可能导致重排和重绘。而重排和重绘的过程在主线程中进行，这意味着不合理的重排重绘会导致渲染卡顿，用户交互滞后等性能问题。

解决方案
对 DOM 进行批量写入和读取（通过虚拟 DOM 或者 DocumentFragment 实现）。
避免对样式频繁操作，了解常用样式属性触发 Layout / Paint / Composite 的机制，合理使用样式。
合理利用特殊样式属性（如 transform: translateZ(0) 或者 will-change），将渲染层提升为合成层，开启 GPU 加速，提高页面性能。
使用变量对布局信息（如 clientTop）进行缓存，避免因频繁读取布局信息而触发重排和重绘。
另外，可以借助 DevTools Performance 面板来查看产生重排重绘任务占用主线程的情况和调用代码。


```
### 浏览器渲染机制
###### 问题
```text
浏览器如何渲染页面
有哪些提高浏览器渲染性能的方法
```
###### 答案及解析
```text
DOM CSSOM 线程互斥 渲染树 Compositing GPU 加速

当浏览器进程获取到 HTML 的第一个字节开始，会通知渲染进程开始解析 HTML，将 HTML 转换成 DOM 树，并进入渲染流程。一般所有的浏览器都会经过五大步骤，分别是：

PARSE：解析 HTML，构建 DOM 树。
STYLE：为每个节点计算最终的有效样式。
LAYOUT：为每个节点计算位置和大小等布局信息。
PAINT：绘制不同的盒子，为了避免不必要的重绘，将会分成多个层进行处理。
COMPOSITE & RENDER：将上述不同的层合成为一张位图，发送给 GPU，渲染到屏幕上。
为了提高浏览器的渲染性能，通常的手段是保证渲染流程不被阻塞，避免不必要的绘制计算和重排重绘，利用 GPU 硬件加速等技术来提高渲染性能。

优化影响渲染的资源
关键 CSS 资源放在头部加载。
JS 通常放在页面底部。
为 JS 添加 async 和 defer 属性。
body 中尽量不要出现 CSS 和 JS。
为 img 指定宽高，避免图像加载完成后触发重排。
避免使用 table, iframe 等慢元素。原因是 table 会等到它的 dom 树全部生成后再一次性插入页面中；iframe 内资源的下载过程会阻塞父页面静态资源的下载及 css, dom 树的解析。
```
### Babel 的原理
###### 问题
```text
Babel 是什么
Babel 有什么用
压缩代码如何实现
```
###### 答案及解析
```text
JS 编译器 AST 插件系统

Babel 是 JavaScript 编译器：他能让开发者在开发过程中，直接使用各类方言（如 TS、Flow、JSX）或新的语法特性，而不需要考虑运行环境，因为 Babel 可以做到按需转换为低版本支持的代码；Babel 内部原理是将 JS 代码转换为 AST，对 AST 应用各种插件进行处理，最终输出编译后的 JS 代码。
```
### 类别
###### 问题
```text

```
###### 答案及解析
```text

```

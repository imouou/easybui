# 快速入门

引入 CDN 依赖即可开发调试。

1. **cdn.jsdelivr.net** [buijs](https://www.jsdelivr.com/package/npm/buijs)

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/buijs/lib/latest/bui.css"
/>
<script src="https://unpkg.com/buijs/lib/zepto.js"></script>
<script src="https://unpkg.com/buijs/lib/latest/bui.js"></script>
```

2. **unpkg.com** [buijs](https://unpkg.com/browse/buijs/)

```html
<link rel="stylesheet" href="https://unpkg.com/buijs/lib/latest/bui.css" />
<script src="https://unpkg.com/buijs/lib/zepto.js"></script>
<script src="https://unpkg.com/buijs/lib/latest/bui.js"></script>
```

## 多页开发

- 优点：简单，支持后端语言输出展示；
- 缺点：体验较差，无法定制交互及路由操作；

_index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>BUI</title>
    <link
      rel="stylesheet"
      href="https://unpkg.com/buijs/lib/latest/bui.css"
    />
  </head>
  <body>
    <!-- BUI标准结构 -->
    <div class="bui-page bui-box-vertical">
      <header>
        <!-- 顶部固定内容 -->
        <div class="bui-bar">
          <div class="bui-bar-left">
            <div class="bui-btn"><i class="icon-back"></i></div>
          </div>
          <div class="bui-bar-main">BUI首页</div>
          <div class="bui-bar-right"></div>
        </div>
      </header>
      <main>
        <!-- 中间滚动内容 -->
        <div class="bui-btn warning">中间按钮</div>
      </main>
      <footer>
        <!-- 底部固定内容 -->
        <div class="bui-btn primary">底部按钮</div>
      </footer>
    </div>

    <script src="https://unpkg.com/buijs/lib/zepto.js"></script>
    <script src="https://unpkg.com/buijs/lib/latest/bui.js"></script>
    <script>
      bui.ready(function (global) {
        // init
        bui.alert("done");
      });
    </script>
  </body>
</html>
```

## 单页开发

> 推荐：官网例子默认以单页开发为主。

- 优点：体验好，媲美 app，操控强，按需加载或一次性加载；
- 缺点：不支持后端语言输出展示；

> 单页开发预览需要部署，或者 node 工程的支持，默认需要 3 个文件，。

_index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>BUI</title>
    <link
      rel="stylesheet"
      href="https://unpkg.com/buijs/lib/latest/bui.css"
    />
  </head>
  <body>
    <div id="bui-router"></div>

    <!-- content -->
    <script src="https://unpkg.com/buijs/lib/zepto.js"></script>
    <script src="https://unpkg.com/buijs/lib/latest/bui.js"></script>
    <script>
      // router init
      window.router = bui.router();

      bui.ready(function (global) {
        // router init, will find default page. pages/main/main.html pages/main/main.js
        router.init({
          id: "#bui-router",
        });
      });
    </script>
  </body>
</html>
```

_pages/main/main.html_

```html
<!-- BUI标准结构 -->
<div class="bui-page bui-box-vertical">
  <header>
    <!-- 顶部固定内容 -->
    <div class="bui-bar">
      <div class="bui-bar-left">
        <div class="bui-btn"><i class="icon-back"></i></div>
      </div>
      <div class="bui-bar-main">BUI首页</div>
      <div class="bui-bar-right"></div>
    </div>
  </header>
  <main>
    <!-- 中间滚动内容 -->
    <div class="bui-btn warning">中间按钮</div>
  </main>
  <footer>
    <!-- 底部固定内容 -->
    <div class="bui-btn primary">底部按钮</div>
  </footer>
</div>
```

_pages/main/main.js_ 特定的模块包装

```js
loader.define(function (requires, exports, module, global) {
  // requires: 加载模块
  // module: 模块信息
  // global: 获取全局方法
  bui.alert("done");
});
```

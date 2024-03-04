// 引入 express 模块
const express = require("express");

// 创建一个 Express 应用程序实例
const app = express();

// 引入 body-parser 模块，用于解析请求体中的 JSON 数据
const bodyParser = require("body-parser");

// 引入自定义路由模块
const router = require("./router.js");

// 添加中间件，设置响应头，允许跨域访问
app.use("./api/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,x-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
});

// 使用 body-parser 中间件，解析请求体中的 JSON 数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 使用自定义路由模块
app.use(router);

// 监听端口 8000，启动服务器
app.listen("8000", function(res) {
    console.log("server is running at port:8000....");
});

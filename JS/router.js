// 引入 Express 模块
const express = require("express");

// 创建一个路由实例
const router = express.Router();

// 导入服务模块
const services = require("./services.js");

// 处理登录请求的路由
router.post("/api/login", services.login);

// 处理注册请求的路由
router.post("/api/register", services.register);

// 处理主页数据请求的路由
router.post("/api/kindex", services.index);

// TODO: 添加其他路由处理搜索、分类、购物车、详情等功能

// 导出路由实例
module.exports = router;

// 引入 MySQL 模块
var mysql = require("mysql");

// 创建连接对象
var con = mysql.createConnection({
    host: 'localhost',      // 主机名
    user: 'root',           // 用户名
    password: '123456'      // 密码
});

// 连接到数据库
con.connect(function(err) {
    if (err) throw err;
    console.log("连接成功！");

    // 创建数据库
    con.query("CREATE DATABASE mytestdb", function(err, result) {
        if (err) throw err;
        console.log("数据库创建成功");
    });

    // 关闭连接
    con.end();
});

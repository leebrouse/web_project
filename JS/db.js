// 引入 'mysql' 模块
const mysql = require('mysql');

// 定义一个名为 'base' 的函数来处理数据库操作
exports.base = (sql, data, callback) => {
    // 创建到 MySQL 数据库的连接
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: '123456',
        database: 'shop'
    });

    // 连接到数据库
    connection.connect();

    // 执行查询以创建表（如果不存在）
    connection.query("CREATE TABLE IF NOT EXISTS user(username VARCHAR(20) UNIQUE NOT NULL, password VARCHAR(16) NOT NULL)", (err, results, fields) => {
        if (err) {
            // 如果出现错误，则抛出异常
            throw err.message;
        } else {
            // 如果成功，则记录结果
            console.log("创建成功")
            console.log("创建表结果:", results);
        }
    });

    // 使用提供的数据执行提供的 SQL 查询
    connection.query(sql, data, (err, results, fields) => {
        if (err) {
            // 如果出现错误，则记录它
            console.log("查询错误:", err);
        } else {
            // 如果成功，则记录结果
            console.log("查询结果:", results);
            // 使用结果和错误（如果有）调用回调函数
            callback && callback(results, err);
        }
    });

    // 关闭与数据库的连接
    connection.end();
};


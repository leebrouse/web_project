// 导入数据库模块
const db = require("./db.js");

// 登录函数，处理用户登录请求
exports.login = (req, res) => {
    // 从请求体中获取用户名和密码
    let username = req.body.username;
    let pwd = req.body.password;

    // 构建查询语句
    let sql = "SELECT * FROM user WHERE username=?";

    // 调用数据库模块的方法执行查询
    db.base(sql, username, (result, err) => {
        // 如果查询结果为空，返回用户名错误消息
        if (!result.length) {
            return res.json({ status: 1, msg: '用户名错误' });
        } else {
            // 如果用户名存在，检查密码是否匹配
            if (result[0].password == pwd) {
                return res.json({ status: 1, msg: "登录成功！", data: result });
            }
            // 密码不匹配，返回密码错误消息
            return res.json({ status: 2, msg: "密码错误" });
        }
    });
};

// 注册函数，处理用户注册请求
exports.register = (req, res) => {
    // 从请求体中获取用户名和密码
    let username = req.body.username;
    let pwd = req.body.password;
    
    // 构建插入用户信息的 SQL 语句
    let sql = "INSERT INTO user(username, password) VALUES (?, ?)";

    try {
        // 调用数据库模块的方法执行插入操作
        db.base(sql, [username, pwd], (result, err) => {
            if (err) {
                console.log(err);
                console.log("用户信息插入失败");
                return res.json({ status: 0, msg: err });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

// 主页函数，处理主页数据请求
exports.index = (req, res) => {
    // 构建查询商品数据的 SQL 语句
    let sql = "SELECT * FROM goods";
    let a = " "; // 注意此处 a 变量未被使用

    try {
        // 调用数据库模块的方法执行查询操作
        db.base(sql, a, (result, err) => {
            if (err) {
                console.log(err);
                console.log("商品读取失败");
                return res.json({ status: 0, msg: '商品数据读取失败' });
            } else {
                return res.json({ status: 1, msg: '商品数据读取成功！', data: result });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

var  mysql=require("mysql");
var connection=mysql.createConnection({
host:'127.0.0.1',
user:'root',
password:'123456',
database:'mytestdb'
})
// connection.connect();
// var sqlstring="";
// sqlstring="create table user(uid int primary key auto_increment,name varchar(20),sex char(1))"
// connection.query(sqlstring,function(err,result,fields){
//     if(err){
//         console.log("表格创建失败");
//         return ;
//     }
//     console.log("表格创建成功！");
// })

var sqlstring="insert into  user (name,sex) values ('张三','m')"
connection.query(sqlstring,function(err,result){
    if(err){
        console.log("添加数据失败"+err.message);
        return;
    }
    console.log("数据添加成功！");
})

/**
 * 
 * 作业
 * 1.完成node.js连接数据库(DONE)
 * 2.实现node.js修改数据
 * 3.实现node.js查询数据
 * 4.实现node.js删除数据
 * 5.实现node.js多表连接查询
 * 
 * 
 */

//Update
// var sqlstring="update user set name='张三' where uid=1;"
// connection.query(sqlstring,function(err,result){
//     if(err){
//         console.log("数据修改失败"+err.message);
//         result;
//     }
//     console.log('数据修改成功')
// })


//查询
// var sqlstring="select * from user "
// connection.query(sqlstring,function(err,result){
//     if(err){
//         console.log("数据查询失败"+err.message);
//         result;
//     }
//     console.log('数据查询成功')
// })

// 执行查询的 SQL 语句
// var sqlstring = "SELECT * FROM user;";

// 执行查询操作
// connection.query(sqlstring, function(err, result) {
//     if (err) {
//         console.log("数据查询失败：" + err.message);
//         return;
//     }

//     // 如果查询成功，打印查询结果
//     console.log("查询结果：");
//     console.log(result); // result 是一个包含查询结果的数组

//     console.log('数据查询成功');
// });


//删除
// var sqlstring="delete from user where name='张三'; "
// connection.query(sqlstring,function(err,result){
//     if(err){
//         console.log("数据删除失败"+err.message);
//         result;
//     }
//     console.log('数据删除成功')
// })

connection.end();
// node.js操作mysql添加数据
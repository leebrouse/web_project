const mysql =require("mysql");


const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456'
})

//connect mysql
connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("链接成功！"+connection.threadId)
})
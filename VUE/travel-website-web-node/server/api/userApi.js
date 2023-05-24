var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql2')
var $sql = require('../sql')

//连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
      res.json({
        code: '1',
        msg: '操作失败'
      });
    } else {
      res.json(ret);
    }
};


router.post('/login', (req,res)=>{
    var sql = $sql.user.login;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.userId, params.userPassword], (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            if(data.length===0){
                return res.send({
                    message:"用户名或密码错误！"
                })
            }
            else{
                return res.send({
                    message:"登录成功",
                    userId:data[0].userId
                })
            }
        }
    })
})

router.post('/register',(req,res)=>{
    var sql = $sql.user.register;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.userNickName,params.userPassword,params.userPhone],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:"注册成功"
            })
        }
    })
})

router.post('/checkRegister',(req,res)=>{
    var sql = $sql.user.checkRegister;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            if(data.length===0){
                return res.send({
                    message:true
                })
            }
            else{
                return res.send({
                    message:false,
                })
            }
        }
    })
})

router.post('/getName',(req,res)=>{
    var sql = $sql.user.getName;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            return res.send({
                userNickName:data[0].userNickName
            })
        }
    })
})

router.post('/showUserInfo',(req,res)=>{
    var sql = $sql.user.showUserInfo;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            return res.send({
                data:data
            })
        }
    })
})

router.post('/buyTicket',(req,res)=>{
    var sql = $sql.user.buyTicket;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.spotId,params.purchaseDate,params.purchaseNumber],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:true
            })
        }
    })
})

router.post('/checkBuyTicket',(req,res)=>{
    var sql = $sql.user.checkBuyTicket;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.spotId,params.purchaseDate],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            if(data.length===0){
                return res.send({
                    message:true
                })
            }
            else{
                return res.send({
                    message:false,
                })
            }
        }
    })
})

router.post('/buyTicketAgain',(req,res)=>{
    var sql = $sql.user.buyTicketAgain;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.purchaseNumber,params.userId,params.spotId,params.purchaseDate],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:true
            })
        }
    })
})

router.post('/cancelBuyTicket',(req,res)=>{
    var sql = $sql.user.cancelBuyTicket;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.spotId,params.purchaseDate],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:true
            })
        }
    })
})

router.post('/addCollection',(req,res)=>{
    var sql = $sql.user.addCollection;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.spotId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:true
            })
        }
    })
})

router.post('/cancelCollection',(req,res)=>{
    var sql = $sql.user.cancelCollection;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId,params.spotId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.send({
                message:true
            })
        }
    })
})




module.exports = router;
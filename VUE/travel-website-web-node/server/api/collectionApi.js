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


router.post('/showCollection', (req,res)=>{
    var sql = $sql.collection.showCollection;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.userId], (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            if(data.length===0){
                return res.send({
                    message:false
                })
            }
            else{
                return res.send({
                    data:data,
                    message:true
                })                
            } 
        }
    })
})

router.post('/searchCollection', (req,res)=>{
    var sql = $sql.collection.searchCollection;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.userId,params.spotId], (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            if(data.length===0){
                return res.send({
                    message:false
                })
            }
            else{
                return res.send({
                    data:data,
                    message:true
                })                
            } 
        }
    })
})


module.exports = router;
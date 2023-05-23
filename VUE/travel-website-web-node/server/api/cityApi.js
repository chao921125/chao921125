var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
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

router.post('/showCity',(req,res)=>{
    var sql = $sql.city.showCity;
    var params = req.body;
    console.log(params);
    conn.query(sql, [],(err,result)=>{
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

router.post('/showHotCity',(req,res)=>{
    var sql = $sql.city.showHotCity;
    var params = req.body;
    console.log(params);
    conn.query(sql, [],(err,result)=>{
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

router.post('/getCityName1',(req,res)=>{
    var sql = $sql.city.getCityName1;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.spotId],(err,result)=>{
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
                    message:true,
                    cityName:data[0].cityName
                })
            }
        }
    })
})

router.post('/getCityName2',(req,res)=>{
    var sql = $sql.city.getCityName2 ;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.cityId],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            var data = JSON.parse(JSON.stringify(result));
            return res.send({
                cityName:data[0].cityName
            })
        }
    })
})

module.exports = router;
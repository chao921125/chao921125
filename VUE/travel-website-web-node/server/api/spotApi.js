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


router.post('/showCitySpot', (req,res)=>{
    var sql = $sql.spot.showCitySpot;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.cityId], (err,result)=>{
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

router.post('/showHotCitySpot', (req,res)=>{
  var sql = $sql.spot.showHotCitySpot;
  var params = req.body;
  console.log(params);
  //conn.query()的功能是向数据库发送一条 MySQL 查询
  conn.query(sql, [params.cityId], (err,result)=>{
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

router.post('/showSpotInfo', (req,res)=>{
  var sql = $sql.spot.showSpotInfo;
  var params = req.body;
  console.log(params);
  //conn.query()的功能是向数据库发送一条 MySQL 查询
  conn.query(sql, [params.spotId], (err,result)=>{
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

router.post('/buyTicketAfter', (req,res)=>{
  var sql = $sql.spot.buyTicketAfter;
  var params = req.body;
  console.log(params);
  //conn.query()的功能是向数据库发送一条 MySQL 查询
  conn.query(sql, [params.spotPurchasedNumber,params.spotId], (err,result)=>{
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

router.post('/cancelTicketAfter', (req,res)=>{
    var sql = $sql.spot.cancelTicketAfter;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.spotPurchasedNumber,params.spotId], (err,result)=>{
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

router.post('/searchSpot', (req,res)=>{
    var sql = $sql.spot.searchSpot;
    var params = req.body;
    console.log(params);
    //conn.query()的功能是向数据库发送一条 MySQL 查询
    conn.query(sql, [params.spotName], (err,result)=>{
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
                    spotId:data[0].spotId
                })
            }

        }
    })
})




module.exports = router;
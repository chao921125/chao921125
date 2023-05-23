const spot = require('./api/spotApi')
const user = require('./api/userApi')
const purchasing = require('./api/purchasingListApi')
const collection = require('./api/collectionApi')
const city = require('./api/cityApi')
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var $sql = require('./sql')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// // 后端api路由
app.use('/spot', spot)
app.use('/user', user)
app.use('/purchase',purchasing)
app.use('/collection',collection)
app.use('/city',city)

// 监听端口
app.listen(3000);
// 解决跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


console.log('success listen at port:3000......');
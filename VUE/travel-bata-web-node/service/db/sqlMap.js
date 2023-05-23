var sqlMap = {
    user: {
        add: 'insert into user (user_id, user, password, phone , sex) values (?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    }
}

module.exports = sqlMap;
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += "where username ='"+ params.name +"'";
    }
    var keywords = JSON.parse(Object.keys(params)[0]);
    conn.query(sql_name, params.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            console.log(resultArray.password);
           // console.log(keywords);
            if(resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0')   //username
            }
        }
    })
});
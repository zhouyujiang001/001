var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'zhouyujiang'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;


//登录

router.post('/login', function (req, res) {
    res.contentType('json');
    var params = {
        username: req.body.username,
        userpwd: req.body.userpwd
    };

    action_login(params.username, params.userpwd, function (result, id, name) {
        params.result = result;
        params.userid = id;
        params.username = name;
        console.log(params);
        res.send(JSON.stringify(params));//给客户端返回一个json格式的数据
        res.end();
    });
});


function action_login(name, pwd, callback) {
    var sqlCmd;
    sqlCmd = 'SELECT * from users where UserName="' + name + '" or Tel="' + name + '" ';
    //console.log(sqlCmd);
    connection.query(sqlCmd, function (error, rows, fields) {
        if (rows.length) {
            //根据用户名和密码查找到匹配的数据
            var userid = rows[0].Id;
            var username = rows[0].UserName;
            //connection.query('insert into cart (UserId) values ("' + userid + '")', function (error, rows, fields) {
            //    console.log('rows')
            //});
            callback(true, userid, username);
            console.log(rows[0]);
        } else {
            //没有匹配的数据
            callback(false);

        }
    });
}


//注册

router.post('/reg', function (req, res) {
    res.contentType('json');
    var params = {
        Tel: req.body.tel,
        username: req.body.username,
        UserPwd: req.body.password,
    };
    //console.log(params);

    action_reg(params.Tel, params.username, params.UserPwd, function (result, id) {
        params.result = result;
        params.userid = id;
        console.log(params);
        res.send(JSON.stringify(params));//给客户端返回一个json格式的数据
        res.end();
    });
});

function action_reg(tel, name, pwd, callback) {
    var sqlCmd;
    sqlCmd = 'SELECT * from users where UserName="' + name + '" or Tel="' + tel + '"';
    connection.query(sqlCmd, function (error, rows, fields) {
        console.log(rows);
        if (!rows.length) {
            //当前用户未注册
            var insertCmd = 'insert into users (Tel,UserName,UserPwd) values ("' + tel + '","' + name + '","' + pwd + '")';
            connection.query(insertCmd, function () {
                connection.query(sqlCmd, function (error, rows, fields) {
                    console.log(rows[0]);
                    var userid = rows[0].Id;
                    callback(true, userid);
                })
            });
        } else {
            //当前用户已经注册
            callback(false);
        }
    });
}

//搜索

router.post('/select', function (req, res) {
    //console.log(req.body)
    res.contentType('json');

        var sqlCmd;
        sqlCmd = 'SELECT * from shangping where ID="' + req.body.ssl + '" or lei="' + req.body.ssl + '"or miaoshu="' + req.body.ssl + '"or jiaqian="' + req.body.ssl + '"';
        //console.log(sqlCmd);
        connection.query(sqlCmd, function (error, rows, fields) {
            if (rows.length) {
                res.send(JSON.stringify(rows));// /给客户端返回一个json格式的数据
               res.end();
            } else {
                callback(false);
            }
        });

});

//查id
router.post('/chaid', function (req, res) {
    //console.log(req.body);
    //res.contentType('json');

    var sqlCmd = 'update gwc set ID="'+req.body.sousuolan+ '" ';
    console.log(sqlCmd)
    connection.query(sqlCmd,function(error, rows, fields){
        res.send(rows);
        //console.log(rows);
    });

});





//订单数据


router.post('/charu', function (req, res) {
    //console.log(req.body);
    //res.contentType('json');

    var sqlCmd = 'update gwc set shuliang="'+req.body.hh+ '" ';
  console.log(sqlCmd)
    connection.query(sqlCmd,function(error, rows, fields){
        res.send(rows);
       //console.log(rows);
    });

});



//onload加载数据
router.post('/onload', function (req, res) {
   console.log(req.body)
    var sqlCmd = 'SELECT * from gwc where ID ='+req.body.id;
    console.log(sqlCmd)
    //var sqlCmd = 'SELECT * from gwc where ID="' + req.body.input + '" or jiaqian="' + req.body.input + '"or shuliang="' + req.body.input + '"';
    connection.query(sqlCmd,function(error, rows, fields){
        console.log(rows)
           res.send(rows);

});
    //console.log(1);

});

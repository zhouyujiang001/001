/**
 * Created by Administrator on 2016/11/4.
 */
var mysql = require('mysql');
var conf = require('../conf/db');
var sql = require('./userSqlMapping');


var jsonWrite = function (res,ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg:'操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req,res,next) {
        console.log('add');

        var connection = mysql.createConnection(conf.mysql);

        connection.connect();
        connection.query(sql.queryAll,function (error, rows, fields) {
            res.send(rows);
            //jsonWrite(res,result);

        });
        connection.end();

    }

};
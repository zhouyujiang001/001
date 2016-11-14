/**
 * Created by Administrator on 2016/11/4.
 */

//sql CRUD 语句

var user = {
    insert: 'insert into userinfo (UserNmae,UserPass),values(?,?)',
    update: 'update userinfo set UserPass=? where UserName=?',
    delete: 'delete from userinfo where UserName=? and UserPass=?',
    queryById: 'select * from userinfo where UserName=?',
    queryAll:'select * from userinfo'
};

module.exports = user;
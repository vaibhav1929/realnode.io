//must installed all the following node modules.

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysqlObj = require('mysql');
var con;

//configure port number, and callback function

app.use('/static', express.static('public'));

http.listen(2000,function () {});

//call initMysql function to setup/change the database.

module.exports.initMysql = function(host,database,user,password){
    con = mysqlObj.createConnection({
        host: host,
        database:database,
        user: user,
        password: password
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("DB connected");
    });
};


io.on('connection', function(socket) {
    console.log("User Connected");

    socket.on('insert',function (data,callBackFunction) {
        con.query(data.sqlQuery,function () {callBackFunction();});
    });

    socket.on('update',function (data,callBackFunction) {
        con.query(data.sqlQuery,function () {callBackFunction();});
    });

    socket.on('delete',function (data,callBackFunction) {
        con.query(data.sqlQuery,function () {callBackFunction();});
    });

    socket.on('select',function(data){
        selectData(socket,data.selectQuery,data.isBroadcast);
    });

    socket.on('disconnect', function () {
        console.log("user Disconnected");
    });
});

function selectData(socket,query,isBroadcast){

    con.query(query
        ,function (err,result,fields) {
            if(isBroadcast){
                io.sockets.emit('sender',result);
            }
            else{
                socket.emit('sender',result);
            }

        });
}

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/display.html', function(req, res) {
    res.sendfile('display.html');
});

this.initMysql("localhost","users","root","");
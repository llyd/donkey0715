var http = require('http');
var path = require('path');
var fs = require('fs');
var router = require('./router.js');
var mysql = require('./mysql');
// var express = require('express');
// var app = express();

// app.use(express.static('_tmp'));

// app.post('/Academy/getData',function(req,res){
//     var userAddSql = 'select * from academy';
//     mysql.query(userAddSql,function(err,results){
//       res.send(results);
//     }); 
//   });

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("应用实例，访问地址为 http://%s:%s", host, port)

// })


http.createServer(function(req, res){
  console.log('request: ', req.url);
  url = req.url;
  url = url.split('?')[0];

  // 路由到下层
  if(typeof(router[url]) === 'function')
    return router[url](req, res)

  // 访问文件
  if(url == '/') url = '/_tmp/index.html';
    
  file_path = path.join(__dirname+url);

  var chunk = fs.readFile(file_path, function(err, chunk){
    res.writeHead(200, {})
    msg = err?'没找到对应文件， 请确认文件名是否正确':chunk
    res.write(msg,'binary')
    res.end()
  })

}).listen(9001)

var mysql = require('mysql');

var conn=null;
results = {
  getConn : function(cb){
		// if(conn) return cb(null, conn);
		//创建一个connection
		var connection = mysql.createConnection({
			host:'192.168.26.239',
			user:'root',
			password:'raspberry',
			port:'3306',
			database:'graduation'
		});
		connection.connect(function(err){
			conn = connection;
		})

	},	
	query: function(sql, cb){
		var _query = function(sql, callback){
			conn.query(sql, function(err,results){
				if(err){
					console.log('[select error] - :'+err.message);
					callback();		
				}
				console.log('select: ', results);
				callback(err,results);
			})	

		};
		
		if(!conn) {
			return this.getConn(function(err, conn){
				if(err) {
					return cb(err);
				}		
				_query(sql, cb);	
			});

	 	}
	 	else{
	 		return _query(sql, cb);	
	 	}

	}
}
module.exports = results;


// // ===========
// mysql = require('')
// mysql.getConn(function(err, connection){
// 	if(err) return;
// 	connect.query()
// })


// //执行sql语句
// module.exports = function execSql(userAddSql){
// 	//创建一个connection
// connection.connect(function(err){
// 	console.log(arguments);
// 	if(err){
// 		console.log('[query] - :'+err);
// 		return;
// 	}
// 	console.log('[connection connect] succeed!');
// });

// 	connection.query(userAddSql,function(err,results){
// 	if(err){
// 		console.log('[select error] - :'+err.message);
// 		return;		
// 	}
// 	console.log('select: ', results);
// 	return results;
// });

// 	//关闭connection

// connection.end(function(err){
// 	if(err){
// 		return;
// 	}
// 	console.log('[connection end] succeed!');
// });
// }



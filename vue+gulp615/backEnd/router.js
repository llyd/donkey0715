var querystring = require("querystring");
var url = require("url");
var mysql = require('./mysql');
var mysqlQuery = function(res,userAddSql){
  mysql.query(userAddSql,function(err,result){
      res.end(JSON.stringify(result));
    });
}

// router
module.exports = {
  '/arrange/getXuanxius': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var selectedYear = objectQuery.selectedYear;
    //选择该学年所有选修课
    //var userAddSql = 'select * from plan where year = "'+ selectedYear +'"';
  },
  '/arrange/getYears': function(req,res){
    var userAddSql = 'select distinct year from plan';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/getManagers': function(req,res){
    var userAddSql = 'select * from manager';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var name = objectQuery.name;
    var password = objectQuery.password;
    var authority = objectQuery.authority;
    var userAddSql = 'insert into manager (name,password,authority) values ("' + name + '","' + password + '","' + authority + '")';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from manager where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var name = objectQuery.name;
    var password = objectQuery.password;
    var authority = objectQuery.authority;
    var userAddSql = 'update manager set name = "' + name +'" ,password = "'+password+'" ,authority = "'+authority+'" where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/timeschema/getData': function(req,res){
    var userAddSql = 'select * from timeschema';
    mysqlQuery(res,userAddSql);
  },
  '/timeschema/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var scheId = objectQuery.scheId;
    var scheType = objectQuery.scheType;
    var scheTime = objectQuery.scheTime;
    var priority = objectQuery.priority;
    var userAddSql = 'insert into timeschema (scheId,scheType,scheTime,priority) values ("' + scheId + '","' + scheType + '","' + scheTime + '","' + priority + '")';
    mysqlQuery(res,userAddSql);
  },
  '/timeschema/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from timeschema where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/timeschema/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var scheId = objectQuery.scheId;
    var scheType = objectQuery.scheType;
    var scheTime = objectQuery.scheTime;
    var priority = objectQuery.priority;
    var userAddSql = 'update timeschema set scheId = "' + scheId +'" ,scheType = "'+scheType+'" ,scheTime = "'+scheTime+'" ,priority = "'+priority+'" where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/queryByClass/courseSche': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var className = objectQuery.className;
    var userAddSql = 'select * from courseTable where className = "'+className+'"';
    mysqlQuery(res,userAddSql);
  },
  '/queryByRoom/courseSche': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var roomName = objectQuery.roomName;
    var userAddSql = 'select * from courseTable where roomName = "'+roomName+'"';
    mysqlQuery(res,userAddSql);
  },
  '/queryByTeacher/courseSche': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var teacherName = objectQuery.teacherName;
    var userAddSql = 'select * from courseTable where teacherName = "'+teacherName+'"';
    mysqlQuery(res,userAddSql);
  },
  '/plan/getData': function(req,res){
    var userAddSql = 'select * from plan';
    mysqlQuery(res,userAddSql);
  },
  '/plan/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var planId = objectQuery.planId;
    var year = objectQuery.year;
    var grade = objectQuery.grade;
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName; 
    var classId = objectQuery.classId;      
    var className = objectQuery.className;   
    var teacherId = objectQuery.teacherId; 
    var teacherName = objectQuery.teacherName;
    var roomId = objectQuery.roomId;   
    var roomName = objectQuery.roomName;
    var time = objectQuery.time;
    var userAddSql = 'insert into plan (planId,year,grade,courseId,courseName,classId,className,teacherId,teacherName,roomId,roomName,time) values ("' + planId + '","' + year+ '","' + grade+ '","' + courseId + '","' + courseName + '","' + classId + '","' + className + '","' + teacherId + '","' + teacherName + '","' + roomId + '","' + roomName + '","' + time + '")';
    mysqlQuery(res,userAddSql);
  },
  '/plan/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from plan where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/plan/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var planId = objectQuery.planId;
    var year = objectQuery.year;
    var grade = objectQuery.grade;
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName; 
    var classId = objectQuery.classId;      
    var className = objectQuery.className;   
    var teacherId = objectQuery.teacherId; 
    var teacherName = objectQuery.teacherName;
    var roomId = objectQuery.roomId;   
    var roomName = objectQuery.roomName;
    var time = objectQuery.time;
    var userAddSql = 'update plan set planId = "' + planId +'" ,year = "' + year +'" ,grade = "' + grade +'" ,courseId = "' + courseId +'" ,courseName = "'+courseName+'" ,classId = "'+classId+'" ,className = "'+className+'" ,teacherId = "'+teacherId+'" ,teacherName = "'+teacherName+'" ,roomId = "'+roomId+'" ,roomName = "'+roomName+'" ,roomName = "'+time+'" where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/Academy/getData': function(req,res){
  	var userAddSql = 'select * from academy';
    mysqlQuery(res,userAddSql);
  },
  '/Academy/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var classId = objectQuery.classId;
    var className = objectQuery.className;
    var classSize = objectQuery.classSize;
    var spareTime = objectQuery.spareTime;
    var courseNames = objectQuery.courseNames;
  	var userAddSql = 'insert into academy (classId,className,spareTime,classSize,courseNames) values ("' + classId + '","' + className + '","' + spareTime + '","' + classSize + '","' + courseNames + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from academy where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var classId = objectQuery.classId;
    var className = objectQuery.className;
    var classSize = objectQuery.classSize;
    var spareTime = objectQuery.spareTime;
    var courseNames = objectQuery.courseNames;
  	var userAddSql = 'update academy set classId = "' + classId +'" ,className = "'+className+'" ,classSize = "'+classSize+'" ,spareTime = "'+spareTime+'" ,courseNames = "'+courseNames+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/getData': function(req,res){
  	var userAddSql = 'select * from course';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName;
    var courseType = objectQuery.courseType;
    var schedule = objectQuery.schedule;
    var roomTypes = objectQuery.roomTypes;
    var teacherNames = objectQuery.teacherNames;
    var isOrNotHeban = objectQuery.isOrNotHeban;
  	var userAddSql = 'insert into course (courseId,courseName,courseType,schedule,roomTypes,teacherNames,isOrNotHeban) values ("' + courseId + '","' + courseName + '","' + courseType + '","' + schedule + '","' + roomTypes + '","' + teacherNames + '","' + isOrNotHeban + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from course where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName;
    var courseType = objectQuery.courseType;
    var schedule = objectQuery.schedule;
    var roomTypes = objectQuery.roomTypes;
    var teacherNames = objectQuery.teacherNames;
    var isOrNotHeban = objectQuery.isOrNotHeban;
  	var userAddSql = 'update course set courseId = "' + courseId +'" ,courseName = "'+courseName+'" ,courseType = "'+courseType+'" ,schedule = "'+schedule+'" ,roomTypes = "'+roomTypes+'" ,teacherNames = "'+teacherNames+'" ,isOrNotHeban = "'+isOrNotHeban+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/getData': function(req,res){
  	var userAddSql = 'select * from room';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var roomId = objectQuery.roomId;
    var roomName = objectQuery.roomName;
    var roomSize = objectQuery.roomSize;
    var roomType = objectQuery.roomType;
    var emptyTime = objectQuery.emptyTime;
  	var userAddSql = 'insert into room (roomId,roomName,roomSize,roomType,emptyTime) values ("' + roomId + '","' + roomName + '","' + roomSize + '","' + roomType + '","' + emptyTime + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from room where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var roomId = objectQuery.roomId;
    var roomName = objectQuery.roomName;
    var roomSize = objectQuery.roomSize;
    var roomType = objectQuery.roomType;
    var emptyTime = objectQuery.emptyTime;
  	var userAddSql = 'update room set roomId = "' + roomId +'" ,roomName = "'+roomName+'" ,roomSize = "'+roomSize+'" ,roomType = "'+roomType+'" ,emptyTime = "'+emptyTime+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/getData': function(req,res){
  	var userAddSql = 'select * from teacher';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var teacherId = objectQuery.teacherId;
    var teacherName = objectQuery.teacherName;
    var teacherSex = objectQuery.teacherSex;
    var teacherTitle = objectQuery.teacherTitle;
    var workload = objectQuery.workload;
    var haveWorked = objectQuery.haveWorked;
    var idleTime = objectQuery.idleTime;
  	var userAddSql = 'insert into teacher (teacherId,teacherName,teacherSex,teacherTitle,workload,haveWorked,idleTime) values ("' + teacherId + '","' + teacherName + '","' + teacherSex + '","' + teacherTitle + '","' + workload + '","' + haveWorked + '","' + idleTime + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from teacher where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var teacherId = objectQuery.teacherId;
    var teacherName = objectQuery.teacherName;
    var teacherSex = objectQuery.teacherSex;
    var teacherTitle = objectQuery.teacherTitle;
    var workload = objectQuery.workload;
    var haveWorked = objectQuery.haveWorked;
    var idleTime = objectQuery.idleTime;
  	var userAddSql = 'update teacher set teacherId = "' + teacherId +'" ,teacherName = "'+teacherName+'" ,teacherSex = "'+teacherSex+'" ,teacherTitle = "'+teacherTitle+'" ,workload = "'+workload+'" ,haveWorked = "'+haveWorked+'" ,idleTime = "'+idleTime+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },

}

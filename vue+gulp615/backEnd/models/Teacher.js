/**
 * Teacher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
  //    <td>{{teacher.teacherId}}</td>
	// 		<td>{{teacher.teacherName}}</td>
	// 		<td>{{teacher.teacherSex}}</td>
	// 		<td>{{teacher.teacherTitle}}</td>
	// 		<td>{{teacher.workload}}</td>
	// 		<td>{{teacher.haveWorked}}</td>
//	// 	<td>{{teacher.courseName}}</td>
	// 		<td>{{teacher.idleTime}}</td>

module.exports = {

  	connection: 'mysql',
	  tableName: 'teacher',
    attributes: {
  	id: {
  		type:'integer',
  		primaryKey: true,
    	unique: true,
    	required: true,
    	columnName: 'id'
  	},
    teacherId: {
      type:'string',
      columnName: 'teacherId'
    },
  	teacherName: {
  		type: 'string',
  		columnName: 'teacherName'
  	},
  	teacherSex: {
  		type: 'string',
  		columnName: 'teacherSex'
  	},
  	teacherTitle: {
  		type: 'integer',
  		enum: [0,1,2],
  		columnName: 'teacherTitle'
  	},
  	workload: {
  		type: 'integer',
  		enum: [2,4,6],
  		columnName: 'workload'
  	},
  	haveWorked: {
  		type: 'integer',
  		defaultsTo: 0,
  		columnName: 'haveWorked'
  	},
  	idleTime: {
  		type: 'array',
  		columnName: 'idleTime'
  	}
  }


};


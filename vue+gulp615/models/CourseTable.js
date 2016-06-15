/**
 * CourseTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	connection: 'mysql',
	tableName: 'courseTable',
    attributes: {
  	id: {
  		type:'integer',
  		primaryKey: true,
    	unique: true,
    	required: true,
    	columnName: 'id'
  	},
  	classId: {
  		type: 'string',
  		columnName: 'classId'
  	},
  	className: {
  		type: 'string',
  		columnName: 'className'
  	},
  	courseId: {
  		type: 'string',
  		columnName: 'courseId'
  	},
  	courseName: {
  		type: 'string',
  		columnName: 'courseName'
  	},
  	teacherId: {
  		type: 'string',
  		columnName: 'teacherId'
  	},
  	teacherName: {
  		type: 'string',
  		columnName: 'teacherName'
  	},
  	roomId: {
  		type: 'string',
  		columnName: 'roomId'
  	},
  	roomName: {
  		type: 'string',
  		columnName: 'roomName'
  	},
  }
};


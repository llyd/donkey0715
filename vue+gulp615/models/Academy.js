/**
 * Academy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 // */
 //        {{academy.classId}}  班级id
 // 	    {{academy.className}}
	// 	{{academy.classSize}}
	// 	{{academy.spareTime}}
	// 	{{academy.courseId}}
// {{academy.courseName}}

module.exports = {

  
  	connection: 'mysql',
	  tableName: 'academy',
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
  	spareTime: {
  		type: 'array',
  		columnName: 'spareTime'
  	},
  	classSize: {
  		type: 'integer',
  		columnName: 'classSize'
  	},
  	courseIds: {
  		type: 'array',
  		columnName: 'courseIds'
  	},
  	courseNames: {
  		type: 'array',
  		columnName: 'courseNames'
  	}
  }

};


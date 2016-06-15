/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

        //  {{course.courseId}}
		// 	{{course.courseName}}
		// 	{{course.courseType}}
		// 	{{course.schedule}}
		// 	{{course.roomType}}
		//  {{course.teachers}}
  	connection: 'mysql',
	  tableName: 'course',
    attributes: {
  	id: {
  		type:'integer',
  		primaryKey: true,
    	unique: true,
    	required: true,
    	columnName: 'id'
  	},
    courseId: {
      type:'string',
      columnName: 'courseId'
    },
  	courseName: {
  		type: 'string',
  		columnName: 'courseName'
  	},
  	courseType: {
  		type: 'integer',
      enum:[1,2],
  		columnName: 'courseType'
  	},
  	schedule: {
  		type: 'integer',
  		columnName: 'schedule'
  	},
  	roomTypes: {
  		type: 'array',
  		columnName: 'roomTypes'
  	},
  	teacherNames: {
  		type: 'array',
  		columnName: 'teacherNames'
  	},
    isOrNotHeban: {
      type: 'string',
      columnName: 'isOrNotHeban'
    }
  }

};


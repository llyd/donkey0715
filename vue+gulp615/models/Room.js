module.exports = {
	connection: 'mysql',
	tableName: 'room',
    attributes: {
  	id: {
  		type:'integer',
  		primaryKey: true,
    	unique: true,
    	required: true,
    	columnName: 'id'
  	},
    roomId: {
      type:'string',
      columnName: 'roomId'
    },
  	roomName: {
  		type: 'string',
  		columnName: 'roomName'
  	},
  	roomSize: {
  		type: 'integer',
  		columnName: 'roomSize'
  	},
  	roomType: {
  		type: 'string',
  		columnName: 'roomType'
  	},
  	emptyTime: {
  		type: 'array',
  		columnName: 'emptyTime'
  	}

  }
};

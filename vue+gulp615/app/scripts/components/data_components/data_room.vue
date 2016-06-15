<template>
<div class="daohang">
数据管理--><strong>教室数据维护</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>教室id</td>
			<td>教室名称</td>
			<td>座位数</td>
			<td>教室类型</td>
			<td>可用时间段</td>
			<td>操作</td>
		</tr>
		<tr v-for="room in rooms">
			<td>{{room.roomId}}</td>
			<td>{{room.roomName}}</td>
			<td>{{room.roomSize}}</td>
			<td>{{room.roomType}}</td>
			<td>{{room.emptyTime}}</td>
			<td>
				<button type="button" @click="showTanceng(room)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(room.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
			</td>
		</tr>
	</table>
	<ul class="pagination" style="float:right">
		<li><a href="#">&laquo;</a></li>
		<li class="active"><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
	<div class="tanceng room" v-bind:style="tancengStyle">
		<div>教室id<input type="text" v-model="roomId"/></div>
		<div>教室名称<input type="text" v-model="roomName"/></div>
		<div>座位数<input type="text" v-model="roomSize"/></div>
		<div>教室类型
			<input type="radio" value="普通教室" id="ptjs" v-model="roomType"><label for="ptjs">普通教室</label>
			<input type="radio" value="机房" id="jf" v-model="roomType"><label for="jf">机房</label>
			<input type="radio" value="听力教室" id="tljs" v-model="roomType"><label for="tljs">听力教室</label>
			<input type="radio" value="实验室" id="sys" v-model="roomType"><label for="sys">实验室</label>
		</div>
		<div>可用时间段<input type="text" v-model="emptyTime"/></div>
   	<div style="text-align:center">
   		<button class="btn btn-primary dropdown-toggle" style="margin-right:30px" type="button" @click="submit">提交</button>
   		<button class="btn btn-danger dropdown-toggle" style="margin-left:30px" type="button" @click="closeTanceng()">取消</button>
   </div>
	</div>

</div>
</template>

<script>

module.exports = {
	
	data: function () {
		return {
			rooms: [{'roomId':'LKLB222','roomName':'理科楼B222','roomSize':'70','roomType':'普通教室'},
			{'roomId':'LKLB224','roomName':'理科楼B224','roomSize':'70','roomType':'普通教室'},
			{'roomId':'LKLB226','roomName':'理科楼B226','roomSize':'70','roomType':'普通教室'},
			{'roomId':'LKLB228','roomName':'理科楼B228','roomSize':'70','roomType':'普通教室'},
			{'roomId':'LKLB232','roomName':'理科楼B232','roomSize':'70','roomType':'普通教室'},
			{'roomId':'WSL301','roomName':'文史楼301','roomSize':'70','roomType':'普通教室'},
			{'roomId':'WSL302','roomName':'文史楼302','roomSize':'60','roomType':'普通教室'},
			{'roomId':'WSL307','roomName':'文史楼307','roomSize':'90','roomType':'普通教室'},
			{'roomId':'WSL312','roomName':'文史楼312','roomSize':'90','roomType':'普通教室'},
			{'roomId':'WSL313','roomName':'文史楼313','roomSize':'70','roomType':'普通教室'}
			],
			id:null,
			roomId: null,
			roomName: null,
			roomSize: null,
			roomType: null,
			emptyTime:null,
			tancengStyle:{display:'none'}
		}
	},
	ready: function () {
		this.getRoom()
	},
	methods: {	
		showTanceng: function (data) {
			this.tancengStyle.display = "block";
			if(data){
				this.id = data.id;
				this.roomId = data.roomId;
				this.roomName = data.roomName;
				this.roomSize = data.roomSize;
				this.roomType = data.roomType;
				this.emptyTime = data.emptyTime;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.roomId = null;
			this.roomName = null;
			this.roomSize = null;
			this.roomType = null;
			this.emptyTime = null;
		},
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		getRoom: function () {	
			var self = this;
			$.ajax({
				url:"/Room/getData",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.rooms = JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			var roomId = this.roomId;
			var roomName = this.roomName;
			var roomSize = this.roomSize;
			var roomType = this.roomType;
			var emptyTime = this.emptyTime;
			var self = this;
			$.ajax({
				url:"/Room/addData",
				method:"get",
				data:{'roomId':roomId,'roomName':roomName,'roomSize':roomSize,'roomType':roomType,'emptyTime':emptyTime},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.closeTanceng();
						self.getRoom();
					}	
				}
			});

		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Room/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getRoom();
					}	
				}
			});

		},
		changeData: function () {
			var id = this.id;
			var roomId = this.roomId;
			var roomName = this.roomName;
			var roomSize = this.roomSize;
			var roomType = this.roomType;
			var emptyTime = this.emptyTime;
			var self = this;
			$.ajax({
				url:"/Room/changeData",
				method:"get",
				data:{'id':id,'roomId':roomId,'roomName':roomName,'roomSize':roomSize,'roomType':roomType,'emptyTime':emptyTime},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.getRoom();
						self.closeTanceng();
					}	
				}
			});
		}

	}

}
</script>
<style lang="stylus">
	.room
		width 500px	
</style>
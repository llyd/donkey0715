<template>
	<div class="daohang">
排课管理--><strong>时间模式设置</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>时间模式组合id</td>
			<td>时间模式组合类型</td>
			<td>时间段</td>
			<td>优先级</td>
			<td>操作</td>
		</tr>
		<tr v-for="schema in schemas">
			<td>{{schema.scheId}}</td>
			<td>{{schema.scheType}}</td>
			<td>{{schema.scheTime}}</td>
			<td>{{schema.priority}}</td>
			<td>
				<button type="button" @click="showTanceng(schema)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(schema.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
			</td>
		</tr>
	</table>
<ul class="pagination" style="float:right">
		<li><a href="#">&laquo;</a></li>
		<li class="active"><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
	<div class="tanceng" v-bind:style="tancengStyle">
		<div>时间模式组合id<input type="text" v-model="scheId"/></div>
		<div>时间模式组合类型<input type="text" v-model="scheType"/></div>
		<div>时间段<input type="text" v-model="scheTime"/></div>
		<div>优先级<input type="text" v-model="priority"/></div>
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
			schemas: [{'scheId':'21','scheType':'2','scheTime':'[11,31]','priority':'1'},
			{'scheId':'22','scheType':'2','scheTime':'[12,32]','priority':'2'},
			{'scheId':'23','scheType':'2','scheTime':'[12,31]','priority':'3'},
			{'scheId':'24','scheType':'2','scheTime':'[11,32]','priority':'4'},
			{'scheId':'25','scheType':'2','scheTime':'[21,41]','priority':'5'},
			{'scheId':'26','scheType':'2','scheTime':'[22,41]','priority':'6'},
			{'scheId':'27','scheType':'2','scheTime':'[21,42]','priority':'7'},
			{'scheId':'28','scheType':'2','scheTime':'[22,42]','priority':'8'},
			{'scheId':'31','scheType':'3','scheTime':'[11,32,51]','priority':'1'},
			{'scheId':'32','scheType':'3','scheTime':'[11,31,52]','priority':'2'},],
			id:null,
			scheId:null,
			scheType:null,
			scheTime:null,
			priority:null,
			tancengStyle:{display:'none'}
		}
	},
	ready: function () {
		this.getData()
	},
	methods: {	
		showTanceng: function (data) {
			this.tancengStyle.display = "block";
			if(data){
				this.id = data.id;
				this.scheId = data.scheId;
				this.scheType = data.scheType;
				this.scheTime = data.scheTime;
				this.priority = data.priority;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.scheId = null;
			this.scheType = null;
			this.scheTime = null;
			this.priority = null;
		},
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		getData: function () {	
			var self = this;
			$.ajax({
				url:"/timeschema/getData",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.schemas = JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			var scheId = this.scheId;
			var scheType = this.scheType;
			var scheTime = this.scheTime;
			var priority = this.priority;
			var self = this;
			$.ajax({
				url:"/timeschema/addData",
				method:"get",
				data:{'scheId':scheId,'scheType':scheType,'scheTime':scheTime,'priority':priority},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.closeTanceng();
						self.getData();
					}	
				}
			});

		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/timeschema/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getData();
					}	
				}
			});

		},
		changeData: function () {
			var id = this.id;
			var scheId = this.scheId;
			var scheType = this.scheType;
			var scheTime = this.scheTime;
			var priority = this.priority;
			var self = this;
			$.ajax({
				url:"/timeschema/changeData",
				method:"get",
				data:{'id':id,'scheId':scheId,'scheType':scheType,'scheTime':scheTime,'priority':priority},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.getData();
						self.closeTanceng();
					}	
				}
			});
		}

	}

}
</script>	

<style lang="stylus">

</style>
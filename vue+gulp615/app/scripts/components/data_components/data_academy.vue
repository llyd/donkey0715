<template>
<div class="daohang">
数据管理--><strong>班级数据维护</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>班级ID</td>
			<td>班级名称</td>
			<td>班级人数</td>
			<td>班级空余时间</td>
<!-- 			<td>开设课程名称</td> -->
			<td>操作</td>
		</tr>
		<tr v-for="academy in academys">
			  <td>{{academy.classId}}</td>			 
				<td>{{academy.className}}</td>			
				<td>{{academy.classSize}}</td>
				<td>{{academy.spareTime}}</td>		
<!-- 				<td>{{academy.courseNames}}</td>	 -->	
				<td>
					<button type="button" @click="showTanceng(academy)" class="btn btn-success btn-xs" aria-label="change">修改</button>
					<button type="button" @click="deleteData(academy.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
				</td>
		</tr>
	</table>
	<ul class="pagination" style="float:right">
		<li><a href="#">&laquo;</a></li>
		<li class="active"><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">5</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
	<div class="tanceng" v-bind:style="tancengStyle">
		<div>班级ID<input type="text" v-model="classId" placeholder="格式:1001" /></div>
		<div>班级名称<input type="text" v-model="className" placeholder="格式:大一计算机系1班"/></div>
		<div>班级人数<input type="text" v-model="classSize"/></div>
		<div>班级空余时间<input type="text" v-model="spareTime"/></div>
	<!-- 	<div>开设课程名称<input type="text" v-model="courseNames"/></div> -->
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
			id:null,
			classId:null,
			className:null,
			classSize:null,
			spareTime:null,
			courseNames:null,
			academys: [{'classId':'20150001','className':'2015级计算机系1班','classSize':'59',},
			{'classId':'20150002','className':'2015级计算机系2班','classSize':'59',},
			{'classId':'20150003','className':'2015级计算机系3班','classSize':'59',},
			{'classId':'20150101','className':'2015级软件1班','classSize':'56',},
			{'classId':'20150102','className':'2015级软件2班','classSize':'58',},
			{'classId':'20150103','className':'2015级软件3班','classSize':'57',},
			{'classId':'20140101','className':'2014级软件1班','classSize':'55',},
			{'classId':'20140102','className':'2014级软件2班','classSize':'53',},
			{'classId':'20140103','className':'2014级软件3班','classSize':'58',},
			{'classId':'20130101','className':'2013级软件1班','classSize':'55',}],
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
				this.classId = data.classId;
				this.className = data.className;
				this.classSize = data.classSize;
				this.spareTime = data.spareTime;
				this.courseNames = data.courseNames;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.classId = null;
			this.className = null;
			this.classSize = null;
			this.spareTime = null;
			this.courseNames = null;
		},
		getData: function () {
			var self = this;
			$.ajax({
				url:"/Academy/getData",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.academys = JSON.parse(data);
					}				
				}
			});
		},
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		addData: function () {
			var classId = this.classId;
			var className = this.className;
			var classSize = this.classSize;
			var spareTime = this.spareTime;
			var courseNames = this.courseNames;
			var self = this;
			$.ajax({
				url:"/Academy/addData",
				method:"get",
				data:{'classId':classId,'className':className,'classSize':classSize,'spareTime':spareTime,'courseNames':courseNames},
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
				url:"/Academy/deleteData",
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
			var classId = this.classId;
			var className = this.className;
			var classSize = this.classSize;
			var spareTime = this.spareTime;
			var courseNames = this.courseNames;
			var self = this;
			$.ajax({
				url:"/Academy/changeData",
				method:"get",
				data:{"id":id,'classId':classId,'className':className,'classSize':classSize,'spareTime':spareTime,'courseNames':courseNames},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.closeTanceng();
						self.getData();
					}				
				}
			});

		}
	}
}
</script>

<style lang="stylus">
	.daohang
		clear both
		height 50px
		line-height 50px
		strong
			font-size 20px
			color #000
		
	.main
		margin-top:20px

	.tanceng
		background #EFECE5
		width:450px
		padding:20px
		position:absolute
		left:40%
		top:30%
		font-size:20px
		div
			width:100%
			margin:0 auto
			height:40px
			line-height:30px
			input,label
				margin-left:10px
				font-size:15px

	.dropdown-menu button
		margin:2px

	.center
		text-align center
	
	table
		font-size 16px
</style>

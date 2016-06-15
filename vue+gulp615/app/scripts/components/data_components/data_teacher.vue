<template>
<div class="daohang">
数据管理--><strong>教师数据维护</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>教工号</td>
			<td>教师姓名</td>
			<td>教师性别</td>
			<td>职称</td>
			<td>预定工作量</td>
			<td>已用工作量</td>
			<td>空闲时间段</td>

			<td>操作</td>
		</tr>
		<tr v-for="teacher in teachers">
			<td>{{teacher.teacherId}}</td>
			<td>{{teacher.teacherName}}</td>
			<td>{{teacher.teacherSex}}</td>
			<td>{{teacher.teacherTitle}}</td>
			<td>{{teacher.workload}}</td>
			<td>{{teacher.haveWorked}}</td>
			<td>{{teacher.idleTime}}</td>
			<td>
				<button type="button" @click="showTanceng(teacher)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(teacher.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
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
		<div>教工号<input type="text" v-model="teacherId"/></div>
		<div>教师姓名<input type="text" v-model="teacherName"/></div>
		<div>教师性别
			<input type="radio" value="男" id="man" v-model="teacherSex"><label for="man">男</label>
			<input type="radio" value="女" id="woman" v-model="teacherSex"><label for="woman">女</label>
		</div>
		<div>职称
			<input type="radio" value="教授" id="js" v-model="teacherTitle"><label for="js">教授</label>
			<input type="radio" value="副教授" id="fjs" v-model="teacherTitle"><label for="fjs">副教授</label>
			<input type="radio" value="讲师" id="jiaoshou" v-model="teacherTitle"><label for="jiaoshou">讲师</label>
		</div>
		<div>预定工作量<input type="text" v-model="workload"/></div>
		<div>已用工作量<input type="text" v-model="haveWorked"/></div>
		<div>空闲时间段<input type="text" v-model="idleTime"/></div>
		
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
			teachers: [{'teacherId':'20110002','teacherName':'许丽卿','teacherSex':'女','teacherTitle':'讲师','workload':'6','haveWorked':'0'},
			{'teacherId':'20050004','teacherName':'温玉亮','teacherSex':'男','teacherTitle':'副教授','workload':'4','haveWorked':'0'},
			{'teacherId':'20100022','teacherName':'赵世忠','teacherSex':'男','teacherTitle':'讲师','workload':'6','haveWorked':'0'},
			{'teacherId':'20050002','teacherName':'陈良玉','teacherSex':'男','teacherTitle':'教授','workload':'2','haveWorked':'0'},
			{'teacherId':'20060006','teacherName':'全红艳','teacherSex':'女','teacherTitle':'副教授','workload':'4','haveWorked':'0'},
			{'teacherId':'20070004','teacherName':'沈毅','teacherSex':'男','teacherTitle':'讲师','workload':'6','haveWorked':'0'},
			{'teacherId':'20040003','teacherName':'金澈清','teacherSex':'女','teacherTitle':'讲师','workload':'6','haveWorked':'0'},
			{'teacherId':'20050002','teacherName':'韩士安','teacherSex':'男','teacherTitle':'副教授','workload':'4','haveWorked':'0'},
			{'teacherId':'20070021','teacherName':'陈蕾','teacherSex':'女','teacherTitle':'讲师','workload':'6','haveWorked':'0'},
			{'teacherId':'20040002','teacherName':'陈慧','teacherSex':'女','teacherTitle':'讲师','workload':'6','haveWorked':'0'}],
			teacherId: null,
			teacherName: null,
			teacherSex: null,
			teacherTitle: null,
			workload: null,
			haveWorked: null,
			idleTime: null,	
			tancengStyle:{display:'none'}
		}
	},
	ready: function () {
		this.getTeachers()
	},
	methods: {
		showTanceng: function (data) {
			this.tancengStyle.display = "block";
			if(data){
				this.id = data.id;
				this.teacherId= data.teacherId;
				this.teacherName= data.teacherName;
				this.teacherSex= data.teacherSex;
				this.teacherTitle= data.teacherTitle;
				this.workload= data.workload;
				this.haveWorked= data.haveWorked;
				this.idleTime= data.idleTime;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.teacherId = null; 
			this.teacherName = null;
			this.teacherSex = null;
			this.teacherTitle = null;
			this.workload = null;
			this.haveWorked = null;
			this.idleTime = null;
		},	
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		getTeachers: function () {
			var self = this;
			$.ajax({
				url:"/Teacher/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.teachers = JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			var teacherId = this.teacherId;
			var teacherName = this.teacherName;
			var teacherSex = this.teacherSex;
			var teacherTitle = this.teacherTitle;
			var workload = this.workload;
			var haveWorked = this.haveWorked;
			var idleTime = this.idleTime;
			var self = this;
			$.ajax({
				url:"/Teacher/addData",
				method:"get",
				data:{'teacherId':teacherId,'teacherName':teacherName,'teacherSex':teacherSex,'teacherTitle':teacherTitle,'workload':workload,'haveWorked':haveWorked,'idleTime':idleTime},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.closeTanceng(0);
						self.getTeachers();
					}				
				}
			});

		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Teacher/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getTeachers();
					}					
				}
			});
		},
		changeData: function () {
			var id = this.id;
			var teacherId = this.teacherId;
			var teacherName = this.teacherName;
			var teacherSex = this.teacherSex;
			var teacherTitle = this.teacherTitle;
			var workload = this.workload;
			var haveWorked = this.haveWorked;
			var idleTime = this.idleTime;
			var self = this;
			$.ajax({
				url:"/Teacher/changeData",
				method:"get",
				data:{'id':id,'teacherId':teacherId,'teacherName':teacherName,'teacherSex':teacherSex,'teacherTitle':teacherTitle,'workload':workload,'haveWorked':haveWorked,'idleTime':idleTime},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.closeTanceng();
						self.getTeachers();
					}				
				}
			});
		}

	}

}
</script>
<style lang="stylus">

</style>

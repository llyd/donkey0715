<template>
<div class="daohang">
数据管理--><strong>教学计划维护</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
		  <td>教学计划ID</td>
			<td>学年学期</td>
			<td>年级</td>
			<td>班级ID</td>
			<td>班级名称</td>
			<td>课程ID</td>
			<td>课程名称</td>
			<td>教师ID</td>
			<td>教师姓名</td>
			<td>教室名称</td>
			<td>上课时间</td>
			<td>操作</td>
		</tr>
		<tr v-for="plan in plans">
				<td>{{plan.planId}}</td>
				<td>{{plan.year}}</td>
				<td>{{plan.grade}}</td>
				<td>{{plan.classId}}</td>			 
				<td>{{plan.className}}</td>	
				<td>{{plan.courseId}}</td>
				<td>{{plan.courseName}}</td>	
				<td>{{plan.teacherId}}</td>	
				<td>{{plan.teacherName}}</td>	
				<td>{{plan.roomName}}</td>
				<td>{{plan.time}}</td>		
				<td>
					<button type="button" @click="showTanceng(plan)" class="btn btn-success btn-xs" aria-label="change">修改</button>
					<button type="button" @click="deleteData(plan.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
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
	<div class="tanceng plan" v-bind:style="tancengStyle">
		<div>教学计划ID<input type="text" v-model="planId"/></div>
		<div>学年学期<input type="text" v-model="year"/></div>
		<div>年级<input type="text" v-model="grade"/></div>
		<div>班级ID<input type="text" v-model="classId"/></div>
		<div>班级名称<input type="text" v-model="className"/></div>
		<div>课程ID<input type="text" v-model="courseId"/></div>
		<div>课程名称<input type="text" v-model="courseName"/></div>
		<div>教师ID<input type="text" v-model="teacherId"/></div>
		<div>教师名称<input type="text" v-model="teacherName"/></div>
		<div>教室名称<input type="text" v-model="roomName"/></div>
		<div>上课时间<input type="text" v-model="time"/></div>
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
			plans:[{'planId':'201620170101','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131022','courseName':'计算机网络','teacherId':'20120015','teacherName':'刘献忠'},
			{'planId':'201620170102','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131057','courseName':'计算机网络实践','teacherId':'20090012','teacherName':'刘献忠'},
			{'planId':'201620170103','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131104','courseName':'专业英语(一)','teacherId':'20100023','teacherName':'彭超'},
			{'planId':'201620170104','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131108','courseName':'嵌入式系统概论','teacherId':'20080032','teacherName':'郭建'},
			{'planId':'201620170105','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132001','courseName':'计算机图形学','teacherId':'20120015','teacherName':'王长波'},
			{'planId':'201620170106','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132070','courseName':'C#','teacherId':'20120015','teacherName':'毛红艳'},
			{'planId':'201620170107','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132092','courseName':'J2EE','teacherId':'20120015','teacherName':'毛红艳'},
			{'planId':'201620170108','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132120','courseName':'高等数学（二）','teacherId':'20120015','teacherName':'赵老师'},
			{'planId':'201620170109','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132124','courseName':'Web系统开发','teacherId':'20120015','teacherName':'张召'},
			{'planId':'201620170110','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132137','courseName':'基础日语I','teacherId':'20120015','teacherName':'酒井香江子'}],
			id:null,
			planId:null,
			year:null,
			grade:null,
			courseId:null,
			courseName:null,	
			classId:null,			 
			className:null,		
			teacherId:null,	
			teacherName:null,
			roomId:null,	
			roomName:null,
			time:null,		
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
				this.planId = data.planId;
				this.year = data.year;
				this.grade = data.grade;
				this.courseId = data.courseId;
				this.courseName = data.courseName;	
				this.classId = data.classId;			 
				this.className = data.className;		
				this.teacherId = data.teacherId;	
				this.teacherName = data.teacherName;
				this.roomId = data.roomId;		
				this.roomName = data.roomName;	
				this.time = data.time;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.planId = null;
			this.year = null;
			this.grade = null;
			this.courseId = null;
			this.courseName = null;
			this.classId = null;		 
			this.className =  null;	
			this.teacherId = null;
			this.teacherName = null;
			this.roomId = null;	
			this.roomName = null;
			this.time = null;
		},
		getData: function () {
			var self = this;
			$.ajax({
				url:"/plan/getData",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.plans = JSON.parse(data);
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
			var planId = this.planId;
			var year = this.year;
			var grade = this.grade;
			var courseId = this.courseId;
			var courseName = this.courseName;	
			var classId = this.classId;			 
			var className = this.className;		
			var teacherId = this.teacherId;	
			var teacherName = this.teacherName;
			var roomId = this.roomId;		
			var roomName = this.roomName;
			var time = this.time;
			var self = this;
			$.ajax({
				url:"/plan/addData",
				method:"get",
				data:{'planId':planId,'year':year,'grade':grade,'courseId':courseId,'courseName':courseName,'classId':classId,'className':className,'teacherId':teacherId,'teacherName':teacherName,'roomId':roomId,'roomName':roomName,'time':time},
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
				url:"/plan/deleteData",
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
			var planId = this.planId;
			var year = this.year;
			var grade = this.grade;
			var courseId = this.courseId;
			var courseName = this.courseName;	
			var classId = this.classId;			 
			var className = this.className;		
			var teacherId = this.teacherId;	
			var teacherName = this.teacherName;
			var roomId = this.roomId;		
			var roomName = this.roomName;
			var time = this.time;
			var self = this;
			$.ajax({
				url:"/plan/changeData",
				method:"get",
				data:{"id":id,'planId':planId,'year':year,'grade':grade,'courseId':courseId,'courseName':courseName,'classId':classId,'className':className,'teacherId':teacherId,'teacherName':teacherName,'roomId':roomId,'roomName':roomName,'time':time},
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
	.plan
		width 428px
		input
			float:right
			font-size: 15px
			width: 266px
</style>
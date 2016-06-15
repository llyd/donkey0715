<template>
<div class="daohang">
数据管理--><strong>课程数据维护</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>课程id</td>
			<td>课程名称</td>
			<td>课程性质</td>
			<td>学分</td>
			<!-- <td>可用教室类型</td> -->
		<!-- 	<td>可授课教师</td> -->
	<!-- 		<td>是否合班上课</td> -->
			<td>操作</td>
		</tr>
		<tr v-for="course in courses">
			<td>{{course.courseId}}</td>
			<td>{{course.courseName}}</td>
			<td>{{course.courseType}}</td>
			<td>{{course.schedule}}</td>
			<!-- <td>{{course.roomTypes}}</td>
			<td>{{course.teacherNames}}</td> -->
<!-- 			<td>{{course.isOrNotHeban}}</td> -->
			<td>
				<button type="button" @click="showTanceng(course)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(course.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
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
	<div class="tanceng course" v-bind:style="tancengStyle">
		<div>课程id<input type="text" v-model="courseId"/></div>
		<div>课程名称<input type="text" v-model="courseName"/></div>
		<div>课程类型
			<input type="radio" value="必修课" id="zybx" v-model="courseType"><label for="zybx">必修课</label>
			<input type="radio" value="选修课" id="zyxx" v-model="courseType"><label for="zyxx">选修课</label>
			<input type="radio" value="实验课" id="syk" v-model="courseType"><label for="syk">实验课</label>
			<input type="radio" value="其他" id="qt" v-model="courseType"><label for="qt">其他</label>
		</div>
		<div>学分<input type="text" v-model="schedule"/></div>
		<!-- <div>可用教室类型<input type="text" v-model="roomTypes"></div>
    <div>可授课教师<input type="text" v-model="teacherNames"/></div> -->
<!-- 		<div>是否合班上课
			<input type="radio" value="是" id="yes" v-model="isOrNotHeban"><label for="yes">是</label>
			<input type="radio" value="否" id="no" v-model="isOrNotHeban"><label for="no">否</label>
		</div> -->
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
			courses: [{'courseId':'SOFT0031121000','courseName':'线性代数','courseType':'必修课','schedule':'3'},
			{'courseId':'COEN0031111990','courseName':'大学英语1、2级','courseType':'必修课','schedule':'6'},
			{'courseId':'COEN0031111022','courseName':'大学英语3、4级','courseType':'必修课','schedule':'4'},
			{'courseId':'SOFT0031121002','courseName':'高等数学(一)','courseType':'必修课','schedule':'5'},
			{'courseId':'SOFT0031131010','courseName':'C++语言程序设计','courseType':'必修课','schedule':'4'},
			{'courseId':'SOFT0031131054','courseName':'数据结构与算法','courseType':'必修课','schedule':'4'},
			{'courseId':'SOFT0031132158','courseName':'Matlab编程','courseType':'必修课','schedule':'2'},
			{'courseId':'SOFT0031132155','courseName':'信息检索','courseType':'必修课','schedule':'2'},
			{'courseId':'SOFT0031132019','courseName':'数学建模','courseType':'必修课','schedule':'2'},
			{'courseId':'SOFT0031132165','courseName':'艺术鉴赏','courseType':'必修课','schedule':'1'},],
			courseId:null,
			courseName:null,
			courseType:null,
			schedule:null,
			roomTypes:[],
			teacherNames:[],
			isOrNotHeban:null,
			tancengStyle:{display:'none',width:'530px'}
		}
	},
	ready: function () {
		this.getCourses()
	},
	methods: {
		showTanceng: function (data) {
			this.tancengStyle.display = "block";
			if(data){
				this.id = data.id;
				this.courseId = data.courseId;
				this.courseName = data.courseName;
				this.courseType = data.courseType;
				this.schedule = data.schedule;
				this.roomTypes = data.roomTypes;
				this.teacherNames = data.teacherNames;
				this.isOrNotHeban = data.isOrNotHeban;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.courseId = null;
			this.courseName = null;
			this.courseType = null;
			this.schedule = null;
			this.roomTypes = null;
			this.teacherNames = null;
			this.isOrNotHeban = null;
		},
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		getCourses: function () {
			var self = this;
			$.ajax({
				url:"/Course/getData",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.courses = JSON.parse(data);
				}
			}
			});
		},
		addData: function () {
			var courseId = this.courseId;
			var courseName = this.courseName;
			var courseType = this.courseType;
			var schedule = this.schedule;
			var roomTypes = this.roomTypes;
			var teacherNames = this.teacherNames;
			var isOrNotHeban = this.isOrNotHeban;
			var self = this;
			$.ajax({
				url:"/Course/addData",
				method:"get",
				data:{'courseId':courseId,'courseName':courseName,'courseType':courseType,'schedule':schedule,'roomTypes':roomTypes,'teacherNames':teacherNames,'isOrNotHeban':isOrNotHeban},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.closeTanceng();
						self.getCourses();
					}				
				}
			});
		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Course/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getCourses();
					}				
				}
			});
		},
		changeData: function () {
			var id = this.id;
			var courseId = this.courseId;
			var courseName = this.courseName;
			var courseType = this.courseType;
			var schedule = this.schedule;
			var roomTypes = this.roomTypes;
			var teacherNames = this.teacherNames;
			var isOrNotHeban = this.isOrNotHeban;
			var self = this;
			$.ajax({
				url:"/Course/changeData",
				method:"get",
				data:{'id':id,'courseId':courseId,'courseName':courseName,'courseType':courseType,'schedule':schedule,'roomTypes':roomTypes,'teacherNames':teacherNames,'isOrNotHeban':isOrNotHeban},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.closeTanceng();
						self.getCourses();
					}				
				}
			});
		}

	}

}
</script>
<style lang="stylus">
</style>

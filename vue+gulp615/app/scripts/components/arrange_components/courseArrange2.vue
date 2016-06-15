<template>
<div class="daohang">
排课处理--><strong>开始排课</strong>
</div>

<span>1.对以下合班上课的课程输入上课人数</span>
<table>
	<tr><td>课程代号</td><td>课程名称</td><td>课程性质</td><td>参与合班上课人数</td></tr>
	<tr v-for="heban in hebans">
		<td>{{heban.courseId}}</td>
		<td>{{heban.courseName}}</td>
		<td>{{heban.courseType}}</td>
		<td><input type="text" v-model="{{heban.numOfStu}}"></td>
	</tr>
</table>
<button @click="getCourses()">完成</button>

<div id="step2" style="display:none">
<span>2.特殊课程优先安排</span>
<table><tr><td>课程代号</td><td>课程名称</td><td>上课班级</td><td>授课教师</td></tr>
		<tr v-for="course in courses">
			<td>{{course.courseId}}</td>
			<td>{{course.courseName}}</td>
			<td>{{course.class}}</td>
			<td>{{course.teacherName}}</td>
		</tr>
</table>
</div>

<div id="step3" style="display:none">
<span>3.选择不参与系统排课的课程</span>
<select v-model="selectd" multiple>
	<option v-for="course in courses">{{course.courseName}}</option>
</select>
<button @click="startArrange">开始排课</button>
</div>

<div id="step4" style="display:none">
<span>排课失败的课程</span>
<table>
<tr><td>课程代号</td><td>课程名称</td><td>上课班级</td><td>授课教师</td><td>失败原因</td><td>安排教室</td><td>安排时间</td></tr>
<tr v-for="UnArrangeCourse in UnArrangeCourses">
	<td>{{UnArrangeCourse.courseId}}</td>
	<td>{{UnArrangeCourse.courseName}}</td>
	<td>{{UnArrangeCourse.class}}</td>
	<td>{{UnArrangeCourse.teacherName}}</td>
	<td>{{UnArrangeCourse.reason}}</td>
	<td><input type="text" ></td>
	<td><input type="text" ></td>
</tr>
</table>
</div>



	<!-- <table>
	<tr><td>开设课程名称</td><td>授课教师</td><td>授课时间</td><td>授课教室</td></tr>
	<tr v-for="course in courses">
		<td @dblclick="editCourse(course)">{{course.courseName}}</td>
		<input class="edit" type="text" v-model="course.courseName" v-todo-focus="course == editedCourse" @blur="doneEdit(course)" @keyup.enter="doneEdit(course)" @keyup.esc="cancelEdit(course)">
		<td @dblclick="editCourseName(course)">{{course.teacher}}</td>
		<input class="edit" type="text" v-model="course.teacher" v-todo-focus="course == editedCourse" @blur="doneEdit(course)" @keyup.enter="doneEdit(course)" @keyup.esc="cancelEdit(course)">
		<td @dblclick="editCourse(course)">{{course.time}}</td>
		<input class="edit" type="text" v-model="course.time" v-todo-focus="course == editedCourse" @blur="doneEdit(course)" @keyup.enter="doneEdit(course)" @keyup.esc="cancelEdit(course)">
		<td @dblclick="editCourse(course)">{{course.room}}</td>
		<input class="edit" type="text" v-model="course.room" v-todo-focus="course == editedCourse" @blur="doneEdit(course)" @keyup.enter="doneEdit(course)" @keyup.esc="cancelEdit(course)">
	<tr>
	</table> -->

</template>

<script>
	module.exports = {
		data: function () {
			return {
				hebans:null,
				courses:null,
				UnArrangeCourses:null,
				selectd:[],
				editedCourse: null,
				yesOrno:[]

			}
		},
		ready: function () {
			this.getHebans()
			// this.getCourses()
		},
		methods: {
			getHebans: function () {
				var self = this;
				$.ajax({
					url:"/CourseArrange/findHebans",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
					success:function(json){
						if (json || json.hebans.length > 0){
							self.hebans =  JSON.parse(json.hebans);
						}				
					}
				});
		},
		getCourses: function () {
				$("#step3").show();
				var self = this;
				$.ajax({
					url:"/CourseArrange/findCourses",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
					success:function(json){
						if (json || json.courses.length > 0){
							self.courses =  JSON.parse(json.courses);
						}				
					}
				});
		},
		startArrange: function () {
			$("#step4").show();//换成弹浮层（等待中）
			var self = this;
				$.ajax({
					url:"/CourseArrange/startArrange",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
					success:function(json){
						alert("排课完成");
						if (json || json.UnArrangeCourses.length > 0){
							$("step4").show();
							self.UnArrangeCourses =  JSON.parse(json.UnArrangeCourses);
						}				
					}
				});
		}
			// getClasses: function () {
			// 	$.ajax({
			// 	type:"get",
			// 	url:"http://localhost:1337/courseQuery/class",
			// 	dataType:"jsonp",
			// 	success:function(json){
			// 		if (json){
			// 			this.classes = json.classes;
			// 			console.log(this.classes);
			// 		}				
			// 	}
			// });

			// },
			// getCourses: function () {
			// 	$.ajax({
			// 	type:"get",
			// 	url:"http://localhost:1337/preCourse/queryCourseByClass",
			// 	dataType:"jsonp",
			// 	success:function(json){
			// 		if (json){
			// 			this.courses = json.courses;
			// 			console.log(this.courses);
			// 		}				
			// 	}
			// });
			// },
			// editCourseName: function(course) {
			// 	this.beforeEditCourseName = course.courseName;
			// 	this.editedCourse = course;
			// },
			// doneEditCourseName: function(course) {
			// 	this.editedCourse = null;
			// 	course.courseName = course.courseName.trim();

			// },
			// cancelEditCourseName: function(course) {
			// 	this.editedCourse = null;
			// 	this.editedCourse = this.beforeEditCourseName;
			// }
		}
	}
</script>
<style lang="stylus">
	table 
		border-collapse: collapse !important
		background-color: transparent

	table,tr,td
		border: 1px solid #000
		padding: 10px
		text-align: center

	select
		width:40px
		height:30px


</style>
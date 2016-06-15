<template>
<div class="daohang">
课表查询--><strong>按教师查询</strong>
</div>
<span class="span_choose">选择学年学期</span>
<div class="wrip_select">
	<select class="form-control" v-model="seletedYear">
		<!-- <option v-for="year in years">{{year.year}}</option> -->
		<option>2016-2017第一学期</option>
	</select>
</div>
<span class="span_choose">选择教师</span>
<div class="wrip_select">
	<select class="form-control" v-model="teacherName">
		<option>彭超</option>
	</select>
</div>
<button class="btn btn-primary btn-margin" @click="courseSche()">点击查询</button>
<div class="main_query">
	<table class="table table-striped table-bordered table-hover table-condensed">
	<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
	<tr><td>周一</td><td>{{courseSche.a}}</td><td>{{courseSche.b}}</td><td>{{courseSche.c}}</td><td>
	<span style="display:block;clear:both;">专业英语（一）</span>
	<span style="display:block;clear:both;">理科楼B224</span>  
	<span>2015级软件1班</span>
	</td><td>{{courseSche.e}}</td></tr>
	<tr><td>周二</td><td>{{courseSche.f}}</td><td>{{courseSche.g}}</td><td>{{courseSche.h}}</td><td>{{courseSche.i}}</td><td>{{courseSche.j}}</td></tr>
	<tr><td>周三</td><td>{{courseSche.k}}</td><td>{{courseSche.l}}</td><td>{{courseSche.m}}</td><td>{{courseSche.n}}</td><td>{{courseSche.o}}</td></tr>
	<tr><td>周四</td><td>{{courseSche.p}}</td><td>{{courseSche.q}}</td><td>{{courseSche.r}}</td><td>{{courseSche.s}}</td><td>{{courseSche.t}}</td></tr>
	<tr><td>周五</td><td>{{courseSche.u}}</td><td>{{courseSche.v}}</td><td>{{courseSche.w}}</td><td>{{courseSche.x}}</td><td>{{courseSche.y}}</td></tr>
	</table>
</div>
</template>

<script>
	module.exports={
		data: function (){
			return {
				years:null,
				selectedYear:null,
				teachers:null,
				teacherName:null,
				courseSche:null
			}
		},
		ready: function () {
			this.getTeachers();
			this.getYears();		
		},
		computed: {
			getTeachers: function () {
				var self = this;
				$.ajax({
					url:"/Teacher/getData",
					method:"POST",
					success:function(data){
						self.teachers = JSON.parse(data);
					}				
				});
			},
			courseSche: function () {
				var teacherName = this.teacherName;
				var self = this;
				$.ajax({
					url:"/queryByTeacher/courseSche",
					method:"get",
					data:{'teacherName':teacherName},
					success:function(data){
						if (data || data.length > 0){
							var courseList = JSON.parse(data);
							//如何显示到表格中
						}				
					}
				});
			},
			getYears: function(){
					var self = this;
					$.ajax({
						url:"/arrange/getYears",
						method:"POST",
						success:function(data){
							if (data || data.length > 0){
								self.years = JSON.parse(data);
							}				
						}
					});
				}
		}
	}
</script>
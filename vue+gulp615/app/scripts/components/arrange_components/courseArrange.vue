<template>
	<div class="daohang jianju">排课处理--><strong>开始排课</strong></div>

	<span class="span_choose">step1.选择学年学期</span>
  <div class="wrip_select" v-model="seletedYear">
		<select class="form-control">
			<!-- <option v-for="year in years">{{year.year}}</option> -->
			<option>2016-2017第一学期</option>
		</select>
	</div>
	<button class="btn btn-primary btn-margin" @click="getXuanxius()">点击查询</button>

	<div class="step2" v-bind:style="showStep2">
		<span class="span_choose">step2.为以下选修课输入上课人数</span>
		<table class="table table-striped table-bordered table-hover table-condensed">
			<tr>
				<td>教学计划Id</td>
				<td>课程名称</td>
				<td>上课人数</td>
				<td>操作</td>
			</tr>
			<tr v-for="xuanxiu in xuanxius">
				<td>{{xuanxiu.planId}}</td>
				<td>{{xuanxiu.courseName}}</td>
				<td>{{xuanxiu.studentsCount}}</td>
				<td>
					<button type="button" @click="showTanceng(xuanxiu)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				</td>
			</tr>
		</table>
		<ul class="pagination" style="float:right;margin-top:-12px;">
		<li><a href="#">&laquo;</a></li>
		<li class="active"><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">5</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
		<button class="btn btn-primary btn-margin" @click="finishAlter()">修改完毕</button>
	</div>

	<div class="tanceng" v-bind:style="tancengStyle">
		<div>教学计划Id<input type="text" v-model="planId"/></div>
		<div>课程名称<input type="text" v-model="courseName"/></div>
		<div>上课人数<input type="text" v-model="studentsCount"/></div>
   <div style="text-align:center">
   		<button class="btn btn-primary dropdown-toggle" style="margin-right:30px" type="button" @click="changeCount">提交</button>
   		<button class="btn btn-danger dropdown-toggle" style="margin-left:30px" type="button" @click="closeTanceng()">取消</button>
   </div>
	</div>

	<div class="step3" v-bind:style="showStep3">
		<span class="span_choose">
		step3.详细教学计划如下，请为个别课程优先设置时间和地点，若无需设置，请直接点击开始排课按钮
		</span>
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
				<td>上课人数</td>
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
				<td>{{plan.people}}</td>
				<td>{{plan.roomName}}</td>
				<td>{{plan.time}}</td>		
				<td>
					<button type="button" @click="showTanceng1(plan)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				</td>
			</tr>
		</table>
		<ul class="pagination" style="float:right;margin-top:-12px;">
		<li><a href="#">&laquo;</a></li>
		<li class="active"><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">5</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
		<button class="btn btn-primary btn-margin" @click="startArrange()">开始排课</button>
	</div>

	<div class="step4" v-bind:style="showStep4">
		<span class="span_choose">
		step4.排课失败课程及失败原因显示如下，请手动进行设置，进入课表查询模块查询已排好课程
		</span>
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
				<td>上课人数</td>
				<td>教室名称</td>
				<td>上课时间</td>
				<td>操作</td>
			</tr>
			<!-- <tr v-for="">		
				<td>
					<button type="button" @click="showTanceng1(plan)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				</td>
			</tr> -->
		</table>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				plans:[{'planId':'201620170101','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131022','courseName':'计算机网络','teacherId':'20120015','teacherName':'刘献忠','people':'56'},
			{'planId':'201620170102','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131057','courseName':'计算机网络实践','teacherId':'20090012','teacherName':'刘献忠','people':'56'},
			{'planId':'201620170103','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131104','courseName':'专业英语(一)','teacherId':'20100023','teacherName':'彭超','people':'56'},
			{'planId':'201620170104','year':'2016-2017第一学期','grade':'2015','classId':'20150101','className':'2015级软件1班','courseId':'SOFT0031131108','courseName':'嵌入式系统概论','teacherId':'20080032','teacherName':'郭建','people':'56'},
			{'planId':'201620170105','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132001','courseName':'计算机图形学','teacherId':'20120015','teacherName':'王长波','people':'35'},
			{'planId':'201620170106','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132070','courseName':'C#','teacherId':'20120015','teacherName':'毛红艳','people':'23'},
			{'planId':'201620170107','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132092','courseName':'J2EE','teacherId':'20120015','teacherName':'毛红艳','people':'25'},
			{'planId':'201620170108','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132120','courseName':'高等数学（二）','teacherId':'20120015','teacherName':'赵老师','people':'66'},
			{'planId':'201620170109','year':'2016-2017第一学期','grade':'2015','classId':'','className':'','courseId':'SOFT0031132124','courseName':'Web系统开发','teacherId':'20120015','teacherName':'张召','people':'27'}],
				years:null,
				selectedYear:null,
				xuanxius:[{'planId':'201620170105','courseName':'计算机图形学','studentsCount':'35'},
				{'planId':'201620170106','courseName':'C#','studentsCount':'23'},
				{'planId':'201620170107','courseName':'J2EE','studentsCount':'25'},
				{'planId':'201620170108','courseName':'高等数学（二）','studentsCount':'66'},
				{'planId':'201620170109','courseName':'Web系统开发','studentsCount':'27'}],
				id:null,
				planId:null,
				courseName:null,
				studentsCount:null,
				showStep2:{display:'block'},
				showStep3:{display:'block'},
				showStep4:{display:'block'},
				tancengStyle:{display:'none'}
			}
		},
		ready:function(){
			this.getYears();
		},
		methods:{
			startArrange: function(){
				//开始排课
				//排课完成之后显示step4
				this.showStep3.display = "none";
				this.showStep4.display = "block";
				//测试
			},
			showTanceng1: function(data){
				//展示详细教学计划
			},
			finishAlter: function(){
				this.showStep2.display = "none";
				this.showStep3.display = "block";
			},
			//获取未输入上课人数的选修课列表
			getXuanxius: function(){
				//测试
				this.showStep2.display = "block";
				//--测试
				var selectedYear = this.selectedYear;
				var self = this;
				$.ajax({
					url:"/arrange/getXuanxius",
					method:"get",
					data:{"selectedYear":selectedYear},
					success:function(data){
						if (data || data.length > 0){
							self.xuanxius = JSON.parse(data);
							this.showStep2.display = "block";
						}				
					}
				});
			},
			showTanceng: function (data) {
				this.tancengStyle.display = "block";
				this.id = data.id;
				this.planId = data.planId;
				this.courseName = data.courseName;
				this.studentsCount = data.studentsCount;
			},
			closeTanceng: function () {
				this.tancengStyle.display = "none";
				this.id = null;
				this.planId = null;
				this.courseName = null;
				this.studentsCount = null;
			},
			//输入选修课人数，如果有课程未输入，则不会参与排课
			changeCount: function(){
				var id = this.id;
				var studentsCount = this.studentsCount;
				var self = this;
				$.ajax({
					url:"/arrange/changeCount",
					method:"get",
					data:{"id":id,'studentsCount':studentsCount},
					success:function(data){
						if (data || data.length > 0){
							alert("修改成功");
							self.closeTanceng();
							self.getCount();
						}				
					}
				});
			},
			//获取教学计划数据库中所有的学年学期
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
<style lang="stylus">
	.jianju
		margin-bottom 10px
		
	.step2,.step3
		clear both
		margin-top 20px
 	
</style>
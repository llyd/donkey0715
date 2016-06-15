<template>
<div class="daohang">
课表查询--><strong>按班级查询</strong>
</div>
<span class="span_choose">选择学年学期</span>
<div class="wrip_select">
	<select class="form-control" v-model="seletedYear">
	<!-- <option v-for="year in years">{{year.year}}</option> -->
		<option>2016-2017第一学期</option>
	</select>
</div>
<span class="span_choose">选择班级</span>
<div class="wrip_select">
	<select class="form-control" v-model="className">
		<option>2016级软件1班</option>
	</select>
</div>
<button class="btn btn-primary btn-margin" @click="courseSche()">点击查询</button>
<div class="main_query">
	<table class="table table-striped table-bordered table-hover table-condensed">
	<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
	<tr><td>周一</td>
	<td>
		<span style="display:block;clear:both;">线性代数</span>
		<span style="display:block;clear:both;">许丽卿</span>
		<span>文史楼302</span>
	</td>
	<td>
		<span style="display:block;clear:both;">C++语言程序设计</span>
		<span style="display:block;clear:both;">张居阳</span>
		<span>文史楼302</span>
	</td>
	<td>
	 
	</td>
	<td>
	<span style="display:block;clear:both;"></span>
	<span style="display:block;clear:both;"></span>  
	<span></span>
	</td>
	<td></td>
	</tr>
	<tr><td>周二</td>
	<td>	
	</td>
	<td>
	<span style="display:block;clear:both;">数字电子技术</span>
	<span style="display:block;clear:both;">曹桂涛</span>  
	<span>文史楼302</span>
	</td>
	<td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>文史楼302</span></td>
	<td></td>
	<td></td></tr>
	<tr><td>周三</td>
	<td>
		<span style="display:block;clear:both;">C++语言程序设计</span>
		<span style="display:block;clear:both;">张居阳</span>
		<span>文史楼302</span>
	</td>
	<td>
		<span style="display:block;clear:both;">线性代数</span>
		<span style="display:block;clear:both;">许丽卿</span>
		<span>文史楼302</span>
	</td>
	<td></td><td></td><td></td></tr>
	<tr><td>周四</td><td>
	<span style="display:block;clear:both;">数字电子技术</span>
	<span style="display:block;clear:both;">曹桂涛</span>  
	<span>文史楼302</span>
	</td><td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>文史楼302</span></td><td></td><td><span style="display:block;clear:both;">艺术鉴赏</span>
	<span style="display:block;clear:both;">李琳</span>  
	<span>文史楼302</span></td><td></td></tr>
	<tr><td>周五</td><td></td><td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>文史楼302</span></td><td>{{courseSche.w}}</td><td>{{courseSche.x}}</td><td>{{courseSche.y}}</td></tr>
	</table>
</div>
</template>

<script>
	module.exports={
		data: function (){
			return {
				years:null,
				selectedYear:null,
				classNames:null,
				className:null,
				courseSche:null
			}
		},
		ready: function () {
			this.getClasses();
			this.getYears();			
		},
		methods: {
			getClasses: function () {
				var self = this;
				$.ajax({
					url:"/Academy/getData",
					method:"POST",
					success:function(data){
						if (data || data.length > 0){
							self.classNames = JSON.parse(data);
						}				
					}
			});
			},
			courseSche: function () {
				var className = this.className;
				var self = this;
				$.ajax({
					url:"/queryByClass/courseSche",
					method:"get",
					data:{'className':className},
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
<style lang="stylus">
.btn-margin
	margin-left 20px
	
.main_query
	margin-top:40px

.span_choose
	font-size:20px
	float:left

.wrip_select
	float:left
	margin-left:20px
	width:200px

</style>
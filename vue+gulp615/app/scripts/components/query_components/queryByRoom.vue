<template>
<div class="daohang">
课表查询--><strong>按教室查询</strong>
</div>
<span class="span_choose">选择学年学期</span>
<div class="wrip_select">
	<select class="form-control" v-model="seletedYear">
		<!-- <option v-for="year in years">{{year.year}}</option> -->
		<option>2016-2017第一学期</option>
	</select>
</div>
<span class="span_choose">选择教室</span>
<div class="wrip_select">
	<select class="form-control" v-model="roomName">
		<option>文史楼302</option>
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
		<span>2016级软件1班</span>
	</td>
	<td>
		<span style="display:block;clear:both;">C++语言程序设计</span>
		<span style="display:block;clear:both;">张居阳</span>
		<span>2016级软件1班</span>
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
	<span>2016级软件1班</span>
	</td>
	<td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>2016级软件1班</span></td>
	<td></td>
	<td></td></tr>
	<tr><td>周三</td>
	<td>
		<span style="display:block;clear:both;">C++语言程序设计</span>
		<span style="display:block;clear:both;">张居阳</span>
		<span>2016级软件1班</span>
	</td>
	<td>
		<span style="display:block;clear:both;">线性代数</span>
		<span style="display:block;clear:both;">许丽卿</span>
		<span>2016级软件1班</span>
	</td>
	<td></td><td></td><td></td></tr>
	<tr><td>周四</td><td>
	<span style="display:block;clear:both;">数字电子技术</span>
	<span style="display:block;clear:both;">曹桂涛</span>  
	<span>2016级软件1班</span>
	</td><td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>2016级软件1班</span></td><td></td><td><span style="display:block;clear:both;">艺术鉴赏</span>
	<span style="display:block;clear:both;">李琳</span>  
	<span>2016级软件1班</span></td><td></td></tr>
	<tr><td>周五</td><td></td><td><span style="display:block;clear:both;">大学英语1、2级</span>
	<span style="display:block;clear:both;">何晓嘉</span>  
	<span>2016级软件1班</span></td><td>{{courseSche.w}}</td><td>{{courseSche.x}}</td><td>{{courseSche.y}}</td></tr>
	</table>
</div>
</template>

<script>
	module.exports={
		data: function (){
			return {
				years:null,
				selectedYear:null,
				rooms:null,
				roomName:null,
				courseSche:null
			}
		},
	  ready: function () {
	  	this.getRooms();
	  	this.getYears();		
	  },
		methods: {	
			getRooms: function () {
				var self = this;
				$.ajax({
					url:"/Room/getData",
					method:"POST",
		      contentType: false,
		      processData: false,
		      cache: false,
					success:function(data){
						if (data || data.length > 0){					
							self.rooms = JSON.parse(data);
						}				
					}
				});
			},	
			courseSche: function () {
				var roomName = this.roomName;
				var self = this;
				$.ajax({
					url:"/queryByRoom/courseSche",
					method:"get",
					data:{'roomName':roomName},
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
	table
		border:1
</style>
<template>
<div id="app">
	<header>
		<img src="_tmp/images/logo.jpg" alt="logo" class="logo"/>
		<span class="topic">ECNU软件学院教务排课系统</span>
		<span class="username">刘盈弟</span>
		<span class="zhuxiao">注销</span>
	</header>

	<section class="main_left">
		<ul>
			<li>数据管理</li>
				<ul class="sub_menu">
					<li><a v-link="{ path: '/dataManage/dataAcademy' }">班级数据维护</a></li>
					<li><a v-link="{ path: '/dataManage/dataTeacher' }">教师数据维护</a></li>
					<li><a v-link="{ path: '/dataManage/dataRoom' }">教室数据维护</a></li>
					<li><a v-link="{ path: '/dataManage/dataCourse' }">课程数据维护</a></li>
					<li><a v-link="{ path: '/dataManage/plan' }">教学计划维护</a></li>
				</ul>
			<li>排课处理</li>
				<ul class="sub_menu">
					<li><a v-link="{ path: '/scheConfig' }">时间模式设置</a></li>
					<li><a v-link="{ path: '/courseArrange' }">开始排课</a></li>
				</ul>
			<li>课表查询</li>
				<ul class="sub_menu">
					<li><a v-link="{ path: '/courseQuery/queryByClass' }">班级课表查询</a></li>
					<li><a v-link="{ path: '/courseQuery/queryByRoom' }">教室课表查询</a></li>
					<li><a v-link="{ path: '/courseQuery/queryByTeacher' }">教师课表查询</a></li>
				</ul>
			<li>后台管理</li>
				<ul class="sub_menu"><li><a v-link="{ path: '/siteadminManage' }">用户管理</a></li></ul>
		</ul>

	</section>
	<section class="main_right">
		<router-view></router-view>
	</section>
	<footer>
		
	</footer>

</div>
</template>

<script>
	module.exports={
		data: function () {
			return {

			}
		},
		methods: {
			
		}

	}

</script>

<style lang="stylus">	
	#app
		marigin:0
		padding:0 50px
		color:#4f6b72
		background:#E6EAE9
		font-size:18px
	
	header
		margin:0
		height:60px
		border-bottom:#DDD 1px solid

	.logo
		width:40px
		height:40px
		position:absolute
		top:10px
		left:100px

	.topic
		position:absolute
		top:16.5px
		left:145px
		
	.username
		position:absolute
		top:16.5px
		right:200px
		
	.zhuxiao
		position:absolute
		top:16.5px
		right:150px
		
	.zhuxiao:hover
		color:red
		cursor pointer

	.main_left
		float:left
		width:200px
		padding:10px
		ul
			li
				margin:5px

	.sub_menu
		margin:10px 0 10px 15px
		font-size:16px

	.main_right
		float:left
		width:80%
		height:960px
		border-left:#DDD 1px solid
		padding:10px
		
</style>
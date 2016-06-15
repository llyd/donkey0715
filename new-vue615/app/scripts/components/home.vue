<template>
<div class="wrap">
	<div class="top">
		<div class="top-bar-wrap">
			<a v-for="bannerImg in bannerImgs" href="#" class="bannerImg-wrap">
				<img :src="bannerImg.src" class="bannerImg" />
			</a>
		</div>
	</div>
	<div class="nav-bar-wrap">
		<div class="nav-bar">
			<div class="nav-bar-list" @click="showTejiaList($event)">特价</div>
			<div class="nav-bar-list" @click="showActivityList($event)">全年活动</div>
			<div class="nav-bar-list" @click="chooseActivity($event)">活动筛选</div>
		</div>
		<div class="dropdown-list">
			<ul>
				<li v-for="dropdownContent in dropdownList">{{dropdownContent.menu}}</li>
			</ul>
		</div>
	</div>
	<div class="activity-list">
		<activity v-for="activity in activities" v-bind:msg="activity"></activity>
	</div>
</div>
</template>

<script lang='babel' src='./home.js'></script>
<style lang="stylus" src="./home.styl"></style>
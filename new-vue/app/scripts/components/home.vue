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
		<div class="activity" v-for="activity in activities">
			<div class="activity-top">
				<img class="activity-image" src="http://www.shmlhw.com///my_views/uploadphoto/34.jpg">
      	<span class="activity-true">确定出行</span>
				<h2 class="activity-time">06月17日-06月19日</h2>
			</div>
			<div class="activity-bottom">
        <h2 class="activity-title">6.17仙居丽人谷.亲水溯溪.杨梅采摘
      	</h2>
        <ul class="activity-type">
          <li>轻装徒步</li>
          <li>仅需运动鞋即可参加</li>
        </ul>
        <div class="activity-fee">
          <h2><span class="fee-red">¥</span>238</h2>
          <span class="sale-red">市场价：420</span>
        </div>
      </div>
      <div class="activity-totalcount">
      	<div>已有<span>743</span>人去过这里</div>
      </div>
		</div>
	</div>
</div>
</template>

<script lang='babel' src='./home.js'></script>
<style lang="stylus" src="./home.styl"></style>
<template>
  <div class="activity">
		<div class="activity-top">
			<img class="activity-image" src="http://www.shmlhw.com///my_views/uploadphoto/shang11.jpg">
    	<span class="activity-true" v-show="confirm">确定出行</span>
			<div class="activity-time">
      {{activity.time}}
      </div>
		</div>
		<div class="activity-bottom">
      <h2 class="activity-title">
      {{activity.title}}
    	</h2>
      {{msg}}
      <ul class="activity-type">
        <li v-for="type in activity.types">{{type}}</li>
      </ul>
      <div class="activity-fee">
        <h2><span class="fee-red">¥</span>{{activity.fee}}</h2>
        <span class="sale-red">市场价：{{activity.sale}}</span>
      </div>
    </div>
    <div class="activity-totalcount">
    	<div>已有<span>{{activity.totalcount}}</span>人去过这里</div>
    </div>
	</div>
</template>

<script lang='babel' src='./activity.js'></script>
<style lang="stylus" src="./activity.styl"></style>

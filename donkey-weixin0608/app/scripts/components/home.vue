<template>
<div class="wrap">
	<div class="top">
		<div class="top-bar-wrap">
			<a v-for="bannerImg in bannerImgs" href="#" class="bannerImg-wrap">
				<img :src="bannerImg.src" class="bannerImg"/>
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
		<!-- <div class="activity" v-for="activity in activitys">
			<img :src="activity.imgSrc" />
		</div> -->
		<div class="cus-item">
     	<div class="cus-item-top">
      	<img src="http://www.shmlhw.com///my_views/uploadphoto/34.jpg">
      <div class="cus-confirm-info">
        <span style="background-color: #6cb83b; padding: 10px 15px;">确定出行</span>
			</div>
      <div class="cus-time-bg">
        <div>
          <h2 class="cus-time">06月17日-06月19日</h2>
        </div>
      </div>
      <ul class="activitymain-worddialog">
      	<li>清澈见底的浙江第一水</li>
      	<li>仙居杨梅比乒乓球还大</li>
      	<li>需要短距离游泳</li>
      </ul>
      <img class="tips" src="images/play.png">
        </div>
        <div class="cus-item-bottom">
            <h2 class="cus-item-title">6.17仙居丽人谷.亲水溯溪.杨梅采摘
            </h2>
            <ul class="cus-item-type">
                <li>轻装徒步</li>
                <li>仅需运动鞋即可参加</li>
            </ul>
            <div class="cus-item-fee  customer-list">
                <h2><span class="fee-red">¥</span>238</h2>
                <span class="sale-red market-price">市场价：420</span>
            </div>
        </div>
        <div class="cus-item-totalcount"><div>已有<span>743</span>人去过这里</div></div>
    </div>
	</div>

</div>
</template>
<script>

module.exports = {
  data(){
    return {
      msg: 'hello world~!',
      bannerImgs:[{'url':'http://www.shmlhw.com/index.php/ActivityController/toActivityInfo/40','src':'http://www.shmlhw.com///my_views/uploadphoto/34.jpg'},{'url':'http://www.shmlhw.com/index.php/ActivityController/toActivityInfo/39','src':'http://www.shmlhw.com///my_views/uploadphoto/shang11.jpg'},{'url':'http://www.shmlhw.com/index.php/ActivityController/toActivityInfo/33','src':'http://www.shmlhw.com///my_views/uploadphoto/yu21.jpeg'}],
      dropdownList:null,
      activitys:[]
    }
  },
  ready(){

  },
  methods:{
  	showTejiaList: function(event){
  		$('.nav-bar-list')[1].style.color="#000";
  		$('.nav-bar-list')[2].style.color="#000";
  		event.currentTarget.style.color = "#afd893";
  		this.dropdownList=null;
  	},
  	showActivityList: function(event){
  		this.dropdownList = [{'menu':'一月'},{'menu':'二月'},{'menu':'三月'},{'menu':'四月'},{'menu':'五月'},{'menu':'六月'},{'menu':'七月'},{'menu':'八月'},{'menu':'九月'},{'menu':'十月'},{'menu':'十一月'},{'menu':'十二月'}];
  		$('.nav-bar-list')[0].style.color="#000";
  		$('.nav-bar-list')[2].style.color="#000";
  		event.currentTarget.style.color = "#afd893";
  	},
  	chooseActivity: function(event){
  		this.dropdownList = [{'menu':'轻装（农家）'},{'menu':'重装（露营）'},{'menu':'水线'},{'menu':'长线'},{'menu':'技术路线'},{'menu':'亲子活动'},{'menu':'单日活动'},{'menu':'市内活动'},{'menu':'初体验'}];
  		$('.nav-bar-list')[0].style.color="#000";
  		$('.nav-bar-list')[1].style.color="#000";
  		event.currentTarget.style.color = "#afd893";
  	}
  }
}
</script>
<script lang='babel' src='./home.js'></script>
<style lang='stylus' src="./home.styl"></style>
module.exports = {
  data(){
    return {
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

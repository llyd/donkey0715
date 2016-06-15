<template>
<div class="daohang">
后台管理--><strong>用户管理</strong>
</div>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>账号</td>
			<td>密码</td>
			<td>权限</td>
			<td>操作</td>
		</tr>
		<tr v-for="manager in managers">
			  <td>{{manager.name}}</td>
			  <td>{{manager.password}}</td>
			   <td>{{manager.authority}}</td>
				<td>
					<button type="button" @click="showTanceng(manager)" class="btn btn-success btn-xs" aria-label="change">修改</button>
					<button type="button" @click="deleteData(manager.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
				</td>
			</td>
		</tr>
	</table>

	<div class="manage_tanceng" v-bind:style="tancengStyle">
		<div>账号<input type="text" v-model="name"/></div>
		<div>密码<input type="text" v-model="password"/></div>
		<div>权限
			<input type="radio" value="管理员" id="gly" v-model="authority"><label for="gly">管理员</label>
			<input type="radio" value="非管理员" id="fgly" v-model="authority"><label for="fgly">非管理员</label>
		</div>
    <div style="text-align:center">
   		<button class="btn btn-primary dropdown-toggle" style="margin-right:30px" type="button" @click="submit">提交</button>
   		<button class="btn btn-danger dropdown-toggle" style="margin-left:30px" type="button" @click="closeTanceng">取消</button>
   </div>
	</div>
</div>
</template>
<script>
module.exports = {
	data: function (){
		return {
			managers:[{'name':'admin','password':'admin','authority':'管理员'},
			{'name':'刘盈弟','password':'123456','authority':'管理员'},
			{'name':'test','password':'test','authority':'非管理员'},
			{'name':'test1','password':'test1','authority':'非管理员'}],
			id:null,
			name:null,
			password:null,
      authority:null,
			tancengStyle:{display:'none'}
		}
	},
	ready: function () {
		this.getManagers();
	},
	methods:{
		showTanceng: function (data) {
			this.tancengStyle.display = "block";
			if(data){
				this.id = data.id;
				this.name = data.name;
				this.password = data.password;
				this.authority = data.authority;
			}
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
			this.id = null;
			this.name = null;
			this.password = null;
			this.authority = null;
		},
		submit: function () {
			if(this.id == null){
				this.addData();
			}
			else{
				this.changeData();
			}
		},
		getManagers: function (){
			var self = this;
			$.ajax({
				url:"/Siteadmin/getManagers",
				method:"POST",
				success:function(data){
					if (data || data.length > 0){
						self.managers =  JSON.parse(data);
					}				
				}
			});
		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Siteadmin/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getManagers();
					}				
				}
			});
		},
		changeData: function () {
			var id = this.id;
			var name = this.name;
			var password = this.password;
			var authority = this.authority;
			var self = this;
			$.ajax({
				url:"/Siteadmin/changeData",
				method:"get",
				data:{'id':id,'name':name,'password':password,'authority':authority},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.closeTanceng();
						self.getManagers();
					}				
				}
			});
		},
		addData: function () {
			var name = this.name;
			var password = this.password;
			var authority = this.authority;
			var self = this;
			$.ajax({
				url:"/Siteadmin/addData",
				method:"get",
				data:{'name':name,'password':password,'authority':authority},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.closeTanceng();
						self.getManagers();
					}				
				}
			});
		}
	}
}
</script>
<style lang="stylus">
.manage_tanceng
	background #EFECE5
	width:280px
	padding:20px
	position:absolute
	left:37%
	top:30%
	font-size:20px
	div
		width:100%
		margin:0 auto
		height:40px
		line-height:30px
		input,label
			margin-left:10px
			font-size:15px
</style>
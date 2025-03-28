<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221201/ad8b598515704341aed4de6f4d3b36b8.jpg)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"minHeight":"750px","padding":"30px 0px 60px 600px","margin":"0px auto 0 auto","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221130/96464fa9ee1447fcac8ed4cef9e06ae1.png) no-repeat right top","width":"1200px","backgroundSize":"auto 100%","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"width":"550px","margin":"0 0px 16px -34px","lineHeight":"40px","fontSize":"20px","color":"#160f53","textAlign":"center"}' class="title">画师约稿平台注册</div>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">用户名</div>
					<el-input  v-model="ruleForm.yonghuming"  autocomplete="off" placeholder="用户名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">画师账号</div>
					<el-input  v-model="ruleForm.huashizhanghao"  autocomplete="off" placeholder="画师账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">画师姓名</div>
					<el-input  v-model="ruleForm.huashixingming"  autocomplete="off" placeholder="画师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">照片</div>
                    <file-upload
                        tip="点击上传照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
                        @change="huashizhaopianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in huashixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">手机</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">邮箱</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">擅长类别</div>
					<el-input  v-model="ruleForm.shanzhangleibie"  autocomplete="off" placeholder="擅长类别"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='huashi'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">接稿状态</div>
                    <el-select v-model="ruleForm.jiegaozhuangtai" placeholder="请选择接稿状态" >
                        <el-option
                            v-for="(item,index) in huashijiegaozhuangtaiOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px 120px 4px ","outline":"none","color":"#fff","borderRadius":"0px","background":"#41bec9","display":"block","width":"40%","fontSize":"16px","height":"36px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"2","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
                jiegaozhuangtai: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            huashixingbieOptions: [],
            huashijiegaozhuangtaiOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.yonghuxingbieOptions = "男,女".split(',')
        this.huashixingbieOptions = "男,女".split(',')
        this.huashijiegaozhuangtaiOptions = "约稿中,暂停约稿".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        huashizhaopianUploadChange(fileUrls) {
            this.ruleForm.zhaopian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
						this.$message.error(`用户名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					
					
					
					
				
					if((!this.ruleForm.huashizhanghao) && `huashi` == this.tableName){
						this.$message.error(`画师账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `huashi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `huashi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.huashixingming) && `huashi` == this.tableName){
						this.$message.error(`画师姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.zhaopian!=null) {
                this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`huashi` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					if(`huashi` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					
					
					
					if((!this.ruleForm.shanzhangleibie) && `huashi` == this.tableName){
						this.$message.error(`擅长类别不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`huashi` == this.tableName && this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
						this.$message.error(`赞应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if(`huashi` == this.tableName && this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
						this.$message.error(`踩应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`huashi` == this.tableName && this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
						this.$message.error(`点击次数应输入整数`);
						return
					}
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20221201/ad8b598515704341aed4de6f4d3b36b8.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						margin: 0;
						color: #999;
						width: 360px;
						font-size: 14px;
						border-color: #d0cddb;
						border-width: 0 0 1px;
						border-style: solid;
						height: 36px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #333;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 360px;
						font-size: 14px;
						border-color: #d0cddb;
						border-width: 0 0 1px;
						border-style: solid;
						height: 36px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 360px;
						font-size: 14px;
						border-color: #d0cddb;
						border-width: 0 0 1px;
						border-style: solid;
						height: 36px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 360px;
						font-size: 14px;
						border-color: #d0cddb;
						border-width: 0 0 1px;
						border-style: solid;
						height: 36px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px dashed #ccc;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0 0;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px dashed #ccc;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0 0;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px dashed #ccc;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0 0;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>

<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230113/40f598e8fec44a46ad02a3ebb044efb5.jpg) no-repeat center top /  100% 100%,#fff","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"0 40px 40px","boxShadow":"0 0px 0px rgba(0, 0, 0, .1)","margin":"0 auto","borderColor":"#85a92d #aad04e #85a92d #aad04e","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230112/04f09805676347b69686b77e068e3b89.png) repeat-x center top / auto 80px,#fff","borderWidth":"0px 1px 1px 1px","width":"800px","position":"relative","borderStyle":"solid dashed dashed","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"700px","margin":"0 auto 20px","lineHeight":"68px","fontSize":"20px","color":"#333","textAlign":"center"}'>画师约稿平台注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>用户名：</div>
				<el-input v-model="registerForm.yonghuming"  placeholder="请输入用户名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yonghu'" prop="lianxidianhua">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="huashizhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>画师账号：</div>
				<el-input v-model="registerForm.huashizhanghao"  placeholder="请输入画师账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="huashixingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>画师姓名：</div>
				<el-input v-model="registerForm.huashixingming"  placeholder="请输入画师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="zhaopian">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>照片：</div>
                <file-upload
					tip="点击上传照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.zhaopian?registerForm.zhaopian:''"
					@change="huashizhaopianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in huashixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="shouji">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="youxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="shanzhangleibie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>擅长类别：</div>
				<el-input v-model="registerForm.shanzhangleibie"  placeholder="请输入擅长类别" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='huashi'" prop="jiegaozhuangtai">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>接稿状态：</div>
                <el-select v-model="registerForm.jiegaozhuangtai" placeholder="请选择接稿状态" >
                  <el-option
                      v-for="(item,index) in huashijiegaozhuangtaiOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","color":"#333","bottom":"-85px","display":"block","outline":"none","borderRadius":"30px","left":"150px","background":"#a1c842","width":"120px","fontSize":"16px","position":"absolute","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","color":"#333","bottom":"-85px","display":"block","outline":"none","borderRadius":"30px","left":"330px","background":"#ffc303","width":"120px","fontSize":"16px","position":"absolute","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"#333","bottom":"-80px","display":"inline-block","textDecoration":"none","borderRadius":"30px","left":"510px","background":"#ffc303","width":"auto","lineHeight":"44px","fontSize":"12px","position":"absolute","height":"44px"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
                xingbie: '',
                jiegaozhuangtai: '',
            },
			rules: {},
            yonghuxingbieOptions: [],
            huashixingbieOptions: [],
            huashijiegaozhuangtaiOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('yonghu' == this.tableName) {
        this.rules.yonghuming = [{ required: true, message: '请输入用户名', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
        this.yonghuxingbieOptions = "男,女".split(',');
      if ('yonghu' == this.tableName) {
        this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.huashizhanghao = [{ required: true, message: '请输入画师账号', trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.huashixingming = [{ required: true, message: '请输入画师姓名', trigger: 'blur' }];
      }
        this.huashixingbieOptions = "男,女".split(',');
      if ('huashi' == this.tableName) {
        this.rules.shouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.shanzhangleibie = [{ required: true, message: '请输入擅长类别', trigger: 'blur' }];
      }
        this.huashijiegaozhuangtaiOptions = "约稿中,暂停约稿".split(',');
      if ('huashi' == this.tableName) {
        this.rules.thumbsupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.crazilynum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
      if ('huashi' == this.tableName) {
        this.rules.clicknum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      huashizhaopianUploadChange(fileUrls) {
          this.registerForm.zhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
               if(`huashi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230113/40f598e8fec44a46ad02a3ebb044efb5.jpg) no-repeat center top /  100% 100%,#fff;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0 1px 0 #ffc303;
						outline: none;
						color: #333;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0 1px 0 #ffc303;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0 1px 0 #ffc303;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0 1px 0 #ffc303;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
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
		  		  border: 1px dashed #87af25;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #87af25;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #87af25;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #87af25;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #87af25;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #87af25;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>

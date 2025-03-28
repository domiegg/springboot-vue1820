<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"10px auto","position":"relative","background":"rgba(255,255,255,.0)"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="作品编号" prop="zuopinbianhao">
              <el-input v-model="ruleForm.zuopinbianhao" placeholder="作品编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="作品名称" prop="zuopinmingcheng">
            <el-input v-model="ruleForm.zuopinmingcheng" 
                placeholder="作品名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="作品类型" prop="zuopinleixing">
            <el-select v-model="ruleForm.zuopinleixing" placeholder="请选择作品类型"  >
              <el-option
                  v-for="(item,index) in zuopinleixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="代表作" v-if="type!='cross' || (type=='cross' && !ro.daibiaozuo)" prop="daibiaozuo">
            <file-upload
            tip="点击上传代表作"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.daibiaozuo?ruleForm.daibiaozuo:''"
            @change="daibiaozuoUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="代表作" prop="daibiaozuo">
                <img v-if="ruleForm.daibiaozuo.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.daibiaozuo.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.daibiaozuo.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="画师账号" prop="huashizhanghao">
            <el-input v-model="ruleForm.huashizhanghao" 
                placeholder="画师账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="画师姓名" prop="huashixingming">
            <el-input v-model="ruleForm.huashixingming" 
                placeholder="画师姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="作品内容" prop="zuopinneirong">
            <editor 
                :style='{"minHeight":"300px","padding":"0","boxShadow":"0 0 2px #ddd","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.zuopinneirong" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"40px","background":"#87af25","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"40px","background":"#ffc303","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            zuopinbianhao : false,
            zuopinmingcheng : false,
            zuopinleixing : false,
            daibiaozuo : false,
            huashizhanghao : false,
            huashixingming : false,
            zuopinneirong : false,
            thumbsupnum : false,
            crazilynum : false,
            clicktime : false,
            clicknum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          zuopinbianhao: this.getUUID(),
          zuopinmingcheng: '',
          zuopinleixing: '',
          daibiaozuo: '',
          huashizhanghao: '',
          huashixingming: '',
          zuopinneirong: '',
          thumbsupnum: '',
          crazilynum: '',
          clicktime: '',
          clicknum: '',
        },
        zuopinleixingOptions: [],
        rules: {
          zuopinbianhao: [
          ],
          zuopinmingcheng: [
          ],
          zuopinleixing: [
          ],
          daibiaozuo: [
          ],
          huashizhanghao: [
          ],
          huashixingming: [
          ],
          zuopinneirong: [
          ],
          thumbsupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          crazilynum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='zuopinbianhao'){
              this.ruleForm.zuopinbianhao = obj[o];
              this.ro.zuopinbianhao = true;
              continue;
            }
            if(o=='zuopinmingcheng'){
              this.ruleForm.zuopinmingcheng = obj[o];
              this.ro.zuopinmingcheng = true;
              continue;
            }
            if(o=='zuopinleixing'){
              this.ruleForm.zuopinleixing = obj[o];
              this.ro.zuopinleixing = true;
              continue;
            }
            if(o=='daibiaozuo'){
              this.ruleForm.daibiaozuo = obj[o].split(",")[0];
              this.ro.daibiaozuo = true;
              continue;
            }
            if(o=='huashizhanghao'){
              this.ruleForm.huashizhanghao = obj[o];
              this.ro.huashizhanghao = true;
              continue;
            }
            if(o=='huashixingming'){
              this.ruleForm.huashixingming = obj[o];
              this.ro.huashixingming = true;
              continue;
            }
            if(o=='zuopinneirong'){
              this.ruleForm.zuopinneirong = obj[o];
              this.ro.zuopinneirong = true;
              continue;
            }
            if(o=='thumbsupnum'){
              this.ruleForm.thumbsupnum = obj[o];
              this.ro.thumbsupnum = true;
              continue;
            }
            if(o=='crazilynum'){
              this.ruleForm.crazilynum = obj[o];
              this.ro.crazilynum = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.huashizhanghao!=''&&json.huashizhanghao) || json.huashizhanghao==0){
                this.ruleForm.huashizhanghao = json.huashizhanghao
            }
            if((json.huashixingming!=''&&json.huashixingming) || json.huashixingming==0){
                this.ruleForm.huashixingming = json.huashixingming
            }
          }
        });
        this.$http.get('option/zuopinleixing/zuopinleixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.zuopinleixingOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('huashizuopin/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('huashizuopin/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('huashizuopin/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('huashizuopin/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      daibiaozuoUploadChange(fileUrls) {
          this.ruleForm.daibiaozuo = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #87af25;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: 0 1px 0 #ffc303;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: 0 1px 0 #ffc303;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: 0 1px 0 #ffc303;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #c6ecc6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #c6ecc6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #c6ecc6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: 0 0 2px #ffc303;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>

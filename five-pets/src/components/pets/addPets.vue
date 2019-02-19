<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>宠物新增</span>
    </div>
    <div class="text item">
      <el-form ref="form" :model="pet" label-width="80px">
        <el-form-item label="宠物名字">
          <el-input v-model="pet.petsName"></el-input>
        </el-form-item>
        <el-form-item label="宠物类型">
          <el-input v-model="pet.petsType"></el-input>
        </el-form-item>
        <el-form-item label="宠物价格">
          <el-input v-model="pet.petsPrice"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="pet.shopID" placeholder="请选择门店" filterable size="100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生时间">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="pet.petsBirth"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="宠物图片">
          <el-upload
            :action="domain"
            :http-request="upqiniu"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            :on-success="handleAvatarSuccess"
            :on-error="handleError"
            :ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" >
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="btn" @click="addBtn">确认添加</el-button>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("pets");
import { getShop } from "../../services/shop";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "门店1"
        },
        {
          value: "选项2",
          label: "门店2"
        },
        {
          value: "选项3",
          label: "门店3"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr: "pn41z4cyi.bkt.clouddn.com"
    };
  },
  computed: {
    ...mapState(["pet"])
  },
  methods: {
    ...mapActions(["addPetsAsync"]),
    upqiniu(req) {
      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      let filetype = "";
      if (req.file.type === "image/png") {
        filetype = "png";
      } else {
        filetype = "jpg";
      }
      // 重命名要上传的文件
      const keyname =
        "images" +
        new Date() +
        Math.floor(Math.random() * 100) +
        "." +
        filetype;
      // 从后端获取上传凭证token
      this.axios.get("/pets/token").then(res => {
        const formdata = new FormData();
        formdata.append("file", req.file);
        formdata.append("token", res.data);
        formdata.append("key", keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        this.axios.post(this.domain, formdata, config).then(res => {
          this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
          this.pet.petsImg = this.imageUrl;
        });
      });
    },
    beforeUpload(file) {},
    handleRemove(file, fileList) {},
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //文件上传成功时的钩子
    handleAvatarSuccess(res, file) {},
    //文件上传失败时的钩子
    handleError(res) {
      //显示错误
      // console.log(res)
      this.$message({
        message: res,
        type: "warning"
      });
    },
  
    addBtn: async function() {
      await this.addPetsAsync(this.pet);
      this.pet.shopID = "";
      this.pet.petsName = "";
      this.pet.petsType = "";
      this.pet.petsPrice = "";
      this.pet.petsBirth = "";
      this.pet.petsImg = "";
      this.dialogImageUrl="";
      this.$refs.upload.clearFiles();
      this.$message("新增成功");
    }
  },
  mounted() {}
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  text-align: center;
}
.item > * {
  width: 80%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 480px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.btn {
  width: 50%;
}
</style>

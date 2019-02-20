<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>宠物新增</span>
    </div>
    <div class="text item">
      <el-form ref="form" :model="pet" label-width="80px"  :rules="rules">
        <el-form-item label="宠物名字" prop="petsName">
          <el-input v-model="pet.petsName"></el-input>
        </el-form-item>
        <el-form-item label="宠物类型" prop="petsType">
          <el-input v-model="pet.petsType"></el-input>
        </el-form-item>
        <el-form-item label="宠物价格" prop="petsPrice">
          <el-input v-model="pet.petsPrice"></el-input>
        </el-form-item>
        <el-form-item label="选择门店" prop="shopID">
          <el-select v-model="pet.shopID" placeholder="请选择门店" filterable size="100%" ref="shop">
            <el-option
              v-for="item in shop"
              :key="item._id"
              :label="item.shopName"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生时间" prop="petsBirth">
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
            class="avatar-uploader"
            :action="domain"
            :http-request="upqiniu"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            :on-success="handleAvatarSuccess"
            :on-error="handleError"
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt class="avatar">
          </el-dialog>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="btn" @click="addBtn('form')">确认添加</el-button>
    </div>
  </el-card>
</template>

<script>
import { getAuditShopById } from "../../services/shop";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("pets");
import { getShop } from "../../services/shop";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr:  "pm6civjct.bkt.clouddn.com",
      rules: {
        petsName: [
          { required: true, message: "宠物名称不能为空", trigger: "blur" }
        ],
        petsType: [
          { required: true, message: "宠物类型不能为空", trigger: "blur" }
        ],
        petsPrice: [
          { required: true, message: "宠物价格不能为空", trigger: "blur" }
        ],
        petsBirth: [
          { required: true, message: "请选择出生日期", trigger: "blur" }
        ],
        shopID: [{ required: true, message: "请选择门店", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["pet", "shop"])
  },
  methods: {
    ...mapActions(["addPetsAsync", "getShopsAsync"]),
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

    addBtn: function(form) {
      this.$refs[form].validate(valid  => {
        if (valid) {
          this.pet.shopID = this.$refs.shop.value;
           this.addPetsAsync({
            petsName: this.pet.petsName,
            petsType: this.pet.petsType,
            petsPrice: this.pet.petsPrice,
            petsBirth: this.pet.petsBirth,
            petsImg: this.pet.petsImg,
            shopID: this.pet.shopID
          });
         this.$refs[form].resetFields();
          this.$refs.upload.clearFiles();
          this.$message("新增成功");
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    this.getShopsAsync();
  }
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
  width: 90%;
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
  margin: auto;
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

<template>
  <el-card class="box-card">
    <div style="width:500px">
      <el-form label-width="80px" :model="shop">
        <el-form-item label="门店法人 ">
          <el-input v-model="shop.legalEntity" :value="shop.legalEntity" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="门店名称">
          <el-input v-model="shop.shopName "></el-input>
        </el-form-item>
        <el-form-item label="门店地址 ">
          <el-input v-model="shop.address"></el-input>
        </el-form-item>
        <el-form-item label="门店电话  ">
          <el-input v-model="shop.phone "></el-input>
        </el-form-item>
        <el-form-item label="门店经纬 ">
          <el-input v-model="shop.gps"></el-input>
        </el-form-item>
        <el-form-item label="执照号码 ">
          <el-input v-model="shop.licence"></el-input>
        </el-form-item>
        <el-form-item label="执照图片  ">
          <el-upload
            :action="domain"
            :http-request="upqiniu"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            :on-success="handleAvatarSuccess"
            :on-error="handleError"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="addShop">新增</el-button>
      </el-row>
    </div>
  </el-card>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shop");
export default {
  name: "addShop",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr: "pm6civjct.bkt.clouddn.com"
    };
  },
  computed: {
    ...mapState(["shop"])
  },
  methods: {
    ...mapActions(["addShopAsync", "getToken", "isLogin"]),
    // ...mapMutations(["addShop"]),
    upqiniu(req) {
      console.log(req);
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
      this.axios.get("/shop/token").then(res => {
        console.log(res);
        const formdata = new FormData();
        formdata.append("file", req.file);
        formdata.append("token", res.data);
        formdata.append("key", keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        this.axios.post(this.domain, formdata, config).then(res => {
          this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
          // console.log(this.imageUrl)
        });
      });
    },
    beforeUpload(file) {
    },
    addShop() {
      let shopName = this.shop.shopName;
      let address = this.shop.address;
      let phone = this.shop.phone;
      let legalEntity = this.shop.legalEntity;
      let licence = this.shop.licence;
      let licenceImg = this.imageUrl;
      let gps = this.shop.gps;
      let shopUserID = this.shop.shopUserID;
      let state = false;
      this.addShopAsync({
        shopName,
        address,
        phone,
        legalEntity,
        licence,
        licenceImg,
        gps,
        shopUserID,
        state
      });
      this.shop.shopName = "";
      this.shop.address = "";
      this.shop.phone = "";
      this.shop.legalEntity = "";
      this.shop.licence = "";
      this.imageUrl = "";
      this.shop.gps = "";
      this.shop.shopUserID = "";
    },
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
    },
    //文件上传失败时的钩子
    handleError(res) {
      //显示错误
      // console.log(res)
      this.$message({
        message: res,
        type: "warning"
      });
    }
  },
  mounted() {
    this.isLogin();

    // console.log(this.shop);
    // this.getUsers_MD({ _id });
  }
};
</script>
<style scoped>
.box-card {
  width: 100%;
}
</style>
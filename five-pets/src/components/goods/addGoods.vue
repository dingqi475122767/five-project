<template>
  <el-card class="box-card" style="width:500px;margin:0 auto">
    <div slot="header" class="clearfix" style="text-align:center">
      <span>添加商品</span>
    </div>
    <div class="text item">
      <el-form
        status-icon
        :model="goods"
        ref="goods"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goodsName">
          <el-input v-model="goods.goodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="goodsType">
          <el-input v-model="goods.goodsType"></el-input>
        </el-form-item>
        <el-form-item label="适用规格" prop="standard">
          <el-input v-model="goods.standard"></el-input>
        </el-form-item>
        <el-form-item label="包装规格" prop="packaging">
          <el-input v-model="goods.packaging"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model.number="goods.price"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop>
          <el-upload
            :action="domain"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :http-request="upqiniu"
            :on-success="handleAvatarSuccess"
            :on-error="handleError"
            ref="goodsImg"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>

        <el-form-item style="width:350px;margin:0 auto">
          <el-button type="primary" @click="handleAddGoods('goods')">确认添加</el-button>
          <el-button type="primary" @click="resetBtn">重新输入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("goods");

export default {
  name: "addGoods",
  data() {
    return {
      goods: {
        shopUserID: "",
        goodsName: "",
        goodsType: "",
        standard: "",
        packaging: "",
        price: "",
        goodsImg: "",
        sales: 0,
        isDel: false
      },
      rules: {
        goodsName: [{ required: true, message: "商品名称不能为空" }],
        goodsType: [{ required: true, message: "商品类型不能为空" }],
        standard: [{ required: true, message: "适用规格不能为空" }],
        packaging: [{ required: true, message: "包装规格不能为空" }],
        price: [
          { required: true, message: "商品价格不能为空" },
          { type: "number", message: "价格必须为数字值" }
        ]
      },
      dialogImageUrl: "",
      dialogVisible: false,
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr: "pm6civjct.bkt.clouddn.com"
    };
  },
  methods: {
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
        new Date().getTime() +
        Math.floor(Math.random() * 100) +
        "." +
        filetype;
      // 从后端获取上传凭证token
      this.axios.get("/goods/token").then(res => {
        console.log(res);
        const formdata = new FormData();
        formdata.append("file", req.file);
        formdata.append("token", res.data);
        formdata.append("key", keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        this.axios.post(this.domain, formdata, config).then(res => {
          this.goods.goodsImg = "http://" + this.qiniuaddr + "/" + res.data.key;
          // console.log(this.imageUrl)
        });
      });
    },

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
      })
    },

    ...mapActions(["addGoodsAsync"]),
    handleAddGoods(goods) {
      this.$refs[goods].validate(valid => {
        if (valid) {
          this.addGoodsAsync(this.goods);
          this.$router.push("/mis/goodsList");
          this.$notify({
            title: "成功",
            message: "商品信息添加成功！",
            type: "success"
          })
        } else {
          this.$notify.error({
            title: "错误",
            message: "添加商品信息失败，请确认添加项！"
          });
          return false;
        }
      });
    },
    resetBtn() {
      this.$refs.goods.resetFields();
      this.$refs.goodsImg.clearFiles();
    }
  },
  mounted() {
    this.goods.shopUserID = JSON.parse(localStorage.getItem('shopUsers'))[0]._id;
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
</style>

<template>
  <el-card class="box-card" style="width:500px;margin:0 auto">
    <div slot="header" class="clearfix" style="text-align:center">
      <span>修改商品信息</span>
    </div>
    <div class="text item">
      <el-form
        status-icon
        :rules="rules"
        ref="updateInfo"
        :model="updateInfo"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品编号">
          <el-input v-model="updateInfo._id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsName">
          <el-input v-model="updateInfo.goodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="goodsType">
          <el-input v-model="updateInfo.goodsType"></el-input>
        </el-form-item>
        <el-form-item label="适用规格" prop="standard">
          <el-input v-model="updateInfo.standard"></el-input>
        </el-form-item>
        <el-form-item label="包装规格" prop="packaging">
          <el-input v-model="updateInfo.packaging"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model.number="updateInfo.price"></el-input>
        </el-form-item>

        <el-form-item style="width:350px;margin:0 auto">
          <el-button type="primary" @click="handleUpdateGoods('updateInfo')">确认修改</el-button>
          <el-button type="primary" @click="cancelUpdate">放弃修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("goods");

export default {
  name: "updateGoods",
  data() {
    return {
      rules: {
        goodsName: [
          { required: true, message: "商品名称不能为空", trigger: "blur" }
        ],
        goodsType: [
          { required: true, message: "商品类型不能为空", trigger: "blur" }
        ],
        standard: [
          { required: true, message: "适用规格不能为空", trigger: "blur" }
        ],
        packaging: [
          { required: true, message: "包装规格不能为空", trigger: "blur" }
        ],
        price: [
          { required: true, message: "商品价格不能为空", trigger: "blur" },
          { type: "number", message: "价格必须为数字值", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.getGoodsInfo;
  },
  methods: {
    ...mapActions(["updateGoodsAsync"]),
    handleUpdateGoods(val) {
      this.$refs[val].validate(valid => {
        if (valid) {
          this.updateGoodsAsync(this.updateInfo);
          this.$notify({
            title: "成功",
            message: "商品信息修改成功",
            type: "success"
          });
          this.$router.push("/mis/goodsList");
        } else {
          this.$notify.error({
            title: "错误",
            message: "商品信息修改失败，请确认修改项"
          });
          return false;
        }
      });
    },
    cancelUpdate(){
      this.$router.push("/mis/shopUsersList");
    }
  },
  computed: {
    ...mapMutations(["getGoodsInfo"]),
    ...mapState(["updateInfo"])
  }
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

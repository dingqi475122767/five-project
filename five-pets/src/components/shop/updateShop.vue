<template>
  <el-card class="box-card">
    <div style="width:500px">
      <el-form label-width="80px" :model="update" ref="update" :rules="rules">
        <el-form-item label="编号" prop="_id">
          <el-input v-model="update._id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="门店法人 " prop="legalEntity">
          <el-input v-model="update.legalEntity"></el-input>
        </el-form-item>
        <el-form-item label="门店名称" prop="shopName">
          <el-input v-model="update.shopName"></el-input>
        </el-form-item>
        <el-form-item label="门店地址 " prop="address">
          <el-input v-model="update.address"></el-input>
        </el-form-item>
        <el-form-item label="门店电话  " prop="phone">
          <el-input v-model="update.phone"></el-input>
        </el-form-item>
        <el-form-item label="门店经纬 " prop="gps">
          <el-input v-model="update.gps"></el-input>
        </el-form-item>
        <el-form-item label="执照号码 " prop="licence">
          <el-input v-model="update.licence"></el-input>
        </el-form-item>
        <el-form-item label="执照图片  ">
          <img width="148px" height="148px" :src="update.licenceImg" alt>
        </el-form-item>
      </el-form>
      <el-row class="center">
        <el-button type="primary" @click="dialogVisible = true">确认修改</el-button>
      </el-row>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>修改后需重新审核！</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateShop('update')">确 定</el-button>
        </span>
      </el-dialog>
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
      dialogVisible: false,
      rules: {
        licence: [
          { required: true, message: "内容不能为空！", trigger: "blur" }
        ],
        shopName: [
          { required: true, message: "内容不能为空！", trigger: "blur" }
        ],
        address: [
          { required: true, message: "内容不能为空！", trigger: "blur" }
        ],
        phone: [{ required: true, message: "内容不能为空！", trigger: "blur" }],
        legalEntity: [
          { required: true, message: "内容不能为空！", trigger: "blur" }
        ],
        gps: [{ required: true, message: "内容不能为空！", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["update"])
  },
  methods: {
    ...mapActions(["updateShopAsync", "updateShops"]),
    updateShop(update) {
      this.dialogVisible = false;
      this.$refs[update].validate(valid => {
        if (valid) {
          this.update.state = false;
          this.updateShops(this.update);
           this.$notify({
            title: "成功",
            message: "门店信息修改成功",
            type: "success"
          });
          this.$router.history.push(`/mis/shopList`);
        } else {
          this.$notify.error({
            title: "错误",
            message: "门店信息修改失败，请确认修改项"
          });
          return false;
        }
      });

    }
  }
};
</script>
<style scoped>
.box-card {
  width: 100%;
}
.center {
  text-align: center;
}
</style>
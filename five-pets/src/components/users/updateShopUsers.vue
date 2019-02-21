<template>
  <el-card class="box-card" style="width:500px;margin:0 auto">
    <div slot="header" class="clearfix" style="text-align:center">
      <span>修改用户信息</span>
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
        <el-form-item label="用户编号">
          <el-input v-model="updateInfo._id" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户账户" prop="username">
          <el-input v-model="updateInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="updateInfo.password"></el-input>
        </el-form-item>

        <el-form-item style="width:350px;margin:0 auto">
          <el-button type="primary" @click="handleUpdateShopUsers('updateInfo')">确认修改</el-button>
          <el-button type="primary" @click="cancelUpdate">放弃修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "shopUsers"
);

export default {
  name: "updateShopUsers",
  data() {
    return {
      rules: {
        shopUserName: [
          { required: true, message: "用户账户不能为空", trigger: "blur" },
        ],
        shopUsersPassword: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
        ]
      },
    };
  },
  mounted() {
    this.getShopUsersInfo();
  },
  methods: {
    ...mapMutations(["getShopUsersInfo"]),
    ...mapActions(["updateShopUsersAsync"]),
    handleUpdateShopUsers(val) {
      this.$refs[val].validate(valid => {
        console.log(valid)
        if (valid) {
          this.updateShopUsersAsync(this.updateInfo);
          this.$notify({
            title: "成功",
            message: "商品信息修改成功",
            type: "success"
          });
          this.$router.push("/mis/userList");
        } else {
          this.$notify.error({
            title: "错误",
            message: "商品信息修改失败，请确认修改项"
          });
          return false;
        }
      });
    },
    cancelUpdate() {
      this.$router.push("/mis/terraceList");
    }
  },
  computed: {
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

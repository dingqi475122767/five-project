<template>
  <div class="box">
    <p>创建你的个人账户</p>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" placeholder="创建账户"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" placeholder="创建密码"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" placeholder="确认密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="regbtn" @click="confirm">注册爱宠邦账户</el-button>
    <div style="margin: 20px;"></div>
    <div @click="black" class="return">返回登陆页面</div>
  </div>
</template>

<script>
export default {
  name: "reg",
  methods: {
    black() {
      this.$router.history.push("/login");
    },
    confirm() {
      this.$alert("<p>等待管理人员审核</p>", "提示：", {
        dangerouslyUseHTMLString: true
      });
    }
  },
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>

<style scoped>
.box {
  width: 400px;
  margin: 0 auto;
  border: 1px solid #f4f4f4;
  text-align: center;
  padding-left: 20px;
  padding-right: 25px;
}
p {
  color: #333;
  font-size: 20px;
}
.return {
  color: #0366d6;
  cursor: pointer;
}
.regbtn {
  width: 320px;
  margin-left: 78px;
}
</style>

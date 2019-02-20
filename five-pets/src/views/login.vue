<template>
  <div class="big">
    <p>登陆爱宠邦管理系统</p>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="loginName" placeholder="请输入你的个人账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginPassword" type="password" placeholder="请输入你的密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login" class="loginbtn">平台管理登陆</el-button>
    <el-button type="primary" @click="loginShop" class="loginbtn">门店用户登陆</el-button>
    <div style="margin: 20px;"></div>
    <div>
      没有账号 ?
      <span @click="reg">申请一个新账号</span> .
    </div>
    <div style="margin: 20px;"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers( "shopUsers");

export default {
  name: "login",
  methods: {
    ...mapActions(["loginAsync"]),
    reg() {
      this.$router.history.push("/reg");
    },
    login() {
      this.$router.history.push("/mis");
      const loginName = this.loginName;
      const loginPassword = this.loginPassword;
      this.loginName = "";
      this.loginPassword = "";
    },
    loginShop(){
      const loginName = this.loginName;
      const loginPassword = this.loginPassword;
      this.$store.dispatch("shopUsers/loginAsync",{
        username:loginName,
        password:loginPassword,
      })
    }
  },
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      loginName: "",
      loginPassword: ""
    };
  }
};
</script>

<style scoped>
.big {
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
span {
  color: #0366d6;
  cursor: pointer;
}
.loginbtn {
  width: 120px;
  margin-left: 75px;
  text-align: center;
}
</style>

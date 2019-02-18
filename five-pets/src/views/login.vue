<template>
  <div class="big">
    <p>登陆爱宠邦管理系统</p>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" placeholder="请输入你的个人账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" placeholder="请输入你的密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login" class="loginbtn">登陆</el-button>
    <div style="margin: 20px;"></div>
    <div>没有账号 ? <span @click="reg"> 申请一个新账号</span> .</div>
    <div style="margin: 20px;"></div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    reg() {
      this.$router.history.push("/reg");
    },
    login() {
      this.$router.history.push("/mis");
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
.big{
    width: 400px;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    text-align: center;
    padding-left:20px;
    padding-right: 25px;
}
p{
    color: #333;
    font-size: 20px;
}
span{
    color: #0366d6;
    cursor: pointer;
}
.loginbtn{
    width: 320px;
    margin-left: 78px;
}
</style>

<template>
  <div class="box">
    <p>创建你的个人账户</p>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input @blur="phoneNum" v-model="account" placeholder="创建账户"></el-input>
        <!-- account是账户的意思,phoneNum 是注册手机号失焦 -->
      </el-form-item>
      <el-form-item label="密码">
        <el-input @blur="regpass" v-model="regPassword" placeholder="创建密码" type="password"></el-input>
        <!-- regPassword 门店用户注册密码,regpass 是注册密码失焦 -->
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="affirm" placeholder="确认密码" type="password"></el-input>
        <!-- affirm门店用户确认密码 -->
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
      //confirm确认注册
      this.$alert("<p>注册成功,等待管理人员审核</p>", "提示：", {
        dangerouslyUseHTMLString: true
      });
      const account = this.account; //账户
      const regPassword = this.regPassword; //注册密码
      const affirm = this.affirm; //确认密码
      // this.$store.commit("/shopUsers/","account"),
      this.account = "";
      this.regPassword = "";
      this.affirm = "";
    },
    phoneNum() {
      //手机号正则验证
      let phone = /^1[3,5,8,7]\d{9}$/;
      const account = this.account; //账户
      if (phone.test(account)) {
        console.log("sssss");
      } else {
        this.$alert("<p>手机号错误</p>", "提示：", {
          dangerouslyUseHTMLString: true
        });
        this.account = "";
      }
    },
    regpass() {
      //密码正则验证
      let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
      const regPassword = this.regPassword; //注册密码
      if (password.test(regPassword) == "") {
      }
    }
  },
  data() {
    return {
      labelPosition: "right",
      account: "",
      regPassword: "",
      affirm: "",
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

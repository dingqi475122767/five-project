<template>
  <div class="box">
    <p>创建你的个人账户</p>
    <div style="margin: 20px;"></div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px">
      <el-form-item label="手机号" prop="account">
        <el-input type="text" v-model="ruleForm2.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="regbtn" @click="confirm('ruleForm2')">注册爱宠邦账户</el-button>
    <div style="margin: 20px;"></div>
    <div @click="black" class="return">返回登陆页面</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shopUsers");
export default {
  name: "reg",
  methods: {
    ...mapActions(["regAsync"]),
    black() {
      this.$router.history.push("/login");
    },
    confirm(ruleForm2) {
      this.$refs[ruleForm2].validate(valid => {
        if (valid) {
          this.$store.dispatch("shopUsers/regAsync", {
            username: this.ruleForm2.account,
            password: this.ruleForm2.pass,
            state: "disable"
          });
          alert("注册成功！等待管理员审核");
          this.$router.history.push('/login')
        } else {
          alert("注册有误，请重新填写");
          return false;
        }
      });
    }
  },

  data() {
    //密码判断
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    //判断密码是否一致
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //手机号码正则
    var validateAccount = (rule, value, callback) => {
      //账号的正则
      let reAccount = /^1[3,5,7,8]\d{9}$/;
      if (reAccount.test(value)) {
        callback();
      } else {
        callback(new Error("手机号格式不正确"));
      }
    };
    return {
      labelPosition: "right",
      account: "",
      regPassword: "",
      affirm: "",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      ruleForm2: {
        account: "",
        pass: "",
        checkPass: ""
      },
      rules2: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
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

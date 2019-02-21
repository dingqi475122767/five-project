<template>
  <div class="big">
    <div>
      <p>新增管理账户</p>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" @blur="isRepet"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("users");

export default {
  name: "addUsers",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["cd"])
  },
  methods: {
    ...mapActions(["addUsersAsync", "isUsersAsync"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("users/addUsersAsync", {
            //第一个参数是type（传递的路径），第二个参数是用户输入的值
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            state: "admin"
          });
          alert("新增成功！");
          this.ruleForm.username = "";
          this.ruleForm.password = "";
        } else {
          alert("新增失败！！");
          return false;
        }
      });
    },
    //验证平台是否账号重复
    isRepet: async function() {
      let isName = this.ruleForm.username;
      await this.$store.dispatch("users/isUsersAsync", {
        username: this.ruleForm.username
      });
      console.log(this.cd, 22);
      if (this.cd) {
        alert("账号已存在，请重新输入");
        this.ruleForm.username="";
      } else {
        // console.log("成功")
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.big {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #f4f4f4;
  background: #fff;
}
p {
  color: #606266;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #dcdfe6;
}
.demo-ruleForm {
  margin-right: 50px;
}
</style>

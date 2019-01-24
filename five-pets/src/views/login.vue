<template>
  <div>
    <el-button type="primary" @click="login">登录（点击进入系统）</el-button>
    <el-button type="primary" @click="reg">注册（点击跳转注册）</el-button>
  </div>
</template>

<script>
export default {
    name:"login",
    methods:{
        reg(){
            this.$router.history.push('/reg')
        },
        login(){
            this.$router.history.push('/mis')
            
        }
    }
};
</script>

<style>
</style>

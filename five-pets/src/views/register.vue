<template>
  <div>
    <el-button type="primary">提交</el-button>
    <el-button type="primary" @click="black">返回（点击登录页面）</el-button>
  </div>
</template>

<script>
export default {
    name:'reg',
    methods:{
        black(){
            this.$router.history.push('/login')
        }
    }
};
</script>

<style>
</style>

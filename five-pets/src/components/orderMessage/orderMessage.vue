<template>
  <div>
    <el-tabs type="card" closable @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first" closable>用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second" closable>配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third" closable>角色管理</el-tab-pane>
      <el-tab-pane label="什么" name="fourth" closable>什么</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "orderMessage",
  methods: {
      handleClick(tab,event){
          console.log(tab,event)
      }
  }
};
</script>

<style>
</style>

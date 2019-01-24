<template>
  <div>
    <el-menu
      class="el-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>

          <router-link to="/mis/userList" style="text-decoration:none;">
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </router-link>

          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" disabled>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门店管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">门店列表</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mis",
};
</script>

<style>
.el-menu {
  width: 200px;
}
</style>

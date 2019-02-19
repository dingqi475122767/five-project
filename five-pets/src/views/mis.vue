<template>
  <div style="display:flex">
    <el-menu
      class="el-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/userList" style="text-decoration:none;">
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </router-link>
          <router-link to="/mis/userList" style="text-decoration:none;">
            <el-menu-item index="1-2">新增用户</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门店管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/shopList" style="text-decoration:none;">
            <el-menu-item index="2-1">门店列表</el-menu-item>
          </router-link>
          <router-link to="/mis/addShop" style="text-decoration:none;">
            <el-menu-item index="2-2">新增门店</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/goodsList" style="text-decoration:none;">
            <el-menu-item index="3-1">商品列表</el-menu-item>
          </router-link>
          <router-link to="/mis/addGoods" style="text-decoration:none;">
            <el-menu-item index="3-2">新增商品</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>服务管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/serviceList" style="text-decoration:none;">
            <el-menu-item index="4-1">服务列表</el-menu-item>
          </router-link>
          <router-link to="/mis/addService" style="text-decoration:none;">
            <el-menu-item index="4-2">新增服务</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-picture"></i>
          <span>宠物管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/goodsList" style="text-decoration:none;">
            <el-menu-item index="5-1">宠物列表</el-menu-item>
          </router-link>
          <router-link to="/mis/goodsList" style="text-decoration:none;">
            <el-menu-item index="5-2">新增宠物</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/mis/orderMessage" style="text-decoration:none;">
            <el-menu-item index="5-1">订单列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mis"
};
</script>

<style>
.el-menu {
  width: 200px;
}
</style>

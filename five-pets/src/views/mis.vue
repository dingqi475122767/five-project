<template>
  <!-- <el-container>
    <el-header>爱宠邦宠物管理系统</el-header>
    <el-container>
      <el-aside width="200px" class="el-aside">
        <el-menu
          class="el-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/mis/userList" style="text-decoration:none;">
                <el-menu-item index="1-1">用户列表</el-menu-item>
              </router-link>
              <router-link to="/mis/terraceList" style="text-decoration:none;">
                <el-menu-item index="1-2">平台列表</el-menu-item>
              </router-link>
              <router-link to="/mis/auditList" style="text-decoration:none;">
                <el-menu-item index="1-3">审核列表</el-menu-item>
              </router-link>
              <router-link to="/mis/addUser" style="text-decoration:none;">
                <el-menu-item index="1-4">新增用户</el-menu-item>
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
              <router-link to="/mis/petList" style="text-decoration:none;">
                <el-menu-item index="5-1">宠物列表</el-menu-item>
              </router-link>
              <router-link to="/mis/addPets" style="text-decoration:none;">
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
                <el-menu-item index="6-1">订单列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>-->
  <el-container class="el-container">
    <el-aside width="200px">
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
            <router-link to="/mis/terraceList" style="text-decoration:none;">
              <el-menu-item index="1-2">平台列表</el-menu-item>
            </router-link>
            <router-link to="/mis/auditList" style="text-decoration:none;">
              <el-menu-item index="1-3">审核列表</el-menu-item>
            </router-link>
            <router-link to="/mis/addUser" style="text-decoration:none;">
              <el-menu-item index="1-4">新增用户</el-menu-item>
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
            <router-link to="/mis/petList" style="text-decoration:none;">
              <el-menu-item index="5-1">宠物列表</el-menu-item>
            </router-link>
            <router-link to="/mis/addPets" style="text-decoration:none;">
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
              <el-menu-item index="6-1">订单列表</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="display:flex;align-items:center">
        <div style="width:85%;text-align:center;">
          <h1 style="font-size:35px">爱宠帮宠物管理系统</h1>
        </div>
        <div style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>欢迎使用，{{userName}}</span>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "mis",
  data() {
    return {
      userName:""
    }
  },
  mounted() {
    this.userName = JSON.parse(localStorage.getItem('shopUsers'))[0].username
  },
};
</script>

<style scoped>
.el-container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  border: 1px solid #eee;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100vh;
  background-color: #565c63 !important;

}
</style>


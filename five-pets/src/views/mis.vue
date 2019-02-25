<template>
  <el-container class="el-container">
    <el-aside width="200px">
      <el-menu
        class="el-menu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1" id="user" v-show="disabledUsers">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/mis/userList" style="text-decoration:none;">
              <el-menu-item index="1-1">门店用户列表</el-menu-item>
            </router-link>
            <router-link to="/mis/terraceList" style="text-decoration:none;">
              <el-menu-item index="1-2">管理用户列表</el-menu-item>
            </router-link>
            <router-link to="/mis/auditList" style="text-decoration:none;">
              <el-menu-item index="1-3">待审核用户</el-menu-item>
            </router-link>
            <router-link to="/mis/auditShopList" style="text-decoration:none;">
              <el-menu-item index="1-4">待审核门店</el-menu-item>
            </router-link>
            <router-link to="/mis/addUser" style="text-decoration:none;">
              <el-menu-item index="1-5">新增管理用户</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2" id="shop" v-show="disabledOther">
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
        <el-submenu index="3" id="goods" v-show="disabledOther">
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
        <el-submenu index="4" id="service" v-show="disabledOther">
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
        <el-submenu index="5" id="pets" v-show="disabledOther">
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
        <el-submenu index="6" id="orderMessage" v-show="disabledOther">
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
        <div style="width:85%;text-align:center;"></div>
        <div style="text-align: right; font-size: 12px;width:300px">
          <span>欢迎使用，{{userName}}</span>
          <el-dropdown @command="exit">
            <i class="icon" style="margin-left: 15px">&#xe717;</i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("users");

export default {
  name: "mis",
  data() {
    return {
      userName: "",
      disabledUsers: true,
      disabledOther: true,
    };
  },
  watch: {
    isLogin() {
      if (!this.isLogin) {
        this.$router.history.push("/login");
      }
    }
  },
  mounted: async function() {
    this.userName = JSON.parse(localStorage.shopUsers)[0].username;
    this.users = JSON.parse(localStorage.shopUsers)[0];
    if (this.users.state === "admin") {
      this.disabledOther = false;
      await this.$store.dispatch("users/isLogin");
      if (!this.isLogin) {
        this.$alert("已退出,进入系统需要重新登录", "提示", {
          confirmButtonText: "确定"
        });
        this.$router.history.push("/login");
      }
    } else {
      this.disabledUsers = f;
      await this.$store.dispatch("users/isShopLogin");
      if (!this.isLogin) {
        this.$alert("已退出,进入系统需要重新登录", "提示", {
          confirmButtonText: "确定"
        });
        this.$router.history.push("/login");
      }
    }
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    exit() {
      this.$store.dispatch("users/exit", {
        cb: () => {
          this.$alert("已退出", "提示", {
            confirmButtonText: "确定"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../assets/font/iconfont.eot");
  src: url("../assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../assets/font/iconfont.woff") format("woff"),
    url("../assets/font/iconfont.ttf") format("truetype"),
    url("../assets/font/iconfont.svg#iconfont") format("svg");
}
.icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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


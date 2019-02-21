<template>
  <div style="width:100%">
    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="_id" label="用户编号" width="350"></el-table-column>
      <el-table-column prop="username" label="用户账号" width="300"></el-table-column>
      <el-table-column prop="password" label="用户密码" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="updateShopUsers(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10, 15, 20]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "shopUsers"
);

export default {
  name: "userList",
  mounted() {
    this.getUsersByPageAsync();
  },
  watch: {
    currentPage() {
      this.getUsersByPageAsync();
    },
    eachPage() {
      this.getUsersByPageAsync();
    }
  },
  methods: {
    ...mapActions(["getUsersByPageAsync"]),
    ...mapMutations(["setCurPage", "setEachPage", "setShopUsersInfo"]),
    handleClick(row) {
      console.log(row);
    },
    //修改
    updateShopUsers(val) {
      // console.log(val)
      this.setShopUsersInfo(val);
      this.$router.push("/mis/updateShopUsers");
    },
    // 每页显示条数改变时
    handleSizeChange(val) {
      this.setEachPage(val), this.setCurPage(1);
    },
    //当前页改变时
    handleCurrentChange(val) {
      this.setCurPage(val);
    }
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "totalNum", "data"])
  }
};
</script>
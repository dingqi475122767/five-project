<template>
  <div style="width:100%">
    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="_id" label="管理编号" width="350"></el-table-column>
      <el-table-column prop="username" label="管理账号" width="300"></el-table-column>
      <el-table-column prop="password" label="管理密码" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="updateUsers(scope.row)" type="text" size="small">编辑</el-button>
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
  "users"
);

export default {
  name: "terraceList",//平台
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
    ...mapActions(["getUsersByPageAsync","updateUsersAsync"]),
    ...mapMutations(["setCurPage", "setEachPage", "setUsersInfo"]),
    handleClick(row) {
      console.log(row);
    },
    //修改
    updateUsers(val) {
      // console.log(val)
      this.setUsersInfo(val);
      this.$router.push("/mis/updateUsers");
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
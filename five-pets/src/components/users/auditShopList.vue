<template>
  <div>
    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="_id" label="用户编号"></el-table-column>
      <el-table-column prop="username" label="用户账号"></el-table-column>
      <el-table-column prop="password" label="用户密码"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">通过</el-button>
          <el-button type="text" size="small">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="audit.currentPage"
      :page-sizes="[5,10, 15, 20]"
      :page-size="audit.eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="audit.totalNum"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "shopUsers"
);

export default {
  name: "auditList",
  data() {
    return {
      _id: "",
      username: "",
      password: "",
      state: ""
    };
  },
  mounted() {
    // this.getUsersByPageAsync();
    this.getAuditByPageAsync();
  },
  methods: {
    ...mapMutations(["setAuditCurPage", "setAuditEachPage"]),
    ...mapActions(["auditShopUsersAsync", "getAuditByPageAsync"]),
    handleClick(row) {
      const { _id } = row;
      this.$store.dispatch("shopUsers/auditShopUsersAsync", {
        _id,
        state: "usable"
      });
    },
    // 每页显示条数改变时
    handleSizeChange(val) {
      this.setAuditEachPage(val);
      this.setAuditCurPage(1);
      this.getAuditByPageAsync();
    },
    //当前页改变时
    handleCurrentChange(val) {
      this.setAuditCurPage(val);
      this.getAuditByPageAsync();
    }
  },
  computed: {
    ...mapState(["audit"])
  }
};
</script>

<style>
</style>

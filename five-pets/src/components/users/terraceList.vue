<template>
  <div style="width:100%">
    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="_id" label="管理编号" width="350"></el-table-column>
      <el-table-column prop="username" label="管理账号" width="300"></el-table-column>
      <el-table-column prop="password" label="管理密码" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row._id)" type="text" size="small">删除</el-button>
          <el-button @click="updateUsers(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <div style="text-align:center">
        <span>确定要删除这条商品记录吗？</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="certainRemoveBtn(id)">确 定</el-button>
      </span>
    </el-dialog>
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
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("users");

export default {
  name: "terraceList", //平台
  data() {
    return {
      dialogTableVisible: false,
      centerDialogVisible: false,
      search: "",
      id: ""
    };
  },
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
    ...mapActions(["getUsersByPageAsync", "updateUsersAsync","removeUsersAsync"]),
    ...mapMutations(["setCurPage", "setEachPage", "setUsersInfo"]),
    //删除键
    handleClick(val) {
      this.centerDialogVisible = true;
      this.id = val;
    },
    //确认删除
    certainRemoveBtn(val) {
      this.removeUsersAsync(val);
      this.centerDialogVisible = false;
      this.$notify({
        title: "成功",
        message: "服务信息删除成功",
        type: "success"
      });
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
<template>
  <el-table
    :data="shops.filter(data => !search || data.shopName.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column label="编号" prop="_id"></el-table-column>
    <el-table-column label="门店法人" prop="legalEntity"></el-table-column>
    <el-table-column label="门店名称" prop="shopName"></el-table-column>
    <el-table-column label="门店地址" prop="address"></el-table-column>
    <el-table-column label="门店电话" prop="phone"></el-table-column>
    <el-table-column label="门店经纬" prop="gps"></el-table-column>
    <el-table-column label="执照号码" prop="licence"></el-table-column>
    <el-table-column prop="licenceImg" label="执照图片">
      <template slot-scope="scope">
        <img :src="scope.row.licenceImg" alt style="width: 80px;height: 60px">
      </template>
    </el-table-column>
    <el-table-column align="right">
      <!-- <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
      </template>-->
      <template slot-scope="scope">
        <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row) ">查看</el-button>
        <el-button type="text" size="mini" @click="handleUpdate(scope.$index, scope.row) ">修改</el-button>
        <el-button type="text" size="mini" @click="handleDel(scope.$index, scope.row) ">删除</el-button>
        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
          <div style="text-align:center">
            <span>确定要删除门店信息吗？</span>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="delBtn">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="门店详情" :visible.sync="dialogTableVisible" align="left" width="90%">
          <el-table :data="one" :row-class-name="tableRowClassName2">
            <el-table-column label="编号" prop="_id"></el-table-column>
            <el-table-column label="门店法人" prop="legalEntity"></el-table-column>
            <el-table-column label="门店名称" prop="shopName"></el-table-column>
            <el-table-column label="门店地址" prop="address"></el-table-column>
            <el-table-column label="门店电话" prop="phone"></el-table-column>
            <el-table-column label="门店经纬" prop="gps"></el-table-column>
            <el-table-column label="执照号码" prop="licence"></el-table-column>
            <el-table-column prop="licenceImg" label="执照图片" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.licenceImg" alt style="width: 80px;height: 60px">
              </template>
            </el-table-column>
            <el-table-column label="门店状态" prop="state"></el-table-column>
          </el-table>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shop");
export default {
  name: "userList",
  data() {
    return {
      dialogTableVisible: false,
      centerDialogVisible: false,
      search: "",
      _id: ""
    };
  },
  computed: {
    ...mapState(["shops", "one", "shop"])
  },
  methods: {
    ...mapActions(["getShop", "getOneShop", "isLogin", "delShop", "updateSp"]),
    handleEdit(index, row) {
      let _id = row._id;
      this.getOneShop({ _id });
      this.dialogTableVisible = true;
    },
    handleDel(index, row) {
      this.centerDialogVisible = true;
      this._id = row._id;
    },
    delBtn() {
      let _id = this._id
      this.delShop({_id});
      let shopUserID = JSON.parse(localStorage.getItem("shopUsers"))[0]._id;
      this.getShop({ shopUserID });
      this.centerDialogVisible = false;
      this.$notify({
        title: "成功",
        message: "门店信息删除成功",
        type: "success"
      });
    },
    handleUpdate(index, row) {
      this.updateSp(row);
      this.$router.push("/mis/updateShop");
    },
    tableRowClassName({ row, rowIndex }) {
      if (!row.state) {
        return "warning-row";
      } else if (row.state) {
        return "success-row";
      }
      return "";
    },
    tableRowClassName2({ row, rowIndex }) {
      if (row.state === false) {
        return (row.state = "审核中---");
      }
      if (row.state === true) {
        return (row.state = "已通过---");
      }
      return "";
    }
  },
  mounted() {
    let shopUserID = JSON.parse(localStorage.getItem("shopUsers"))[0]._id;
    this.getShop({ shopUserID });
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
  color: red;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

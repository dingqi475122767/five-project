<template>
  <el-table
    :data="shops.filter(data => !search || data.shopName.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column label="编号" prop="_id"></el-table-column>
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
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row) ">查看</el-button>
        <el-dialog title="门店详情" :visible.sync="dialogTableVisible" align="left" width="90%">
          <el-table :data="one" :row-class-name="tableRowClassName2">
            <el-table-column label="编号" prop="_id"></el-table-column>
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
      search: ""
    };
  },
  computed: {
    ...mapState(["shops", "one", "shop"])
  },
  methods: {
    ...mapActions(["getShop", "getOneShop", "isLogin"]),
    handleEdit(index, row) {
      let _id = row._id;
      console.log(row);
      this.getOneShop({ _id });
      this.dialogTableVisible = true;
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
    this.isLogin();
    let shopUserID = this.shop.shopUserID;
    console.log(shopUserID)
    this.getShop({shopUserID})
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

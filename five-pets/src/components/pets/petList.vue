<template>
  <div style="width:100%">
    <el-table :data="petes.data" border style="width: 100%;text-align:center">
      <el-table-column fixed prop="_id" label="编号"></el-table-column>
      <el-table-column prop="petsName" label="宠物姓名"></el-table-column>
      <el-table-column prop="petsType" label="宠物类型"></el-table-column>
      <el-table-column prop="petsPrice" label="宠物价格"></el-table-column>
      <el-table-column prop="petsBirth" label="出生日期"></el-table-column>
      <el-table-column prop="petsImg" label="宠物照片">
        <template slot-scope="scope">
          <img :src="scope.row.petsImg" alt style="width: 80px;height: 60px">
        </template>
      </el-table-column>
      <el-table-column prop="shopID.shopName" label="所属门店"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="update(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="petes.currentPage"
        :page-sizes="[2, 5, 10]"
        :page-size="petes.eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="petes.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("pets");
export default {
  computed: {
    ...mapState(["petes"])
  },
  methods: {
    ...mapActions([
      "getPetsByPageAsync",
      "setEachPageTrans",
      "setCurPageTrans",
      "removeTrans"
    ]),
    ...mapMutations(["setPet"]),
    //删除
    handleClick(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.removeTrans(row._id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSizeChange(val) {
      //设置每页显示条数
      this.setEachPageTrans(val);
    },
    handleCurrentChange(val) {
      //设置当前页
      this.setCurPageTrans(val);
    },
    //修改
    update(row) {
      sessionStorage.petInfo = JSON.stringify(row);
      this.$router.push("/mis/updatePet");
    }
  },
  mounted() {
    this.getPetsByPageAsync();
  }
};
</script>

<style>
.block {
  width: 100%;
  text-align: right;
}
</style>

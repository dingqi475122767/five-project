<template>
  <div>
    <el-table :data="auditShop.data" border style="width: 100%">
      <el-table-column fixed prop="_id" label="门店编号"></el-table-column>
      <el-table-column prop="shopName" label="门店名字"></el-table-column>
      <el-table-column prop="legalEntity" label="门店法人"></el-table-column>
      <el-table-column prop="phone" label="门店电话"></el-table-column>
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
      :current-page="auditShop.currentPage"
      :page-sizes="[5,10, 15, 20]"
      :page-size="auditShop.eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="auditShop.totalNum"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"; //vue的状态机
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shop");

export default {
  name: "auditShopList",
  data() {
    return {
      _id: "",
      shopName: "",
      legalEntity: "",
      state: ""
    };
  },
  mounted() {
    // this.getUsersByPageAsync();
    this.getAuditShopByPageAsync();
  },
  methods: {
    ...mapMutations(["setAuditCurPage", "setAuditEachPage"]),
    ...mapActions(["auditShopAsync", "getAuditShopByPageAsync"]),
    handleClick(row) {
      const { _id } = row;
      this.$store.dispatch("shop/auditShopAsync", {
        _id,
        state: true
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
    ...mapState(["auditShop"])
  }
};
</script>

<style>
</style>

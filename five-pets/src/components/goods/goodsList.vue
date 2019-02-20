<template>
  <div style="width:100%">
    <el-table :data="data" height="500" border stripe>
      <el-table-column label="商品编号" prop="_id" width="230"></el-table-column>
      <el-table-column label="商品名称" prop="goodsName"></el-table-column>
      <el-table-column label="商品类型" prop="goodsType"></el-table-column>
      <el-table-column label="适用规格" prop="standard"></el-table-column>
      <el-table-column label="包装规格" prop="packaging"></el-table-column>
      <el-table-column label="商品价格" prop="price"></el-table-column>
      <el-table-column label="销售数量" prop="sales"></el-table-column>
      <el-table-column prop="goodsImg" label="商品图片" width="140">
        <template slot-scope="scope">
          <img :src="scope.row.goodsImg" alt style="width: 100px;height: 80px">
        </template>
      </el-table-column>
      <el-table-column prop="opts" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="showDialog(scope.row._id)" type="text" size="small">删除</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <div style="text-align:center"><span>确定要删除这条商品记录吗？</span></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="delGoodsBtn(id)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,20, 30, 50]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("goods");
export default {
  name: "goodsList",
  data() {
    return {
      centerDialogVisible: false,
      id: ""
    };
  },
  mounted() {
    this.getGoodsByPageAsync();
  },
  watch: {
    currentPage() {
      this.getGoodsByPageAsync();
    },
    eachPage() {
      this.getGoodsByPageAsync();
    }
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "totalNum", "data"])
  },
  methods: {
    ...mapActions(["getGoodsByPageAsync", "delGoodsAsync"]),
    ...mapMutations(["setCurPage", "setEachPage", "setGoodsInfo"]),
    handleSizeChange(val) {
      this.setEachPage(val), this.setCurPage(1);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleClick(val) {
      this.setGoodsInfo(val);
      this.$router.push("/mis/updateGoods");
    },
    showDialog(val) {
      this.centerDialogVisible = true;
      this.id = val;
    },
    delGoodsBtn(val) {
      this.delGoodsAsync(val);
      this.centerDialogVisible = false;
      this.$notify({
        title: "成功",
        message: "商品信息删除成功",
        type: "success"
      });
    }
  }
};
</script>
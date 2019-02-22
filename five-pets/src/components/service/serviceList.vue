<template>
  <div style="width:100%">
    <el-table :data="service.data" height="600" border stripe>
      <el-table-column label="服务编号" prop="_id" width="230"></el-table-column>
      <el-table-column label="服务名称" prop="serviceName"></el-table-column>
      <el-table-column label="单价(元)" prop="servicePrice"></el-table-column>
      <el-table-column label="时长(分钟)" prop="serviceTiming"></el-table-column>
      <el-table-column label="排期" prop="timeDay"></el-table-column>
      <el-table-column label="开始时间" prop="timePoint"></el-table-column>
      <el-table-column label="所属门店" prop="shopID.shopName"></el-table-column>
      <el-table-column prop="opts" label="操作">
        <template slot-scope="scope">
          <el-button @click="updateService(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="ifRemoveTips(scope.row._id)" type="text" size="small">删除</el-button>
           <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <div style="text-align:center"><span>确定要删除这条商品记录吗？</span></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="certainRemoveBtn(id)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="service.currentPage"
      :page-sizes="[5,10, 15, 20]"
      :page-size="service.eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="service.totalNum"
    ></el-pagination>
  </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "services"
);

export default {
  name: "serviceList",
   data() {
    return {
      centerDialogVisible: false,
      id: "" // 保存服务ID
    };
  },
  mounted() {
    this.getServiceByPageAsync();
    console.log(this.service,1)
  },
  watch: {
    currentPage() {
      this.getServiceByPageAsync();
    },
    eachPage() {
      this.getServiceByPageAsync();
    }
  },
  computed: {
    ...mapState(["service"])
  },
  methods: {
    ...mapActions(["getServiceByPageAsync","updateServiceAsync","removeServiceAsync"]),
      ...mapMutations(["setCurPage", "setEachPage", "setServiceInfo"]),
     updateService(data) {
       console.log(data);
       this.setServiceInfo(data);
       this.$router.push("/mis/updateService");
      // this.$router.history.push("./updateService");
    },
    // 每页显示条数改变时
    handleSizeChange(val) {
      this.setEachPage(val), this.setCurPage(1);
    },
    //当前页改变时
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    ifRemoveTips(val) {
      this.centerDialogVisible = true;
      this.id = val;
    },
    certainRemoveBtn(val) {
      this.removeServiceAsync(val);
      this.centerDialogVisible = false;
      this.$notify({
        title: "成功",
        message: "服务信息删除成功",
        type: "success"
      });
    },
  }
};
</script>

<style scoped>
.box-card {
  margin: 0 auto;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 280px;
  height: 280px;
}
</style>

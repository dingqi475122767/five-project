<template>
  <div style="width:100%">
    <el-table :data="data" height="600" border stripe>
      <el-table-column label="服务编号" prop="_id" width="230"></el-table-column>
      <el-table-column label="服务名称" prop="serviceName"></el-table-column>
      <el-table-column label="服务价格" prop="servicePrice"></el-table-column>
      <el-table-column label="服务时长" prop="serviceTiming"></el-table-column>
      <el-table-column label="日期" prop="timeDay"></el-table-column>
      <el-table-column label="时间段" prop="timePoint"></el-table-column>
      <el-table-column prop="opts" label="操作">
        <template slot-scope="scope">
          <el-button @click="updateService(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="removeServiceAsync(scope.row._id)" type="text" size="small">删除</el-button>
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
  "services"
);

export default {
  name: "serviceList",
  mounted() {
    this.getServiceByPageAsync();
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
    ...mapState(["currentPage", "eachPage", "totalPage", "totalNum", "data"])
  },
  methods: {
    ...mapActions(["getServiceByPageAsync","updateServiceAsync"]),
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
    }
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

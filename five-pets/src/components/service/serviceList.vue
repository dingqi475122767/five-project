<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>服务列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
  </el-card>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("service");

export default {
  name: "serviceList"
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

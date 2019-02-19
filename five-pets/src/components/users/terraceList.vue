<template>
    <div class="demo-input-suffix">
    <el-input placeholder="请输入内容" v-model="input23">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="id" width="180"></el-table-column>
      <el-table-column prop="name" label="账户名" width="180"></el-table-column>
      <el-table-column prop="address" label="密码"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name:"auditList",//平台列表
    data() {
    return {
      tableData: [
        {
          date: "4855555",
          name: "12312312310",
          address: "1231231"
        }
      ],
      input23: ''
    };
  }
}
</script>

<style>

</style>
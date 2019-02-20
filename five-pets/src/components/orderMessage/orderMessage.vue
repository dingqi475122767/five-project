<template>
  <div>
    <el-table 
    :data="tableData" 
    border 
    stripe
    style="width: 100%" 
    :default-sort="{prop:'date',order:'descending'}"
    >
      <el-table-column prop="_id" label="订单号"></el-table-column>
      <el-table-column prop="shopName" label="商品名"></el-table-column>
      <el-table-column prop="orderTime" label="订单时间" sortable></el-table-column>
      <el-table-column prop="address" label="收获地址"></el-table-column>
      <el-table-column prop="users" label="用户名"></el-table-column>
      <el-table-column prop="totalPrice" label="订单金额" sortable></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "orderMessage",
  methods:{
    handleClick(row){
      console.log(row)
    }
  },
  data() {
    return {
      tableData: [
        {
          _id: "20160502",
          users: "王小虎",
          address: "上海市普陀区金沙江路 1518 路",
          shopName: "狗粮",
          orderTime:"201911111",
          totalPrice:"99",
        },
        {
          _id: "20160504",
          users: "王小虎",
          address: "上海市普陀区金沙江路 1517 路",
          shopName: "狗粮",
          orderTime:"201911111",
          totalPrice:"99",
        },
        {
          _id: "20160501",
          users: "王小虎",
          address: "上海市普陀区金沙江路 1519 路",
          shopName:"狗粮",
          orderTime:"201911111",
          totalPrice:"99",
        },
        {
          _id: "20160503",
          users: "王小虎",
          address: "上海市普陀区金沙江路 1516 路",
          shopName:"狗粮",
          orderTime:"201911111",
          totalPrice:"99",
        }
      ]
    };
  }
};
</script>

<style>
</style>

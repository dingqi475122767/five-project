<template>
  <div>
    <el-table
      :data="data"
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
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,15]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData"
    ></el-pagination>
    <el-button @click="add">新增</el-button>
    <div class="cardContain">
      <el-card class="box-card">
        <el-form label-position="right" label-width="80px">
          <el-form-item label="商品名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="订单时间">
            <el-input v-model="form.time"></el-input>
          </el-form-item>
          <el-form-item label="收货地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.users"></el-input>
          </el-form-item>
          <el-form-item label="订单金额">
            <el-input v-model="form.totalPrice"></el-input>
          </el-form-item>
          <el-form-item label="门店名">
            <el-input v-model="form.shop"></el-input>
          </el-form-item>
        </el-form>
        <div class="buttonContain">
          <el-button type="primary" @click="addOrderMessage">新增订单</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
const {mapState,mapActions,mapMutations} = createNamespacedHelpers('orderMessage')

export default {
  name: "orderMessage",
  watch:{
    //当currentPage变化时触发
    currentPage(){
      this.getOrderMessageByPage()
    },
    // 当eachPage变化时触发
    eachPage(){
      this.setCurrentPage(1)
      this.getOrderMessageByPage()
    }
  },
  mounted(){
    this.getOrderMessageByPage()
  },
  computed:{
    ...mapState(["currentPage","eachPage","totalData","data","totalPage"])
  },
  methods: {
    ...mapActions(["getOrderMessageByPage"]),
    ...mapMutations(["setCurrentPage","setEachPage"]),
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      this.$store.commit("orderMessage/setEachPage",val)
    },
    handleCurrentChange(val) {
      this.$store.commit("orderMessage/setCurrentPage",val)
    },
    add() {
      const cardContain = document.querySelector(".cardContain")
      cardContain.style.display = "block"
    },
    cancel(){
      const cardContain = document.querySelector(".cardContain")
      cardContain.style.display = "none"
      this.form.name="";
      this.form.time="";
      this.form.address="";
      this.form.users="";
      this.form.totalPrice="";
      this.form.shop="";
    },
    addOrderMessage(){
      const name = this.form.name;
      const orderTime = this.form.time;
      const address = this.form.address;
      const users = this.form.users;
      const totalPrice = this.form.totalPrice;
      const shopName = this.form.shop;
      this.$store.dispatch("orderMessage/addOrderMessage",{
        shopName,
        orderTime,
        address,
        users,
        totalPrice,
        name
      })
    }
  },
  data() {
    return {
      form: {
        name: "",
        time: "",
        address: "",
        users: "",
        totalPrice: "",
        shop: ""
      }
    };
  }
};
</script>

<style scoped>
.buttonContain {
  margin-left: 100px;
}
.cardContain {
  display: none;
}
</style>

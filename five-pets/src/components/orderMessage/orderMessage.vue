<template>
  <div>
    <div class="shop-card">
      <el-card class="box-card">
        <p>请选择要查看的门店</p>
        <span>门店：</span>
        <el-select v-model="shop._id" placeholder="请选择">
          <el-option v-for="item in shop" :key="item._id" :label="item.shopName" :value="item._id"></el-option>
        </el-select>
        <div class="shopBtn-contain">
          <el-button class="shopBtn" type="primary" @click="shopSelect">确认</el-button>
        </div>
      </el-card>
    </div>
    <div class="list-contain">
      <el-table
        class="table"
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
        <el-table-column prop="shopID.shopName" label="门店名" sortable></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-contain">
        <el-button class="selectShop" @click="back">返回门店选择</el-button>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,15]"
          :page-size="eachPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalData"
          class="el-pagination"
        ></el-pagination>
      </div>
      <!-- 新增订单 -->
      <div class="addOrderContain">
        <el-card class="box-card">
          <el-form label-position="right" label-width="80px">
            <el-form-item label="商品名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品类别">
              <el-input v-model="form.goodsType"></el-input>
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
              <el-select v-model="shop._id" placeholder="请选择">
                <el-option
                  v-for="item in shop"
                  :key="item._id"
                  :label="item.shopName"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="buttonContain">
            <el-button type="primary" @click="addOrderMessage">新增订单</el-button>
            <el-button @click="cancel">取消</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "orderMessage"
);

export default {
  name: "orderMessage",
  watch: {
    //当currentPage变化时触发
    currentPage() {
      this.getOrderMessageByPage();
    },
    // 当eachPage变化时触发
    eachPage() {
      this.setCurrentPage(1);
      this.getOrderMessageByPage();
    }
  },
  mounted() {
    this.getShopByUsers();
    // this.getOrderMessageByPage();
  },
  computed: {
    ...mapState([
      "currentPage",
      "eachPage",
      "totalData",
      "data",
      "totalPage",
      "shop"
    ])
  },
  methods: {
    ...mapActions(["getOrderMessageByPage", "getShopByUsers"]),
    ...mapMutations(["setCurrentPage", "setEachPage"]),
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      this.$store.commit("orderMessage/setEachPage", val);
    },
    handleCurrentChange(val) {
      this.$store.commit("orderMessage/setCurrentPage", val);
    },
    cancel() {
      const addOrderContain = document.querySelector(".addOrderContain");
      addOrderContain.style.display = "none";
      this.form.name = "";
      this.form.time = "";
      this.form.address = "";
      this.form.users = "";
      this.form.totalPrice = "";
      this.form.shop = "";
    },
    addOrderMessage() {
      const name = this.form.name;
      const orderTime = this.form.time;
      const address = this.form.address;
      const users = this.form.users;
      const totalPrice = this.form.totalPrice;
      const shopName = this.form.shop;
      const shopID = this.shop._id;
      this.$store.dispatch("orderMessage/addOrderMessage", {
        shopID,
        orderTime,
        address,
        users,
        totalPrice,
        name
      });
    },
    //选择门店
    shopSelect() {
      const shopID = this.shop._id;
      this.$store.dispatch("orderMessage/getOrderMessageByPage", shopID);
      const shopCard = document.querySelector(".shop-card");
      const table = document.querySelector(".list-contain");
      shopCard.style.display = "none";
      table.style.display = "block";
    },
    back(){
      const shopCard = document.querySelector(".shop-card");
      const table = document.querySelector(".list-contain");
      shopCard.style.display = "block";
      table.style.display = "none";
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
        shop: "",
        goodsType: ""
      }
    };
  }
};
</script>

<style scoped>
.buttonContain {
  margin-left: 100px;
}
.addOrderContain {
  display: none;
}
.pagination-contain {
  position: relative;
}
.el-pagination {
  position: absolute;
  right: 0;
  top: 0;
}
.list-contain {
  display: none;
}
.shopBtn-contain {
  width: 70px;
  margin: auto;
}
.shopBtn {
  margin-top: 20px;
}
.selectShop{
  position: absolute;
  left: 0;
  top: 0;
}
</style>

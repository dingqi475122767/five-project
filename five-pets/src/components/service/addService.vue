<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>增加服务</span>
    </div>
    <el-form
      :model="service"
      status-icon
      :rules="rules2"
      ref="service"
      label-width="100px" 
      class="demo-ruleForm"
    >
      <el-form-item label="服务名称" prop="serviceName">
        <el-input v-model="service.serviceName"></el-input>
      </el-form-item>
      <el-form-item label="服务价格" prop="servicePrice">
        <el-input v-model.number="service.servicePrice"></el-input>
      </el-form-item>
      <el-form-item label="服务时长" prop="serviceTiming">
        <el-input v-model.number="service.serviceTiming"></el-input>
      </el-form-item>
      <el-form-item label="选择门店" prop="shopID">
          <el-select v-model="service.shopID" placeholder="请选择门店" filterable size="100%" ref="shop" style="width:260px">
            <el-option
              v-for="item in shop"
              :key="item._id"
              :label="item.shopName"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
      <el-form-item label="排 期">
        <el-col :span="11">
          <el-date-picker
            class="time"
            type="date"
            placeholder="选择日期"
            v-model="service.timeDay"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            class="time"
            type="fixed-time"
            placeholder="选择时间"
            v-model="service.timePoint"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addBtn('service')">增加</el-button>
        <el-button @click="cancel('service')">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "services"
);
import { getAuditShopById,getShop } from "../../services/shop";
export default {
  name: "addService",
  data() {
    var validateServiceName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入服务名称"));
      } else {
        callback();
      }
    };
    var validateServicePrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("服务价格"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("服务价格必须大于0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkServiceTiming = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("服务时长"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0 || value > 120) {
            callback(new Error("服务时长区间:0-120分钟"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validateServiceShop = (rule, value, callback) => {
      if (!value) {
        callback(new Error("未选择门店"));
      } else {
        callback();
      }
    };
    return {
      service: {
        serviceName: "",
        servicePrice: "",
        serviceTiming: "",
        shopID:""
      },
      rules2: {
        serviceName: [{ validator: validateServiceName, trigger: "blur" }],
        servicePrice: [{ validator: validateServicePrice, trigger: "blur" }],
        serviceTiming: [{ validator: checkServiceTiming, trigger: "blur" }],
        shopID:[{ validator: validateServiceShop, trigger: "blur" }],
      },
      timeDay: "",
      timePoint: ""
    };
  },
  computed: {
    ...mapState(["seivices","shop"])
  },
  methods: {
    ...mapActions(["addServiceAsync","getShopsAsync"]),
    addBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.service.shopID = this.$refs.shop.value;
          let shopID = this.service.shopID;
          let serviceName = this.service.serviceName;
          let servicePrice = this.service.servicePrice;
          let serviceTiming = this.service.serviceTiming;
          let timeDay = this.service.timeDay;
          let timePoint = this.service.timePoint;
          let isDel = false;
          this.addServiceAsync({
            shopID,
            serviceName,
            servicePrice,
            serviceTiming,
            timeDay,
            timePoint,
            isDel
          }),
          this.$router.push("/mis/serviceList");
           this.$notify({
            title: "成功",
            message: "商品信息添加成功！",
            type: "success"
          });
        } else {
          this.$notify.error({
            title: "错误",
            message: "添加服务信息失败，请确认添加项！"
          });
          return false;
        }
      });
    },
    cancel(formName) {
      this.$refs[formName].resetFields();
    }
  },
   mounted() {
    this.getShopsAsync();
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
.clearfix {
  display: flex;
  justify-content: center;
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
  width: 400px;
  height: 450px;
}
.time {
  font-size: 11px;
}
</style>

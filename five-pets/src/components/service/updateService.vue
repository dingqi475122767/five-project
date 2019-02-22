<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>修改服务</span>
    </div>
    <el-form
      :model="updateInfo"
      status-icon
      :rules="rules2"
      ref="updateInfo"
      label-width="100px"
      class="demo-ruleForm"
    >
     <el-form-item label="编号" prop="_id">
          <el-input v-model="updateInfo._id" :disabled="true"></el-input>
        </el-form-item>
      <el-form-item label="服务名称" prop="serviceName">
        <el-input v-model="updateInfo.serviceName" ></el-input>
      </el-form-item>
      <el-form-item label="服务价格" prop="servicePrice">
        <el-input v-model.number="updateInfo.servicePrice"></el-input>
      </el-form-item>
      <el-form-item label="服务时长" prop="serviceTiming">
        <el-input v-model.number="updateInfo.serviceTiming"></el-input>
      </el-form-item>
        <div class="time-container">
        <div class="block">
          <span class="demonstration" style="font-size:14px">排期</span>
          <el-date-picker
            style="margin-left:10px;width:118px;font-size:11px"
            v-model="updateInfo.timeDay"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration" style="font-size:14px">时间</span>
          <el-time-select
            style="margin-left:10px;width:115px;font-size:11px"
            v-model="updateInfo.timePoint"
            :picker-options="{
               start: '08:30',
               step: '00:15',
               end: '18:30',
            }"
            placeholder="选择时间"
          ></el-time-select>
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="updateBtn('updateInfo')">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "services"
);

export default {
  name: "updateService",
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
    
    return {
      service: {
        serviceName: "",
        servicePrice: "",
        serviceTiming: ""
      },
      rules2: {
        serviceName: [{ validator: validateServiceName, trigger: "blur" }],
        servicePrice: [{ validator: validateServicePrice, trigger: "blur" }],
        serviceTiming: [{ validator: checkServiceTiming, trigger: "blur" }]
      },
      timeDay: "",
      timePoint: "",
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
   mounted() {
    this.getServiceInfo;
  },
  computed: {
    ...mapMutations(["getServiceInfo"]),
    ...mapState(["updateInfo"])
  },
  methods: {
    ...mapActions(["updateServiceAsync"]),
    updateBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _id=this.updateInfo._id;
          let shopID = this.updateInfo.shopID;
          let serviceName = this.updateInfo.serviceName;
          let servicePrice = this.updateInfo.servicePrice;
          let serviceTiming = this.updateInfo.serviceTiming;
          let timeDay = this.updateInfo.timeDay;
          let timePoint = this.updateInfo.timePoint;
          let isDel = false;
          this.updateServiceAsync({
            _id,
            shopID,
            serviceName,
            servicePrice,
            serviceTiming,
            timeDay,
            timePoint,
            isDel
          })
           this.$notify({
            title: "成功",
            message: "服务信息修改成功",
            type: "success"
          });
          this.$router.history.push(`/mis/serviceList`);
        } else {
          this.$notify.error({
            title: "错误",
            message: "服务信息修改失败，请确认修改项"
          });
          return false;
        }
      });
    },
    cancel() {
      this.$router.history.push(`/mis/serviceList`);
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
.time-container {
  display: flex;
  margin-bottom: 20px;
}
</style>
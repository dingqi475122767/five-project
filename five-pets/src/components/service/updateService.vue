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
      <el-form-item label="排期">
        <el-col :span="11">
          <el-date-picker
            class="time"
            type="date"
            placeholder="选择日期"
            v-model="updateInfo.timeDay"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            class="time"
            type="fixed-time"
            placeholder="选择时间"
            v-model="updateInfo.timePoint"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateBtn('updateInfo')">确认</el-button>
        <el-button @click="cancel('updateInfo')">取消</el-button>
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
      timePoint: ""
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
          alert("submit!");
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
          }),
            console.log(
              _id,
              shopID,
              serviceName,
              servicePrice,
              serviceTiming,
              timeDay,
              timePoint,
              isDel
            );
        } else {
          console.log("error submit!!");   
          return false;
        }
      });
    },
    cancel(formName) {
      this.$refs[formName].resetFields();
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
</style>
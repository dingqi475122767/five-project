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
      <!-- <el-form-item label="排期" prop="serviceSchedule">
        <el-input v-model.number="service.serviceSchedule"></el-input>
      </el-form-item>-->
      <el-form-item label="排期">
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
    //serviceSchedule排期还没写
    //  var validateServiceSchedule = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('排期'));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'));
    //     } else {
    //       if (value < 0&&value<120) {
    //         callback(new Error('服务时长必须大于0分钟且小于120分钟'));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };
    return {
      service: {
        serviceName: "",
        servicePrice: "",
        serviceTiming: ""
        //// serviceSchedule: "",
        // timeDay: '',
        // timePoint: '',
      },
      rules2: {
        serviceName: [{ validator: validateServiceName, trigger: "blur" }],
        servicePrice: [{ validator: validateServicePrice, trigger: "blur" }],
        serviceTiming: [{ validator: checkServiceTiming, trigger: "blur" }]
        //// serviceSchedule: [{ validator: validateServiceSchedule, trigger: "blur" }],
        // timeDay: [{ validator: validateTimeDay, trigger: "blur" }],
        // timePoint: [{ validator: validateTimePoint, trigger: "blur" }],
      },
      timeDay: "",
      timePoint: ""
    };
  },
  computed: {
    ...mapState(["seivices"])
  },
  methods: {
    ...mapActions(["addServiceAsync"]),
    addBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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
            console.log(
              shopID,
              serviceName,
              servicePrice,
              serviceTiming,
              timeDay,
              timePoint,
              isDel
            );
          this.service.shopID = "";
          this.service.serviceName = "";
          this.service.servicePrice = "";
          this.service.serviceTiming = "";
          this.service.timeDay = "";
          this.service.timePoint = "";
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
  height: 400px;
}
.time {
  font-size: 11px;
}
</style>

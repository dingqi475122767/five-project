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
        <el-select
          v-model="service.shopID"
          placeholder="请选择门店"
          filterable
          size="100%"
          ref="shop"
          style="width:260px"
        >
          <el-option v-for="item in shop" :key="item._id" :label="item.shopName" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="宠物图片">
          <el-upload
            class="avatar-uploader"
            :action="domain"
            :http-request="upqiniu"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            :on-success="handleAvatarSuccess"
            :on-error="handleError"
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt class="avatar">
          </el-dialog>
        </el-form-item>
      <div class="time-container">
        <div class="block">
          <span class="demonstration" style="font-size:14px">排期</span>
          <el-date-picker
            style="margin-left:10px;width:118px;font-size:11px"
            v-model="service.timeDay"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration" style="font-size:14px">时间</span>
          <el-time-select
            style="margin-left:10px;width:115px;font-size:11px"
            v-model="service.timePoint"
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
        <el-button type="primary" @click="addBtn('service')">确认</el-button>
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
import { getAuditShopById, getShop } from "../../services/shop";
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
        shopID: ""
      },
      rules2: {
        serviceName: [{ validator: validateServiceName, trigger: "blur" }],
        servicePrice: [{ validator: validateServicePrice, trigger: "blur" }],
        serviceTiming: [{ validator: checkServiceTiming, trigger: "blur" }],
        shopID: [{ validator: validateServiceShop, trigger: "blur" }]
      },
      timeDay: "",
      timePoint: "",
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
       text:"确认添加",
      loading:false,
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr:  "pm6civjct.bkt.clouddn.com",
    };
  },
  computed: {
    ...mapState(["seivices", "shop"])
  },
  methods: {
    ...mapActions(["addServiceAsync", "getShopsAsync"]),
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
  width: 420px;
  height: 620px;
}
.time {
  font-size: 11px;
}
.block {
  margin-bottom: 20px;
}
.time-container {
  display: flex;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

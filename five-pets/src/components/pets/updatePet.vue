<template>
  <el-card class="box-card" style="width:500px;margin:0 auto">
    <div slot="header" class="clearfix" style="text-align:center">
      <span>修改宠物信息</span>
    </div>
    <div class="text item">
      <el-form
        status-icon
        :rules="rules"
        ref="updateInfo"
        :model="pet"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="宠物编号">
          <el-input v-model="pet._id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="宠物名称" prop="petsName">
          <el-input v-model="pet.petsName"></el-input>
        </el-form-item>
        <el-form-item label="宠物类型" prop="petsType">
          <el-input v-model="pet.petsType"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-input v-model="pet.petsBirth" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="宠物价格" prop="petsPrice">
          <el-input v-model.number="pet.petsPrice"></el-input>
        </el-form-item>

        <el-form-item style="width:350px;margin:0 auto">
          <el-button type="primary" @click="handleUpdatePets('updateInfo')">确认修改</el-button>
          <el-button type="primary" @click="cancelUpdate('updateInfo')">放弃修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("pets");

export default {
  data() {
    return {
      rules: {
        petsName: [
          { required: true, message: "宠物名称不能为空", trigger: "blur" }
        ],
        petsType: [
          { required: true, message: "宠物类型不能为空", trigger: "blur" }
        ],
        petsPrice: [
          { required: true, message: "宠物类型不能为空", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    let petInfo = JSON.parse(sessionStorage.petInfo);
    // this.setPet({
    //   _id: petInfo._id,
    //   shopID: petInfo.shopID,
    //   petsName: petInfo.petsName,
    //   petsType: petInfo.petsType,
    //   petsPrice: petInfo.petsPrice,
    //   petsBirth: petInfo.petsBirth,
    //   petsImg: petInfo.petsImg
    // });
    this.setPet(petInfo);
  },
  methods: {
    ...mapMutations(["setPet"]),
    ...mapActions(["updateAsync"]),
    handleUpdatePets(pet) {
      this.$refs[pet].validate(valid => {
        if (valid) {
          this.updateAsync();
            this.$router.push("/mis/petList");
        } else {
          return false;
        }
      });
    },
    cancelUpdate(pet) {
       this.$router.push("/mis/petList");
    }
  },
  computed: {
    ...mapState(["pet"])
  }
};
</script>

<style>
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
  width: 480px;
}
</style>

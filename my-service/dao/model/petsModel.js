const mongoose = require('mongoose');
// 定义数据结构
const petsSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModel"
    },
    //宠物名
    petsName:String,
    //宠物种类
    petsType:String,
    //宠物价格
    petsPrice:Number,
    //宠物出生日期
    petsBirth:String,
    //宠物性别
    petsGender:String,
    //宠物图片
    petsImg:String
})
// 通过数据结构来创建数据模型
mongoose.model("petsModel", petsSchema, "pets");

module.exports.petsModel = mongoose.model("petsModel");
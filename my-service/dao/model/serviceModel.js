const mongoose = require('mongoose');
// 定义数据结构
const serviceSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModule"
    },
    //服务名
    serviceName:String,
    //服务价格
    servicePrice:Number,
    //服务时长
    serviceTiming:Number,
    //排期
    serviceSchedule:Number,
    
})
// 通过数据结构来创建数据模型
mongoose.model("serviceModel", serviceSchema, "service");

module.exports.serviceModel = mongoose.model("serviceModel");
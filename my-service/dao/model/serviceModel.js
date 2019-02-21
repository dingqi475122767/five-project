const mongoose = require('mongoose');
// 定义数据结构
const serviceSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModel"
    },
    //服务名
    serviceName:String,
    //服务价格
    servicePrice:Number,
    //服务时长
    serviceTiming:Number,
    //// serviceSchedule:Number,
    //增加服务当天的日期
    timeDay:String,
    //记录增加服务时的时间点
    timePoint:String,
    //状态值  是否删除
    isDel:Boolean
})
// 通过数据结构来创建数据模型
mongoose.model("serviceModel", serviceSchema, "service");

module.exports.serviceModel = mongoose.model("serviceModel");
const mongoose = require('mongoose');
// 定义数据结构
const orderMessageSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModule"
    },
    //与商品关联
    goodsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"goodsModule"
    },
    //与宠物关联
    petsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"goodsModule"
    },
    //与服务关联
    serviceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"goodsModule"
    },
    //商品名

    //商品数量
    
    //订单总价
    totalPrice:Number,
    //下单时间
    orderTime:String,
    //用户名
    users:String
})
// 通过数据结构来创建数据模型
mongoose.model("orderMessageModel", orderMessageSchema, "orderMessage");

module.exports.orderMessageModel = mongoose.model("orderMessageModel");
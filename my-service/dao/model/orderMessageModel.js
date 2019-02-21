const mongoose = require('mongoose');
// 定义数据结构
const orderMessageSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModel"
    },
    //与商品关联
    goodsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"goodsModel"
    },
    //与宠物关联
    petsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"petsModel"
    },
    //与服务关联
    serviceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"serviceModel"
    },
    //商品数量
    
    //商品名
    name:String,
    //门店名
    shopName:String,
    //收货地址
    address:String,
    //订单总价
    totalPrice:String,
    //下单时间
    orderTime:String,
    //用户名
    users:String
})
// 通过数据结构来创建数据模型
mongoose.model("orderMessageModel", orderMessageSchema, "orderMessage");

module.exports.orderMessageModel = mongoose.model("orderMessageModel");
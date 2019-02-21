const { orderMessageModel } = require('./model/orderMessageModel');

//获取订单分页信息
module.exports.getOrderMessageByPage = async ({ currentPage, eachPage }) => {
    currentPage -= 0;//字符串转数字
    eachPage -= 0;
    const totalData = await orderMessageModel.find().countDocuments()//查询数据总数
    const skipNum = (currentPage-1)*eachPage//跳过的页数
    const data = await orderMessageModel
    .find()
    .limit(eachPage)//每页显示多少条
    .skip(skipNum)//跳过多少页
    const totalPage = Math.ceil(totalData/eachPage)//总页数
    return {currentPage,eachPage,totalData,totalPage,data}
}

//新增订单
module.exports.addOrderMessage = async data => await orderMessageModel.create(data)
const { getOrderMessageByPage,addOrderMessage } = require('../dao/orderMessageDao');

//获取订单分页信息
module.exports.getOrderMessageByPage = async data=>await getOrderMessageByPage(data);

//新增订单
module.exports.addOrderMessage = async data=>await addOrderMessage(data);
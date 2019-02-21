var express = require('express');
var router = express.Router();

const { addOrderMessage, getOrderMessageByPage } = require('../service/orderMessageService')

/* GET users listing. */
//获取订单分页信息
router.get('/getOrderMessageByPage', async function (req, res, next) {
  res.send(await getOrderMessageByPage(req.query));
});

//新增订单
router.post('/addOrderMessage', async function (req, res, next) {
  res.send(await addOrderMessage(req.body))
});

module.exports = router;
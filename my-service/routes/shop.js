var express = require('express');
var router = express.Router();
const {addShop,getShop,getOne,getApplyShop,consentApply}  = require('../service/shopService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const qnconfig = require('../config.js')
// 处理请求
router.get('/token', (req, res, next) => {
  // console.log(qnconfig.uploadToken)
  res.status(200).send(qnconfig.uploadToken)
})
//获取所有门店
router.get('/getShop', async function (req, res, next) {
  res.send(await getShop(req.query));
})

//获取门店详情
router.post('/getOne', async function (req, res, next) {
  res.send(await getOne(req.body));
})

//新增门店
router.post('/addShop',async function(req, res, next) {
  console.log(req.body)
  res.send(await addShop(req.body));
});
//获取待审核门店
router.get('/getApplyShop',async function(req, res, next) {
  res.send(await getApplyShop());
});
//通过审核
router.post('/consentApply',async function(req, res, next) {
  res.send(await consentApply(req.body));
});
module.exports = router;
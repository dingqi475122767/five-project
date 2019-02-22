var express = require('express');
var router = express.Router();

const {addService,getAllByPage,updateService,removeService}  = require('../service/serviceService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const qnconfig = require('../config.js')
//添加服务图片
router.get('/token', (req, res, next) => {
  // console.log(qnconfig.uploadToken)
  res.status(200).send(qnconfig.uploadToken)
})

//新增门店服务
router.post('/addService',async function(req, res, next) {
  res.send(await addService(req.body));
});

// 分页查询服务
router.post('/getAllByPage',async function(req,res,next){
  res.send(await getAllByPage(req.body))
});
// 修改服务
router.post('/updateService',async function(req,res,next){
  res.send(await updateService(req.body))
})

// //删除服务
router.post('/removeService',async function(req,res,next){
  console.log(req.body);
  res.send(await removeService(req.body))
})
module.exports = router;  
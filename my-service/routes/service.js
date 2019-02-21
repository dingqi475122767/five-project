var express = require('express');
var router = express.Router();

const {addService,getAllByPage,updateService}  = require('../service/serviceService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const qnconfig = require('../config.js')

//新增门店服务
router.post('/addService',async function(req, res, next) {
  res.send(await addService(req.body));
});

// 分页查询服务
router.get('/getAllByPage',async function(req,res,next){
  res.send(await getAllByPage(req.query))
});
// 修改服务
router.get('/updateService',async function(req,res,next){
  console.log(req.body)
  res.send(await updateService(req.query))
})

module.exports = router;  
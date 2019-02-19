var express = require('express');
var router = express.Router();

const {addService}  = require('../service/serviceService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const qnconfig = require('../config.js')

//新增门店服务
router.post('/addService',async function(req, res, next) {
  console.log(req.body)
  res.send(await addService(req.body));
});
module.exports = router;  
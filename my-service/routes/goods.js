var express = require('express');
var router = express.Router();
const {addGoods,getAllByPage} = require("../service/goodsService");

const qnconfig = require('../config.js')
// 处理请求，上传图片
router.get('/token', (req, res, next) => {
  res.status(200).send(qnconfig.uploadToken)
})

// 添加商品
router.post('/addGoods',async function(req,res,next){
  res.send(await addGoods(req.body))
})

// 分页查询商品
router.get('/getAllByPage',async function(req,res,next){
  res.send(await getAllByPage(req.query))
})

module.exports = router;
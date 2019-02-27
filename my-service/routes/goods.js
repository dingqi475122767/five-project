var express = require('express');
var router = express.Router();
const {addGoods,getAllByPage,delGoods,updateGoods,getAllByPageWX} = require("../service/goodsService");

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

// 分页查询商品(微信)
router.get('/getAllByPageWX',async function(req,res,next){
  res.send(await getAllByPageWX(req.query))
})

// 删除商品
router.post('/delGoods',async function(req,res,next){
  res.send(await delGoods(req.body))
})

// 修改商品信息
router.post('/updateGoods',async function(req,res,next){
  res.send(await updateGoods(req.body))
})
module.exports = router;
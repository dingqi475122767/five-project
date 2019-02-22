var express = require('express');
var router = express.Router();

const { reg, login, isShopUsers, getAllByPage, updateShopUsers, auditShopUsers, getAuditByPage, removeShopUsers } = require("../service/shopUsersService")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//门店用户注册
router.post('/reg', async function (req, res, next) {
  res.send(await reg(req.body));
});
//门店用户登录
router.post('/login', async function (req, res, next) {
  const isLogin = await login(req.body)
  //将登录的账号保存到服务端储存
  if (isLogin) {
    req.session.users = req.body
  }
  res.send(isLogin);
});

//验证门店用户是否重复
router.post('/isShopUsers', async function (req, res, next) {
  // console.log(req.body)
  res.send(await isShopUsers(req.body));
});


// 分页查询服务
router.get('/getAllByPage', async function (req, res, next) {
  res.send(await getAllByPage(req.query))
});

//修改用户信息
router.post('/updateShopUsers', async function (req, res, next) {
  res.send(await updateShopUsers(req.body))
})

//审核用户信息
router.post('/auditShopUsers', async function (req, res, next) {
  res.send(await auditShopUsers(req.body))
})

//获取待审核用户
router.get('/getAuditByPage', async function (req, res, next) {
  res.send(await getAuditByPage(req.query))
});

//是否登录
router.get('/isLogin', async function (req, res, next) {
  let user = req.session.users;
  if (user) {
    res.send(user);
  } else {
    res.send(false);
  }
})

//退出登录
router.get("/exit", async function (req, res, next) {
  req.session.users = '';
  res.send(true)
})


// //删除服务
router.post('/removeShopUsers', async function (req, res, next) {
  res.send(await removeShopUsers(req.body))
})

module.exports = router;
var express = require('express');
var router = express.Router();

const { reg, login, isShopUsers } = require("../service/shopUsersService")

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
//门店用户是否登录
router.get('/isLogin', async function (req, res, next) {
  let user = req.session.users;
  if (user) {
    res.send(user);
  } else {
    res.send(false);
  }
})

//验证门店用户是否重复
router.post('/isShopUsers', async function (req, res, next) {
  // console.log(req.body)
  res.send(await isShopUsers(req.body));
});


module.exports = router;
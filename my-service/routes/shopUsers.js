var express = require('express');
var router = express.Router();
const { reg, login } = require("../service/shopUsersService")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//门店注册
router.post('/reg', async function (req, res, next) {
  res.send(await reg(req.body));
});

//门店登陆
router.post('/login', async function (req, res, next) {
  res.send(await login(req.body));
});

module.exports = router;
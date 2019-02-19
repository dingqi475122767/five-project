var express = require('express');
var router = express.Router();
const { reg } = require("../service/shopUsersService")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//门店注册
router.post('/reg', async function (req, res, next) {
  console.log(req.body)
  res.send(await reg(req.body));
});

module.exports = router;
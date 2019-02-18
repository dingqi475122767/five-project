var express = require('express');
var router = express.Router();
const {addPets} = require('../service/petsService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addPets',async function(req, res, next) {
 res.send(await addPets(req.body))
});


module.exports = router;
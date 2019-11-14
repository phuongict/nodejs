var express = require('express');
var router = express.Router();
var userController = require('../controllers/frontend/userController');
/* GET home page. */
router.get('/', userController.listUser);

module.exports = router;

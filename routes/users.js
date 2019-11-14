var express = require('express');
var router = express.Router();
const userController = require('../controllers/frontend/userController');
/* GET users listing. */
router.get('/', userController.listUser);
router.get('/insert', userController.insertUser);
module.exports = router;

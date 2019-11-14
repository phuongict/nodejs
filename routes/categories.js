var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/backend/categoryController')
/* GET users listing. */
router.get('/', categoryController.index);

module.exports = router;

const express = require('express');

const router = express.Router();
const admincpController = require('../controllers/backend/admincpController');
router.get('/', admincpController.index);

module.exports = router;
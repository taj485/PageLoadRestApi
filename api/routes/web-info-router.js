const express = require('express');
const router = express.Router();
const WebInfoController = require('../controllers/web-info-controller');

router.get('**', WebInfoController.get_web_info);

module.exports = router;
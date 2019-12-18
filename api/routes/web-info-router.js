const express = require('express');
const router = express.Router();
const WebInfoController = require('../controllers/web-info-controller');


router.get('/:website1?/:website2?/:website3?', WebInfoController.get_web_info);

module.exports = router;
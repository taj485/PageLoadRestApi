const express = require('express');
const router = express.Router();
const loadTimer = require('../services/page-speed-api');
const UrlSetup = require('../controllers/url-setup');

router.get('/:website1?/:website2?/:website3?', async (req, res) => {

    const websites = UrlSetup.UrlSetup.getWebUrl(req.params);

    const api_url =  UrlSetup.UrlSetup.setUpQuery(websites);

    const pageSpeedInfo = await loadTimer.pageSpeedApiAsync(api_url);
    
    res.status(200).json(pageSpeedInfo);
})

module.exports = router;
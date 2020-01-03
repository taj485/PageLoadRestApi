const UrlSetup = require('../services/url-setup');
const PageSpeedApi = require('../services/page-speed-api');
const chalk = require('chalk');

exports.get_web_info = async (req, res) => {

    const websites = UrlSetup.getWebUrl(req.path.split('/'));
    console.log(websites);

    const api_url = UrlSetup.setUpQuery(websites);

    const pageSpeedInfo = await PageSpeedApi.pageSpeedApiAsync(api_url);
    console.log(pageSpeedInfo);
    
    res.status(200).json(pageSpeedInfo);
    
}
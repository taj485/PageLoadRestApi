const UrlSetup = require('../services/url-setup');
const PageSpeedApi = require('../services/page-speed-api');
const chalk = require('chalk');

exports.get_web_info = async (req, res) => {

    const websites = UrlSetup.getWebUrl(req.path.split('/'));

    const api_url = UrlSetup.setUpQuery(websites);
    console.log(chalk.green(JSON.stringify(api_url)));

    const pageSpeedInfo = await PageSpeedApi.pageSpeedApiAsync(api_url);
    console.log(pageSpeedInfo);
    
    res.status(200).json(pageSpeedInfo);
    
}
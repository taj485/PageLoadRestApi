const UrlSetup = require('../services/url-setup');
const PageSpeedApi = require('../services/page-speed-api');

exports.get_web_info = async (req, res) => {

    const websites =  UrlSetup.getWebUrl(req.params);

    const api_url =  UrlSetup.setUpQuery(websites);

    const pageSpeedInfo = await PageSpeedApi.pageSpeedApiAsync(api_url);
    
    res.status(200).json(pageSpeedInfo);
}
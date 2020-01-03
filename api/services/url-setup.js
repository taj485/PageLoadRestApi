chalk = require('chalk');

function getWebUrl(params) {
    var websites = {};

    for (let index = 1; index < params.length; index++) {
        if (params[index] != null) {
            websites[index] = params[index];
        }
    }

    if (websites[Object.keys(websites)[1]] == null) {
        websites = setDefaultUrl();
    }
    return websites;
}

function setDefaultUrl() {
    const websites = {
        '1': "www.hotel-internet-marketing.com/",
        '2': "www.bbc.co.uk/",
        '3': "www.google.co.uk/"
    }
    return websites;
}

function setUpQuery(websites) {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    const api_url = {};
    for (key in websites) {
        if (ValidUrl(websites[key])) {
            api_url[key] = api + `?url=https://${websites[key]}`
        };
    };
    return api_url;
}

function ValidUrl(url) {
    let expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return expression.test(url)
}

module.exports.getWebUrl = getWebUrl;
module.exports.setUpQuery = setUpQuery;
module.exports.setDefaultUrl = setDefaultUrl;
module.exports.ValidUrl = ValidUrl;

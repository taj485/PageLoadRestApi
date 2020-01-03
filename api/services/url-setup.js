chalk = require('chalk');

function getWebUrl(params) {
    var websites = [];

    for (let index = 1; index < params.length; index++) {
        if (params[index] != "") {
            websites.push(params[index]);
        }
    }

    if (websites.length == 0) {
        websites = setDefaultUrl();
    }
    return websites;
}

function setDefaultUrl() {
    var websites = [];
    const DefaultUrl = [
        "www.hotel-internet-marketing.com/",
        "www.bbc.co.uk/",
        "www.google.co.uk/"
    ];

    for (let index = 0; index < DefaultUrl.length; index++) {
        websites.push(DefaultUrl[index]);
    }
    return websites
}

function setUpQuery(websites) {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    const api_url = [];

    websites.forEach(url => {
        if (ValidUrl(url)) {
            api_url.push(api + `?url=https://${url}`)
        };
    });

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

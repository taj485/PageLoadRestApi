function getWebUrl(params){
    var websites ={};
        for (var url in params) {
            if (params[url] != null) {
                websites[url] = params[url];
                console.log(websites[url]);
                console.log(params[url]);
            }
        }
        if (websites[Object.keys(websites)[0]] == null)
        {
           websites = setDefaultUrl();
        }
    return websites;
}

function setDefaultUrl(){
    const websites = {
        websites1: "www.hotel-internet-marketing.com/",
        websites2: "www.bbc.co.uk/",
        websites3: "www.google.co.uk/"
    }
    return websites;
}

function setUpQuery(websites) {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    
    const api_url = {};

    for (key in websites) {

        api_url[key] = api + `?url=https://${websites[key]}`
        console.log(api_url[key]);
    }
    
    return api_url;
}

module.exports.getWebUrl = getWebUrl;
module.exports.setUpQuery = setUpQuery;

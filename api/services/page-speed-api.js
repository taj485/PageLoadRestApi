const fetch = require('node-fetch');

async function pageSpeedApiAsync(api_url){
    pageSpeedInfo = {};
    for (key in api_url)
    {
        await fetch(api_url[key])
        .then(response => {
            status = response.status;
            return response.json()
        })
        .then(json => {
            if ('error' in json) {
                pageSpeedInfo[key] = {
                Message: json['error']['errors'][0].message,
                Response_code : json['error'].code,
                url: api_url[key]
                };
            } else { 
                pageSpeedInfo[key] = {
                Title: json['lighthouseResult']['audits']['speed-index'].title,
                Response_code: status,
                speed_score: json['lighthouseResult']['audits']['speed-index'].score,
                URL: json.id
                };
            
            };    
        });  
    }
    return pageSpeedInfo;
}

module.exports.pageSpeedApiAsync = pageSpeedApiAsync;
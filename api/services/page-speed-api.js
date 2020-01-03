const fetch = require('node-fetch');
const chalk = require('chalk');

async function pageSpeedApiAsync(api_url) {
    let webinfo = [];

    await Promise.all(api_url.map(url => fetch(url)
        .then((response) =>
            response.json())
        .then(json => {
            if ('error' in json) {
                pageSpeedInfo = {
                    message: "Url not found",
                    response_code: json['error'].code,
                    url: api_url[key]
                };
            } else {
                pageSpeedInfo = {
                    url: json.id,
                    title: json['lighthouseResult']['audits']['speed-index'].title,
                    response_code: json['lighthouseResult']['audits']['network-requests']['details']['items'][0].statusCode,
                    speed_score: json['lighthouseResult']['audits']['speed-index'].score

                };
            };
            webinfo.push(pageSpeedInfo);
        })));
    return webinfo;
}

module.exports.pageSpeedApiAsync = pageSpeedApiAsync;
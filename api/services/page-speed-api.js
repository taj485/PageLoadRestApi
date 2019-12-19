const fetch = require('node-fetch');
const chalk = require('chalk');

async function pageSpeedApiAsync(api_url) {
    let webinfo = [];

    let web1 = new Promise(async (resolve, reject) => {
        await callapi(api_url['website1']);
        resolve('web 1 complete')
    })

    let web2 = new Promise(async (resolve, reject) => {
        await callapi(api_url['website2']);
        resolve('web 2 complete')
    })


    let web3 = new Promise(async (resolve, reject) => {
        await callapi(api_url['website3']);
        resolve('web 3 complete')
    })

    await Promise.all([
        web1,
        web2,
        web3
    ]).then((message) => {
        console.log(message);
    });

    return webinfo;


    async function callapi(api_url) {
        if (api_url !== undefined) {
            console.log(chalk.blue('I am fecthing valuable information for my master'));
            await fetch(api_url)
                .then(response => {
                    status = response.status;
                    return response.json()
                })
                .then(json => {
                    if ('error' in json) {
                        pageSpeedInfo = {
                            message: "Url not found",
                            response_code: json['error'].code,
                            url: api_url[key]
                        };
                    } else {
                        pageSpeedInfo = {
                            title: json['lighthouseResult']['audits']['speed-index'].title,
                            response_code: status,
                            speed_score: json['lighthouseResult']['audits']['speed-index'].score,
                            url: json.id
                        };
                    };
                });
            webinfo.push(pageSpeedInfo);
        }
    }
}

module.exports.pageSpeedApiAsync = pageSpeedApiAsync;
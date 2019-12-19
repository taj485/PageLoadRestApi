const fetch = require('node-fetch');
const chalk = require('chalk');

async function pageSpeedApiAsync(api_url){
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
    ]);

    return webinfo;


    async function callapi(api_url) {
        if (api_url !== undefined) {
            await fetch(api_url)
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(json => {
                if ('error' in json) {
                    pageSpeedInfo = {
                    Message: "Url not found",
                    Response_code : json['error'].code,
                    url: api_url[key]
                    };
                } else { 
                    pageSpeedInfo = {
                    Title: json['lighthouseResult']['audits']['speed-index'].title,
                    Response_code: status,
                    speed_score: json['lighthouseResult']['audits']['speed-index'].score,
                    URL: json.id
                    };
                };
            });
            console.log(chalk.red(pageSpeedInfo))
            webinfo.push(pageSpeedInfo); 
        }
    }
}

module.exports.pageSpeedApiAsync = pageSpeedApiAsync;
const fetch = require('node-fetch');
const chalk = require('chalk');

async function pageSpeedApiAsync(api_url) {
    let webinfo = [];
    let promises = [];
    let totalPromises = [];

    for (let index = 1; index <= Object.keys(api_url).length; index++) {
        promises[index] = new Promise(async (resolve, reject) => {
            webinfo.push(await callapi(api_url[index]));
            resolve('web 1 complete')
        })
        totalPromises.push(index);
        console.log(chalk.blue(promises[index]));
    }

    await Promise.all([
        await callAllPromises(promises, totalPromises)

    ]).then((message) => {
        console.log(message);
    });

    return webinfo;
}

async function callAllPromises(promises, totalPromises) {
    await asyncForEach(totalPromises, async (num) => {
        await promises[num];
    });
    console.log('Done');
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

async function callapi(api_url) {
    let pageSpeedInfo = '';
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
    }
    return (pageSpeedInfo);
}

module.exports.pageSpeedApiAsync = pageSpeedApiAsync;
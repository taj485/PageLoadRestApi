const UrlSetup = require('../services/url-setup');
const PageSpeedApi = require('../services/page-speed-api');
const express = require('express');
const chalk = require('chalk');
const router = express.Router();

exports.get_web_info = async (req, res) => {
    try{
        const websites =  UrlSetup.getWebUrl(req.params);
        const api_url =  UrlSetup.setUpQuery(websites);
        const pageSpeedInfo = await PageSpeedApi.pageSpeedApiAsync(api_url); 
        console.log(chalk.green(JSON.stringify(pageSpeedInfo)));
        res.status(200).json(pageSpeedInfo);
    } catch(error) {
        console.log(error);
    }
}
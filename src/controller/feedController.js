'use strict';
const bodyResponse = require('../utils/response-format');
const {
    Wit,
    log
} = require('node-wit');
const client = new Wit({
    accessToken: process.env.WIT_TOKEN
});
const date = new Date();
const dateNow = '' + date.toISOString().split('T')[0] + ' ' + date.toTimeString().split(' ')[0];
const Feeds = require('../model/feedModel');
const logger = require('../utils/winston-logger');

function feedNow() {
    const data = dateNow;
    return data;
}

function setFeedTime(data) {
    var data_get = data;
    var title = data_get["intents"][0]["name"];
    var jam = '0';
    if(data_get["entities"]["waktu_makan_jam:waktu_makan_jam"]){
        jam = data_get["entities"]["waktu_makan_jam:waktu_makan_jam"][0]["body"];
    }
    var menit = ".00";
    if(data_get["entities"]["waktu_makan_menit:waktu_makan_menit"]){
        menit = data_get["entities"]["waktu_makan_menit:waktu_makan_menit"][0]["body"];
    }
    const feed = new Feeds({
        title,
        jam,
        menit,
    });
    return feed
        .save()
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((error) => {
            logger.warn(error);
            return Promise.reject(new Error(error));
    });
}

function getFeedTime() {
    const objectResult = { data: [] };
    return Feeds.find()
        .sort({ createdAt: -1 })
        .exec()
        .then((result) => {
            objectResult.data = result;
            return Promise.resolve(objectResult);
        })
        .catch((err) => {
            logger.error(err);
            return Promise.reject(err);
    });;
}

function getAllDataFeed(){
    const objectResult = { data: [] };
    return Feeds.find()
        .sort({ createdAt: -1 })
        .exec()
        .then((result) => {
            objectResult.data = result;
            return Promise.resolve(objectResult);
        })
        .catch((err) => {
            logger.error(err);
            return Promise.reject(err);
    });
}

function getDataWit(param){
    const objectResult = { data: [] };
    return client.message(param, {})
    .then((data) => {
        objectResult.data = data;
        return Promise.resolve(objectResult);
    })
    .catch(err => {
        logger.error(err);
        return Promise.reject(err);
    });
}

const feedFunction = async function (req, res) {
    const req_text = req.body.input_text;
    let code = 0;
    let message, status = "";
    let data_error = null;
    let data_res = null;
    let resultFeed = null;
    try {
        const resultWIT = await getDataWit(req_text);
        console.log(resultWIT["data"]["entities"]);
        switch(resultWIT["data"]["intents"][0]["name"]) {
            case "kasih_makan":
                var data_return = feedNow();
                code = 200;
                message = "Successfully Access WIT, Feed Now!";
                status = "OK";
                data_res = {
                    'wit-ai-title':resultWIT["data"]["intents"][0]["name"],
                    'message-command': "Feed Now : "+data_return
                }
                break;
            case "atur_waktu_makan":
                resultFeed = await setFeedTime(resultWIT["data"]);
                code = 201;
                message = "Successfully Access WIT, Set New Feed Schedule!";
                status = "OK";
                data_res = {
                    'wit-ai-title':resultWIT["data"]["intents"][0]["name"],
                    'message-command': "New Feed Schedule At : ",
                    'data-new-feed': resultFeed
                }
                break;
            case "lihat_waktu_makan":
                resultFeed = await getFeedTime();
                code = 200;
                message = "Successfully Access WIT, Your Schedule!";
                status = "OK";
                data_res = {
                    'wit-ai-title':resultWIT["data"]["intents"][0]["name"],
                    'message-command': "Your Feed Schedule At : ",
                    'data-schedule-feed': resultFeed["data"][0]
                }
                break;
            default:
                ifError = 1;
                code = 400;
                data_error = err;
                message = "Unknown Word";
                status = "Error";
                break;
        };
        bodyResponse.resp(data_res, data_error, message, code, res, status);
    } catch (err) {
        bodyResponse.resp(null, err, "Error Retrieving Data", 400, res, "Error");
    }
}

const allFeedFunction = async function (req, res) {
    try {
        const resultFeed = await getAllDataFeed();
        bodyResponse.resp(resultFeed, null, "Sukses Fetching Data", 200, res, "OK");
    } catch (err) {
        bodyResponse.resp(null, err, "Error Retrieving Data", 400, res, "Error");
    }
};

module.exports = {
    feedFunction, allFeedFunction
};
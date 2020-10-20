'use strict';
const bodyResponse = require('../utils/response-format');
const {Wit, log} = require('node-wit');
const client = new Wit({accessToken: process.env.WIT_TOKEN});

const test_satu = async function(req, res){
    const req_text = req.body.text;
    client.message(req_text, {})
    .then((data) => {
        bodyResponse.resp(data, null, "Access Granted", 200, res, "OK");
        console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
        console.log(data["intents"][0]["name"]);
    })
    .catch(err => {
        bodyResponse.resp(null, err, "Access Granted", 400, res, "Error");
    });
};

const test_dua = async function(req, res){
    bodyResponse.resp(null, null, "Forbidden Access", 400, res, "Error");
};

module.exports = {test_satu, test_dua};


require('dotenv').config();
const path = require('path');
const logger = require('./utils/winston-logger');
const routes = require('./routes');
const databaseConfig = require('./utils/database-config');
const mongoose = require('mongoose');

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);
try{
    app.listen(port, () => {
        console.log('App Listening to '+port+'...');
        console.log('Press Ctrl+c to Quit');
    });
    logger.debug('App Listening to '+port);
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Successfully Sekarang Anda Terkoneksi Ke database");
        logger.debug('Succesfully Connect to DB');
    }).catch(err => {
        console.log('Error database Tidak Terkoneksi atau Tidak Ada');
        logger.error(err);
        process.exit();
    });
}catch(error){
    logger.error(error);
}


'use strict';
const path = require('path');
const html_index_public = path.join( __dirname, '../', './index.html');
const testController = require('./controller/testController');
const feedController = require('./controller/feedController');
module.exports = function(app){
    //#Index Route.get('/', (req, res) => res.render('pages/index'))
    app.route('/').get((req, res) => res.sendFile(html_index_public));

    //# API Web
    //#Route Users
    //app.route('/api/v1/test').get(testController.tests);
    //app.route('/api/v1/login').post(userController.login);
    //app.route('/api/v1/logout').post(verifyToken.verifyToken, userController.logout);
    //app.route('/api/v1/dashboard').get(verifyToken.verifyToken, userController.dashboard);
    app.route('/api/v1/test-satu').get(testController.test_satu);
    app.route('/api/v1/test-dua').get(testController.test_dua);
    app.route('/api/v1/feed/voice').get(feedController.feedFunction);
    app.route('/api/v1/feed/all').get(feedController.allFeedFunction);
    //#API Mobile
};
/*
File: controller.js
App Name: MEAN Boiler
Purpose: Provides Function/Control For API Call
Created By: Hardik Thakor */

'use strict';
const chalk = require('chalk');                           //For Displaying Logs in different Colors
const mongodb = require('mongodb');                       //For DB Communication
var MongoClient = mongodb.MongoClient;
const appConfig = require('../config/appConfig');         //App Configs

// For Demo API Function
exports.communicate = function(req, res) {
  MongoClient.connect(appConfig.db.url, function (err, db) {
      if (err) {
          console.log(chalk.red('###Unable to connect to the mongoDB server. Error:', err));
          res.status(403).json({"msg" : "Unable to connect to the mongoDB server","Error":err});
          return;
      } else {
          console.log(chalk.green('### Connection established to ', appConfig.db.url));
          res.status(200).json({"msg":"Processed Successfully!"});
          db.close();
          return;
      }
  });
};

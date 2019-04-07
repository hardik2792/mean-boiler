/*
Server File
App Name: MEAN Boiler
Purpose: Server Init File
Created By: Hardik Thakor
*/

// Imports
const express 	= require('express');
const http 		= require('http');
const path 		= require('path');
const chalk 	= require('chalk'); //For Displaying Logs in different Colors
const fs 		= require('fs');
const ip        = require('ip');
const server 	= require('./support/config/appConfig').server;
const models    = path.join(__dirname, './support/models');         //Fetching All Models

const app = express();

// Setting Application PORT
app.set('port', process.env.PORT || server.port);

// Middlewares setup
require('./support/middleware')(app);

//For Listing All the Models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(path.join(models, file)));

// Default Application Path
app.use(express.static(path.join(__dirname, 'public')));
app.use("/files", express.static(__dirname + '/support/generatedFiles'));

// Application Routes
require('./support/routes/index.js')(app);

global.appPort    = app.get('port');

// Starting Server...
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log(chalk.green.bold(server.name),chalk.blue('started @ IP'),chalk.green.bold('`http://'+ip.address()+':'+app.get('port')+'`'));
});

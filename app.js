/*
Server File
App Name: MEAN Boiler
Purpose: Server Init File
Created By: Hardik Thakor
*/

// Imports
const express = require('express');
const http = require('http');
const path = require('path');
const chalk = require('chalk'); //For Displaying Logs in different Colors
const fs = require('fs');
const appConfig = require('./config/appConfig');

const app = express();

// Setting Application PORT
app.set('port', process.env.PORT || appConfig.server.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');    //Setting View Engine

// Default Application Path
app.use(express.static(path.join(__dirname, 'public')));

// Application Routes
require('./routes/index.js')(app);

// Starting Server...
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log(chalk.green.bold(appConfig.server.name),chalk.blue('started @ port '),chalk.green.bold(app.get('port')));
});

/*
File: index.js
App Name: MEAN Boiler
Purpose: Routing For API Call
Created By: Hardik Thakor */
// const Router 	= require('express')();
const mongoose  = require('mongoose');
mongoose.set('useFindAndModify', false);
const chalk 	= require('chalk');
const dbControls= require('../config/appConfig').db;

const control = require('../controllers/controller');
const foCtrls = require('../controllers/fileOperations');

// Connecting to Database
const dbConnectURL = dbControls.url;
const dbOptions = {
					useNewUrlParser: true,
                    keepAlive: 300000,
                    poolSize: 2,
                    promiseLibrary: global.Promise,
                  };
mongoose.Promise = global.Promise;
mongoose.connect(dbConnectURL,dbOptions)
    .then(() => {
        console.log(chalk.blue('Connection to Database is '),chalk.green.bold("Successful!"));
    })
    .catch((error) => {
        console.log(chalk.red('Connection to Database '),chalk.red.bold("Failed!"),chalk.red('\n Due to' ,error));
    });

module.exports=function(app) {

  	app.get("/call", control.todo);

  	//FOR Index PAGE
	app.get("/",function(req,res){
		res.render('index.html');
	});

	// FOR Logger
	app.get("/welcome",function(req,res){
	  res.render('welcome.html');
	});

	app.get("/todo",function(req,res){
	  res.render('todo.html');
	});

	app.get("/gettodo", control.gettodo);
	app.post("/addtodo", control.addtodo);
	app.put("/updatetodo", control.updatetodo);
	app.delete("/deletetodo/:id", control.deletetodo);

	app.get("/generatingFile", foCtrls.generatingFile);
};
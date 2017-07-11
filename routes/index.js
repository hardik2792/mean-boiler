/*
File: index.js
App Name: MEAN Boiler
Purpose: Routing For API Call
Created By: Hardik Thakor */

const control = require('../controllers/controller');

module.exports=function(app) {

  app.get("/call", control.communicate);

  //FOR Index PAGE
	app.get("/",function(req,res){
		res.render('index.ejs');
	});

  // FOR Logger
  app.get("/welcome",function(req,res){
      res.render('welcome.ejs');
  });

};

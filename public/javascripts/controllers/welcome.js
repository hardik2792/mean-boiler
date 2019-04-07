/*
File: index.js
App Name: MEAN Boiler
Purpose: Supply Control to Welcome.ejs
Created By: Hardik Thakor */

welcomeControl.$inject = ['$scope', '$rootScope', '$http', '$timeout', 'restService'];
app.controller('welcomeControl', welcomeControl);

function welcomeControl($scope, $rootScope, $http, $timeout, restService) {

  $rootScope.webTitle = webTitle; //variable with global scope

}

//Directives
app.directive('feature',function(){
	return {
		template:"The features are as listed below: <br><ol><li>Demonstration of Connection to MongoDB(with 'mongoose'[npm package]).</li><li>Demonstration of API Calling.</li><li>Performing CRUD Operations using Node and Mongoose <b>using Async/Await.</b> </li><li>Angular Services.</li><li>Angular Directives.</li></0l>"
	}
});

app.directive('description',function(){
	return {
		template:"This Boiler Plate is Developed using: <br><ul><li><strong>MEAN(MongoDB, Express, AngularJS(1.x), NodeJS)</strong> and</li><li> <strong>Bootstrap</strong></li></ul>"
	}
});

app.directive('purpose',function(){
	return {
		template:"<h5>The purpose of Developing was to provide the template to Beginners to boost up their learning.</h5>"
	}
});

app.directive('functions',function(){
	return {
		template:"Functionalities<br><ul><li><strong>Add & Delete</strong> TODO</li><li><strong>Generate & Download</strong> Spreadsheets as well as CSV</li></ul>"
	}
});

app.directive('apiButton',function(){
	return {
		template:"<button class='btn btn-primary' ng-click='apiCall()'' title='Click For Calling API'><span class='glyphicon glyphicon-play'><span>Call API</button>"
	}
});

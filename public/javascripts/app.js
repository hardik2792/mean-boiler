/*
File: app.js
App Name: MEAN Boiler
Purpose: Routing For Views and Controller
Created By: Hardik Thakor */

//Initializing App
var app = angular.module('boiler', ['ngRoute']);

 app.config(['$routeProvider', '$httpProvider',  function($routeProvider, $httpProvider) {
    //View Locator
    $routeProvider
        .when('/', { //FOR MAP
            templateUrl: '/welcome',
            controller: 'welcomeControl'
        });

}]);

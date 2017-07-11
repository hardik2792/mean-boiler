/*
File: index.js
App Name: MEAN Boiler
Purpose: Supply Control to Welcome.ejs
Created By: Hardik Thakor */

welcomeControl.$inject = ['$scope', '$rootScope', '$http', '$timeout', 'restService'];
app.controller('welcomeControl', welcomeControl);

function welcomeControl($scope, $rootScope, $http, $timeout, restService) {

  var toastEle = document.getElementById("toaster"); //for displaying messages in div

  //Config File Initialization
  $rootScope.webTitle = webTitle; //variable with global scope

  // variable declaration
  $scope.logData = [];  //Array Declaration
  $scope.bCallOn = false; //Boolean Declaration
  $scope.toaster_msg = ""; // String Declaration
  $scope.currentIndex = 0; //Integer Declaration
  var bInitFlag = false; //Simple Javascript Variable Declaration

  //Function For API Call
  $scope.apiCall = function() {
    toaster("API Called.....");
    restService.getData().then(function(response){
      console.log(response);
      $timeout(function () {
          toaster("API Responded.....");
      }, 3000);

    });
  }

  function toaster(msg) {
    toastEle.className = "show";
    $scope.toaster_msg = msg;
    $timeout(function() {
        toastEle.className = toastEle.className.replace("show", "");
    }, 3000);
  }
}

//Directives
app.directive('feature',function(){
	return {
		template:"The features are as listed below: <br><ol><li>Organised Folder Structure</li><li>Angular Services</li><li>Angular Directives</li><li>Proper Path provided for bower components</li><li>Demonstration of API Calling</li><li>Demonstration of Connection to MongoDB(with 'mongodb'[npm package])</li></0l>"
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

app.directive('apiButton',function(){
	return {
		template:"<button class='btn btn-primary' ng-click='apiCall()'' title='Click For Calling API'><span class='glyphicon glyphicon-play'><span>Call API</button>"
	}
});

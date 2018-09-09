/*
File: index.js
App Name: MEAN Boiler
Purpose: Supply Control to Welcome.ejs
Created By: Hardik Thakor */

todoControl.$inject = ['$scope', '$rootScope', '$http', '$timeout', 'restService'];
app.controller('todoControl', todoControl);

function todoControl($scope, $rootScope, $http, $timeout, restService) {

  var toastEle = document.getElementById("toaster"); //for displaying messages in div

  //Config File Initialization
  $rootScope.webTitle = 'To Do | Demo'; //variable with global scope

  // variable declaration
  $scope.todoList = [];  //Array Declaration
  $scope.todo = {};
  $scope.bRequested = false; //Boolean Declaration
  $scope.bResponded = false; //Boolean Declaration
  $scope.toaster_msg = ""; // String Declaration
  $scope.currentIndex = 0; //Integer Declaration
  var bInitFlag = false; //Simple Javascript Variable Declaration

  //Function For API Call
  $scope.gettodo = function() {
    $scope.bRequested = true;
    restService.gettodo().then(function(response){
      console.log(response);
      $scope.bRequested = false;
      $scope.bResponded = true;
      if(response.success){
        $scope.todoList = response.data;
      }else{
        toaster("Error while fetching List! ");
      }
    });
  }

  $scope.addtodo = function(todo) {
    restService.addtodo(todo).then(function(response){
      console.log(response);
      if(response.success){
        $scope.todoList.push(response.data);
        toaster("To do Added!");
      }else{
        toaster("Error while adding todo! ");
      }
    });
  }

  $scope.updatetodo = function(todo,index) {
    restService.updatetodo(todo).then(function(response){
      console.log(response);
      if(response.success){
        toaster("To do Updated!");
      }else{
        toaster("Error while Updating todo! ");
      }
    });
  }

  $scope.deletetodo = function(todo,index) {
    restService.deletetodo(todo).then(function(response){
      console.log(response);
      if(response.success){
        toaster("To do Deleted!");
        $scope.todoList.splice(index, 1);
      }else{
        toaster("Error while Deleting todo! ");
      }
    });
  }

  $scope.gettodo();

  function toaster(msg) {
    toastEle.className = "show";
    $rootScope.toaster_msg = msg;
    $timeout(function() {
      toastEle.className = toastEle.className.replace("show", "");
    }, 3000);
  }
}
/*
File: restService.js
App Name: MEAN Boiler
Purpose: Providing Service To Controller
Created By: Hardik Thakor */

restService.$inject = ['$http', '$q'];
app.service('restService', restService);

function restService($http, $q) {
    return {
        gettodo : gettodo,
        addtodo : addtodo,
        updatetodo : updatetodo,
        deletetodo : deletetodo,
        generatingFile : generatingFile
    };

    var URL = "";

    // For Getting Data
    function gettodo() {
        var deferred = $q.defer();
        URL = "/gettodo";
        $http.get(URL).success(function(response) {
          deferred.resolve(response);
        }).error(function(er) {
          deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Adding Data
    function addtodo(todo) {
        var deferred = $q.defer();
        URL = "/addtodo";
        $http.post(URL, todo).success(function(res) {
            deferred.resolve(res);
        }).error(function(er) {
            deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Updating Data
    function updatetodo(todo) {
        var deferred = $q.defer();
        URL = "/updatetodo";
        $http.put(URL, todo).success(function(res) {
            deferred.resolve(res);
        }).error(function(er) {
            deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Deleting Todo
    function deletetodo(todo) {
        var deferred = $q.defer();
        URL = "/deletetodo";
        $http.delete(URL+'/'+todo._id).success(function(res) {
            deferred.resolve(res);
        }).error(function(er) {
            deferred.reject(er);
        });
        return deferred.promise;
    }

    // To Generate File as per type passed as params
    function generatingFile(type) {
        var deferred = $q.defer();
        URL = "/generatingFile";
        $http.get(URL,{params:{type:type}}).success(function(response) {
          deferred.resolve(response);
        }).error(function(er) {
          deferred.reject(er);
        });
        return deferred.promise;
    }
}

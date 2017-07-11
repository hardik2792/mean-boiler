/*
File: restService.js
App Name: MEAN Boiler
Purpose: Providing Service To Controller
Created By: Hardik Thakor */

restService.$inject = ['$http', '$q'];
app.service('restService', restService);

function restService($http, $q) {
    return {
        getData: getData,
        addData: addData
    };

    var URL = "";

    // For Getting Data
    function getData() {
        var deferred = $q.defer();
        URL = "/call";
        $http.get(URL).success(function(response) {
          deferred.resolve(response);
        }).error(function(er) {
          deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Adding Data
    function addData(locationData) {
        var deferred = $q.defer();
        var url = "";
        $http.post(url, data, {headers:  { 'Authorization': 'Bearer '+localStorage.getItem('id_token')}}).success(function(res) {
            deferred.resolve(res);
        }).error(function(er) {
            deferred.reject(er);
        });
        return deferred.promise;
    }
}

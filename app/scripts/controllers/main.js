'use strict';

/**
 * @ngdoc function
 * @name appWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appWebApp
 */
angular.module('appWebApp')
  .controller('MainCtrl', function ($scope, $http) {

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://remirobert.com:4242/news'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response);
      $scope.newses = response.data;
      $scope.load_home = function (test) {

        document.getElementById("content").innerHTML='<object type="text/html" data="'+ test +'" width="100%" height="1500px" ></object>';

      };
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("error");
      console.log(response);
    });

    //Load content http://remirobert.com:4242/news?timestamp=150000000000
  });

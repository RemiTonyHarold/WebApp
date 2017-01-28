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
      url: 'http://remirobert.com:4242/news?timestamp=150000000000'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log("success");
      console.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("error");
      console.log(response);
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Load content http://remirobert.com:4242/news?timestamp=150000000000
  });

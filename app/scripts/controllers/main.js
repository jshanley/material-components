'use strict';

/**
 * @ngdoc function
 * @name materialTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materialTestsApp
 */
angular.module('materialTestsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

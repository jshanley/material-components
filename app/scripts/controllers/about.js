'use strict';

/**
 * @ngdoc function
 * @name materialTestsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the materialTestsApp
 */
angular.module('materialTestsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

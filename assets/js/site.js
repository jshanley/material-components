angular.module('site', [
  'ngRoute',
  'material.components'
])

angular.module('site')
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputViewController'
      })
      .otherwise({
        redirectTo: '/'
      })

  }])

angular.module('site')
  .controller('InputViewController', ['$scope', function($scope) {

    $scope.example1 = {};

    $scope.example2 = {};

  }])

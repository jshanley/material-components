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

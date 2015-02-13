angular.module('materialtests', [
  'ngRoute',
  'materialtests.input'
])

angular.module('materialtests.input', []);

angular.module('materialtests')
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

angular.module('materialtests.input')
  .controller('InputViewController', ['$scope', function($scope) {
    
  }])

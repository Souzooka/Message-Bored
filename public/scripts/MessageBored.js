angular.module('MessageBored', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html'
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'users'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])
  .controller('UsersCtrl', ['$scope',
    function($scope){
      $scope.testScope = "hello scope";
    }
  ]);
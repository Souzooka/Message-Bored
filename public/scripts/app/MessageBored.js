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
          controller: 'UserController',
          controllerAs: 'users'
        })
        .when('/messages', {
          templateUrl: '/templates/messages.html',
          controller: 'MessageController',
          controllerAs: 'messages'
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
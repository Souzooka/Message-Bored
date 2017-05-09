angular.module('MessageBored', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'TopicController',
          controllerAs: 'topics'
        })
        .when('/user/:id', {
          templateUrl: '/templates/user.html',
          controller: 'UserController',
          controllerAs: 'users'
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
        })
        .when('/topic/:id', {
          templateUrl: '/templates/topic.html',
          controller: 'TopicController',
          controllerAs: 'topics'
        })
        .when('/register', {
          templateUrl: '/templates/register.html'
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
angular.module('MessageBored')
.controller('UserController', [
  '$scope',
  '$http',
  '$routeParams',
  function ($scope, $http, $routeParams) {

    //for all users
    $scope.users = '';
    $http({
      method: 'GET',
      url: `/api/users/`
    })
    .then( (data, status, headers, config) => {
      $scope.users = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });

    //for one user
    $scope.user = '';
    $http({
      method: 'GET',
      url: `/api/users/${$routeParams.id}`
    })
    .then( (data, status, headers, config) => {
      $scope.user = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });

    $scope.loggedIn = false;

  }
]);
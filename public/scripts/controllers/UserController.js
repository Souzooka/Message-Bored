angular.module('MessageBored')
.controller('UserController', [
  '$scope',
  '$http',
  function ($scope, $http) {

    $scope.users = '';

    $http({
      method: 'GET',
      url: `/api/users/`
    })
    .then( (data, status, headers, config) => {
      $scope.users = data.data;
    })
    .catch( (err) => {
      alert(err);
    });
  }
]);
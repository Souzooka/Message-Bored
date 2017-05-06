angular.module('MessageBored')
.controller('MessageController', [
  '$scope',
  '$http',
  function ($scope, $http) {

    $scope.messages = '';

    $http({
      method: 'GET',
      url: `/api/messages/latest`
    })
    .then( (data, status, headers, config) => {
      console.log(data.data)
      $scope.messages = data.data;
    })
    .catch( (err) => {
      alert(err);
    });
  }
]);
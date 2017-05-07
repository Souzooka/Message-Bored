angular.module('MessageBored')
.controller('MessageController', [
  '$scope',
  '$http',
  '$routeParams',
  function ($scope, $http, $routeParams) {

    $scope.messages = '';
    $http({
      method: 'GET',
      url: `/api/messages/latest`
    })
    .then( (data, status, headers, config) => {
      $scope.messages = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });

    $scope.messagesByTopic = '';
    $http({
      method: 'GET',
      url: `/api/messages/by-topic/${$routeParams.id}`
    })
    .then( (data, status, headers, config) => {
      $scope.messagesByTopic = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });
  }
]);
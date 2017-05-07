angular.module('MessageBored')
.controller('TopicController', [
  '$scope',
  '$http',
  '$routeParams',
  function ($scope, $http, $routeParams) {

    //for all topics
    $scope.topics = '';
    $http({
      method: 'GET',
      url: `/api/topics/`
    })
    .then( (data, status, headers, config) => {
      $scope.topics = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });

    //for one topic
    $scope.topic = '';
    $http({
      method: 'GET',
      url: `/api/topics/${$routeParams.id}`
    })
    .then( (data, status, headers, config) => {
      $scope.topic = data.data;
    })
    .catch( (err) => {
      console.log(err);
    });

  }
]);
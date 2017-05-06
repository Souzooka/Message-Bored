angular.module('MessageBored')
.factory('CharacterVersionFactory',
  ['mainCharacter', 'APP_VERSION',
  function(mainCharacter, APP_VERSION) {
    return {
      getUsers: function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
          }
        };
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
      }
    };
}]);
angular.module('MyApp')
.service('BookService', [function() {
  var library = [
    {
      title: 'Fifty Shades of Black',
      author: 'Some Lady',
      printed: 'Last year'
    },
    {
      title: 'Twilight',
      author: 'Another Lady',
      printed: 'Also some time in the past'
    },
    {
      title: 'The Room',
      author: 'Tommy Wiseau',
      printed: '2003'
    }
  ];

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
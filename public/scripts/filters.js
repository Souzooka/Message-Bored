angular.module('MyApp')
.filter('NoSoupForYou', function() {
  return function(input) {
    if (!input) {
      return 'No Soup For You';
    } else {
      return input + ' No Soup For You';
    }
  };
})
.filter('reverse', function() {
  return function(input, uppercase) {
    if (!input) {
      return '';
    } else {
      var reverse = '';
      for (var i = input.length - 1; i >= 0; i--) {
        reverse += input[i];
      }

      if (uppercase) {
        reverse = reverse.toUpperCase();
      }

      return reverse;
    }
  };
});
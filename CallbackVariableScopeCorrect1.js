//  Solution 1: The closure in a function version

//$(document).ready( function() {
$(function() {
  var buttons = $('button');
  
  function callbackClosuer(i, callback) {
      return function() {
          return callback(i);
      };
  }

  for(var i = 0; i < buttons.length; ++i ) {
    buttons.eq(i).click(callbackClosuer(i, function(i) {
      var j = i + 1;
      $('ul').append('<li>' + j + '</li>');
    }));
  }
});

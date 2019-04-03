// //  Solution 2: The inline closure version, the preferred one
//$(document).ready( function() {
$(function() {
  var buttons = $('button');

  for(var i = 0; i < buttons.length; ++i ) {
    buttons.eq(i).click(function() { // self called anonymous function starts
      var j = i + 1; // A copy of i only available to the scope of the inner function
      return function() {
   	    $('ul').append('<li>' + j + '</li>');
      };
    }()); // self called anonymous function ends
  }
});

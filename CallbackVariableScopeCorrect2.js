/**
 * Created on Tue Apr 2, 2019
 *
 * JavaScript Callbacks Variable Scope Problem by Itay Grudev:
 * https://www.pluralsight.com/guides/javascript-callbacks-variable-scope-problem
 *
 * Solution 2: The inline closure version, the preferred one
 * Essentially both solutions do the same task but in different ways. What they
 * do is creating a separate callback function with their own copy of the value
 * of i in a scope only available to them. 
 */
//$(document).ready( function() {
$(function() {
  var buttons = $('button');

  for(var i = 0; i < buttons.length; ++i) {
    buttons.eq(i).click(function() { // self called anonymous function starts
      var j = i + 1; // A copy of i only available to the scope of the inner function
      return function() {
   	    $('ul').append('<li>' + j + '</li>');
      };
    }()); // self called anonymous function ends
  }
});

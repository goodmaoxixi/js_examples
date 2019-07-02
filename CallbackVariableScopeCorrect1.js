/**
 * Created on Tue Apr 2, 
 *
 * JavaScript Callbacks Variable Scope Problem
 * https://www.pluralsight.com/guides/javascript-callbacks-variable-scope-problem
 *
 * Solution 1: The closure in a function version
 * Essentially both solutions do the same task but in different ways. What they
 * do is creating a separate callback function with their own copy of the value
 * of i in a scope only available to them.
 */
//$(document).ready( function() {
$(function() {
  var buttons = $('button');
  
  function callbackClosure(i, callback) {
      return function() {
          return callback(i);
      };
  }

  for(var i = 0; i < buttons.length; ++i) {
    buttons.eq(i).click(callbackClosure(i, function(i) {
      var j = i + 1; // this is a must
      $('ul').append('<li>' + j + '</li>');
    }));
  }
});

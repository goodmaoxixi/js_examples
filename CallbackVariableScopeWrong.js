/**
 * Created on Tue Apr 2, 2019
 *
 * JavaScript Callbacks Variable Scope Problem
 * https://www.pluralsight.com/guides/javascript-callbacks-variable-scope-problem
 * 
 * While this code looks perfectly fine, it shows the misunderstanding of a
 * very basic JavaScript concept. JS is asynchronous! This means that under
 * some circumstances code might not be executed sequentially. This is
 * usually the case when using internal APIs that depend on an external event.
 * For example, processing a response after an HTTP request is completed or
 * after some other processing is done.
 */
//$(document).ready(function() {
$(function() { // Alias to the above
  var buttons = $('button');

  for(var i = 0; i < buttons.length; ++i) {
    buttons.eq(i).click(
      // ONLY EDIT THE CODE BELOW THIS LINE
      function() {
        $('ul').append('<li>' + i + '</li>')
      }
      // ONLY EDIT THE CODE ABOVE THIS LINE
    );
  }
});

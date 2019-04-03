/**
 * Created on Mon Apr 1, 2019
 * To understand the aliases in JS and jQuery.
 */
 
 var  jQuery = function(a, b) {
  console.log("Hello, JS.");
  var c = a + b;
  console.log(a + " + " + b +" = " + c);
 };
 
var $ = jQuery;
$(1, 2); 

/**
 * Created on Aug. 27, 2015 Thu.
 * 
 * Used by CallbackFunctions.html
 * http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 */
$(function() {
  // An anonymous function
  $("#btn_1").click(function() {
    alert("Btn 1 Clicked");  
  });

  // A function as a variable
  $("#btn_2").click(handler2);
});

// A function expression
var handler2 = function() {
  alert("Btn 2 Clicked");  
};

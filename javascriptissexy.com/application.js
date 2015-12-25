/**
 * Created on Jun. 20, 2015 Sat.
 * Used by JavaScriptIsSexy.html
 * Examples from an excellent website on JS: http://javascriptissexy.com/ by  Richard Bovell.
 * 
 * Understand JavaScript’s “this” With Clarity, and Master It
 * http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
 * 
 * A function can access the properties in the global object (winodow in a browser).
 */
// 1. Fix this when used in a method passed as a callback
// by using method bind.
$(function() {
  $("#button01").click(buttonClickHandler);
 
   // The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object​
   // And the output will be undefined because there is no data property on the button object​
   //$("#button02").click(user.clickHandler); // Cannot read property '0' of undefined
   // To fix this problem, we can use the bind method.
   $("#button02").click(user.clickHandler.bind(user)); // P. Mickelson 43 
});

var buttonClickHandler = function(event) {
  // $(this) will have the value of the button ($("button01")) object​
  // because the button object invokes the click() method​
  console.log($(this).prop("name") + ", i.e., " + $(this).text()  + ", is clicked!");
};

var user = {
  data: [ {name: "T. Woods", age: 37}, {name: "P. Mickelson", age: 43} ],
  clickHandler: function(event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1​
    // This line is printing a random person's name and age from the data array​
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

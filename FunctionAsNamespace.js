/**
 * Created on June 3, 2015 Wed.
 * Page 191, Using functions as namespaces, Eloquent JavaScript,
 * A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./FunctionAsNamespace.js
 * 
 * Functions are the only things in JavaScript that create a new scope.
 * So if we want our modules to have their own scope, we will have to
 * base them on functions.
 */

/* Functions as namespaces */

console.log("--- Function as the module interface but array's global ---");
var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"]; // array in the global scope
function dayName0(number) {
  return names[number];
}

console.log(dayName0(1)); // Monday


/*
 * Now names is a local variable in an (unnamed) function. This function is
 * created and immediately called, and its return value (the actual dayName
 * function) is stored in a variable.
 */
console.log("\n--- Both function & array in the module ---");
var dayName = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  console.log("hi"); // signal to show whether called immediately
  return function(number) {
    return names[number];
  };
}(); // weird part, create & call immediately

console.log(dayName(3)); // Wednesday


/**
 * We can use a similar pattern to isolate code from the outside world
 * entirely. The following module logs a value to the console but does not
 * actually provide any values for other modules to use.
 * 
 * This code simply outputs the square of 100, but in the real world it could
 * be a module that adds a method to some prototype or sets up a widget
 * on a web page. It is wrapped in a function to prevent the variables it
 * uses internally from polluting the global scope.
 */
console.log("\n--- Isolate in the module entirely ---");
(function() {
  function square(x) { return x * x; }
  var hundred = 100;
  
  console.log(square(hundred));
})(); // create an anonymous function & call it immediately, 10000


/*
 * Create an anonymous function first, assign it to a var, and then call it
 * separately. No enclosing parentheses, no trailing parentheses.
 */
console.log("\n--- The function expression version ---");
var dayName2 = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return function(number) {
    return names[number];
  };
}; // compare with the above, expression will execute automatically

console.log(dayName2()); // → [Function]
console.log(dayName2(0)); // functions can be given more args than needed
// → [Function]
console.log(dayName2()(0)); // compare with the above lines, 2-tier, Sunday


/* Objects as interfaces */
console.log("\n--- Objects as interfaces ---");

var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); } // object
  };
}(); // anonymous object interface

console.log(weekDay.name(weekDay.number("Sunday"))); // Sunday

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

  exports.name = function(number) { return names[number]; };
  exports.number = function(name) { return names.indexOf(name); };
})(this.weekDay = {}); // call with an interface object

console.log(weekDay.name(weekDay.number("Saturday"))); // Saturday


/* Evaluating data as code, page 194 */
console.log("\n--- Evaluating data as code ---");
// Use operator eval
function evalAndReturnX(code) {
  eval(code);
  return x;
}
console.log(evalAndReturnX("var x = 2"));

// Use the Functon constructor, a better way
var plusOne = new Function("n", "return n + 1;");
console.log("The result is " + plusOne(4)); // 5


/* Require */

// A minimal implementation of require (Cannot run)
console.log("\n--- A minimal implementation of require ---");
/*
function require(name) {
  var code = new Function("exports", readFile(name));
  var exports = {};
  code(exports);
  return exports;
}

console.log(require("weekDay").name(1); // Monday

// The typical usage
var weekDay = require("weekDay");
var today = require("today");
console.log(weekDay.name(today.dayNumber()));
*/
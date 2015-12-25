/**
 * Created on June 3, 2015 Wed.
 * Page 191, Using functions as namespaces,
 * Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./FunctionAsNamespace.js
 * 
 * Functions are the only things in JavaScript that create a new scope.
 * So if we want our modules to have their own scope, we will have to
 * base them on functions.
 */
/* Now names is a local variable in an (unnamed) function. This function is
 * created and immediately called, and its return value (the actual dayName
 * function) is stored in a variable.
 */
var dayName = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  //console.log("hi");
  return function(number) {
	return names[number];
  };
}(); // weird part, create & call immediately

console.log(dayName(3));
// → Wednesday

/** Create an anonymous function first, assign it to a var, and then call it separately. */
var dayName2 = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return function(number) {
	return names[number];
  };
}; // compare with the above, only create without call

console.log(dayName2());
// → [Function]
console.log(dayName2(0)); // functions can be given more args than needed
// → [Function]
console.log(dayName2()(0)); // compare with line 17
// → Sunday

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
(function() {
  function square(x) { return x * x; }
  var hundred = 100;
  console.log(square(hundred));
})(); // create an anonymous function & call it immediately
// → 10000

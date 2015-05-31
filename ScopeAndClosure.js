/**
 * Create on May 31, 2015 Sun.
 * 
 * JavaScript is function-scope, different from other languages' block-scope.
 * 
 * Fundamentals for Great jQuery Development
 * https://www.youtube.com/watch?v=YcylSiDoOio
 * Scope and Closure, starting around 15:00.
 */
function test() {
  var i = 10;
  for (var j = 1; j <= i; j++) {
    var x = j;
  }
  return x; // access x outside the loop
}

console.log("x = %d", test());

/**
 * Based on JS's function-level scope, in a browser, define a anonymous function 
 * wrapped in parenthesises and run it at once in order not to clash with the other objects. 
 */
(function() {
  console.log("I'm an anonymous function");
  //this.something = 10; // global scope
}())
//}) // illegal

//~ (function(w) {
  //~ console.log("I'm an anonymous function");
  //~ w.something = 10;
//~ }(window))

// Cannot coexist with the above
//~ (function f1(name) {
  //~ console.log("Hello, " + name);
//~ }('World'))

/**
 * Pass the constructor jQuery a function, in order not to pollute the global scope.
 * After the DOM is ready, jQuery will run the passed function.
 * This why jQuery is used this way.
 */
//$(document).ready(function(){
//  jQuery code, event handling callbacks here
//});

/** A short-hand for the above */
//jQuery(function() {
//});

/** The wide-used simplest short-hand for the above all. */
//$(function() {
//});

/**
 * Closures starts from 25:00.
 * A closure is a function that references a variable tha isn't contained in
 * its immediate scope.
 * Every function is actually an object.
 */
console.log("--- A closure demo ---");
function foo() {
  var myVar = 1;
  return function() {
	  return myVar.toString();
  };
}
var myFunc = foo();
console.log("I'm a closure: " + myFunc());

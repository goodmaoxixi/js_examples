/**
 * Created on May 28, 2015 Wed.
 * See Page 47 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./FunctionDeclaration.js
 * 
 * There is a slightly shorter way to say “var square = ...function” (function expression). The
 * function keyword can also be used at the start of a statement (function declaration).
 */
// Function expression
var square1 = function(x) {
	return x * x;
};

var x = 2;
console.log("The square of %d is %d.", x, square1(x));
 
// Function declaration
function square2(x) {
	return x * x;
} // no trailing ;

x = 3;
console.log("The square of %d is %d.", x, square2(x));

// Function declaration AFTER its reference
console.log("The future says: " , future());
function future() {
  return "We STILL have no flying cars.";
} // no trailing ;

// What happens when you put such a function definition inside a
// conditional (if) block or a loop? Well, don’t do that.
function example() {
  function a() {} // Okay
  
  if (something) {
   function b () {} // Danger !
  }
}

// Let a function return another function (higher-order functions)
function helloThere(s1) {
  console.log("Hi, " + s1);
  return function(str) {
	console.log("Hello, " + str);
  };
}
helloThere('there')('JavaScript');

// Passes a function as an argument (vs the function pointe in C/C++)
function foo(p) {
	p();
}

foo(function () {
  console.log("I'm an anonymous function declaration");
})

foo(function f1() {
  console.log("I'm a named function declaration");
})


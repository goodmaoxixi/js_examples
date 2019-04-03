/**
 * Created on May 30, 2015 Sat.
 * Updated on Dec. 9-11, 2016 Fri-Sun.
 * 
 * JavaScript Essentials by Travis Tidwell
 * https://www.youtube.com/watch?v=03EQu_2K2cs
 */
// Everything is an object, even primitives.
console.log("--- Everything is an object, even primitives ---");
var myvar = "Travis"; // String
console.log("The string length is " + myvar.length); // length is not a function

/**
 * Patterns are just as important as Syntax!
 *   - http://addyosmani.com/resources/essentialjsdesignpatterns/book/
 *   - https://shichuan.github.com/javascript-patterns/
 */
var obj = new Object; // OK
//var obj = new Object(); // OK, too
console.log("The data type is " + typeof(obj));

// Functions are first-class objects in JavaScript.
console.log("\n--- Functions are first-class objects ---");
var myFun = function() { // function expression
  console.log("This is myFun function, which is a function expression.");
};

function myFun2() { // function declaration
  console.log("This is myFun2 function, which is a function declaration.");
}

// Calls the above 2 functions
myFun();
myFun2();

// A good way to create functions
person = {
  first: 'Travis',
  last: 'Tidwell',
  getName: function() {
    return this.first + ' ' + this.last;
  }
};

console.log("My name is " + person.getName());
//setTimeout(person.getName(), 2000); // only availabe in a browser

// Closures
console.log("\n--- Closures ---");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures
var colors = ['red', 'yellow', 'blue', 'green']; // array
for (var i = 0; i < colors.length; i++) {
//  return function(j) {
      console.log(i + ', ' + colors[i]);
//   }(i)
}

/**
 * Understanding 'this':
 * http://quirksmode.org/js/this.html
 * In JS, this always refers to the owner of the function we're executing,
 * or rather, to the object that the function is a method of.
 */
console.log("\n--- Understand this ---");
 //~ var myFun3 = function() {
   //~ console.log(this); // global object context
 //~ };
 //~ myFun3();
 
// keyword new makes 'this' redirect to myFun4
//var myFun4 = new myFun3();
//myFun4();

// keyword prototype (__proto__ in browsers)
var MyClass = function() {
  console.log(this);
  this.first = 'Tom';
  this.last = 'Sawyer';
  // The following is anti-pattern because it will be initialized every time
  // MyClass is called. It cannot be inherited. Use the prototype instead.
  //~ this.setName = function(_first, _last) {
	//~ this.first = _frist;
	//~ this.last = _last;
  //~ };
};

// Prototypes enable inheritance.
console.log("\n---Prototype inheritance ---");
MyClass.prototype.setName = function(_first, _last) {
	this.first = _first;
	this.last = _last;
};

MyClass.prototype.getFirstName = function() {
	return this.first;
};

MyClass.prototype.getLastName = function() {
	return this.last;
};

var mc = new MyClass();
console.log(mc);
console.log(mc.getFirstName() + " " + mc.getLastName());

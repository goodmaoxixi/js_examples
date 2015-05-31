/**
 * Create on May 30, 2015 Sat.
 * 
 * JavaScript Essentials by Travis Tidwell
 * https://www.youtube.com/watch?v=03EQu_2K2cs
 */
// Everything is an object, even primitives.
var myvar = "Travis"; // String
console.log(myvar.length);

var obj = new Object; // OK
console.log("The data type is " + typeof(obj));
var obj2 = new Object(); // OK
console.log("The data type is " + typeof(obj2));

// Functions are first-class objects in JavaScript.
var myFun = function() {
};

function myFun2() {
}

// A good way to create functions
person = {
  first: 'Travis',
  last: 'Tidwell',
  getName: function() {
    return this.first + ' ' + this.last;
  }
};

console.log(person.getName());
//setTimeout(person.getName(), 2000); // only availabe in a browser

// Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures
var colors = ['red', 'yellow', 'blue', 'green']; // array
for (var i = 0; i < colors.length; i++) {
//  return function(j) {
      console.log(j + ', ' + colors[j]);
//   }(i)
}

/**
 * Understanding 'this':
 * http://quirksmode.org/js/this.html
 * In JS, this always refers to the owner of the function we're executing,
 * or rather, to the object that the function is a method of.
 */
 //~ var myFun3 = function() {
   //~ console.log(this); // global object context
 //~ };
 //~ myFun3();
 
// keyword news makes 'this' redirect to myVar
//var myFun4 = new myFun3();
//myFun4();

// keyword prototype (__proto__ in browsers)
var MyClass = function() {
  console.log(this);
  this.first = 'GL';
  this.last = 'Du';
  // The following is anti-patter because it will be initialized every time MyClass is called.
  // Use prototype instead.
  //~ this.setName = function(_first, _last) {
	//~ this.first = _frist;
	//~ this.last = _last;
  //~ };
};

MyClass.prototype.setName = function(_first, _last) {
	this.first = _frist;
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

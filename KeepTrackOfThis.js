/**
 * Create on May 30, 2015 Sat.
 * Shows how to keep track of this in JavaScript.
 * 
 * See Keeping Track of "This" in JavaScript
 * https://www.youtube.com/watch?v=JduQUNn7L4w
 * See also http://quirksmode.org/js/this.html
 */
console.log("--- In the global context ---");
// In the global context, it's the global object {}
console.log("This is ", this);

// In a browser enviroment, they're the same. However, under Node.js, different.
this.numBananas = 11;
var numBananas = 4;
console.log("Number of this.bananas is ", this.numBananas);
console.log("Number of bananas is ", numBananas);

// In a function context
console.log("\n--- In a function context ---");
function addBanana() {
  numBananas++;
  //console.log("This is ", this); // much output
  console.log("Number of bananas is ", numBananas);  
  console.log("Number of this.bananas is ", this.numBananas);
}

addBanana();

// numBananas is in the gorilla's anonyous function context
// this -> object gorilla
console.log("\n--- In a complex function context ---");
var gorilla = {
  hasBanana: false,
  eat: function(numBananas) {
	console.log("this.hasBanana: ", this.hasBanana);
	console.log("Number of bananas is ", numBananas);
	if (numBananas > 0) {
	  this.hasBanana = true;
	  console.log("This is ", this); 
	  console.log("this.hasBanan: ", this.hasBanana);
    }
  }
};

// Because the value is a function! Similar to the pointer to afunction in C.
// Extremely common in JS.
gorilla.eat();
console.log("\n")
gorilla.eat(10);

// A Gorilla construction function. Note JavaScript is case-sensitive.
// Constructor
console.log("\n--- In a construction function context ---");
function Gorilla() {
  console.log("1. This is ", this);
  this.hasBanana = false;
  this.eat = function(numBananas) {
	if (numBananas > 0) {
	  console.log("2. This is ", this); 
	  this.hasBanana = true;
	  console.log("--- numBananas: ", numBananas);
	  console.log("--- this.hasBanana: ", this.hasBanana);
	  
	  notifyEating(); // should show nothing
	  notifyEating2(this);
    }
  }
  console.log("3. This is ", this);       
}

// this -> koko
var koko = new Gorilla();
koko.eat(5);

// this -> michael
var michael = new Gorilla();
michael.eat(5);

// Pitfall: this refers to the global object since
// this function resides in the global context
function notifyEating() {
  if (this.hasBanana) {
	 console.log(" The gorilla is eating bananas!"); 
  }
}

// Illegal: notifyEating2(this) 
function notifyEating2(obj) {
  if (obj.hasBanana) {
	 console.log("*** The gorilla is eating bananas!"); 
	 //alert("*** The gorilla is eating bananas!"); // in a browser
  }
}

/** Keyword 'this' in a browser context: from 6:41 to the end. */
// addBanana.call(this);

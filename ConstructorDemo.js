/**
 * Created on May 31, 2015 Sun.
 * 
 * Use keyword 'new' to creat an object.
 * Run with Node.js: node ./ConstructorDemo.js
 * 
 * Fundamentals for Great jQuery Development
 * https://www.youtube.com/watch?v=YcylSiDoOio
 * around 9:30.
 * 
 * See also page 109 of Eloquent JavaScript, A Modern Introduction to Programming
 * by Marijn Haverbeke.
 */
// Always use camel-case to declare a constructor
// and use 'new' to create its new object.
function Animal(name) {
  this.name = name;
  this.breed = "test"; // 'this' can be dangerous
  this.smellsLike = "bad";
}

/**
 * Prototypal Inheritance or behaviour delegation.
 * This is how jQuery was built.
 */
Animal.prototype = {
	member1: function(a, b) {
	  var c = a + b;
	  console.log("%d + %d = %d", a, b, c);
	},
	member2: "hi, inheritance"
};

// Use keyword 'new' to create an object based on
// Animal's prototype and run the Animal function over that.
var cat = new Animal('cat');
//var cat = Animal('cat'); // bad practice without 'new'
console.log("Hi, " + cat.name);

// Resolves along the prototype tree
cat.member1(1, 2);

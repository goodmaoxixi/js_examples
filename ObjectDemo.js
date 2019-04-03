/**
 * Created on May 27, 2015 Wed.
 * See Page 65 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./ObjectDemo.js
 *
 * Object in CoffeeScript <-> hash in Ruby <-> dictionary in Python.
 * An object in JavaScript is a collection of name-value pairs, which might be 
 * the simplest definition when talking about JavaScript.
 * See Javascript: Understanding the Weird Parts - The First 3.5 Hours
 * https://www.youtube.com/watch?v=Bv_5Zv5c-Ts
 */
 // This kind of object is the first class object in JS
var day1 = {
  squirrel: false,
  events: ["work" , "touched tree", "pizza", "running", 65, "television"]
};
// Or define an object this way
//var day1 = new Object();

console.log(day1.squirrel);
// → false

console.log(day1.wolf);
// → undefined

// Appends key wolf and its value
day1.wolf = false;
console.log(day1.wolf);
// → false

// Outputs the array
console.log(day1.events);
console.log(day1.events[0]);
var i = 0;
for (i = 0; i < day1.events.length; i++)
	console.log("%d, %s", i, day1.events[i]);

var descriptions = {
  work: "Went to work" ,
  touchedTree: "Touched a tree"
};
console.log(descriptions.work);
console.log(descriptions.touchedTree);

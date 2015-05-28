// Create on May 27, 2015 Wed.
// See Page 65 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
// Run with Node.js: node ./ObjectDemo.js

// Object in CoffeeScript <-> hash in Ruby <-> dictionary in Python.
var day1 = {
  squirrel: false,
  events: ["work" , "touched tree", "pizza", "running", 65, "television"]
};

console.log(day1.squirrel );
// → false

console.log(day1.wolf);
// → undefined

// Appends key wolf and its value
day1.wolf = false;
console.log(day1.wolf);
// → false

var descriptions = {
  work : "Went to work" ,
  "touched tree": "Touched a tree"
};

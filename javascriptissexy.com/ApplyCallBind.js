/**
 * Created on Jun. 20, 2015 Sat.
 * Examples from an excellent website on JS: http://javascriptissexy.com/ by  Richard Bovell.
 * Run in Node.js: node ./ApplyCallBind.js
 * 
 * JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals
 * http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
 */
console.log("--- 1. JavaScript’s Bind Allows Us to Set the this Value on Methods ---");
// This data variable is a global variable​
global.data = [ // used this in Node.js (the global object is global)
//var data = [ // used in a browser (the global object is window)
  { name: "Samantha", age: 12 },
  { name: "Alexis", age: 14 }];

console.log(this.data); // undefined in Node.js
console.log(global.data); // OK in Node.js

var user = {
  // local data variable​
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }],
  showData: function(event) {
     var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
     console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// Assign the showData method of the user object to a variable​
var showDataVar = user.showData;
showDataVar(); // Samantha 12 (from the global data array, not from the local data array)​

// Bind the showData method to the user object​
var showDataVar = user.showData.bind(user);
// Now the we get the value from the user object because the this keyword is bound to the user object​
showDataVar (); // P. Mickelson 43​
        

console.log("\n2. --- Bind() Allows us to Borrow Methods ---");
// Here we have a cars object that does not have a method to print its data to the console​
var cars = {
  data: [
    { name: "Honda Accord", age: 14 },
    { name: "Tesla Model S", age: 2 }]
};

// We can borrow the showData() method from the user object we defined in the last example.​
// Here we bind the user.showData method to the cars object we just created.​
// it is best to borrow a method using either the Apply or Call method as this might overwrite the same
// property in cars.
cars.showData = user.showData.bind(cars);
cars.showData (); // Honda Accord 14​


console.log("\n3. --- JavaScript’s Bind Allows Us to Curry a Function ---");
function greet(gender, age, name) {
  // if a male, use Mr., else use Ms.​
  var salutation = gender === "male" ? "Mr. " : "Ms. ";

  if (age > 25) {
    return "Hello, " + salutation + name + ".";
  } else {
    return "Hey, " + name + ".";
  }
}

// So we are passing null because we are not using the "this" keyword in our greet function.​
var greetAnAdultMale = greet.bind(null, "male", 45);
console.log(greetAnAdultMale("John Hartlove")); // "Hello, Mr. John Hartlove."​

var greetAYoungster = greet.bind(null, "", 16);
console.log(greetAYoungster("Alex")); // "Hey, Alex."​
console.log(greetAYoungster("Emma Waterloo")); // "Hey, Emma Waterloo."​


console.log("\n4. --- JavaScript’s Apply and Call Methods ---");
console.log("4.1 *** Set the this value with Apply or Call");
// A global variable for demonstration​
//var avgScore = "global avgScore"; // in a browser
global.avgScore = "global avgScore"; // in Node.js

// A global function​
function avg(arrayOfScores) {
  // Add all the scores and return the total​
  var sumOfScores = arrayOfScores.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });

  // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
  this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
  scores: [ 20, 34, 55, 46, 77 ],
  avgScore: null
};

// If we execute the avg function thus, "this" inside the function is bound to
// the global window (browser) / global (Node.js) object.
avg(gameController.scores);
// Proof that the avgScore was set on the global window object​
//console.log(window.avgScore); // 46.4​, in a browser
console.log(global.avgScore); // 46.4​, in Node.js
console.log(gameController.avgScore); // null​

// Reset the global avgScore​
//avgScore = "global avgScore"; // in a browser
global.avgScore = "global avgScore"; // in Node.js

// To set the "this" value explicitly, so that "this" is bound to the gameController,​
// We use the call() method:​
avg.call(gameController, gameController.scores);

//console.log(window.avgScore); // global avgScore in a browser​
console.log(global.avgScore); // global avgScore​ in Node.js
console.log(gameController.avgScore); // 46.4​

console.log("4.2 *** Use Call or Apply To Set this in Callback Functions");
// Define an object with some properties and a method​
// We will later pass the method as a callback function to another function​
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: function(firstName, lastName)  {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
};

function getUserInput(firstName, lastName, callback, callbackObj) {
  // The use of the Apply method below will set the "this" value to callbackObj​
  callback.apply(callbackObj, [firstName, lastName]);
}

// The clientData object will be used by the Apply method to set the "this" value​
getUserInput("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set​
console.log(clientData.fullName); // Barack Obama​


console.log("\n5. --- Borrowing Functions with Apply and Call (A Must Know) ---");
console.log("5.1 *** Borrowing Array Methods");
// An array-like object: note the non-negative integers used as keys​
var anArrayLikeObj = {0: "Martin", 1: 78, 2: 67, 3: ["Letta", "Marieta", "Pauline"], length: 4 };

// Make a quick copy and save the results in a real array:​
// First parameter sets the "this" value​
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray); // ["Martin", 78, 67, Array[3]]​

// Search for "Martin" in the array-like object​
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true​

// Try using an Array method without the call() or apply()​
//console.log(anArrayLikeObj.indexOf("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'​

// Reverse the object:​
console.log(Array.prototype.reverse.call(anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}​

// Sweet. We can pop too:​
console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}​

// What about push?​
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}​

// Get the argument list 
function transitionTo(name) {
  // Because the arguments object is an array-like object​
  // We can use the slice() Array method on it​
  // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item​
  var args = Array.prototype.slice.call(arguments, 1);

  // I added this bit so we can see the args value​
  console.log(args);

  // I commented out this last line because it is beyond this example​
  // doTransition(this, name, this.updateURL, args);​
}

// Because the slice method copied from index 1 to the end, the first item "contact" was not returned​
transitionTo("contact", "Today", "20"); // ["Today", "20"]​

//From this example, we learn that a quick way to get all the arguments (as an array) passed to a function is to do:
// We do not define the function with any parameters, yet we can get all the arguments passed to it​
function doSomething() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}
doSomething("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]​
                
console.log("5.2 *** Borrowing String Methods with Apply and Call");
console.log("5.3 *** Borrow Other Methods and Functions");
console.log("See 4. Fix this when borrowing methods in UnderstandThis.js");


console.log("\n6. --- Use Apply() to Execute Variable-Arity Functions ---");
//createAccount (arrayOfItems[0], arrayOfItems[1], arrayOfItems[2], arrayOfItems[3]);
// The Math.max() method is an example of a common variable-arity function in JavaScript:
// We can pass any number of arguments to the Math.max () method​
console.log(Math.max (23, 11, 34, 56)); // 56

var allNumbers = [23, 11, 34, 56];
// We cannot pass an array of numbers to the the Math.max method like this​
console.log(Math.max(allNumbers)); // NaN
// Using the apply() method, we can pass the array of numbers:​
console.log(Math.max.apply(null, allNumbers)); // 56

// Here is an example of our own variadic function to further illustrate
// the concept of using the apply () method in this capacity.
var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];

// No specific parameters defined, because ANY number of parameters are accepted​
function welcomeStudents() {
  var args = Array.prototype.slice.call (arguments);

  var lastItem = args.pop ();
  console.log("Welcome " + args.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply(null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.

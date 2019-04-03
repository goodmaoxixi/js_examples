/**
 * Created on Mon Apr 1, 2019,
 * https://www.pluralsight.com/guides/javascript-callbacks-variable-scope-problem
 */

/* The problem */
//var array = [1, 2, 3, 4,5];
//for (var i = 0;  i < array.length; i++) {
//}

/**
 * http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 */
// Defines an anonymous function & run it at once
// Self called anonymous function
(function() { // without argument
  console.log("Halleluya!");
})();

(function(str) { // with one argument
  console.log(str);
})('Hello, JS');

var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index) {
  console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});


/* Basic Principles when Implementing Callback Functions */
// 1. Uses named functions as callbacks
console.log("\n -- 1. Uses named functions as callbacks --");

// global variable
var allUserData = [];
var generalLastName = "Clinton";

// generic logStuff function that prints to console
function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
    allUserData.push(options);
    callback(options);
    
    // Pass the global variable generalLastName to the callback function
    callback(generalLastName, options);    
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript

// 2. Problem When Using Methods With The this Object as Callbacks
console.log("\n-- 2. Problem When Using Methods With The this Object as Callbacks --");

// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
        this.fullName = firstName + " " + lastName;
    },
    
    getUserName: function () {
        return this.fullName;
    },
    
    showThis: function() {
        console.log("this = " + this);
    }
}

function getUserInput2(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

getUserInput2("Barack", "Obama", clientData.setUserName);
console.log("fullName of clientData: " + clientData.fullName); // Not Set
console.log("fullName of clientData: " + clientData.getUserName()); // Not Set
// The fullName property was initialized on the window (browser)/global (Node.js) object
console.log ("fullName in the global object: " + global.fullName); // undefined
console.log("global === this: " + (global === this));
console.log("this = " + this);
clientData.showThis();


// Every function in JavaScript has two methods: call and apply
console.log("\n-- Every function in JavaScript has two methods: call and apply --");
//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput3(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply(callbackObj, [firstName, lastName]);
    //callback.call(callbackObj, firstName, lastName);
}

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by the Apply function to set the this object
getUserInput3("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama

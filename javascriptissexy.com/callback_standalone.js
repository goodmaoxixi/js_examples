/**
 * Created on Aug. 27, 2015 Thu.
 * 
 * Used by CallbackFunctions.html
 * http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 */
// Use Named OR Anonymous Functions as Callbacks

// Global variable​
var allUserData = [];

// Generic logStuff function that prints to console​
function logStuff(userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    } else if ( typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// A function that takes two parameters, the last one a callback function​
function getInput(options, callback) {
    allUserData.push(options);
    callback(options);
}

// When we call the getInput function, we pass logStuff as a parameter.​
// So logStuff will be the function that will be called back (or executed) inside the getInput function​
getInput({name:"Rich", speciality:"JavaScript"}, logStuff);
// name: Rich​
// speciality: JavaScript


/** Let’s pass a global variable and a local variable */
console.log("---Pass a global variable and a local variable");
// Global variable​
var generalLastName = "Clinton";

function getInput2(options, callback) {
  allUserData.push(options);
  // Pass the global variable generalLastName to the callback function​
  callback(generalLastName, options); // A function ignores the redundant params
}
getInput2({name:"Rich", speciality:"JavaScript"}, logStuff);


/** Make Sure the Callback is a Function Before Executing It */
console.log("--- Make Sure the Callback is a Function Before Executing It");
function getInput3(options, callback) {
  allUserData.push(options);

  // Make sure the callback is a function​
  if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable​
    callback(options);
  }
}
getInput3({name:"Rich", speciality:"JavaScript"}, logStuff);


/** Problem When Using Methods With The this Object as Callbacks */
console.log("--- Problem When Using Methods With The this Object as Callbacks");
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
}

function getUserInput4(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here​

    // Now save the names​
    callback(firstName, lastName);
}

getUserInput4("Barack", "Obama", clientData.setUserName);
console.log(clientData.fullName);// Not Set​
// The fullName property was initialized on the window or global object​
//console.log(window.fullName); // Barack Obama, in a browser
console.log(global.fullName); // Barack Obama, in Node.js


/** Use the Call or Apply Function To Preserve this */
console.log("--- Use the Call or Apply Function To Preserve this");
//Note that we have added an extra parameter for the callback object, called "callbackObj"​
function getUserInput5(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here​

    // The use of the Apply function below will set the this object to be callbackObj​
    //callback.apply(callbackObj, [firstName, lastName]); // method apply
    callback.call(callbackObj, firstName, lastName); // method call
}
// We pass the clientData.setUserName method and the clientData object as parameters.
// The clientData object will be used by the Apply function to set the this object​
getUserInput5("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set​
console.log(clientData.fullName); // Barack Obama

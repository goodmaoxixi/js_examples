// https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.2jkpzjofs

// Calls a CommonJS module MyModule.js.
var myModule = require('MyModule'); // Modules must reside in folder node_modules

var myModule2 = require('MyModule2');
var a, b;

//console.log(myModule.hello()); // TypeError: myModule.hello is not a function

var myModuleInstance = new myModule(); // Why this?
console.log(myModuleInstance.hello());        // 'hello!'
console.log(myModuleInstance.goodbye());  // 'goodbye!'

a = 1;
b = 2;
console.log(a + " + " + b + " = " + myModuleInstance.sum(a, b));

/* The above must create an instance before the module is used. */

// No instantiation, use the module directly after imported
console.log("--- Another way to code a CommonJS module ---");
console.log(myModule2.hello());   // hello, 2!
console.log(myModule2.goodbye()); // goodbye, 2!
a = 10;
b = 20;
console.log(a + " + " + b + " = " + myModule2.sum(a, b));

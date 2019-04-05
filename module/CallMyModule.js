// https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.2jkpzjofs

/**
 * Method 1 to create a module, the commonJS module -
 * An instance must be created after the module is imported and before it is used.
 */
// Calls a CommonJS module MyModule.js.
var mod1 = require('MyModule'); // Modules must reside in folder node_modules

//console.log(mod1.hello()); // TypeError: myModule.hello is not a function

var myModuleInstance = new mod1(); // Why this?
console.log(myModuleInstance.hello());        // 'hello!'
console.log(myModuleInstance.goodbye());  // 'goodbye!'

var a, b;
a = 1;
b = 2;
console.log(a + " + " + b + " = " + myModuleInstance.sum(a, b));


/**
 * Method 2 to create a module -
 * No instantiation, use the module directly after imported.
 */
var mod2 = require('MyModule2');
console.log("\n--- Another way to code a CommonJS module ---");
console.log(mod2.hello());   // hello, 2!
console.log(mod2.goodbye()); // goodbye, 2!
a = 10;
b = 20;
console.log(a + " + " + b + " = " + mod2.sum(a, b));

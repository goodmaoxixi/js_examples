/**
 * Create on May 31, 2015 Sun.
 * See page 108 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./PrototypeDemo.js
 */
var empty = {};
console.log( empty.toString);
// → function toString ()...{}
console.log(empty.toString()) ;
// → [ object Object ]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

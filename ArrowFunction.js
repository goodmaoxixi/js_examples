/**
 * Created on Apr 17, 2019, Thu
 * 
 * An arrow function expression is a syntactically compact alternative to a
 * regular function expression, although without its own bindings to the this,
 * arguments, super, or new.target keywords. Arrow function expressions are ill
 * suited as methods, and they cannot be used as constructors.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * Basic syntaxSection
 * (param1, param2, …, paramN) => { statements } 
 * (param1, param2, …, paramN) => expression
 * // equivalent to: => { return expression; }
 *
 * Two factors influenced the introduction of arrow functions: 1. shorter functions
 *  and 2. no existence of this keyword.
 */
 /* 0. Syntax */
console.log("-- 0. Syntax");

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// Parentheses are optional when there's only one parameter name:
// (singleParam) => { statements }
// singleParam => { statements }
var results = materials.map(material => material.length);
console.log("0.1: " + results);
// expected output: Array [8, 6, 7, 9]

// The equivalent
results = materials.map(function(material) {
  return material.length;
});
console.log("0.2: " + results);

/* Advanced syntaxSection */
// Parenthesize the body of function to return an object literal expression:
var val = params => ({ foo: bar })
console.log(typeof(val) + "; " + val);

// Rest parameters and default parameters are supported
// (param1, param2, ...rest) => { statements }
// (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log("Destructuring in arrow function: " + f()); // 6

// The traditional equivalent
var f2 = function([a, b] = [1, 2], {x: c} = {x: a + b}) {
    return a + b + c;
};
console.log("Traditional destructuring: " + f2()); // 6


/** 1. Shorter functions */

console.log("\n-- 1. Shorter functions");
var elements = materials;

results = elements.map(function(element) {
  return element.length;
}); // this statement returns the array: [8, 6, 7, 9]
console.log("1.1: " + results);

// The regular function above can be written as the arrow function below
results = elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]
console.log("1.2: " + results);

// When there is only one parameter, we can remove the surrounding parenthesies:
results = elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]
console.log("1.3: " + results);

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
results = elements.map(element => element.length); // [8, 6, 7, 9]
console.log("1.4: " + results);

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the string `"length"` corresponds to the property we want to get whereas the
// obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
// to any valid variable name you want
results = elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]
console.log("1.5: " + results);

// This destructuring parameter assignment can be written as seen below. However, note that there
// is no specific `"length"` to select which property we want to get. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
elements.map(({ length }) => length); // [8, 6, 7, 9]
console.log("1.6: " + results);


/** 2. No separate this */
console.log("\n-- 2. No separate this");

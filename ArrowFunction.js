/**
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
 */

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// Parentheses are optional when there's only one parameter name:
// (singleParam) => { statements }
// singleParam => { statements }
console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

// The equivalent
var results = materials.map(function(material) {
  return material.length;
});
console.log(results);


/* Advanced syntaxSection */
// Parenthesize the body of function to return an object literal expression:
//params => ({foo: bar})

// Rest parameters and default parameters are supported
// (param1, param2, ...rest) => { statements }
//(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f()); // 6

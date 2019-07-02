/**
 * Created on Apr 18, 2019, Thu
 * 
 * The destructuring assignment syntax is a JavaScript expression that makes it
 * possible to unpack values from arrays, or properties from objects, into
 * distinct variables.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 }); // parentheses are necessary
//{ a, b } = { a: 10, b: 20 }; // SyntaxError: Unexpected token =
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

/**
 * Create on May 30, 2015 Sat.
 * Run with Node.js: node ./DefaultArgumentValue.js
 *
 * The present JS engine doesn't support default arg vlues in function definition. Here is
 * a clever way to set default argument values for functions using coercion by || operator.
 * undefined, null, "" will be evaluated to false in logical operation.
 * 
 * See Javascript: Understanding the Weird Parts - The First 3.5 Hours
 * https://www.youtube.com/watch?v=Bv_5Zv5c-Ts 
 * Existence and Booleans, starting at 2:42:54 to 2:58:07
 */
function greet(name) {
  name = name || '<Your name here>';
  console.log('Hello, ' + name + '!');
}

greet('World');
greet(); // null
greet("");
greet(undefined);

// Be careful of Number 0 (false)
greet(0);

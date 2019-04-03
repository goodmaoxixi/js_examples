// Page 62/490, Closure, Eloquent JavaScript
// This feature - being able to reference a specific instance of local
// variables in an enclosing function - is called closure. A function
// that “closes over” some local variables is called a closure. 

/*
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}
*/
// Simplified version of the above
function wrapValue(n) {
  return function() { return n; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1()); // 1
console.log(wrap2()); // 2


function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5)); // 10

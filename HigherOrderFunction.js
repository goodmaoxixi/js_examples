// Create on May 27, 2015 Wed.
// Page 86, 5 Higher-Order Functions, Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
// Run with Node.js: node ./HigherOrderFuncton.js

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// Depends on 2 external functions
//console.log (sum(range(1 , 10)));

/* Abstraction */
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

// Abstracts into a function
console.log("--- Abstracts into a function ---");
logEach(array);
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

// Passes our action as a function value
console.log("--- Passes our action as a function value ---");
function forEach2(array, action) {
  for (var i = 0; i < array.length; i++)
   action(array[i]);
}
forEach2(["Wampeter" , "Foma" , "Granfalloon"] , console.log);

/**
 * Often, you don’t pass a predefined function to forEach
 * but create a function value on the spot instead.
 */
console.log("--- Creates a function value on the spot  ---"); 
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach2(numbers, function(number) {
  sum += number;
});
console.log(sum); // → 15

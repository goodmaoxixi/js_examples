/**
 * Created on May 27, 2015 Wed.
 * Page 86, 5 Higher-Order Functions, Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * See also 'Functions as values' on page 46.
 * Run with Node.js: node ./HigherOrderFuncton.js
 * 
 * Higher-order functions:
 * Functions that operate on other functions, either by taking them as
 * arguments or by returning them, are called higher-order functions.
 */
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
forEach2(["Wampeter", "Foma", "Granfalloon"], console.log);

/**
 * Often, you don’t pass a predefined function to forEach
 * but create a function value on the spot instead.
 */
console.log("--- Creates a function value on the spot ---"); 
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach2(numbers, function(number) {
  sum += number;
});
console.log(sum); // → 15

// Two array-traversing loops
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

// Working with forEach makes it slightly shorter and quite a bit cleaner.
function gatherCorrelations2(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

// Higher-order functions allow us to abstract over actions, not just values.
// They come in several forms. For example, you can have functions that create new functions.
console.log("--- Have functions create new functions ---");
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Have functions change other functions
console.log("--- Have functions change other functions ---");
function noisy(f) {
  return function(arg) {
    console.log("Calling with ", arg ) ;
    var val = f(arg); // type cast (coercion)
    console.log ("Called with " , arg , " - got ", val );
    return val;
  };
}
/* 5 primitive types: undefined, null, Boolean, Number, String. */
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false
noisy(Boolean)(2);
noisy(Number)(3);
noisy(String)(4);

// You can even write functions that provide new types of control flow
console.log("--- Have functions provide new types of control flow ---");
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n) {
  unless(n % 2, function() {
    console.log("%d is even", n);
  });
});
// → 0 is even
// → 2 is even

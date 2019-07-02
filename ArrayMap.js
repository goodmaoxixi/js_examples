/**
 * Created on Thu 2 Apr, 2019
 * https://www.robinwieruch.de/javascript-map-array/
 */
const originalArray = [1, 2, 3, 4, 5];

console.log("--- An inline named function as the callback function");
var newArray = originalArray.map(function addOne(number) {
  return number + 1;
});

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [2, 3, 4, 5, 6]

console.log("\n--- An anonymous function as the callback function");
newArray = originalArray.map(function(number) {
  return number + 1;
});

console.log(newArray); // [2, 3, 4, 5, 6]

console.log("\n--- A standalone function as the callback function");
function addOne(number) {
  return number + 1;
}

function addOne2(number, index) {
  return number + index;
}

//newArray = originalArray.map(addOne);
newArray = originalArray.map(addOne2);
console.log(newArray); // [2, 3, 4, 5, 6]

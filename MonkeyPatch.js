/**
 * Created on Sat Apr 6, 2019
 * https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
 */
 console.log("\n--- Loop over an ordinary array")
 var i, len, myStringArray = [ "Hello", "World" ];
for (len = myStringArray.length, i = 0; i < len; ++i) {
  console.log(myStringArray[i]);
}

var x = [1, 2, 3, 4].map(function(item) {
  return item * 10;
});
console.log(x);

console.log("\n--- Loop over an array of plain objects");
var sales = [
  { product: 'Hoodie', count: 7 },
  { product: 'Jacket', count: 6 },
  { product: 'Snuggie', count: 0 }
];

var showInfo = function(element, index) {
  console.log(index + ", " + element.product + ", " + element.count);
};

var showInfo2 = function(d, i) {
  console.log(i + ", " + d.product + ", " + d.count);
};

sales.map(showInfo2);


/**
 * Monkey patching:
 * https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
 */
// Method 1: create a Utility object that exposes a endsWith() method
console.log("\n--- Monkey patching");
var Utility = {
   endsWith: function(string, suffix) {
      return string.indexOf(suffix, string.length - suffix.length) !== -1;
   }
};

var isSuffix = Utility.endsWith('hello world', 'ld');
console.log(isSuffix);

// Method 2: Monkey-patch the built-in String object to expose the method
String.prototype.endsWith = function(suffix) {
   return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
isSuffix = 'hello world'.endsWith('ld');
console.log(isSuffix);


// D3.js API modelling
console.log("\n--- D3.js API monkey patching");
Array.prototype.append = function(tag) {
  this.map(showInfo2); // data binding, svg-tag insertiong, ...
  return this;
};

var values = sales.append("rect");
console.log(typeof(values));
values.map(showInfo2);

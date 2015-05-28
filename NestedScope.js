// Create on May 27, 2015 Wed.
// See Page 45 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
// Run with Node.js: node ./NestedScope.js

var landscape = function() {
  var result = " ";
  
  var flat = function(size) {
    for (var count = 0; count < size ; count ++)
      result += "_";
  };
  
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size ; count ++)
      result += "'";
    result += "\\";
  };
  
  flat(3) ;
  mountain(4) ;
  flat(6) ;
  mountain(1) ;
  flat(1) ;
  
  return result ;
};

console.log(landscape());
// ___/''''\______/'\_

/* Hoever, the following variable something is the same, in the same scope. */
var something = 1;
console.log("something = ", something);
{
  var something = 2;
  // Do stuff with variable something ...
  console.log("something = ", something);
}
// Outside of the block again ...
console.log("something = ", something);

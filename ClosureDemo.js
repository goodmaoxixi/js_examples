/**
 * Created on May 30, 2015 Sat.
 * 
 * Closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures
 * 
 * Closures are one of the most powerful features of JavaScript. JavaScript allows
 * for the nesting of functions and grants the inner function full access to all the variables
 * and functions defined inside the outer function (and all other variables and functions
 * that the outer function has access to). However, the outer function does not have access
 * to the variables and functions defined inside the inner function. This provides a sort of security
 * for the variables of the inner function. Also, since the inner function has access to the scope of
 * the outer function, the variables and functions defined in the outer function will live longer than
 * the outer function itself, if the inner function manages to survive beyond the life of the outer function.
 * 
 * A closure is created when the inner function is somehow made available to any scope outside the outer function.
 * 
 * Fix this inside closure: http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
 * Simply put, a closure is an inner method.
 */
console.log("--- A simple closure --");
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;                       // The inner function has access to the "name" variable of the outer function
  }
  return getName;                  // Returns the inner function, thereby exposing it to outer scopes. A closure.
//}, // OK
}; // OK, too, recommended

var myPet = pet("Vivie"); // vs function pointers in C/C++
// Returns "Vivie"
console.log(myPet());

/**
 * A more complex one. An object containing methods for manipulating
 * the inner variables of the outer function can be returned.
 */
console.log("--- A complex closure --");
var createPet = function(name) {
  var sex;
  
  // An object will be returned!
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
// Clousures: getName(), getSex()
console.log(pet.getName() + ": " + pet.getSex()); // Vivie: undefined. Clousures.

// Clousures: setName(), setSex()
pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getName() + ": " + pet.getSex()); // Oliver: male

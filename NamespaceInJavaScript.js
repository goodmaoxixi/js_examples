/**
 * Created on June 12, 2015 Fri.
 * A technique to create namespaces in JavaScript.
 * 
 * Namespaces in JavaScript
 * https://www.youtube.com/watch?v=9p-uDkWqqKU.
 */
// Use PragimTeck namespace if it already exists, otherwise create it
// PragimTech will be added to the global namespace, window in a browser.
var PragimTech = PragimTech || {};

// A nested namespace is one inside another one. Created by defining an object inside another object
PragimTech.TeamA = PragimTech.TeamA || {};
PragimTech.TeamA.customer = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
    
    return this; // -> customer object
}

var customerA = PragimTech.TeamA.customer("Tom", "Grover");
console.log("customerA's full name: " + customerA.getFullName());


PragimTech.TeamB = PragimTech.TeamB || {};
PragimTech.TeamB.customer = function(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.getFullName = function() {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    
    return this; // -> customer object
}

var customerB = PragimTech.TeamB.customer("Tom", "T", "Grover");
console.log("customerB's full name: " + customerB.getFullName());

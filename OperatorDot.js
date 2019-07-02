/**
 * Created on May 30, 2015 Sat.
 * Run with Node.js: node ./OperatorDot.js
 *
 * Shows how to use member operator . in objects.
 * 
 * See Javascript: Understanding the Weird Parts - The First 3.5 Hours
 * https://www.youtube.com/watch?v=Bv_5Zv5c-Ts 
 * Objects and Functions, starting at 3:05:20 to 3::
 */
var person = new Object();
person["firstname"] = "Tony"; // bracket notation
person["lastname"] = "Alicea";

var firstNameProperty = 'firstname';
console.log(person[firstNameProperty]);

console.log(person["firstname"] + " " + person["lastname"]);
console.log(person.firstname + " " + person.lastname); // concise dot notation, preferred

// Appends more objects and nests them
//person.address = new Object();
person.address = {}; // the same
person.address.street = '111 Main St';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);

/* Object literal, curely braces, the preferred way */
//var person2 = {};
//var person2 = { firstname: 'Tony', lastname: 'Alicea'};
var person2 = {
  firstname: 'Tony2',
  lastname: 'Alicea2',
  address: {
    street: '112 Main St',
    city: 'New York',
    state: 'NY'
  }
};

function greet(person) {
	console.log('Hi, ' + person.firstname);
}
greet(person2);

// Create an object on the fly
greet({
  firstname: 'Mary',
  lastname: 'Doe'
});

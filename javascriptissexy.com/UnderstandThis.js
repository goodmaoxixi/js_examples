/**
 * Create on Jun. 19, 2015 Fri.
 * Examples from an excellent website on JS: http://javascriptissexy.com/ by  Richard Bovell.
 *
 * Understand JavaScript’s “this” With Clarity, and Master It
 * http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
 */
console.log("--- this in a function defined in the global object ---");
var fullName = function() {
  var firstName = "Barak"; // properties?
  var lastName = "Obama";
  // this refers to the global object ({} in Node.js or window in a browser).
  // Thus, either firstName or lastName might not exist (undefined)
  console.log(this.firstName + " " + this.lastName);
    
  // Accesses local variables in a function scope (A function is an object in JS) 
  console.log(firstName + " " + lastName);
};
fullName(); // invoked by the global object
//console.log(fullName.firstName); // undefined
//console.log(fullName().firstName); // Cannot read property 'firstName' of undefined


console.log("\n--- this in a PlainObject ---");
var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function() {
    // Notice we use "this" just as we used "he" in the example sentence earlier?
    // this -> object person
    console.log(this.firstName + " " + this.lastName);
    // We could have also written this:​​
    //console.log(person.firstName + " " + person.lastName); // ambiguous
    
    // Error: cannot access the properties in object person
    //console.log(firstName + " " + lastName);
  }
};
person.fullName();

// A very common piece of jQuery code​. See JavaScriptIsSexy.html.
/*
$("button").click(function(event) {
  // $(this) will have the value of the button ($("button")) object​
  // because the button object invokes the click () method​
  console.log($(this).prop("name"));
});
*/

console.log("\n--- Use method apply to change the referent ---");
var anotherPerson = {
  firstName: "Rohit",
  lastName: "Khan"
}  
person.fullName.apply(anotherPerson);


console.log("\n--- 1. Fix this when used in a method passed as a callback ---");
// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked​
var user = {
  data: [ {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43} ],
  
  clickHandler: function(event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
    // This line is printing a random person's name and age from the data array​
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};
user.clickHandler();
 
console.log("*** See JavaScriptIsSexy.html for using method bind");
// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object​
// And the output will be undefined because there is no data property on the button object​
//$("button").click(user.clickHandler); // Cannot read property '0' of undefined
//$("button").click(user.clickHandler.bind(user)); // P. Mickelson 43


console.log("\n--- 2. Fix this inside closure ---");
var user2 = {
  tournament: "The Masters",
  data: [
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],
  clickHandler: function() {
    // To capture the value of "this" when it refers to the user2 object, we have to set it to another variable here:​
	// We set the value of "this" to theUserObj variable, so we can use it later​.
	var theUserObj = this;
	    	  
    // The use of this.data here is fine, because "this" refers to the user2 object, and data is a property on the user2 object.​
    this.data.forEach(function(person) {
      // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user2 object.​
      // This inner function cannot access the outer function's "this"​
      console.log("What is This referring to? " + this); // [object Window]​ / [object global]
      console.log(person.name + " is playing at " + this.tournament);
      console.log(person.name + " is playing at " + theUserObj.tournament);      
      // T. Woods is playing at undefined​
      // P. Mickelson is playing at undefined​
    })
  }
};
user2.clickHandler(); // What is "this" referring to? [object Window]


console.log("\n--- 3. Fix this when method is assigned to a variable ---");
// This data variable is a global variable​
var data = [
  {name: "Samantha", age: 12},
  {name: "Alexis", age: 14}
];

var user3 = {
  // this data variable is a property on the user3 object​
  data: [
    {name: "T. Woods", age: 37},
    {name: "P. Mickelson", age: 43}
  ],
  showData: function(event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1​​
    // This line is adding a random person from the data array to the text field​
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    //console.log(this.data);
  }
}

// Assign the user.showData to a variable​
//var showUserData = user3.showData;
var showUserData = user3.showData.bind(user3);
// When we execute the showUserData function, the values printed to the console
// are from the global data array, not from the data array in the user object​
showUserData(); // Samantha 12 (from the global data array)​? undefined?

	    
console.log("\n--- 4. Fix this when borrowing methods ---");

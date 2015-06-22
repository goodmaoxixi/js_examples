/**
 * Create on Jun. 20, 2015 Sat.
 * Examples from an excellent website on JS: http://javascriptissexy.com/ by  Richard Bovell.
 * Run in Node.js: node ./ObjectInDetail.js
 * 
 * JavaScript Objects in Detail
 * http://javascriptissexy.com/javascript-objects-in-detail/ 
 */
console.log("--- 1. What is an Object ---");
// Consider this simple object
var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};

// Property names can be a string or a number, but if the property name is a number,
// it has to be accessed with the bracket notation. 
var ageGroup = {30: "Children", 100: "Very Old"};
//console.log(ageGroup.30); // This will throw an error​
// This is how you will access the value of the property 30, to get value "Children"​
console.log(ageGroup["30"]); // Children​

// !!! It is best to avoid using numbers as property names.


console.log("\n--- 2. Reference Data Type and Primitive Data Types ---");
// The primitive data type String is stored as a value​
var person = "Kobe";  
var anotherPerson = person; // anotherPerson = the value of person​
person = "Bryant"; // value of person changed​

console.log(anotherPerson); // Kobe​
console.log(person); // Bryant

// Compare the primitive data saved-as-value demonstrated above
// with the save-as-reference for objects.
var person2 = {name: "Kobe"};
var anotherPerson2 = person2;
person2.name = "Bryant";

console.log(anotherPerson2.name); // Bryant​
console.log(person2.name); // Bryant


console.log("\n--- 3. Creating Objects ---");
console.log("3.1 *** Object Literals ---");
// This is an empty object initialized using the object literal notation​
var myBooks = {};

// This is an object with 4 items, again using object literal​
var mango = {
  color: "yellow",
  shape: "round",
  sweetness: 8,
  howSweetAmI: function() {
    console.log("Hmm Hmm Good");
  }
};
mango.howSweetAmI();

console.log("3.2 *** Object Constructor ---");
var mango2 =  new Object();
mango2.color = "yellow";
mango2.shape= "round";
mango2.sweetness = 8;
mango2.howSweetAmI = function() {
  console.log("Hmm Hmm Good 2");
};
mango2.howSweetAmI();


console.log("\n--- 4. Practical Patterns for Creating Objects ---");
console.log("4.1 *** Constructor Pattern for Creating Objects ---");
function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
  this.color = theColor;
  this.sweetness = theSweetness;
  this.fruitName = theFruitName;
  this.nativeToLand = theNativeToLand;

  this.showName = function() {
    console.log("This is a " + this.fruitName);
  }

  this.nativeTo = function() {
    this.nativeToLand.forEach(function(eachCountry)  {
      console.log("Grown in: " + eachCountry);
    });
  }
}

var mangoFruit = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.​
mangoFruit.nativeTo();
// Grown in: South America​
// Grown in: Central America​
// Grown in: West Africa​

var pineappleFruit = new Fruit("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.

/**
 * Notes:
 * -- An inherited property is defined on the object’s prototype property.
 * For example: someObject.prototype.firstName = “rich”;
 * 
 * -- An own property is defined directly on the object itself, for example:
 */
// Let’s create an object first:
var aMango = new Fruit();
// Now we define the mangoSpice property directly on the aMango object
// Because we define the mangoSpice property directly on the aMango object,
// it is an own property of aMango, not an inherited property.
aMango.mangoSpice = "some value";

// -- To access a property of an object, we use object.property, for example
console.log(aMango.mangoSpice); // "some value"

// -- To invoke a method of an object, we use object.method(), for example
// First, lets add a method
aMango.printStuff = function() { return "Printing"; };

// Now we can invoke the printStuff method:
console.log(aMango.printStuff());

console.log("4.2 *** Prototype Pattern for Creating Objects ---");
function Fruit4() {
}

Fruit4.prototype.color = "Yellow";
Fruit4.prototype.sweetness = 7;
Fruit4.prototype.fruitName = "Generic Fruit";
Fruit4.prototype.nativeToLand = "USA";

Fruit4.prototype.showName = function () {
  console.log("This is a " + this.fruitName);
};

Fruit4.prototype.nativeTo = function () {
  console.log("Grown in: " + this.nativeToLand);
};

var mangoFruit = new Fruit4();
mangoFruit.showName(); //​
mangoFruit.nativeTo();
// This is a Generic Fruit​
// Grown in: USA


console.log("\n--- 5. Own and Inherited Properties ---");
// Create a new school object with a property name schoolName​
var school = {schoolName: "MIT"};

// Prints true because schoolName is an own property on the school object​
console.log("schoolName" in school);  // true​

// Prints false because we did not define a schoolType property on the school object,
// and neither did the object inherit a schoolType property from its prototype object Object.prototype.​
console.log("schoolType" in school);  // false​
 
// Prints true because the school object inherited the toString method from Object.prototype. ​
console.log("toString" in school);  // true

console.log("5.1 *** hasOwnProperty ---");

// Prints true because schoolName is an own property on the school object​
console.log(school.hasOwnProperty("schoolName"));  // true​
 
// Prints false because the school object inherited the toString method from Object.prototype,
// therefore toString is not an own property of the school object.​
console.log(school.hasOwnProperty("toString"));  // false 

console.log("5.2 *** Accessing and Enumerating Properties on Objects ---");

// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.​
var school = {schoolName: "MIT", schoolAccredited: true, schoolLocation: "Massachusetts"};
//Use of the for/in loop to access the properties in the school object​
for (var eachItem in school) {
  console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​
}

/**
 * Created on June 6, 2015 Sat.
 * Run with Node.js: node ./OODemo.js
 * 
 * The Definitive Guide to Object-Oriented JavaScript
 * https://www.youtube.com/watch?v=PMfcsYzj-9M
 * by James Shore
 * 1. Object Fundamentals (1:18)
 * 2. Functions & Methods (3:32)
 * 3. Prototypal Inheritance (5:46)
 * 4. Polymorphism & Method Overriding (9:13)
 * 5. Classes & Instantiation (12:11)
 * 6. The Classical Model (16:07)
 * 7. instanceof (21:09)
 * 8. Future Directions (22:39)
 * 9. The Definitive Guide (23:25)
 * 10. Recommendations (24:56)
 */
console.log("--- 0. Prelude: Classes & subclasses ---");
// Defines a class (CamelCase)
function MyClass(name) { // function declaration
  this.name = name;
  console.log("this = ", this);
}

// Adds a method to the class (the classical model)
MyClass.prototype.method1 = function(name) { // function expression
  console.log("Hello, ", this.name);
  console.log("Hello, ", name);
  console.log("this = ", this);
};
// Creates an instance of MyClass
console.log(">>> Creates an instance of MyClass");
var mc = new MyClass("World");
mc.method1("there");

// Defines a subclass
function MySubClass(name) {
  MyClass.call(this);
}
MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;
MySubClass.prototype.method1 = function() { // overriding
  MyClass.prototype.method1.call(this);
};
// Creates an instance of MySubClass
console.log(">>> Creates an instance of MySubClass");
var msc = new MySubClass("SubWorld");
msc.method1("subclass");


console.log("\n--- 1. Object Fundamentals (1:18)  ---");
/**
 * Common JavaScript Types
 * --- Six primitive Types (pass-by-value)
 * 1. undefined: undefined
 * 2. null: null
 * 3. Boolean: true, false
 * 4. String: "foo"
 * 5. Number: 3.1415
 * 6. Object: { bar: "baz" } (!!pass-by-reference)
 * --- Three Special Objects (pass-by-reference)
 * 7. Function: function qux { ... }
 * 8. Array: [ "hoge", 42 ]
 * 9. RegExp: /piyo/
 */


console.log("\n--- 2. Functions & Methods (3:32) ---");
/** Functions are regular objects. */
function myFunction(a, b) {
  this.a = a;
  this.b = b;
  return a*b;
}

// A function is an object. Objects are passed by reference.
// The following line assigns a property to the function.
myFunction.foo = 'bar';
var a = 2, b = 3;
console.log("%d * %d = %d", a, b, myFunction(a, b));
console.log("myFunction.foo = %s", myFunction.foo);

//  This assigns the function to a variable.
var myFun2 = myFunction;
var c = 4.2, d = 2.1;
console.log(c + " * " + d + " = " + myFun2(c, d));

/* When a function is put inside an object, it's called a method. */
var myObject = {
  get: function myMethod() {
    console.log("*** A function inside an object is called a method.");
    return this.val; // this -> myObject
    //return val; //ReferenceError: val is not defined
  },
  val: 42
};
console.log(myObject.get()); // 42

// Puts a function in the global scope
function myMethod() {
   return this.val; // this -> ...
}
var object2 = {
  get: myMethod,
  val: 43
};
var object3 = {
  get: myMethod,
  val: 3.1415
};
console.log(object2.get()); // 43
console.log(object3.get()); // 3.1415
// Method call forces this to refer to object2
console.log(myMethod.call(object2));


console.log("\n--- 3. Prototypal Inheritance (5:46) ---");
// Prototypes are the basic inheritance
var parent = {
  get: function fn() {
    return this.val;
  },
  val: 44
};

console.log(parent.get()); // 44
// Inherits (extends ) object parent
var child = Object.create(parent);
child.val = 45;
console.log(child.get()); // 45
var grandchild = Object.create(child);
grandchild.val = 46;
console.log(grandchild.get()); // 46


console.log("\n--- 4. Polymorphism & method overriding ---");
var answer = {
  get: function fn0() {
    return this.val;
  },
  val: 144
};
console.log(answer.get()); // 144

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2() { // method overriding
  //return this.val + "!!"; // Duplication
  //return answer.get() + "!!"; // 144!!
  return answer.get.call(this) + "!!"; // Calls the same method in the parent
};
firmAnswer.val = 3.14159;
console.log(firmAnswer.get()); // 3.14159!!


console.log("\n--- 5. Classes & Instantiation (12:11), prototypal model ---");
var AnswerPrototype = { // class definition
  constructor: function fn1(value) {
    this._val = value; // convention, _val is private (encapsulation)
  },
  get: function fn1() {
    return this._val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype); // instantiate
lifeAnswer.constructor(42);
console.log("lifeAnswer: ", lifeAnswer.get());

var dessertAnswer = Object.create(AnswerPrototype); // instantiate
dessertAnswer.constructor(3.14159);
console.log("dessertAnswer: ", dessertAnswer.get());

var FirmAnswerPrototype = Object.create(AnswerPrototype); // inheritance
FirmAnswerPrototype.get = function fn2() { // method overriding
  return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
console.log("luckyAnswer: ", luckyAnswer.get());

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
console.log("magicAnswer: ", magicAnswer.get());


console.log("\n--- 6. The Classical Model (16:07), using keyword new ---");
function Answer(value) {
  this._val = value;
}

Answer.prototype.get = function fn3() { // Appends a property
  return this._val;
};

var lifeAnswer2 = new Answer(244); // instantiate
console.log("lifeAnswer2: ", lifeAnswer2.get());

var dessertAnswer2 = new Answer(3.14159);
console.log("dessertAnswer2: ", dessertAnswer2.get());

// Subclasses
function FirmAnswer3(value) {
  Answer.call(this, value);
}
FirmAnswer3.prototype = Object.create(Answer.prototype);
FirmAnswer3.prototype.constructor = FirmAnswer3;
FirmAnswer3.prototype.get = function fn4() { // Overriding
  return Answer.prototype.get.call(this) + "!!";
};

var luckyAnswer3 = new FirmAnswer3(344); // instantiate
console.log("luckyAnswer3: ", luckyAnswer3.get());


console.log("\n--- 7. instanceof (21:09) ---");
console.log(lifeAnswer instanceof Answer);
console.log(lifeAnswer instanceof FirmAnswer3);
console.log(lifeAnswer2 instanceof Answer);
console.log(luckyAnswer3 instanceof FirmAnswer3);
console.log(luckyAnswer3 instanceof Answer);

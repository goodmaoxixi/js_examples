/**
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * The Object.create() method creates a new object with the specified prototype object and properties.
 * 
 * Classical inheritance with Object.create()
 * Below is an example of how to use Object.create() to achieve classical inheritance.
 * This is for single inheritance, which is all that JavaScript supports.
 */
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'


console.log("\n--- Object.create vs new ---");
// http://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction
//~ new Test():
//~ create new Object() obj
//~ set obj.__proto__ to Test.prototype
//~ return Test.call(obj) || obj;
//~ // normally obj is returned but constructors in JS can return a value

//~ Object.create( Test.prototype )
//~ create new Object() obj
//~ set obj.__proto__ to Test.prototype
//~ return obj;
//~ So basically Object.create doesn't execute the constructor.


// JavaScript inheritance: Object.create vs new
// http://stackoverflow.com/questions/13040684/javascript-inheritance-object-create-vs-new
//Your first example
function SomeBaseClass(){
	publicProperty: 'SomeValue'
}

SomeBaseClass.prototype = {
	doThis: function(){
		console.log("doThis");
	},
    doThat: function(){
		console.log("doThat");
	}
}

function MyClass(){
}

MyClass.prototype = Object.create(SomeBaseClass);
//MyClass.prototype = Object.create(SomeBaseClass.prototype);
// In this example, you are just inheriting SomeBaseClass' prototype
// but what if you have a property in your SomeBaseClass like
//function SomeBaseClass(){ 
//    this.publicProperty='SomeValue'; 
//}

// and if you use it like
var obj = new MyClass();
console.log(obj.publicProperty); // undefined
console.log(obj);
// The obj object won't have publicProperty property like in this example.

var obj2 = Object.create(SomeBaseClass);
console.log(obj2.publicProperty); // undefined
console.log(obj2);

// Your second example
function MyClass(){
}
MyClass.prototype = new SomeBaseClass();
var obj3 = new MyClass();
console.log(obj3.publicProperty); // undefined
console.log(obj3);

/**
 * Created on May 31, 2015 Sun.
 * See Page 107 of Eloquent JavaScript,
 * A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./MethodDemo.js
 * 
 * Methods are simply properties (name + its value) that hold function values.
 */
var rabbit = {}; // an Object instance, the most common objec in JS
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'") ;
};
rabbit.speak("I'm alive.") ;
// → The rabbit says 'I 'm alive .'

/**
 * Defines a function in the global object.
 * Keyword this as in C++, which refers to the Object calling this method.
 */
function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'") ;
}

/**
 * An Object instance, which is named Hash in Ruby and dict in Python.
 * Each item is called an property, which has a name(key) and a value.
 * When the value is a reference to a function, the property is, then, called a method.
 */
var whiteRabbit = {
  type: "white",
  speak: speak
};

var fatRabbit = {
  type: "fat",
  speak: speak
};

/** this -> whiteRabbit */
whiteRabbit.speak("Oh my ears and whiskers, " + " how late it 's getting!") ;
// → The white rabbit says 'Oh my ears and whiskers , how late it 's getting!'
/** this -> fatRabbit */
fatRabbit.speak("I could sure use a carrot right now .") ;
// → The fat rabbit says 'I could sure use a carrot right now.'

/** Functions call and apply can assign the calling object to this */
speak.apply(fatRabbit, ["Burp!"]); // Array form
// → The fat rabbit says ' Burp !'
speak.call({type: "old"}, "Oh my.") ; // Object form
// → The old rabbit says 'Oh my.'

/**
 * Create on May 31, 2015 Sun.
 * See Page 107 of Eloquent JavaScript, A Modern Introduction to Programming by Marijn Haverbeke
 * Run with Node.js: node ./MethodDemo.js
 * 
 * Methods are simply properties that hold function values.
 */
var rabbit = {}; // object
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'") ;
};
rabbit.speak("I'm alive.") ;
// → The rabbit says 'I 'm alive .'

/** this */
function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'") ;
}

var whiteRabbit = {
  type: "white",
  speak: speak
};

var fatRabbit = {
  type: "fat",
  speak: speak
};

whiteRabbit.speak("Oh my ears and whiskers, " + " how late it 's getting!") ;
// → The white rabbit says 'Oh my ears and whiskers , how late it 's getting!'
fatRabbit.speak("I could sure use a carrot right now .") ;
// → The fat rabbit says 'I could sure use a carrot right now.'

// call, apply
speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says ' Burp !'
speak.call({type: "old"}, "Oh my.") ;
// → The old rabbit says 'Oh my.'

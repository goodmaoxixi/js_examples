// http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

// In a browser
//$.getscript("simple_fun.js", function(){

// In Node.js
var myModule = require('./simple_fun'); // ./ is a must
myModule.myfun1();
myModule.myfun2();

// Dec. 14, 2016
// Use CommonJS modules. See demos in folder module.
// See also https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.2jkpzjofs
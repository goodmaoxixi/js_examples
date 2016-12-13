// http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

// In a browser
//$.getscript("simple_fun.js", function(){

// In Node.js
var myModule = require('./simple_fun');
myModule.myfun1();
myModule.myfun2();

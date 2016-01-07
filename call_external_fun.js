// http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

// In a browser
//$.getscript("simple_fun.js",function(){

// In Node.js
var tools = require('./simple_fun');
tools.myfun();

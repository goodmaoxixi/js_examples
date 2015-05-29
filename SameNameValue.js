/**
 * Create on May 29, 2015 Fri.
 * Both the name(key) and the value use the same word, a test to understand Ruby gem bootstrap-x-editable-rails.
 * See https://github.com/klenis/bootstrap-x-editable-rails-demo
 * See also http://vitalets.github.io/x-editable.
 */
console.log("--- Both the name and the value use the same word ---");
myObject = {};
params = {};
params.name = "test";
params.value = "haha";

myObject.params = function(params) {
  var railsParams;
  railsParams = {};
  railsParams.hello = "Hello, there!";
  railsParams.test = undefined;
  railsParams[params.name] = params.value;
  
  return railsParams;
}

var result = myObject.params(params);
console.log(result['hello']);
console.log(result[params.name]);

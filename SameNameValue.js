/* Both the name(key) and the value use the same word */
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

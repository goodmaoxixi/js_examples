// http://api.jquery.com/data/
$(function(){
  $("#test_method_data").on("click", test);
});

var test = function() {
  // Setters
  $("body").data("foo", 52);
  $("body").data("bar", {myType: "test", count: 40});
  $("body").data({baz: [1, 2, 3]});
  
  // Getters
  console.log($("body").data("foo")); // 52
  console.log($("body").data()); // {foo: 52, bar: {myType: "test", count: 40}, baz: [1, 2, 3]
  
  // Getters
  console.log("model: ", $("#test_method_data").data("model"));
  console.log("source: ", $("#test_method_data").data("source"));
  console.log("array: ", $("#test_method_data").data("array"));
  console.log("object: ", $("#test_method_data").data("object"));
};

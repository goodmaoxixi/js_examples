// http://api.jquery.com/data/
$(function(){
  $("#test_method_data").on("click", test);
  
  // http://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html
  $("a[data-background-color]").click(function(e) { // OK
  //$("a[data-background-color]").on("click", function(e) { // OK
    var backgroundColor, textColor;
    e.preventDefault();
    backgroundColor = $(this).data("background-color");
    textColor = $(this).data("text-color");
    return paintIt(this, backgroundColor, textColor);
  });
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

var paintIt = function(element, backgroundColor, textColor) {
  element.style.backgroundColor = backgroundColor;
  if (textColor != null) return element.style.color = textColor;
};

/**
 * An excellent custom event example:
 * http://learn.jquery.com/events/introduction-to-custom-events
 */
$(function() {
  $(".lightbulb").on("light:toggle", { key1: 'test1', key2: 'test2' },  function(event, param1, param2) {
	console.log("---\n", this);
	console.log("key1: " + event.data.key1 +"; " + "key2: " + event.data.key2); // data passed to handler from method on
	console.log("param1: " + param1 +"; " + "param2: " +param2); // data passed to handler from method trigger
    var light = $(this);
    if (light.is(".on")) {
      //light.removeClass("on").addClass("off");
      light.trigger("light:off");
    } else {
      //light.removeClass("off").addClass("on");
      light.trigger("light:on");
    }
  }).on("light:on", function(event) {
    $(this).removeClass("off").addClass("on");
  }).on("light:off", function(event) {
	$(this).removeClass("on").addClass("off"); 
  });
  
  $(".switch, .clapper").click(function() {
	console.log("***\n", this);
    var room = $(this).closest(".room");
    room.find(".lightbulb").trigger("light:toggle", ["Custom", "Event"]); // custom event name: light:toggle
  });
  
  $("#master_switch").click(function() {
    var lightbulbs = $(".lightbulb");
    // Check if any lightbulbs are on
    if (lightbulbs.is(".on")) {
      lightbulbs.trigger("light:off");
    } else {
      lightbulbs.trigger("light:on");
    }
  });  
});

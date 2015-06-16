$(function() {
  $( ".lightbulb" ).on( "light:toggle", { key1: 'test1', key2: 'test2' },  function( event, param1, param2 ) {
	console.log("--");
	console.log(this);
	console.log("key1: " + event.data.key1 +"; " + "key2: " + event.data.key2 ); // data passed to handler from method on
	console.log("param1: " + param1 +"; " + "param2: " +param2 ); // data passed to handler from method trigger
	
    var light = $( this );
    if ( light.is( ".on" ) ) {
      light.removeClass( "on" ).addClass( "off" );
    } else {
      light.removeClass( "off" ).addClass( "on" );
    }
  });
  
  $( ".switch, .clapper" ).click(function() {
	console.log("**");
	console.log(this);
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle", [ "Custom", "Event" ] ); // custom event name: light:toggle
  });  
});

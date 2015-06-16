$(function() {
  $( ".lightbulb" ).on( "light:toggle", function( event ) {
    var light = $( this );
    if ( light.is( ".on" ) ) {
      light.trigger( "light:off" );
    } else {
      light.trigger( "light:on" );
    }
  }).on( "light:on", function( event ) {
    $( this ).removeClass( "off" ).addClass( "on" );
  }).on( "light:off", function( event ) {
    $( this ).removeClass( "on" ).addClass( "off" );
  });
 
  $( ".switch, .clapper" ).click(function() {
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle" );
  });
 
  $( "#master_switch" ).click(function() {
    var lightbulbs = $( ".lightbulb" );
    
    // Check if any lightbulbs are on
    if ( lightbulbs.is( ".on" ) ) {
      lightbulbs.trigger( "light:off" );
    } else {
      lightbulbs.trigger( "light:on" );
    }
  });
});

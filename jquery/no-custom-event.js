$(function() {
  $( ".switch, .clapper" ).click(function() {
    console.log(this);
    var light = $( this ).closest( ".room" ).find( ".lightbulb" );
    if ( light.is( ".on" ) ) {
      light.removeClass( "on" ).addClass( "off" );
    } else {
      light.removeClass( "off" ).addClass( "on" );
    }
  });		
});

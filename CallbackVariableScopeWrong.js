//$(document).ready( function() {
$(function() { // Alias to the above
  var buttons = $('button');

  for(var i = 0; i < buttons.length; ++i ) {
    buttons.eq(i).click(
      // ONLY EDIT THE CODE BELOW THIS LINE
      function() {
        $('ul').append('<li>' + i + '</li>')
      }
      // ONLY EDIT THE CODE ABOVE THIS LINE
    );
  }
});

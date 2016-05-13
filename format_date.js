// http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

var d = new Date();
var dateString = 
  d.getFullYear() + "-"
  + ("0"+(d.getMonth()+1)).slice(-2) + "-"
  + ("0" + d.getDate()).slice(-2) + " "
  + ("0" + d.getHours()).slice(-2) + ":"
  + ("0" + d.getMinutes()).slice(-2) + ":"
  + ("0" + d.getSeconds()).slice(-2);

console.log(dateString);

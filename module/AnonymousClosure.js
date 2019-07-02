// https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.2jkpzjofs

(function() {
  // We keep these variables private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
      return 'Your average grade is ' + total / myGrades.length + '.';
  };

  var failing = function() {
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  };

  console.log(average());
  console.log(failing());
}());

// Your average grade is 70.33333333333333.
// ‘You failed 2 times.’

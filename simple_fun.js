// This is a JS module demo

/** Module exports. */
 
// This form works
module.exports = {
  myfun1: function() {
    console.log("I'm in simple_fun.js, which is a JS module.");
  },
  myfun2: myfun
};

// The elegant form. Cannot work.
//module.exports = myfun;
function myfun() {
    console.log("myfun2 in module simple_fun.");
}

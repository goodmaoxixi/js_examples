// This is a JS module demo

/** Module exports. */
 
// This form works
module.exports = {
  myfun1: function() {
    console.log("I'm in simple_fun.js, a CommonJS module.");
  },
  myfun2: myfun
};

// The elegant form. Cannot work.
//module.exports = myfun;
function myfun() {
  console.log("myfun2 in CommonJS module simple_fun.");
}

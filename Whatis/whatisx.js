// *** Define a function `whatisx` to print out basic information about input `x`.***
function whatisx(x) {
  console.log("============================= INFO OF X =================================");
  console.log("type of x is ", typeof x);
  console.log("x is", x);
  console.log(x);
  console.log("============================= THE END  =================================");
}

// *** Define a function `whatisownproperties` to print out own properties of a object.***
// * Input: `o`, which is a object
// * Output: own properties of an object `o`
var whatisownproperties = function(o) {
  console.log("======================== OWN PROPERTIES OF O ========================");
  var oP = Object.getOwnPropertyNames(o);
  for(var i=0, length=oP.length; i<length; i++) {
    console.log(oP[i]+ " : " + o[oP[i]]);
  } 
  console.log("================================ THE END ==========================");
}

// *** Expose the interfaces ***
module.exports = {
  wsX: whatisx,
  wsOwnProperties: whatisownproperties
}

// *** Require module `whatisx` ***
var X = require('./whatisx.js');

// * `wsX` prints out basic info of input
// * `wsO` prints out the own properties of input
var wsX = X.wsX;
var wsO = X.wsOwnProperties;

// *** Define a function `whatisO` to print out the information about input ***
function whatisO(o) {
  wsX(o);
  wsO(o);
} 

// *** Apply `whatisO` on all javascript types ***

// * undefined
whatisO(undefined);
// * boolean
whatisO(true);
// * number
whatisO(8);
// * string
whatisO('Trantect');
// * function
whatisO(function(){});
// * object
whatisO({name:'Trantect', age:2});



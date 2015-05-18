var X = require('./whatisx.js');
var wsX = X.wsX;
var wsOwnProperties = X.wsOwnProperties; 
var c = console.log;

function print() {
  console.log(arguments);
  wsOwnProperties(print);
  c("====================================");
  c(print['arguments']);
  c(print['name']);
  c(print['length']);
  c("====================================");
  c("caller is " + print['caller']);
  c("====================================");
  c("caller 2 is " + print['caller']['caller']);
  c("====================================");
  c("p is "+ print['prototype']);
}


print(3, 4);


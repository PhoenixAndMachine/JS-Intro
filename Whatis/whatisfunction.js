var X = require('./whatisx.js');
var wsX = X.wsX;
var wsOwnProperties = X.wsOwnProperties; 

function print (x, y) {
  console.log("==================Running Print========================");
  console.log("What is this function ? ");
  console.log("Who called me ", print.caller);
  console.log(print.arguments);
  console.log(print.prototype);
  console.log("==================The End of Print=====================");
}

print();
print("a", 14);
print(7, "b", 9, [3,4,5]);

//wsX(print);

wsOwnProperties(print);



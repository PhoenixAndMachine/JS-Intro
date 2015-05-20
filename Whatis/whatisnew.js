var _ = require('underscore');
var X = require('./whatisx.js');

var wsX = X.wsX;
var wsO = X.wsOwnProperties;

var c = console.log;


function car() {
  this.name = "Trantect";
  this.age = 3;
}
var c1 = car();
var c2 = car();

wsX(c1);
wsX(c2);

c(_.isEqual(c1, c2));
c(c1 === c2);

var c3 = new car();
var c4 = new car();

wsX(c3);
wsX(c4);


c(_.isEqual(c3. c4));
c(c3 === c4);






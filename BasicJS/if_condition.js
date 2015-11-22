// *** Syntax sugar for console.log ***
var c = console.log;

// *** Some cases to judge condition true or false ***
/*
* @param {Boolean} condition
* @return {Undefined}
*/


//You can check assetion.js to lean assert
require('./assertion.js');

var checkCondition = function (condition) {
  if (condition) {
    c('%s', typeof(condition), condition, 'is true as condition\n');
  } else {
    c('%s', typeof(condition), condition, 'is false as condition\n');
  }
}

// *** Syntax sugar for checkCondition
var cc = checkCondition;
console.log([])
cc(true);
cc(false)
cc(0);
cc(1)
cc('0');
cc('1')
cc([]);
cc([0]);
cc([1]);
cc({});
cc({0:0});

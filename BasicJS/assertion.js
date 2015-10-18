// *** Syntax sugar for console.log ***
var c = console.log;

// *** Define a function `as` to make assertion ***
// * Input `k` and `v`
// * Output the results of `k===v` and `k==v`
var as = function(k, v) {
  c(typeof(k), k, "===", typeof(v), v, 'is',k === v, 'as if condition\n');
  c(typeof(k), k, "==", typeof(v), v, 'is',k == v, 'as if condition\n');
}

// *** Define a function `check` to see whether the input is equal to some constants. ***
function check(value) {
  c("***************************************************************");
  as(value, undefined);
  as(value, null);
  as(value, true);
  as(value, false);
  as(value, 0);
  as(value, 1);
  as(value, 2);
  as(value, [0]);
  as(value, [1]);
  as(value, [1,2]);
  as(value, {});
  as(value, {0:0});
  as(value, {0:1});
  as(value, {1:1});
  as(value, function(){});
  as(value, '0');
  as(value, '1');
  as(value, 'true');
  as(value, 'false');
}

check(true);

check(false);

check(undefined);

check(null);

check([0]);
as({},{});
as([],[]);
module.exports = {
  as: as
};

// *** `whatisx` is a function to print out the information about input `x`. ***
function whatisx(x) {
  console.log("======================================================");
  console.log(typeof x); 
  console.log(x); 
  console.log("x is ", x);
}


// * `x` is not declared
whatisx(x);

// * `x` is declared without assignment 
var x;
whatisx(x);

// * `x` is defined as `null`
x = null;
whatisx(x);


// * `x` is defined as `hello`
x = "hello";
whatisx(x);

// * `x` is defined as `123`
x = 123;
whatisx(x);

// * `x` is defined as `123.34`
x = 123.34;
whatisx(x);

// * `x` is defined as `true`
x = true;
whatisx(x);

// * `x` is defined as `function`

x = function(){};
whatisx(x);

// *** variable can be a function !!! ***


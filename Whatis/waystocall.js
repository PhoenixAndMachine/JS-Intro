var c = console.log;
function printTHIS() {
  
  c("=============== What is this ==================");
  c(this);
  c("===============================================");
}

function print(a, b) {
  var s = a + b;
  c("We are printing sum of " + a + " and " + b + ": " + s);

  c("=============== What is this ==================");
  c(this);
  c("===============================================");

  printTHIS();
}


// * classical way to call print
//print(3, 4);

// * call print by `call`
//print.call(null, 7, 9);
//print.call({}, 7, 9);
//print.call({name:'phoenix', age:27});


// * call print by `apply`
// print.apply(null, [8, -1]);
// print.apply({}, [8, -1]);


// * call print by `new`
//new print(6, -12);

// Questions:
// * Where is `call` and `apply` defined
// * What is the first argument in `call` and `apply`
// * What is `new`





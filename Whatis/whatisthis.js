console.log("=================== STEP 1 =======================");
console.log(this);

console.log("=================== STEP 2 =======================");
function greeting(something) {
//    console.log(this);
  console.log(this + " is greeting with " + something);
}


greeting.call("Trantect", "I am hungry.");

greeting("I am not hungry.");

console.log("=================== STEP 3 =======================");

var person = {
  "name": "Trantect",
  "greeting": function(something) {
//    console.log(this);
    console.log(this + " is greeting with " + something);
  }
}


person.greeting("I am here.");
person.greeting.call("Trantect", "I am not here.");

console.log("=================== STEP 4 =======================");

function fn(num, cb) {
  //console.log("The caller of fn is " + fn.caller);
  //console.log(this);
  var that = {base: 8};
  cb.call(that, num*num);
}


function trap(cb) {
  //console.log(this);
  //console.log("The caller of trap is " + trap.caller);
  this.base = 0;
  function p(result) {
   // console.log("The caller of p is " + p.caller);
    console.log(this);
    cb(this.base + result);
  }
  fn(4, p);
};

trap(function(re) {
  console.log(re);
});


console.log("=================== STEP 5 =======================");
var employ = function(name, age) {
  this.age = age;
  this.name = name;

  getName = (function(_this) {
    return function () {
      return _this.name;
    }
  })(this);


  getAge = function() {
    return this.age;
  }
  
  return {
    "getName": getName,
    "getAge": getAge
  }
}



var emily = new employ("Emily", 25);
console.log(emily);

var poly = new employ("Poly", 30);
console.log(poly);


console.log(emily.getName());

console.log(poly.getName());

console.log(typeof x); // undefined

var x;
console.log(typeof x); // undefined
console.log(x); // undefined

x = null;
console.log(typeof x); //object
console.log(x); //null

x = "hello";
console.log(typeof x); //string


x = 123;
console.log(typeof x); //number

x = 123.34;
console.log(typeof x); //number

x = true;
console.log(typeof x); //boolean


x = function(){};
console.log(typeof x); //function




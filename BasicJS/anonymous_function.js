/* Anonymous function, excuted immediately */

(function(){
	var foo = 10;
	var bar = 2;
	console.log(foo * bar);
})();


/* An anonymous function with arguments */

(function(foo, bar) {
	console.log(foo * bar);
})(10,2);

/* An anonymous function that returns a value */

var baz = (function(foo, bar) {
	return foo*bar;
})(10,2);

console.log(baz);

/* An anonymous function used as closure */

var baz;

(function() {
	var foo = 10;
	var bar = 2;
	baz = function() {
		return foo*bar;
	};
})();

/* 
Javascript has function level scope.
This means a variable defined within a function is not accessible outside of it.
*/
try {
	console.log(foo); 
}
catch(err) {
	console.log(err); // [ReferenceError: foo is not defined]
}
try {

 	console.log(bar); 
}
catch(err) {
	console.log(err); // [ReferenceError: bar is not defined]
}

/*
Javascript has lexcially level scope.
This means functions run in the scope they are defined in, not the scope they are excuted in.
*/
console.log(baz());
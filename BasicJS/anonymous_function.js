// *** Anonymous function, excuted immediately ***

(function(){
	var foo = 7;
	var bar = 3;
	console.log(foo * bar);
})();


// *** An anonymous function with arguments ***

(function(foo, bar) {
	console.log(foo * bar);
})(8,2);

// *** An anonymous function that returns a value ***

var baz = (function(foo, bar) {
	return foo*bar;
})(13,5);

console.log(baz);

// *** An anonymous function used as closure ***

var baz;

(function() {
	var foo = 10;
	var bar = 2;
	baz = function() {
		return foo*bar;
	};
})();

 
// Javascript has ***function level*** scope.
// * This means a variable defined within a function is ***NOT*** accessible ***outside*** of it.
try {
	console.log(foo); 
}
catch(err) {
	console.log(err); 
}
try {

 	console.log(bar); 
}
catch(err) {
	console.log(err); 
}


// Javascript has ***lexcially level*** scope.
// * This means functions run in the scope they are ***defined in***, ***NOT*** the scope they are ***excuted in***.
console.log(baz());

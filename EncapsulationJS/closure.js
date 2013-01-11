/*
Scope, Nested Functions and Closure 
*/


/* Example 1 */
function test1(step1, step2) {
	var private_value = 10;

	this.public_value = private_value+2;

	this.public_method = function() {
		console.log("You can see me");
	};

	function private_method() {
		private_value *= 2;
	}

	private_method();
	console.log("step1:" + step1);
	console.log("step2:" + step2);
	return private_value;
}

console.log("----------Run Test -> Result ---------");
console.log(test1(34, 56));
console.log("-------The own property of test-------");
var properties = Object.getOwnPropertyNames(test1);
for(var i=0, length=properties.length; i<length; i++) {
	console.log(properties[i]+": "+test1[properties[i]]);
}
console.log("--------------------------------------");
var f = function() {};
test1.call(f, 12, 34);
console.log("-------The own property of f----------");
var properties = Object.getOwnPropertyNames(f);
for(var i=0, length=properties.length; i<length; i++) {
	console.log(properties[i]+": "+f[properties[i]]);
}
console.log("public_method, public_value are visible outside of this test.")
console.log("**************************************");
console.log("---------Run public_method------------");
f.public_method();
console.log("---------Show public_value------------");
console.log("public_value: " + f.public_value);


try {
	console.log("---------Show private_value------------");
	console.log(f.private_value);
	console.log("---------Run private_method------------");
	f.private_method();
}
catch(err) {
	console.log(err.message);
}
/* Example 2 */
function test2() {
	var private_value = 10;

	function private_method() {
		private_value *= 2;
		return private_value;
	}

	return private_method;
}

var f2 =  test2();
console.log(f2());
console.log(f2());
console.log(f2());

console.log("-------------------Conclusion-------------------------");
console.log("1. Nested function can access vaiables defined in the outer function.");
console.log("2. Vaiables defined in a function can not be accessed from outside.");
console.log("3. Nested function can not be accessed from outside unless it is returned.");
console.log("4. Function is run in the scope it is defined in, not it is excuted in.")
console.log("------------------------------------------------------");





/* add an attribute to a function */

function displayError(msg) {
	displayError.numTimesExcuted++;
	console.log(msg);
}

displayError.numTimesExcuted = 0;

var limit = 10;
while(limit--) {
	displayError("Error "+limit);
}
console.log(displayError.numTimesExcuted); // 10

console.log(displayError.prototype); // {}
console.log(displayError.hasOwnProperty("numTimesExcuted")); //true
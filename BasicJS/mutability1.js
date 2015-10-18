/* add an attribute to a function */

function displayError(msg) {
	console.log('displayError.numTimesExcuted before ++ operator is', displayError.numTimesExcuted);
	displayError.numTimesExcuted++;
	console.log('displayError.numTimesExcuted after ++ operator is', displayError.numTimesExcuted);
	console.log('messages: ', msg);
}

displayError.numTimesExcuted = 0;

var limit = 10;
while(limit--) {
	displayError("Error "+limit);
}
console.log('The last displayError.numTimesExcuted is:',displayError.numTimesExcuted); // 10
console.log(displayError.prototype); // {}
console.log(displayError.hasOwnProperty("numTimesExcuted")); //true
console.log("-------------------------------------------------");
var limit2 = 10;
console.log('limit2 = 10');
while (--limit2) {
  console.log('--limit2 operator: ', limit2);
}
console.log("-------------------------------------------------");
var limit3 = 10;
console.log('limit3 = 10');
while (limit3--) {
  console.log('limit3-- operator: ', limit3);
}

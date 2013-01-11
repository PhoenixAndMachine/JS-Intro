/* Clone function */

function clone(object) {
	function F() {}
	F.prototype = object;
	return new F;
}

/* Composite Object */

var configuration = {
	name: 'default name',
	details: {
		limit_package: 'default limit package',
		bandwidth: 'default bandwidth'
	}
}
configuration.display = function() {
	console.log("Name: " + this.name);
	console.log("limit_package: " + this.details.limit_package);
	console.log("bandwidth: " + this.details.bandwidth);
}

var cf1 = clone(configuration);
var cf2 = clone(configuration);

console.log("---------configuration---------");
configuration.display();
console.log("--------------cf1--------------");
cf1.display();
console.log("--------------cf2--------------");
cf2.display();

cf1.details.bandwidth = 'fresh bandwidth';

console.log("-----cf1's bandwidth is changed---------");
console.log(cf1.details.bandwidth);
console.log("-----Because configuration's bandwidth is changed actually---------");
console.log(configuration.details.bandwidth);
console.log("-----It causes cf2's bandwidth changed------");
console.log(cf2.details.bandwidth);

cf1.details.bandwidth = 'default bandwidth';
/*
	If we want to change a child object embedded in other object, we create a new child object.
*/

cf1.details = {
	limit_package: 'cf1 limit package',
	bandwidth: 'cf1 bandwidth'
}
/*
	But this approach is not good, since cf1 has to know the structure of details 
*/
console.log("---------cf1's own property 'details' is generated----------");
console.log(Object.getOwnPropertyNames(cf1));
console.log(cf1.details!==configuration.details);
console.log("---------configuration---------");
configuration.display();
console.log("--------------cf1--------------");
cf1.display();
console.log("--------------cf2--------------");
cf2.display();



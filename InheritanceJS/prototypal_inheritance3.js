/* Clone function */

function clone(object) {
	function F() {}
	F.prototype = object;
	return new F;
}

/* Composite Object */

var configuration = {
	name: 'default name',
}

configuration.display = function() {
	console.log("Name: " + this.name);
	console.log("limit_package: " + this.details.limit_package);
	console.log("bandwidth: " + this.details.bandwidth);
}

/* method for creating child object */

configuration.createDetails = function() {
	return {
		limit_package: 'default limit package',
		bandwidth: 'default bandwidth'
	}
}

configuration.details = configuration.createDetails();

var cf1 = clone(configuration);
var cf2 = clone(configuration);
cf1.details = configuration.createDetails();
cf1.details.bandwidth = 'cf1 bandwidth';


console.log("---------configuration---------");
configuration.display();
console.log("--------------cf1--------------");
cf1.display();
console.log("--------------cf2--------------");
cf2.display();
/* Mixin Class */

var Mixin = function() {};

Mixin.prototype = {
	serialize: function() {
		var output = [];
		for(key in this) {
			output.push(key + ':' + this[key]);
		}
		return output.join(', \n');
	},
	useless: function() {
		console.log("USELESS FUNCTION");
	}
}


/* Augment function */

function augment(receivingClass, givingClass) {
	for(methodName in givingClass.prototype) {
		if(!receivingClass.prototype[methodName]) {
			receivingClass.prototype[methodName] = givingClass.prototype[methodName];
		}
	}
}


/* Usage */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getAge = function() {
	return this.age;
}

augment(Person, Mixin);

var p = new Person('Bart Van Lierde', 38);

console.log(p.serialize());


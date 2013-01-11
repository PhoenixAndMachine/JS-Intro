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


/* Augment function with improvement */

function augment(receivingClass, givingClass) {

	if(arguments[2]) {
		for (var i=2, length=arguments.length; i<length; i++) {
			if(!receivingClass.prototype[arguments[i]]) {
				receivingClass.prototype[arguments[i]] =givingClass.prototype[arguments[i]];
			}
		};
	}
	else {
		for(methodName in givingClass.prototype) {
			if(!receivingClass.prototype[methodName]) {
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
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

augment(Person, Mixin, 'serialize');

var p = new Person('Bart Van Lierde', 38);

console.log(p.serialize());


/* Add a method to the Function object that can be used to declare methods */


Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
}

/* Anim class */

var Anim = function(name) {
	this.name = name;
};

console.log(Object.getOwnPropertyNames(Anim.prototype)); // [ 'constructor' ]

Anim.method("start", function() {
		console.log("Anim object " + this.name + " starts");
	}
);

Anim.method("stop", function() {
		console.log("Anim object " + this.name + " stops");
	}
);

console.log(Object.getOwnPropertyNames(Anim.prototype)); // [ 'stop', 'constructor', 'start' ]

/* Usage */

var robot = new Anim("robot");

robot.start();
robot.stop();


/* Anim class */

var Anim = function(name) {
	this.name = name;
};

/* 
	Anim has method constructor in its prototype when it is defined as a function
*/
console.log(Object.getOwnPropertyNames(Anim.prototype)); // [ 'constructor' ]


/* Declare method */

Anim.prototype = {
	start: function() {
		console.log("Anim object " + this.name + " starts");
	},
	stop: function() {
		console.log("Anim object " + this.name + " stops");
	}
}

/*
	If you define methods in this way, constructor method will be esrased.
*/
console.log(Object.getOwnPropertyNames(Anim.prototype)); // [ 'start', 'stop' ]



/* Usage */

var robot = new Anim("robot");

robot.start();
robot.stop();

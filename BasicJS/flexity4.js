/* Add a method to Function object which can be used to decalre methods */

Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
	return this;
};

/* Define Anim */

var Anim = function(name) {
	this.name = name;
};

Anim.
method('start', function() {
	console.log(this.name + " starts");
}).
method('stop', function() {
	console.log(this.name + ' stops');
});


var hubot = new Anim("hubot");

hubot.start();
hubot.stop();


/* Anim class */

var Anim = function(name) {
	this.name = name;
};

/* What is Anim */
console.log(Anim); 
/* 
	Output: [Function]
	It is an anonymous function
*/

/* So it is an instance of Function ? */
console.log(Anim instanceof Function);
/*
	Output: true
*/
/*
	How Js knows Anim is an instance of Function, Anim has some attribute called type or class?
	No, it doesn't, but it has something similar, called prototype chain, which is used to inherite
	class in Javascript
*/
console.log(Anim.__proto__===Function.prototype);
/*
	Output: true
	When variable Anim is assigned, JS provides it an attribute called __proto__, which is used to
	define its class. In this case, Anim is an instance of Function.
*/
/*
	So Anim is an instance of Function, well, what it has from Function ?
*/
var AnimOwnProperties = Object.getOwnPropertyNames(Anim);
for(var i=0, length=AnimOwnProperties.length; i<length; i++) {
	console.log(AnimOwnProperties[i]+ " : " + Anim[AnimOwnProperties[i]]);
}
/*
	Output 
		caller : null
		length : 1
		prototype : [object Object]
		arguments : null
		name :
	Explain
		caller: the one which calls Anim
		length: the length of arguments defined in Anim
		prototype: the behavior of Anim's instances should have
		arguments: the arguments of Anim when it is called
		name: the name of function which defines Anim. In this case, anonymous, so empty
*/
/*
	What is in prototype ?
*/
var prototypeOfAnim = Object.getOwnPropertyNames(Anim.prototype);
for(var i=0, length=prototypeOfAnim.length; i<length; i++) {
	console.log(prototypeOfAnim[i]+ " : " + Anim.prototype[prototypeOfAnim[i]]);
}
/*
	Output
		constructor : function (name) {
			this.name = name;
		}

	WoW, So it is the definition of Anim ?
*/
console.log(Anim===Anim.prototype.constructor);
/*
	Output: true
	Yes, Anim.prototype.constructor is referred to Anim itself.
*/


/* declare methods */
 
Anim.prototype.start = function() {
	console.log("Anim object " + this.name + " starts");
};

Anim.prototype.stop = function() {
	console.log("Anim object " + this.name + " stops");
};
/*
There are more stuff defined in Anim.prototype. Let's have a look.
*/
prototypeOfAnim = Object.getOwnPropertyNames(Anim.prototype);
for(var i=0, length=prototypeOfAnim.length; i<length; i++) {
	console.log(prototypeOfAnim[i]+ " : " + Anim.prototype[prototypeOfAnim[i]]);
}
/*
	Output
		constructor : function (name) {
			this.name = name;
		}
		stop : function () {
			console.log("Anim object " + this.name + " stops");
		}
		start : function () {
			console.log("Anim object " + this.name + " starts");
		}
*/

/* Usage */

var robot = new Anim("robot");
var space = new Anim("space");
/*
	So robot and space are instances of Anim, I can prove it by
*/
console.log(robot.__proto__===Anim.prototype);
console.log(space.__proto__===Anim.prototype);
/*
	Output: 
		true
		true
	So they share the same class space, then they should just have one copy for those methods
	in class Anim.
*/
console.log(robot.__proto__===space.__proto__);
console.log(space.start===robot.start);
console.log(space.start===Anim.prototype.start);
/*
	Output:
		true
		true
		true
*/

/*
	Which more attributes or methods do space and robot have ?
*/
prototypeOfspace = Object.getOwnPropertyNames(space);
for(var i=0, length=prototypeOfspace.length; i<length; i++) {
	console.log(prototypeOfspace[i]+ " : " + space[prototypeOfspace[i]]);
}
/*
	Output
		name : space

*/
robot.start();
robot.stop();



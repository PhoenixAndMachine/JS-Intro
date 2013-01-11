Interface = require('./interface');

EmotionalBot = new Interface('EmotionalBot', ['cry', 'smile', 'laugh', 'being_jealous']);

RationalBot = new Interface('RationalBot', ['calculate', 'reasoning']);

var SmartBot = function(name, gender) {
	this.name = name;
	this.gender = gender;
} 

var robot = new SmartBot('Sheldon', 'ladyboy');

function action(object) {
	try {
		console.log("User Interface.ensureImplements can ensure the object has implemented methods from interfaces.")
		Interface.ensureImplements(object, EmotionalBot, RationalBot);
		object.cry();
		object.calculate();
		object.smile();
		object.reasoning();
		object.being_jealous();
	}
	catch(err) {
		console.log(err);
	}
}
action(robot);

SmartBot.prototype.cry = function() {
	console.log(this.name+" is crying.");
};

SmartBot.prototype.smile = function() {
	console.log(this.name+" is smile.");
};

SmartBot.prototype.laugh = function() {
	console.log(this.name+" is laughing.");
};

SmartBot.prototype.being_jealous = function() {
	console.log(this.name+" is jealous.");
};

SmartBot.prototype.calculate = function() {
	console.log(this.name+" can calculate.");
};

SmartBot.prototype.reasoning = function() {
	console.log(this.name+" can do reasoning.");
};

action(robot);
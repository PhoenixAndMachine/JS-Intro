/* Emulate interfaces with duck typing */

Interface = require('./interface');



/* Usage */

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

function show() {
	console.log("show function");
}

var CompositeForm = function(id, method, action) {
	this.id = id;
	this.method = method;
	this.action = action;
}

var cf = new CompositeForm("cf", "show", show);


function test(object) {
	try {
		console.log("User Interface.ensureImplements can ensure the object has implemented methods from interfaces.")
		Interface.ensureImplements(object, Composite, FormItem);
		object.add(1);
		object.getChild(1);
		object.save(1);
		object.remove(1);
	}
	catch(err) {
		console.log(err);
	}
}

test(cf);











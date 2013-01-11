/* Emulate interface with attribute checking */

/*

Interface Composite {
	function add(child);
	function remove(child);
	function getChild(child);
}


Interface FormItem {
	function save();
}
*/


var CompositeForm = function(id, method, action) {
	this.id = id;
	this.method = method;
	this.action = action;
	this.implementsInterfaces = ['Composite', 'FormItem'];
}

CompositeForm.prototype.toString = function() {
	return "CompositeForm " + this.id;
}

function implement(object) {
	/* check whether object implements required interfaces */
	if(arguments.length<2) {
		throw new Error("Method 'Implement' should at least have 2 arguments, first one is an object, second and more are interfaces.");
	}
	for(var i=1, length=arguments.length; i<length; i++) {
		interface_name = arguments[i];
		implemented_interfaces = object.implementsInterfaces;
		if(implemented_interfaces.indexOf(interface_name)==-1) {
			return false;
		} 
	}
	return true;
}

function show() {
	console.log("Show method.");
}

var cf = new CompositeForm("cf", "show", show);

function test1(object) {
	console.log("-----------------------TEST1--------------------");
	try {
		if(!implement(cf, 'Composite', 'FormItem')) {
			throw new Error("Object does not implement a required interface.");
		}
	}
	catch(err) {
		console.log(err);
	}
}
function test2(object) {		
	console.log("-----------------------TEST2--------------------");
	console.log("---The program detect the interface which the object doesn't implement---");
	try {
		if(!implement(cf, 'Composite', 'FormItem', 'Strange')) {
			throw new Error("Object does not implement a required interface.");
		}
	}
	catch(err) {
		console.log(err);
	}
}

function test3(object) {
	console.log("-----------------------TEST3--------------------");
	console.log("---The program can not sure object really implements the interfaces---");
	try {
		if(!implement(cf, 'Composite', 'FormItem')) {
			throw new Error("Object does not implement a required interface.");
		}
		cf.add(1);
		cf.getChild(1);
		cf.save(1);
		cf.remove(1);
	}
	catch(err) {
		console.log(err);
	}
	
}

test1(cf);
test2(cf);
test3(cf);


/* Emulate interfaces with duck typing */

/* Define interface */

var Interface = function(name, methods) {
	/*
		name: the name of interface
		methods: the methods which interface defines
	*/
	if(arguments.length != 2) {
		throw new Error("Interface constructor called with " + arguments.length + 
			" arguments, but expected 2.");
	}
	this.name = name;
	this.methods = [];
	for(var i=0, length=methods.length; i<length; i++) {
		if(typeof methods[i] !== 'string') {
			throw new Error("Interface constructor expects method names to be " +
				" passed in as a string.");
		}
		this.methods.push(methods[i]);
	}
};

Interface.ensureImplements = function(object) {
	if(arguments.length < 2) {
		throw new Error("Function Interface.ensureImplements called with " + arguments.length +
			" arguments, but expected at least 2.");
	}
	for(var i=1, length=arguments.length; i<length; i++) {
		var interface = arguments[i];
	
		if(interface.constructor !== Interface) {
			throw new Error("Interface.ensureImplements expects instance of Interface.");
		}

		for(var j=0, method_length=interface.methods.length; j<method_length; j++) {
			var method_name = interface.methods[j];
			//console.log(method_name);
			if(!object[method_name] || typeof object[method_name] !== 'function') {
				throw new Error("Function.ensureImplements: object does not implement the " +
					interface.name + " interface. Method " + method_name + " was not found.");
			}
		}
	}
};



module.exports = Interface;




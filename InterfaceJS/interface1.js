/* Describe interface with comments */

/*

interface Composite {
	function add(child);
	function remove(child);
	function getChild(index);
}

interface FormItem {
	function save();
}

*/

var CompositeForm = function(id, method, action) {
	this.id = id;
	this.method = method;
	this.action = action;
	console.log("-----CompositeForm should implement interfaces Composite and FormItem.-----");
};

/* Overwritten toString method of object for debugging */
CompositeForm.prototype.toString = function() {
	return "CompositeForm " + this.id;
}

CompositeForm.prototype.add = function(child) {
	console.log("YES: CompositeForm implements add method in interface Composite.");
};


CompositeForm.prototype.remove = function(child) {
	console.log("YES: CompositeForm implements remove method in interface Composite.");
};


CompositeForm.prototype.getChild = function(index) {
	console.log("YES: CompositeForm implements getChild method in interface Composite.");
};

/*
CompositeForm.prototype.save = function(child) {
	console.log("YES: CompositeForm implements save method in interface FormItem.");
};
*/

function show() {
	console.log("It is a show function");
}

function test() {
	var cf = new CompositeForm("cf", "show", show);
	console.log(">>> We want to use cf.add, cf.remove, cf.getChild, cf.save, but we don't know whether CompositeForm has implemented interfaces or not.");
	try {
		cf.add(1);
		cf.getChild(1);
		cf.save(1);
		cf.remove(1);
	}
	catch(err) {
		//console.log(Object.getOwnPropertyNames(err));	
		console.log("NO: " + err);
	}
}

test();


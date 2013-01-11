/* Extend function */

function extend(subClass, superClass) {
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;

	subClass.superclass = superClass.prototype;
	if(superClass.prototype.constructor==Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}

/* Person */

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

/* Author */

function Author(name, age, books) {
	Author.superclass.constructor.call(this, name, age);
	this.books = books;
}
extend(Author, Person);

/*
function Programmer(name, age, projects) {
	Author.superclass.constructor.call(this, name, age);
	this.projects = projects;
}
extend(Programmer, Person);

console.log(Author.prototype!==Programmer.prototype);
console.log(Author.prototype.__proto__.getName === Person.prototype.getName);
console.log(Programmer.prototype.__proto__.getName === Person.prototype.getName);
console.log(Programmer.prototype.__proto__===Author.prototype.__proto__);
*/

Author.prototype.getBooks = function() {
	return this.books;
}

Author.prototype.getName = function() {
	var name = Author.superclass.getName.call(this); // be able to call methods of superclass
	return name + ', Author of ' + this.getBooks().join(', ');
}

/* Usage */
var bart = new Author('Bart Van lierde', 38, ['Zot van A']);

console.log("----------------bart can call its own properties--------------");
console.log(Object.getOwnPropertyNames(bart)); // [ 'books', 'name', 'age' ]
console.log("----------------bart is an instance of Author-----------------");
console.log(bart instanceof Author); // true
console.log(bart.__proto__===Author.prototype); // true
console.log("----------------bart can call Author's methods(improved)----------------");
console.log(Author.prototype); 
/*
	Output
		{ 
			constructor: { [Function: Author] superclass: { getName: [Function], getAge: [Function] } },
		  	getBooks: [Function],
		  	getName: [Function] // overwritten in Author.prototype.getName
		}
*/

console.log("----------------bart is an instance of Person-----------------");
console.log(bart instanceof Person); // true

console.log("----------------bart can call Person's methods--------------");
console.log(bart.__proto__.__proto__); // { getName: [Function], getAge: [Function] }


console.log(bart.getName());



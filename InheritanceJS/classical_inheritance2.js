/* Classical Inheritance */

/* Prototype Chain */

/* Class Person */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype = {
	getName : function() {
		return this.name;
	},
	getAge : function() {
		return this.age;
	}
};

/* Class Author extends Person */

function Author(name, age, books) {
	Person.call(this, name, age);
	this.books = books;
}

Author.prototype = {} ;
Author.prototype.constructor = Author;
Author.prototype.getBooks = function() {
	return this.books;
};
Author.prototype.display = function () {
	console.log("-------------------"+ this.getName() +"------------------");
	console.log("NAME: " + this.getName());
	console.log("AGE: " + this.getAge());
	console.log("Books: " + this.getBooks());
}

/* Define the inheritance relationship */
Author.prototype.__proto__ = Person.prototype;

var bart = new Author('Bart Van lierde', 38, ['Zot van A']);

console.log("----------------bart can call its own properties--------------");
console.log(Object.getOwnPropertyNames(bart)); // [ 'books', 'name', 'age' ]
console.log("----------------bart is an instance of Author-----------------");
console.log(bart instanceof Author); // true
console.log(bart.__proto__===Author.prototype); // true
console.log("----------------bart can call Author's methods(improved)----------------");
console.log(Author.prototype); // { constructor: [Function: Author], getBooks: [Function] }


console.log("----------------bart is an instance of Person-----------------");
console.log(bart instanceof Person); // true

console.log("----------------bart can call Person's methods--------------");
console.log(bart.__proto__.__proto__); // { getName: [Function], getAge: [Function] }

var phoenix = new Author('phoenix', 27, ['Dummy']);
phoenix.display();
/*
	NAME: phoenix
	AGE: 27
	Books: Dummy
*/
bart.display();
/*
	NAME: Bart Van lierde
	AGE: 38
	Books: Zot van A
*/



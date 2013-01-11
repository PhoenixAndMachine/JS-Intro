/* Abstract from inheritance1.js and inheritance2.js */

/* Extend function */

function extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
}

/* Class Person */
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

/* Class Author */
function Author(name, age, books) {
	Person.call(this, name, age); // Person is explicitly called, not good
	this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function() {
	return this.books;
}

var bart = new Author('Bart Van lierde', 38, ['Zot van A']);
console.log("---------------Methods can be called from its own properties----------------");
console.log(Object.getOwnPropertyNames(bart)); // [ 'name', 'books', 'age' ]
console.log("---------------bart inherits from Author-----------------");
console.log(bart.__proto__===Author.prototype); // true
console.log("---------------Methods can be called from bart's father(improved)-----------------");
console.log(Author.prototype); // { constructor: [Function: Author], getBooks: [Function] }

console.log("---------------Author's prototype inherits from Person------------------");
console.log(Author.prototype.__proto__===Person.prototype); // true
console.log("---------------Methods can be called from bart's grandfather------------");
console.log(Person.prototype); // { getName: [Function], getAge: [Function] }

console.log("----------------------bart is an instance of Author ---------------------");
console.log(bart instanceof Author); // true
console.log("----------------------bart is an instance of Person ---------------------");
console.log(bart instanceof Person); // true


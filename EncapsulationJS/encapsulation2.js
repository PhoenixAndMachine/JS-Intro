/*
Private Methods Using a Naming Convention

Using underscore naming the attributes and methods which are intented to be private.
It is NOT a real private, just keep programmer accidentally changes data by applying direct access.
*/

Interface = require('../chapter2/interface')
validate_isbn = require('./validation_isbn')

/* Explicitely inform all programmers to use the methods defined in the interface */
var Publication = new Interface('Publication', 
	['getIsbn', 'setIsbn', 'getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'display']);


/* Define Book */
var Book = function(isbn, title, author) {
	this.setIsbn(isbn);
	this.setTitle(title);
	this.setAuthor(author);
}

/* Book implements interface Publication */

Book.prototype = {
	_checkIsbn: function(isbn) {
		return validate_isbn(isbn);
	},

	getIsbn: function() {
		return this._isbn;
	},

	setIsbn: function(isbn) {
		if(!this._checkIsbn(isbn)) throw new Error('Book: Invalid ISBN');
		this._isbn = isbn;
	},

	getTitle: function() {
		return this._title;
	},

	setTitle: function(title) {
		this._title = title || "No title specified!";
	},

	getAuthor: function() {
		return this._author;
	},

	setAuthor: function(author) {
		this._author = author || "No author specified!";
	},

	display: function() {
		if(this._checkIsbn(this.getIsbn())) {
			console.log("------------Book Info-------------");
			console.log("ISBN: " + this.getIsbn());
			console.log("Title: " + this.getTitle());
			console.log("Author: " + this.getAuthor());
			console.log("----------------------------------");
		}
		else {
			console.log("Book: invalid isbn");
		}
	}
};

/* Usage */

var book = new Book('978-1-59059-908-2', "Pro Javascript Design Patterns", "Ross Harmes");

book.display();

console.log("******** Good Case by using setIsbn which is defined in Interface ***********");
book.setIsbn('1-59059-908-X');
book.display();

console.log('******** Good Case by modifying isbn directly ************** ');
/*
Programmer accidently accesses isbn directly, 
which will not affact the real data because of the naming converntion
*/
book.isbn = "hello world"; 
book.display();


console.log('******** Bad Case by modifying isbn directly ************** ');
/*
Programmer ignores the setIsbn method by purpose and intents to change data
which is still not safe
*/
book._isbn = "hello world"; 
book.display();



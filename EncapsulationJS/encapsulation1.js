/*
Fully Exposed Object

Programmer can access the attributes and methods directly without applying the methods defined 
in interface, which is dangerous for modifying data.

*/

Interface = require('../InterfaceJS/interface')
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
	checkIsbn: function(isbn) {
		return validate_isbn(isbn);
	},

	getIsbn: function() {
		return this.isbn;
	},

	setIsbn: function(isbn) {
		if(!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN');
		this.isbn = isbn;
	},

	getTitle: function() {
		return this.title;
	},

	setTitle: function(title) {
		this.title = title || "No title specified!";
	},

	getAuthor: function() {
		return this.author;
	},

	setAuthor: function(author) {
		this.author = author || "No author specified!";
	},

	display: function() {
		if(validate_isbn(this.getIsbn())) {
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

console.log('******** Bad Case by modifying isbn directly ************** ');
book.isbn = "hello world"; // Programmer still can access isbn directly, which is not safe.
book.display();

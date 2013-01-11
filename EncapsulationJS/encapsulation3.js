/*
Private members through closure
*/

Interface = require('../chapter2/interface')
validate_isbn = require('./validation_isbn')

/* Explicitely inform all programmers to use the methods defined in the interface */
var Publication = new Interface('Publication', 
	['getIsbn', 'setIsbn', 'getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'display']);


var Book = function(newIsbn, newTitle, newAuthor) {

	// private attributes
	var isbn, title, author;

	// private method
	function checkIsbn(isbn) {
		return validate_isbn(isbn);
	};

	// Privileged method
	this.getIsbn = function () {
		return isbn;
	};

	this.setIsbn = function(newIsbn) {
		if(!checkIsbn(newIsbn)) throw new Error("Book: Invalid ISBN.");
		isbn = newIsbn;
	};

	this.getAuthor = function() {
		return author;
	};

	this.setAuthor = function(newAuthor) {
		author = newAuthor || "No Author Specified";
	};

	this.getTitle = function() {
		return title;
	};

	this.setTitle = function(newTitle) {
		title = newTitle || "No Title Specified";
	};

	// Constructor code
	this.setIsbn(newIsbn);
	this.setTitle(newTitle);
	this.setAuthor(newAuthor);
};


// Public, non-privileged methods.

Book.prototype = {
	display: function() {
		console.log("------------Book Info-------------");
		console.log("ISBN: " + this.getIsbn());
		console.log("Title: " + this.getTitle());
		console.log("Author: " + this.getAuthor());
		console.log("----------------------------------");
	}
};

/* Usage */

var book = new Book('978-1-59059-908-2', "Pro Javascript Design Patterns", "Ross Harmes");
book.display();

console.log("******** Good Case by using setIsbn which is defined in Interface ***********");
book.setIsbn('1-59059-908-X');
book.display();

console.log('******** Good Case by modifying isbn directly ************** ');
book.isbn = "hello world"; // Programmer can not access isbn directly, which is safe.
book.display();








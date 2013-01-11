/* Static methods and Attributes */

Interface = require('../chapter2/interface')
validate_isbn = require('./validation_isbn')

/* Explicitely inform all programmers to use the methods defined in the interface */
var Publication = new Interface('Publication', 
	['getIsbn', 'setIsbn', 'getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'display']);


var Book = (function() {

	// Private static attributes
	var numOfBooks = 0;

	// Private static method
	function checkIsbn(isbn) {
		return validate_isbn(isbn);
	};

	var constructor_fn = function(newIsbn, newTitle, newAuthor) {
		// Private attributes
		var isbn, title, author;

		// Privileged methods
		this.getIsbn = function() {
			return isbn;
		};

		this.setIsbn = function(newIsbn) {
			if(!checkIsbn(newIsbn)) throw new Error("Book: Invalid ISBN");
			isbn = newIsbn;
		};

		this.getTitle = function() {
			return title;
		};

		this.setTitle = function(newTitle) {
			title = newTitle || "No Title Specified";
		};

		this.getAuthor = function() {
			return author;
		};

		this.setAuthor = function(newAuthor) {
			author = newAuthor || "No Author Specified";
		};

		// constructor code
		numOfBooks++;

		if(numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be created.');

		this.setIsbn(newIsbn);
		this.setTitle(newTitle);
		this.setAuthor(newAuthor);
	};
	// Public static method
	constructor_fn.NumOfBooks = function() {
		return numOfBooks;
	};
	// return the constructor
	return constructor_fn;
})();

// Public static method
Book.convertToTitleCase = function(inputString) {
	console.log(inputString.toUpperCase());
};

// Public, non-privileged methods
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
console.log("----------------- The number of Books -------------------");
console.log(Book.NumOfBooks());  // 0

var book = new Book('978-1-59059-908-2', "Pro Javascript Design Patterns", "Ross Harmes");
book.display();
/*
------------Book Info-------------
ISBN: 978-1-59059-908-2
Title: Pro Javascript Design Patterns
Author: Ross Harmes
----------------------------------
*/
console.log("----------------- The number of Books -------------------");
console.log(Book.NumOfBooks());  // 1

console.log("******** Good Case by using setIsbn which is defined in Interface ***********");
book.setIsbn('1-59059-908-X');
book.display();
/*
------------Book Info-------------
ISBN: 1-59059-908-X
Title: Pro Javascript Design Patterns
Author: Ross Harmes
----------------------------------
*/
console.log("----------------- The number of Books -------------------");
console.log(Book.NumOfBooks());  // 1

console.log('******** Good Case by modifying isbn directly ************** ');
book.isbn = "hello world"; // Programmer can not access isbn directly, which is safe.
book.display();
/*
------------Book Info-------------
ISBN: 1-59059-908-X
Title: Pro Javascript Design Patterns
Author: Ross Harmes
----------------------------------
*/
console.log("----------------- The number of Books -------------------");
console.log(Book.NumOfBooks());  // 1

var book1 = new Book('978-1-59059-908-2', "Pro Javascript Design Patterns", "Ross Harmes");
book1.display();

/*
------------Book Info-------------
ISBN: 978-1-59059-908-2
Title: Pro Javascript Design Patterns
Author: Ross Harmes
----------------------------------
*/
console.log("----------------- The number of Books -------------------");
console.log(Book.NumOfBooks());  // 2







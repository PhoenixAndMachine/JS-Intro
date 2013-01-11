/* Clone function */

function clone(object) {
	function F() {}
	F.prototype = object;
	return new F;
}

/* Person prototype object */

var Person = {
	name: 'default name',
	works: [],
	getName: function() {
		return this.name;
	},
	getWorks: function() {
		return this.works;
	},
	display: function() {
		console.log("Name: " + this.name);
		console.log("Works: " + this.works);
	}

}


/* Author prototype object */

var Author = clone(Person);

console.log("---------------Author inherits from Person--------------");
console.log(Author.__proto__===Person);
console.log("---------------Author has no own properties-------------");
console.log(Object.getOwnPropertyNames(Author));
console.log(Object.getOwnPropertyNames(Person));
console.log("---------------Author has properties from Person object--------------");
for(property in Person) {
	console.log(">>" + property);
	console.log(Author.__proto__[property] === Author[property]);
	console.log(Author[property] === Person[property]);
}
console.log("---------------Author Information---------------");
Author.display();

/* Programmer prototype object */

var Programmer = clone(Person);

console.log("--------------Programmer inherits from Person--------------");
console.log(Programmer.__proto__===Person);
console.log("--------------Programmer has no own properties-------------");
console.log(Object.getOwnPropertyNames(Programmer));
console.log("--------------Programmer has properties from Person object--------------");
for(property in Person) {
	console.log(">>" + property);
	console.log(Programmer.__proto__[property] === Programmer[property]);
	console.log(Programmer[property] === Person[property]);
}
console.log("--------------Programmer information------------");
Programmer.display();


console.log("-------------Programmer and Author share the same copy of properties--------------");
for(property in Person) {
	console.log(">>" + property);
	console.log(Author.__proto__[property] === Programmer.__proto__[property]);
	console.log(Author[property] === Programmer[property]);
}


console.log("------------Asymmetrical Reading and Writing---------------");

Author.name = "Author name";
console.log("------------Author's own property 'name' is created---------------");
console.log(Object.getOwnPropertyNames(Author));
console.log("------------Author's name is its own property, not the one from Person-------------");
console.log(Author.name!==Author.__proto__.name);
console.log(Author.name!==Person.name);
console.log("----Programmer's name is still from Person, since the own property is never created----");
console.log(Programmer.name===Programmer.__proto__.name);
console.log("------------Author Information------------");
Author.display();
console.log("------------Programmer Information-------------");
Programmer.display();

Author.works.push("Book");
console.log("-----------Author's own property 'book' is Not created-------------");
console.log(Object.getOwnPropertyNames(Author));
console.log(Author.works===Author.__proto__.works);
console.log(Author.works===Person.works);
console.log("-----------Author Informaton-----------");
Author.display();
console.log("-----------Programmer Information------------");
Programmer.display();
console.log("Person's property works changed by Author, but Author and Programmer has NO property 'works' of their own");
console.log(Author.works===Person.works);
console.log(Programmer.works===Person.works);
console.log(Object.getOwnPropertyNames(Author));
console.log(Object.getOwnPropertyNames(Programmer));


Author.works.pop(); // clean the modification befrore
console.log("---------Define Author's own property 'works' ----------");
Author.works = [];
console.log(Object.getOwnPropertyNames(Author));
Author.works.push("Book");
Author.works.push("Magzine");
console.log("-----------Author Information---------");
Author.display();

console.log("--------Define Programmer's own properties-----------");
Programmer.name = "Programmer name";
Programmer.works = [];
console.log(Object.getOwnPropertyNames(Programmer));
Programmer.works.push("Js Project");
Programmer.works.push("Python Project");
console.log("---------Programmer Information---------");
Programmer.display();











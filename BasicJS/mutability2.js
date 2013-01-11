/* Class Person */

function Person(name, age) {
	this.name = name;
	this.age = age;
}


console.log("---------------Person inherits Function----------------")
console.log(Person.__proto__===Function.prototype); // true

console.log("---------------The prototype of Person----------------");
console.log(Object.getOwnPropertyNames(Person.prototype));

/*
	Output
		[ 'constructor' ]
*/

Person.prototype.getName = function() {
	return this.name;
};

Person.prototype.getAge = function() {
	return this.age;

};

console.log("---------------The prototype of Person----------------");
console.log(Object.getOwnPropertyNames(Person.prototype));
/*
	Output
		[ 'getName', 'getAge', 'constructor' ]
*/

console.log(Object.getOwnPropertyNames(Person));
/*
	Output
		[ 'length', 'arguments', 'caller', 'prototype', 'name' ]
*/

console.log(Object.getOwnPropertyNames(Person.__proto__));
/*
	Output
		[ 'toString',
		  'call',
		  'caller',
		  'bind',
		  'apply',
		  'length',
		  'name',
		  'constructor',
		  'arguments' ]
*/

console.log(Person.constructor===Person.__proto__.constructor);
/*
	Output
		true
*/

console.log("---------------The superclass of Person is Function--------------------------");
console.log(Person.__proto__===Function.prototype);
/*
	Output
		true
*/

/* Instantiate Person */

var alice = new Person("Alice", 93);



console.log("---------------The prototype of alice----------------");
console.log(Object.getOwnPropertyNames(alice));
/*
	Output
		[ 'name', 'age' ]

*/

console.log(alice.constructor===alice.__proto__.constructor); // true

console.log(alice.__proto__===Person.prototype); // true

console.log(alice.getName===Person.prototype.getName); //true

console.log(alice.getAge===Person.prototype.getAge); // true

console.log("--------------Alice--------------")
console.log("Name: " + alice.getName()); // Name: Alice
console.log("Age: " + alice.getAge()); // Age: 93


console.log(alice.prototype); // undefined




/* Modify the class */

Person.prototype.getGreeting = function() {
	return "Hi " + this.getName() + "!";
}
console.log("---------------The prototype of Person------------------");
console.log(Object.getOwnPropertyNames(Person.prototype));

var bill = new Person("Bill", 27);


console.log("--------------Alice--------------")
console.log("Name: " + alice.getName());
console.log("Age: " + alice.getAge());
console.log("Greet: " + alice.getGreeting());
console.log("--------------Bill---------------")
console.log("Name: " + bill.getName());
console.log("Age: " + bill.getAge());
console.log("Greet: " + bill.getGreeting());


console.log("-------------------The __proto__ of instance is the class's prototype.------------------");
console.log(alice.__proto__ === bill.__proto__);
console.log(bill.__proto__ === Person.prototype);


console.log("-------------------The methods of instance used are defined in the class's prototype.------------------");
console.log(alice.getAge === bill.getAge);
console.log(alice.getAge === Person.prototype.getAge);
console.log(alice.__proto__.getAge === Person.prototype.getAge);



alice.displayGreeting = function() {
	console.log(this.getGreeting());
}

console.log("alice has own method called displayGreeting ? " + alice.hasOwnProperty("displayGreeting"));

alice.displayGreeting();

console.log("bill has own method called displayGreeting ? " + bill.hasOwnProperty("displayGreeting"));

bill.displayGreeting = function() {
	console.log(this.getGreeting());
}


console.log("------Those methods defined in instance are not equal, they are stored one copy in each instance.-----")
console.log(alice.displayGreeting === bill.displayGreeting);

alice.prototype = {
	test: function() {
		throw new Error("It will not be called by alice, only some instances inheriting alice");
	}
}

try {
	alice.test();
}
catch(err) {
	console.log(err);
}













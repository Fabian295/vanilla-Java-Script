//  -----------  function --------

// function sayHello() {
// 	console.log('hello');
// }

// // You have to call the function to work!
// sayHello();

// function sayHello(greet) {
// 	// const greet = 'Hello';
// 	return `${greet} everybody here!`;
// }

// console.log(sayHello('Hello'));

//  ------------ Arrow Function --------------
// const sayHello = (greet) => `${greet} everybody in developer land!`;

// console.log(sayHello('Hello'));

//  ------------ Constructor Function  ----------------
// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = new Date(dob);
// 	// Je kan ook methods aan het 'this.person' object laten refereren
// 	this.getBirthYear = function() {
// 		return this.dob.getFullYear();
// 	};
// 	this.getFullName = function() {
// 		return `${this.firstName} ${this.lastName}`;
// 	};
// }

// //  Instantiate  object
// const person1 = new Person('John', 'Doe', '4-26-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// console.log(person1.getBirthYear());
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// console.log(person1.dob.toDateString());
// console.log(person2.dob.toDateString());

// console.log(person2.dob.getFullYear());
// console.log(person1.dob.getDate());
// console.log(person1.dob.getMonth());
// console.log(person1.dob.getFullYear());

// ----- Het is beter om de "method" in de prototype op te nemen! -----
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	// Je kan ook methods aan het 'this.person' object laten refereren
	// this.getBirthYear = function() {
	// 	return this.dob.getFullYear();
	// };
	// this.getFullName = function() {
	// 	return `${this.firstName} ${this.lastName}`;
	// };
}

Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};

//  Instantiate  object
const person1 = new Person('John', 'Doe', '4-26-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());

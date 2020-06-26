// Constructor function, allways use capital letter

function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date();
}

Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const person1 = new Person('Fabian', 'Kanhai', '16-06-1970');
const person2 = new Person('Sandra', 'Smith', '12-05-1980');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person1);

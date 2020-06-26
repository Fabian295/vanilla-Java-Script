class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear() {
		return this.dob.getFullYear();
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person1 = new Person('John', 'Doe', '4-26-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1);

//Arrays of Objects
// Efficiently combining and chaining Array methods and Arrow functions
// person.email.indexOf("@replicant.io") > -1
//Find the names of all the people who have "replicant.io" emails

let people = [
	{ id: 123, name: 'Rick Deckard', email: 'rick@bladerunner.org' },
	{ id: 456, name: 'Roy Batty', email: 'roy@replicant.io' },
	{ id: 789, name: 'J.F. Sebastian', email: 'j.f@tyler.com' },
	{ id: 258, name: 'Pris', email: 'pris@replicant.io' }
];

//Two step version

// console.log(replicants);
// let x = people.map((person) => {
// 	return person.email.indexOf('@');
// });
// email.indexOf('@');
// let x = people.map((person) => {
// 	return person.email.indexOf('@replicant.io') > -1;
// });
// console.log(x);
// let replicants = people.filter(function(person) {
// 	return person.email.indexOf('@replicant.io') > -1;
// });

// let names = replicants.map((person) => {
// 	return person.name;
// });
// console.log('List of replicant names', names);

// of je kan ze aan elkaar chainen
let replicants = people
	.filter(function(person) {
		return person.email.indexOf('@replicant.io') > -1;
	})
	.map((person) => {
		return person.name;
	});
console.log('List of replicant names', replicants);

let rn = people.filter((person) => person.email.indexOf('@replicant.io') > -1).map((person) => person.name);
console.log('List of replicant names', rn);

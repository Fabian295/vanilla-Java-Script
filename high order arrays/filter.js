//Array filter() method

let numbers = [ 23, 45, 14, 66, 94, 33, 4, 9 ];
let breakPoint = 30;

// let smallNumbers = numbers.filter(function(num) {
// 	return num < breakPoint;
// });

//of met de fat arrow function
let smallNumbers = numbers.filter((num) => num < breakPoint);

let bigNumbers = numbers.filter(checkBig);

function checkBig(num) {
	return num > breakPoint;
}

let oddNumbers = numbers.filter(function(num) {
	//let remainder = num % 2;
	//0, 1, 10, 11, 100, 101, 110, 111, 1000
	//0, 1, 2,  3,   4,   5,   6,   7,   8
	return num & 1;
});

console.log('\nSmaller than 30:', smallNumbers);
console.log('\n Larger than 30:', bigNumbers);
console.log('\n Odd numbers:', oddNumbers);

// const collection = [
// 	{
// 		id: 1,
// 		name: 'Peter',
// 		lastName: 'de Vries',
// 		email: 'peter@mail.com'
// 	},
// 	{
// 		id: 2,
// 		name: 'jan',
// 		lastName: 'Jansen',
// 		email: 'jan@mail.com'
// 	},
// 	{
// 		id: 3,
// 		name: 'loes',
// 		lastName: 'deWit',
// 		email: 'loes@mail.com'
// 	}
// ];

// // let contact = [];

// let contacts = collection.filter((index, item) => {
// 	// contact.push(index, item);
// 	return index;
// });

// console.log(contacts);

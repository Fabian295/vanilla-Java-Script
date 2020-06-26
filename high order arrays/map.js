// Array map() method

let dwarves = [
	'Bifur',
	'Bofur',
	'Bombur',
	'Fili',
	'Kili',
	'Oin',
	'Gloin',
	'Thorin',
	'Balin',
	'Dwalin',
	'Nori',
	'Dori'
];

// Bepaal de lengte van iedere naam en save het in een array

let nameLengths = dwarves.map((item, index, array) => {
	return item.length;
});
console.log(nameLengths);

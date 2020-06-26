// var res;

function getRandomArbitrary(min, max, res) {
	res = Math.random() * (max - min) + min;
	// console.log(res);
	return res;
}
// getRandomArbitrary(1, 2);

function btnClick(e) {
	res = getRandomArbitrary(1, 2);
	let div = document.getElementById('output');
	// let p = document.createElement('p');
	div.textContent = res;
	// div.appendChild(p);
}

// document.addEventListener('DOMContentLoaded', (e) => {
// 	let div = document.getElementById('output');
// 	let p = document.createElement('p');
// 	p.textContent = res;
// 	div.appendChild(p);
// });

let knop = document.getElementById('knop');
knop.addEventListener('click', btnClick);

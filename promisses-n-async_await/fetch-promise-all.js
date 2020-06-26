const posts = [
	{ id: 1, title: 'Post One', body: 'This is post one' },
	{ id: 2, title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		let output2 = '';
		posts.forEach((post, index) => {
			output += `<li>${post.id} ${post.title}</li>`;
			output2 += `<li>${post.body}</li>`;
		});
		let outputBox = document.getElementById('outputbox');
		let p = document.createElement('p');
		// p.textContent = output;
		p.innerHTML = output2;
		outputBox.appendChild(p);
		document.body.innerHTML = output + output2;
	}, 1000);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if (!error) {
				resolve();
			} else {
				reject('Error: Something went wrong');
			}
		}, 2000);
	});
}

const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, ' Goodbey'));

let uri = 'https://jsonplaceholder.typicode.com/users';
const promise4 = fetch(uri).then((res) => res.json());

Promise.all([ promise1, promise2, promise3, promise4 ]).then((values) => {
	let outputBox = document.getElementById('outputbox');
	let div = document.createElement('div');
	div.innerHTML = values;
	let prom4 = JSON.stringify(values[3]);
	let p = document.createElement('p');
	p.innerHTML = prom4;
	outputBox.appendChild(div);
	outputBox.appendChild(p);
	console.log(outputBox);
	console.log(values);
});

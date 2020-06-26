const posts = [
	{ id: 1, title: 'Post One', body: 'This is post one' },
	{ id: 2, title: 'Post Two', body: 'This is post two' }
];

let docText;

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
		p.innerHTML = output + output2;
		outputBox.appendChild(p);
		// .append(output);
		// document.body.innerHTML = output + output2;
	}, 1000);
}
getPosts();

let uri = 'https://jsonplaceholder.typicode.com/users/';
async function fetchUsers() {
	const res = await fetch(uri);
	const data = await res.json();
	// docText = document.body.innerHTML = output + output2 + data;
	let p2 = document.createElement('p');
	let outputBox = document.getElementById('outputbox');
	console.log(data, outputBox);
	let strin = JSON.stringify(data);
	p2.innerHTML = strin;

	console.log(strin);
	outputBox.appendChild(p2);
}
fetchUsers();

// setTimeout(() => {
// document.body.appendChild(p2);
// }, 2000);

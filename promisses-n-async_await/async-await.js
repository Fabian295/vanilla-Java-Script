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
		// let outputBox = document.getElementById('outputbox');
		// let p = document.createElement('p');
		// p.textContent = output;
		// p.innerHTML = output2;
		// outputBox.appendChild(p);
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

async function init() {
	await createPost({ id: 3, title: 'Post Three', body: 'This is post three' })
		.then(getPosts)
		.catch((err) => console.log(err));

	getPosts();
}

init();

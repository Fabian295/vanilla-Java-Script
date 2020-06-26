//basic fetch
//using jsonplaceholder for the data
//Remember that fetch returns a promise
//HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
//to test with NODE we need to install the node-fetch package
//  npm install node-fetch
// import fetch from 'node-fetch';
// const fetch = require('node-fetch');
//get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1; //id 1 to 20
let uri = root + '/users/' + id;

console.log('FETCH: ', uri);
//any user id higher than 10 will generate a 404 error

// fetch-method does the request to the server

fetch(uri)
	.then(function(response) {
		let status = response.status;
		console.log(status);
		let res = response.json();
		console.log(res);
		return res;
		// return response.json();
	})
	.then((data) => {
		console.log(data);
		let tekst = JSON.stringify(data);
		// return data;
		// let jsonData = JSON.stringify(data);
		console.log(tekst);
		// console.log(jsonData);

		let output = document.getElementById('output');
		// output.textContent = jsonData;
		// output.textContent = tekst;
		output.append(tekst);
	})
	.catch((err) => {
		console.log('ERROR: ', err.message);
		// console.log(err);
	});

// fetch( uri )
//     .then( function( response ){
//         if(response.status == 200){
//             return response.json();
//         }else{
//             throw new Error('Invalid user ID');
//         }
//     })
//     .then( (data) =>{
//         console.log( data  );
//         let jsonData = JSON.stringify(data);
//         console.log(data);

//         let output = document.getElementById('output');
//         output.textContent = jsonData;
//     } )
//     .catch( (err)=>{
//         console.log('ERROR: ', err.message);
//     } );

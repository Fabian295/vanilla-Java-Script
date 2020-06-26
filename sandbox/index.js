const todos = [
	{
		id: 1,
		text: 'Meeting with stakeholder',
		isCompleted: true
	},
	{
		id: 2,
		text: 'Meeting with boss',
		isCompleted: true
	},
	{
		id: 3,
		text: 'Update the new app',
		isCompleted: false
	}
];

// ---------------  while loop ------------

let i = 0;

while (i < 10) {
	console.log(`while loop Number ${i}`);
	i++;
}

// --------- for of  loop -----------

// for (let todo of todos) {
// 	console.log(todo.text);
// 	console.log(todo.id);
// 	console.log(todos[1]);
// }

// console.log(todos[2].text);
// console.log(todos);

// const completed = todos
// 	.filter((todo) => {
// 		return todo.isCompleted === true;
// 	})
// 	.map((todo) => {
// 		return todo.text;
// 	});

// console.log(completed);

// ------- SWITCH -----------

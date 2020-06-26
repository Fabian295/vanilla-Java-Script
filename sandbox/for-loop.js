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

for (let i = 0; i < todos.length; i++) {
	console.log(`For loop Number: ${i}`);
	console.log(todos[i].text);
}

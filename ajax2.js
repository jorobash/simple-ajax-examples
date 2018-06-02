// document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUsers() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'users.json', true);



	xhr.onload = function() {
		let output = '';
		if(this.status == 200){
			let users = JSON.parse(this.responseText);
			for(let i in users){
				console.log(users[i]);
				 output += '<ul>' +
				'<li>ID:' + users[i].id + '</li>' +
				'<li>ID:' + users[i].name + '</li>' +
				'<li>ID:' + users[i].email + '</li>' +
				'</ul>';

				// console.log(output);
			}
			document.getElementById('users').innerHTML = output;
		}
	}
	xhr.send();

		console.log('vlizam');
	}

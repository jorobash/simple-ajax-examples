document.getElementById('button').addEventListener('click', loadUser);

function loadUser() {
	 let xhr = new XMLHttpRequest();

	 xhr.open('GET', 'http://api.github.com/users');

	 xhr.onload = function() {

	 	let users = JSON.parse(this.responseText);
	 	let output = '';
	 	console.log(users);
	 	for(let i in users){
	 		output += 
	 		'<div class="user">' +
	 		'<img src="' + users[i].avatar_url + '" width="70" height="70">'+
	 		'<ul>' +
	 		'<li>ID:' + users[i].id + '</li>' +
	 		'<li>Login: ' + users[i].login + '</li>' +
	 		'</ul>' + '</div>'; 
	 	}
	 	document.getElementById('users').innerHTML = output;
	 }
	 
	 xhr.send();
}
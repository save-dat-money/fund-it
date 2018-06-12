//Get the login name from the user input. JS
//If no username found matches input, say so. GET, handle not found exception
//check the password with the associated name. JS
//If the password is in correct say, so . 

document.addEventListener("DOMContentLoaded", function() {
	createSubmitButton()
});

function createSubmitButton() {
	const submit = document.querySelector('.submit-button')
	addFundButton.addEventListener('click', authenticate)
}

function authenticate(event) {
	event.preventDefault();
	const submitButton = event.target;
	const username = document.querySelector('#username_input');
	const password = document.querySelector('#password_input');
	console.log(username);
	console.log(password); 
	
	// const xhr = new XMLHttpRequest() 
	// 	xhr.onreadystatechange = fucntion() {
	// 	if (xhr.readyState === 4 && xhr.status=== 200){
	// 		const funds = JSON.parse(xhr.response)
	// 	}	
	// }

	// xhr.open('GET', 'http://localhost:8080/login/auth', true)
	// xhr.send(); 
}



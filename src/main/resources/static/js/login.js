//Get the login name from the user input. JS
//If no username found matches input, say so. GET, handle not found exception
//check the password with the associated name. JS
//If the password is in correct say, so . 

function submitButton() {
	const submit = document.querySelector('.submit-button')
	addFundButton.addEventListener('click', authenticate)
}

function authenticate() {
	event.preventDefault();
	let submitButton
	
	const xhr = new XMLHttpRequest() 
		xhr.onreadystatechange = fucntion() {
		if (xhr.readyState === 4 && xhr.status=== 200){
			const funds = JSON.parse(xhr.response)
		}	
	}

	xhr.open('GET', 'http://localhost:8080/login/auth', true)
	xhr.send(); 
}



const xhr = new XMLHttpRequest() 
xhr.onreadystatechange = fucntion() {
	if (xhr.readyState === 4 && xhr.status=== 200){
		const funds = JSON.parse(xhr.response)
	}	
}

xhr.open('GET', 'http://localhost:8080/login/auth', true)
xhr.send(); 



document.addEventListener("DOMContentLoaded", function() {
	createAddFundButton()
});

function createAddFundButton() {
	const addFundButton = document.querySelector('.fund-add-button');
	addFundButton.addEventListener('click', addFund)
}

function addFund(event){
	event.preventDefault();//prevents forms from refreshing
	const theButtonAdd = event.target;
	const fundName = document.querySelector('#fund_input').value; //Fund name
	
	console.log(fundName);
	const xhr = new XMLHttpRequest()//ajax request 
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(xhr.responseText); 
			let createdFund = JSON.parse(xhr.responseText)
			let fundAmount = createdFund.fundAmount
			let fundNameText = createdFund.fundName
			
			const otherBody = document.querySelector('.fundContainer')
			const fundBody = document.createElement('div')
			appendElement(fundBody, createElement('h2', fundNameText))
			appendElement(fundBody,createElement('p', fundAmount))
			appendElement(otherBody, fundBody)
		}
	}
	
	xhr.open('POST', '/add-fund/account/1/'+fundName, true)
	xhr.send()
	console.log('here')
}

function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
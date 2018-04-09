// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		const res = JSON.parse(xhr.response

document.addEventListener("DOMContentLoaded", function() {
	const addFundButton = document.querySelector('.fund-add-button');
	addFundButton.addEventListener('click',addFund)
});

//do not need below event listener because ajax loads funds to page
//document.addEventListener("DOMContentLoaded", function(){
//	const removeFundButtonCollection = document.querySelectorAll('.removeButton')
//	removeFundButtonList = Array.from(removeFundButtonCollection)
//	removeFundButtonList.forEach(function(removeFundButton){
//	removeFundButton.addEventListener('click', removeFund)
//	})
//});

function removeFund(event){
	event.preventDefault();
	const theButton = event.target
	const fundId = theButton.parentElement.getAttribute('data-fundId')
	console.log(theButton)
	
	const xhr = new XMLHttpRequest()//ajax request 
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let accountContainer = theButton.parentElement
			accountContainer.parentElement.removeChild(accountContainer)
		}
	}
	xhr.open('POST', '/account/1/fund/' + fundId + '/remove-fund', true)
	xhr.send()
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
}

function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
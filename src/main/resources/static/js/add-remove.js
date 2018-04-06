// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		const res = JSON.parse(xhr.response

document.addEventListener("DOMContentLoaded", function() {
	const addFundButton = document.querySelector('.fund-add-button');
	addFundButton.addEventListener('click',addFund)
});


function addFund(event){
	event.preventDefault();//prevents forms from refreshing
	const theButtonAdd = event.target;
	const fundName = document.querySelector('#fund_input').value; //Fund name
	console.log(fundName);
	const xhr = new XMLHttpRequest()//ajax request 
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			
			const otherBody = document.querySelector('.fundContainer')
			const fundBody = document.createElement('div')
			appendElement(fundBody, createElement('p', fundName))
			appendElement(otherBody, fundBody)
		}
	}
	
	xhr.open('POST', '/addFund', true)
	xhr.send('fundName=myNewFund&fundAmount=100&accountId=1')
}

function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
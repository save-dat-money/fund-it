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
	
	const otherBody = document.querySelector('.fundContainer')
	const fundBody = document.createElement('div')
	appendElement(fundBody, createElement('p', fundName))
	appendElement(otherBody, fundBody)

// 	// console.log(tagTitle);
// 	const xhr = new XMLHttpRequest()//ajax request 
// 	const bookTitle = document.querySelector('#bookTagID').value // this is for requestparam 
// 	const tagLoop = document.querySelector('.tag-collection');
// 	const tagContainer = document.createElement('button');
// 	const booktitle = theButtonAdd.dataset.title;
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			console.log(xhr);
// 			tagContainer.innerText = tagTitle;
// 			// console.log(tagContainer.innerText);
// 			tagLoop.appendChild(tagContainer); 
// //			console.log(JSON.parse(xhr.responseText));//set res to json
		}
function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
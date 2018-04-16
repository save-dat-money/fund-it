document.addEventListener("DOMContentLoaded", function() {
	createAddFundButton()
});

function createAddFundButton() {
	const addFundButton = document.querySelector('.fund-add-button');
	addFundButton.addEventListener('click', addFund)
}

function removeFund(event) {
	event.preventDefault();
	const theButton = event.target
	const fundId = theButton.parentElement.getAttribute('data-fund-id')

	const arrayIndex = fundsApp.funds.indexOf(fundId)
	fundsApp.funds.splice(arrayIndex, 1)

	const xhr = new XMLHttpRequest()// ajax request
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const newAccountState = JSON.parse(xhr.responseText)
			let fundContainer = theButton.parentElement
			const unassignedFundAmnt = newAccountState.unassignedFundAmount.toFixed(2)
			fundContainer.parentElement.removeChild(fundContainer)
			drawChart(fundsApp.funds)	
			document.querySelector('.defaultFundAmnt').textContent = unassignedFundAmnt		

		}
	}
	xhr.open('POST', '/account/1/fund/' + fundId + '/remove-fund', true)
	xhr.send()
	//location.reload();

}

function addFund(event) {
	event.preventDefault();// prevents forms from refreshing
	const theButtonAdd = event.target;
	const fundName = document.querySelector('#fund_input').value;
	const fundAmount = document.querySelector('#fund_amount_input').value; // Fund name

	console.log(fundName);
	const xhr = new XMLHttpRequest()// ajax request
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const newFund = JSON.parse(xhr.response)
			console.log(newFund);
	
			fundsApp.funds.push(newFund); // pie chart
			appendOneElementToBody(newFund)
			drawChart(fundsApp.funds);
			//ajax for updating unassigned fund amnt
			let unFndAmnt = newFund.account.unassignedFundAmount
			let newUnassignedFundAmnt = unFndAmnt - fundAmount
			if (newUnassignedFundAmnt < 0) {
				newUnassignedFundAmnt = 0
			} 
			document.querySelector('.defaultFundAmnt').textContent = newUnassignedFundAmnt.toFixed(2)
		}	
	}

	xhr.open('POST', '/add-fund/account/1/' + fundName + '/' +fundAmount, true)
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
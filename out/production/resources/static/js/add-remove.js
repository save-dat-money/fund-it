document.addEventListener("DOMContentLoaded", function() {
	createAddFundButton()
});

function createAddFundButton() {
	const addFundButton = document.querySelector('.fund-add-button');
	addFundButton.addEventListener('click', addFund)
}

function removeFund() {
	let removeFundButton;
	if (removeFundButton = document.querySelector('.delete-fund-button'))
	removeFundButton.addEventListener('click', () => {
		const r = confirm("Are you sure you want to delete this fund?")
	if(r==true){
	clickingOnFundName()
	console.log(fundsApp.selectedId);
	const fundId = fundsApp.selectedId;	
	console.log(fundId);

	const arrayIndex = fundsApp.funds.find(fund => fund.id === fundId);
	fundsApp.funds.splice(arrayIndex, 1)

	const xhr = new XMLHttpRequest()// ajax request
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const funds = JSON.parse(xhr.responseText)
			console.log(funds)
			
			const fundsOverview = document.createElement('article');
	 		fundsOverview.className = "funds__overview";
	 		
	 		const defaultFundsContainer = document.createElement('span');
	 		defaultFundsContainer.className = "defaultFundContainer";
	 		
	 		const fundContainer = document.createElement('span');
	 		fundContainer.className = "fundContainer";
//	 		const fundContainerHeader = createElement('h3', "Funds:");
//	 		fundContainer.appendChild(fundContainerHeader);
	 		
	 		fundsOverview.appendChild(fundContainer);
	 		fundsOverview.appendChild(defaultFundsContainer);
	 		
	 		const fundInputForm = document.createElement('article');
	 		fundInputForm.className = "fund-input-form";
	 		fundsOverview.appendChild(fundInputForm);
	 		
	 		const mainBottomRight = document.querySelector('.main__bottom__right');
	 		mainBottomRight.replaceChild(fundsOverview, mainBottomRight.childNodes[1]);
	 		
	 		fundsApp.funds=funds;
	 		appendUnassignedFundToBody(fundsApp.funds[0]);
	 		funds.forEach(function(fund) {
	 			appendOneElementToBody(fund)
	 		})
	 		fundsOverview.appendChild(fundsApp.newFundForm);
	 		fundsOverview.appendChild(fundsApp.depositWithdraw);
      

			drawChart(fundsApp.funds)	

		}
	}
	xhr.open('POST', '/account/1/fund/' + fundId + '/remove-fund', true)
	xhr.send()
	}
	});
}

function addFund(event) {
	event.preventDefault();// prevents forms from refreshing
	const theButtonAdd = event.target;
	const fundName = document.querySelector('#fund_input').value;
	const fundAmount = document.querySelector('#fund_amount_input').value;
	fundName.className = 'fundInformation'

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
			document.getElementById("fund_input").value = "";
			document.getElementById("fund_amount_input").value = "";
			clickingOnFundName();
		}	
	}

	xhr.open('POST', '/add-fund/account/1/' + fundName + '/' + fundAmount + '/', true)
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
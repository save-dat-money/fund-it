const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.warn(xhr.responseText)
		const funds = JSON.parse(xhr.response)
		fundsOverviewSetup(funds);
	}
}
xhr.open('GET', 'http://localhost:8080/account/1/funds', true)
xhr.send()
function fundsOverviewSetup (funds) {
	appendUnassignedFundToBody(funds[0])
	appendAccountNameToHeader(funds)
	funds.forEach(function(fund) {
		appendOneElementToBody(fund)
	})
}


		function appendAccountNameToHeader(funds) {
			const headerOne = document.querySelector('.main__top')

			const accountNameContainer = document.createElement('div')
			accountNameContainer.classList.add('accountNameContainer')

			let accntAmnt = createElement('p', funds[0].account.balance.toFixed(2))
			accntAmnt.classList.add('accntAmnt')

			const modalDepositAmount = document.createElement('div')
			appendElement(modalDepositAmount, createElement('p',
					funds[0].account.balance.toFixed(2)))

			const modalWithdrawAmount = document.createElement('div')
			appendElement(modalWithdrawAmount, createElement('p', funds[0].account.balance.toFixed(2)))

//			const modalContentDeposit = document.querySelector('.modal-content-deposit')
//			appendElement(modalContentDeposit, modalDepositAmount)

			const modalContentWithdraw = document.querySelector('.modal-content-withdraw')
			//appendElement(modalContentWithdraw, modalWithdrawAmount)


			const modalFundsHolder = document.createElement('div') // attach all input fund info to this div
			modalFundsHolder.classList.add('modal-funds-holder')
			appendElement(modalContentWithdraw ,modalFundsHolder) // attach to modal Withdrawal windo

			appendElement(accountNameContainer, createElement('p',
					funds[0].account.accountName + ": $"))
			appendElement(accountNameContainer, accntAmnt)

			appendElement(headerOne, accountNameContainer)

		}

		


		// <div> 1
		//fund name: res.
		//fund amount: res.
		// 						<label>Amount To Deposit:</label> <input id="amountDeposit" type="number"  required="true"  min="1" max = "700"/>
		// 					</div>


		// 					<div>
		// 						<input type="button" class="amount-deposit-button"  value="Submit"></input>
		// 					</div> 



		function showAllPropsInObject(object) {
			for (prop in funds) {
				console.log(`${prop} ${funds[prop]}`)
			}
		}
//		console.log(funds)

function appendUnassignedFundToBody(fund) {
	const thirdBody = document.querySelector('.defaultFundContainer')

	const defaultFundContainer = document.createElement('div')
	defaultFundContainer.classList.add('defaultFundContainer')
	const defaultFundHeader = createElement('p', "Overview: ");
	defaultFundHeader.className = 'defaultFundHeader'
	let defaultFund = createElement('h2', 'Unassigned Funds')
	defaultFund.className = 'defaultFund'
	const fundContainer = document.querySelector('.fundContainer');

	// default fund attempt
	appendElement(fundContainer, defaultFundHeader);

	appendElement(defaultFundContainer, defaultFund)
	let unFndAmnt = createElement('p', fund.account.unassignedFundAmount
			.toFixed(2))
	unFndAmnt.className = 'defaultFundAmnt'
	appendElement(defaultFundContainer, unFndAmnt)

	appendElement(thirdBody, defaultFundContainer)
}

function appendOneElementToBody(res) {

	const body = document.querySelector('.fundContainer')
	const fundContainer = document.createElement('div')
	fundContainer.classList.add('fundContainer')

	let xButton = createElement('button', 'x')
	xButton.className = 'removeButton'
	xButton.onclick = removeFund
	let fund = createElement('h2', res.fundName)

	fund.className = 'fundInformation'

//	let editButton = createElement('button', 'edit')
//	editButton.className = 'editButton'
//	appendElement(fund, editButton)

	appendElement(fundContainer, fund)


//	appendElement(fundContainer, xButton)
//	appendElement(fund, editButton)

	appendElement(fundContainer, createElement('p', res.fundAmount.toFixed(2)))

	fundContainer.setAttribute('data-fund-id', res.id)
	fundContainer.setAttribute('data-fund-amount', res.fundAmount)
	fundContainer.setAttribute('data-unassigned-fund-amount',
			res.account.unassignedFundAmount)

	appendElement(body, fundContainer)

}


const backToOverview = () => {
    	 let backToOverviewButton
    	 if ( backToOverviewButton = document.querySelector('.back-to-overview'))
    		 backToOverviewButton.addEventListener('click', () => {
    			 const xhr = new XMLHttpRequest()
    			 xhr.onreadystatechange = function() {
    			 	if (xhr.readyState === 4 && xhr.status === 200) {
    			 		// console.warn(xhr.responseText)
    			 		const funds = JSON.parse(xhr.response)
    			 		
    			 		const fundsOverview = document.createElement('article');
    			 		fundsOverview.className = "funds__overview";
    			 		
    			 		const defaultFundsContainer = document.createElement('span');
    			 		defaultFundsContainer.className = "defaultFundContainer";
    			 		fundsOverview.appendChild(defaultFundsContainer);
    			 		
    			 		const fundContainer = document.createElement('span');
    			 		fundContainer.className = "fundContainer";
//    			 		const fundContainerHeader = createElement('h3', "Funds:");
//    			 		fundContainer.appendChild(fundContainerHeader);

    			 		fundsOverview.appendChild(fundContainer);
    			 		
    			 		const fundInputForm = document.createElement('article');
    			 		fundInputForm.className = "fund-input-form";
    			 		fundsOverview.appendChild(fundInputForm);
    			 		
    			 		const mainBottomRight = document.querySelector('.main__bottom__right');
    			 		mainBottomRight.replaceChild(fundsOverview, mainBottomRight.childNodes[1]);
    			 		
    			 		
    			 		appendUnassignedFundToBody(funds[0]);
    			 		funds.forEach(function(fund) {
    			 			appendOneElementToBody(fund)
    			 		})
    			 		console.log(fundsApp);
    			 		fundsOverview.appendChild(fundsApp.newFundForm);
    			 	}
    			 }
    			 xhr.open('GET', 'http://localhost:8080/account/1/funds', true)
    			 xhr.send()
    		 });
}

function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
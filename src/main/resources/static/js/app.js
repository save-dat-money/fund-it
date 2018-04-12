const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.warn(xhr.responseText)
		const funds = JSON.parse(xhr.response)

		
			appendUnassignedFundToBody(funds[0])
			appendAccountNameToHeader(funds)
			funds.forEach(function(fund) {
				appendOneElementToBody(fund)
			})
		

		function appendAccountNameToHeader(funds) {
			const headerOne = document.querySelector('.main__top')

			const accountNameContainer = document.createElement('div')
			accountNameContainer.classList.add('accountNameContainer')

			let accntAmnt = createElement('p', funds[0].account.balance.toFixed(2))
			accntAmnt.classList.add('accntAmnt')
			
			const modalDepositAmount = document.createElement('div')
			appendElement(modalDepositAmount , createElement('p',funds[0].account.balance))

			const modalWithdrawAmount = document.createElement('div')
			appendElement(modalWithdrawAmount , createElement('p',funds[0].account.balance))

			const modalContentDeposit = document.querySelector('.modal-content-deposit')
			appendElement(modalContentDeposit, modalDepositAmount)

			const modalContentWithdraw = document.querySelector('.modal-content-withdraw')
			appendElement(modalContentWithdraw, modalWithdrawAmount)


			appendElement(accountNameContainer, createElement('p',
					funds[0].account.accountName + ": $"))
			appendElement(accountNameContainer, accntAmnt)

			appendElement(headerOne, accountNameContainer)
		

		}

		function showAllPropsInObject(object) {
			for (prop in funds) {
				console.log(`${prop} ${funds[prop]}`)
			}
		}
		console.log(funds)
	}
}

 function appendUnassignedFundToBody(fund) {
 const thirdBody = document.querySelector('.defaultFundContainer')

 const defaultFundContainer = document.createElement('div')
 defaultFundContainer.classList.add('defaultFundContainer')

 let defaultFund = createElement('h2', 'Unassigned Funds')
 defaultFund.className = 'defaultFund'
 // default fund attempt
 appendElement(defaultFundContainer, defaultFund)
 appendElement(defaultFundContainer, createElement('p',
 fund.account.unassignedFundAmount))
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

	let editButton = createElement('button', 'edit')
	editButton.className = 'editButton'

	appendElement(fundContainer, fund)
	appendElement(fundContainer, xButton)
	appendElement(fund, editButton)
	appendElement(fundContainer, createElement('p', res.fundAmount))

	fundContainer.setAttribute('data-fund-id', res.id)

	appendElement(body, fundContainer)
	
	let modal = document.querySelector(".modal");

	let closeButton = document.querySelector(".close-button")

	editButton.addEventListener("click", toggleModal);

	function toggleModal() {
		modal.classList.toggle("show-modal");
		console.log('Here')
	}


}

xhr.open('GET', 'http://localhost:8080/account/1/funds', true)
xhr.send()

function createElement(elem, textValue) {
	const newElem = document.createElement(elem)
	newElem.innerText = textValue

	return newElem
}

function appendElement(parent, child) {
	parent.appendChild(child)
}
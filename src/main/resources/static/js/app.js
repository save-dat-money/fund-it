const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.warn(xhr.responseText)
		const res = JSON.parse(xhr.response)

		if (res.length) {
			appendAccountNameToHeader(res)
			res.forEach(function(account) {
				appendOneElementToBody(account)
			})
		} else {
			appendOneElementToBody(res)
		}


		function appendAccountNameToHeader(res) {
			const headerOne = document.querySelector('.main__top')

			const accountNameContainer = document.createElement('div')
			accountNameContainer.classList.add('accountNameContainer')


			const modalDepositAmount = document.createElement('div')
			appendElement(modalDepositAmount , createElement('p',res[0].account.balance))

			const modalWithdrawAmount = document.createElement('div')
			appendElement(modalWithdrawAmount , createElement('p',res[0].account.balance))

			const modalContentDeposit = document.querySelector('.modal-content-deposit')
			appendElement(modalContentDeposit, modalDepositAmount)

			const modalContentWithdraw = document.querySelector('.modal-content-withdraw')
			appendElement(modalContentWithdraw, modalWithdrawAmount)


			appendElement(accountNameContainer, createElement('p',
				res[0].account.accountName))
			appendElement(accountNameContainer, createElement('p',
				res[0].account.balance))
			appendElement(headerOne, accountNameContainer)
		

		}





		function showAllPropsInObject(object) {
			for (prop in res) {
				console.log(`${prop} ${res[prop]}`)
			}
		}
		console.log(res)
	}
}

/**

 * Sets up the account's name in the header.
 * 
 * @param res
 *            A response from the original GET HTTP call for funds.
 * @returns
 */
function appendAccountNameToHeader(res) {

	res = res instanceof Array ? res[0] : res;

	// let headerOne = ...;
	let existingAccntHeader = document.querySelector('.accountNameContainer')
	if (existingAccntHeader)
		existingAccntHeader.parentElement.removeChild(existingAccntHeader)// remove
		// headerOne;

	const headerOne = document.querySelector('.main__top')

	const accountNameContainer = document.createElement('div')
	accountNameContainer.classList.add('accountNameContainer')

	appendElement(accountNameContainer, createElement('p',
			res.account.accountName))

	let fundsAmntContainer = createElement('p', '$');
	let fundsAmnt = createElement('span', res.account.balance.toFixed(2))

	appendElement(fundsAmntContainer, fundsAmnt)
	fundsAmnt.setAttribute('id', 'fundsAmnt')

	appendElement(accountNameContainer, fundsAmntContainer)
	accountNameContainer.setAttribute('data-fund-id', res.id)
	appendElement(headerOne, accountNameContainer)


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



	// let modal = document.querySelector(".modal");
 //    //let testTrigger =  document.querySelectorAll("[data-fund-id='"+res.id+"'] .editButton") //an array
    
 //    let closeButton = document.querySelector(".close-button")

    // testTrigger.forEach(function (elem){
    // 	elem.addEventListener("click", toggleModal);
    // })
    // editButton.addEventListener("click", toggleModal);
    
    // function toggleModal() {
    // 	modal.classList.toggle("show-modal");
    // 	console.log('Here')
    // }


    // function windowOnClick(event) {
    // 	if (event.target === modal) {
    // 		toggleModal()
    // 	}
    // }



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
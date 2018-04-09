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

			appendElement(accountNameContainer, createElement('p',
					res[0].account.accountName))
			appendElement(accountNameContainer, createElement('p',
					res[0].account.balance))
			appendElement(headerOne, accountNameContainer)
		}

		function appendOneElementToBody(res) {
			const body = document.querySelector('.fundContainer')

			const accountContainer = document.createElement('div')
			accountContainer.classList.add('accountContainer')
			
			let xButton = createElement('button', 'x')
			xButton.className = 'removeButton'
			xButton.onclick = removeFund
			appendElement(accountContainer, createElement('h2', res.fundName))
			appendElement(accountContainer, xButton)
			appendElement(accountContainer, createElement('p', res.fundAmount))
			accountContainer.setAttribute('data-fundId', res.id)

			appendElement(body, accountContainer)
		}

		function createElement(elem, textValue) {
			const newElem = document.createElement(elem)
			newElem.innerText = textValue

			return newElem
		}

		function appendElement(parent, child) {
			parent.appendChild(child)
		}

		function showAllPropsInObject(object) {
			for (prop in res) {
				console.log(`${prop} ${res[prop]}`)
			}
		}

		console.log(res)
	}
}

xhr.open('GET', 'http://localhost:8080/account/1/funds', true)
xhr.send()
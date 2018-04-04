const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.warn(xhr.responseText)
		const res = JSON.parse(xhr.response)

		if(res.length) {
			res.forEach(function(account) {
				appendOneElementToBody(account)
			})
		} else {
			appendOneElementToBody(res)
		}

		function appendOneElementToBody(res) {
			const body = document.querySelector('.main__bottom__left')
			const headerOne = document.querySelector('.main__top')


			const accountContainer = document.createElement('div')
			accountContainer.classList.add('accountContainer')

			const accountNameContainer = document.createElement('div')
			accountNameContainer.classList.add('accountNameContainer')


			appendElement(accountContainer, createElement('h2', res.fundName))
			appendElement(accountNameContainer, createElement('p', res.account.accountName))
			appendElement(accountContainer, createElement('p', res.account.balance))

			appendElement(body, accountContainer)
			appendElement(headerOne, accountNameContainer)
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

xhr.open('GET', 'http://localhost:8080/accounts', true)
xhr.send()
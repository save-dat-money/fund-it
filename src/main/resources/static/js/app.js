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

			const accountContainer = document.createElement('div')
			accountContainer.classList.add('accountContainer')

			appendElement(accountContainer, createElement('h2', res.balance))
			appendElement(accountContainer, createElement('h2', res.accountName))
			appendElement(accountContainer, createElement('p', res.funds))

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

xhr.open('GET', 'http://localhost:8080/accounts', true)
xhr.send()
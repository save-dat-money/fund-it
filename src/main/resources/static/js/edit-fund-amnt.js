//eventlistener assignment for fund incr amount
const submitEditFundButton = document.querySelector('.amount-incr-button') 
submitEditFundButton.addEventListener('click', editFundAmnt)






//update everything below
function editFundAmnt(event) {
    const editFundButton = event.target
    const fundIncrease = document.querySelector('#fundIncrAmnt').value; // deposit to add
    
    let fundBalanceBeforeIncrease = window.fundsApp.funds.find(fund => fund.id === window.fundsApp.selectedId).fundAmount;

    fundBalanceBeforeIncrease.innerText = +fundBalanceBeforeIncrease.innerText + +fundIncrease


    console.log(fundBalanceBeforeIncrease)

    const xhrFundIncrease = new XMLHttpRequest()
    xhrFundIncrease.onreadystatechange = function() {
    	if (xhrFundIncrease.readyState === 4 && xhrFundIncrease.status === 200) {
            console.log(xhrFundIncrease)
            const res = JSON.parse(xhrFundIncrease.response)
            let editFundAmntModal = document.querySelector(".edit-fund-amount-modal")
            editFundAmntModal.classList.toggle("show-edit-fund-modal");
        }

    }
    xhrFundIncrease.open('POST', '/increase-fund/account/1/' + window.fundsApp.selectedId + '/' + fundIncrease , true)
    xhrFundIncrease.send()

}












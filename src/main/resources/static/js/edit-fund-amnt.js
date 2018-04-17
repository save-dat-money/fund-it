//eventlistener assignment for fund incr amount
const submitEditFundButton = document.querySelector('.amount-incr-button') 
submitEditFundButton.addEventListener('click', editFundAmnt)

const decrFundButton = document.querySelector('.amount-decr-button') 
decrFundButton.addEventListener('click', decrFundAmnt)

function editFundAmnt(event) {
    const editFundButton = event.target
    const fundIncrease = document.querySelector('#fundIncrAmnt').value; // deposit to add
    
    let fundBalanceBeforeIncrease = window.fundsApp.funds.find(fund => fund.id === window.fundsApp.selectedId).fundAmount;

    let newFundAmnt = fundBalanceBeforeIncrease.innerText = +fundBalanceBeforeIncrease.innerText + +fundIncrease
 
    
    console.log(fundBalanceBeforeIncrease)
   
    const xhrFundIncrease = new XMLHttpRequest()
    xhrFundIncrease.onreadystatechange = function() {
    	if (xhrFundIncrease.readyState === 4 && xhrFundIncrease.status === 200) {
            console.log(xhrFundIncrease)
            const res = JSON.parse(xhrFundIncrease.response)
            toggleEditFundAmntModal();
            console.log(res.fundAmount)
            document.querySelector('#fundAmountBefore').innerHTML = "Balance: " + res.fundAmount.toFixed(2);
			document.querySelector('#unassigned_funds_in_fund').innerHTML = "Unassigned Funds Available: " + res.account.unassignedFundAmount.toFixed(2);
			fundsApp.refreshFunds( () => {
				drawChart(fundsApp.funds)
			});
        }

    } 
    xhrFundIncrease.open('POST', '/increase-fund/account/1/' + fundsApp.selectedId + '/' + fundIncrease , true)
    xhrFundIncrease.send()

}

function decrFundAmnt(event) {
    const editFundButton = event.target
    const fundDecrease = document.querySelector('#fundDecrAmnt').value; // deposit to add
    
    let fundBalanceBeforeDecrease = window.fundsApp.funds.find(fund => fund.id === window.fundsApp.selectedId).fundAmount;

    let newFundAmnt = fundBalanceBeforeDecrease.innerText = +fundBalanceBeforeDecrease.innerText - +fundDecrease
 
    
    console.log(fundBalanceBeforeDecrease)
   
    const xhrFundDecrease = new XMLHttpRequest()
    xhrFundDecrease.onreadystatechange = function() {
    	if (xhrFundDecrease.readyState === 4 && xhrFundDecrease.status === 200) {
            console.log(xhrFundDecrease)
            const res = JSON.parse(xhrFundDecrease.response)
            toggleDecrFundAmntModal();
            document.querySelector('#fundAmountBefore').innerHTML = "Balance: " + res.fundAmount.toFixed(2);
			document.querySelector('#unassigned_funds_in_fund').innerHTML = "Unassigned Funds Available: " + res.account.unassignedFundAmount.toFixed(2);
			fundsApp.refreshFunds( () => {
				drawChart(fundsApp.funds)
			});
        }

    }
    xhrFundDecrease.open('POST', '/decrease-fund/account/1/' + window.fundsApp.selectedId + '/' + fundDecrease , true)
    xhrFundDecrease.send()

}











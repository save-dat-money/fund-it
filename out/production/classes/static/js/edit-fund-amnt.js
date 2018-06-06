//eventlistener assignment for fund incr amount
const submitEditFundButton = document.querySelector('.amount-incr-button') 
submitEditFundButton.addEventListener('click', editFundAmnt)

const decrFundButton = document.querySelector('.amount-decr-button') 
decrFundButton.addEventListener('click', decrFundAmnt)

const changeFundNameButton = document.querySelector('.name-change-button') 
changeFundNameButton.addEventListener('click', editFundName)

function editFundAmnt(event) {
    const editFundButton = event.target
    const fundIncrease = document.querySelector('#fundIncrAmnt').value; 
    let fundBalanceBeforeIncrease = fundsApp.funds.find(fund => fundsApp.selectedId).fundAmount;
    let newFundAmnt = fundBalanceBeforeIncrease = +fundBalanceBeforeIncrease + +fundIncrease
 
    const xhrFundIncrease = new XMLHttpRequest()
    xhrFundIncrease.onreadystatechange = function() {
    	if (xhrFundIncrease.readyState === 4 && xhrFundIncrease.status === 200) {
            console.log(xhrFundIncrease)
            const res = JSON.parse(xhrFundIncrease.response)
            toggleEditFundAmntModal();
            document.querySelector('#fundAmountBefore').innerHTML = "Balance: " + res.fundAmount.toFixed(2);
			document.querySelector('#unassigned_funds_in_fund').innerHTML = "Unassigned Funds Available: " + res.account.unassignedFundAmount.toFixed(2);
			fundsApp.refreshFunds( () => {
				drawChart(fundsApp.funds)
			});
			document.getElementById("fundIncrAmnt").value = "";
        }
    } 
    xhrFundIncrease.open('POST', '/increase-fund/account/1/' + fundsApp.selectedId + '/' + fundIncrease + '/' , true)
    xhrFundIncrease.send()

}

function decrFundAmnt(event) {
    const editFundButton = event.target
    const fundDecrease = document.querySelector('#fundDecrAmnt').value; 
    console.log(fundDecrease);
    
    let fundBalanceBeforeDecrease = fundsApp.funds.find(fund => fundsApp.selectedId).fundAmount;

    let newFundAmnt = fundBalanceBeforeDecrease = +fundBalanceBeforeDecrease - +fundDecrease
    console.log(newFundAmnt);
 
    
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
			document.getElementById("fundDecrAmnt").value = "";
        }
    }
    xhrFundDecrease.open('POST', '/decrease-fund/account/1/' + window.fundsApp.selectedId + '/' + fundDecrease + '/' , true)
    xhrFundDecrease.send()

}


function editFundName(event) {
    const editFundButton = event.target
    const newNameForFund = document.querySelector('#newFundNameInput').value;
       
    const xhrChangeFundName = new XMLHttpRequest()
    xhrChangeFundName.onreadystatechange = function() {
    	if (xhrChangeFundName.readyState === 4 && xhrChangeFundName.status === 200) {
            console.log(xhrChangeFundName)
            
            const res = JSON.parse(xhrChangeFundName.response)
            
            let editFundNameModal = document.querySelector(".edit-fund-name-modal")
            editFundNameModal.classList.toggle("show-edit-fund-modal");
      
           // this is where we will change innerHTML of fund name
           document.querySelector('.fund__details__header__text').innerHTML = newNameForFund;
           document.getElementById("newFundNameInput").value = "";
        }

    }
    xhrChangeFundName.open('POST', '/change-fund-name/account/1/' + window.fundsApp.selectedId + '/' + newNameForFund , true)
    xhrChangeFundName.send()

}











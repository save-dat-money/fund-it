//eventlistener assignment for fund incr amount
const submitEditFundButton = document.querySelector('.amount-incr-button') 
submitEditFundButton.addEventListener('click', editFundAmnt)

function toggleEditFundAmntModal() {
	editFundAmntModal.classList.toggle("show-edit-fund-modal");   
}

//make everything in here match with our edit fund button
let editFundButton = document.querySelector('#add__to__fund__button') // figure out what this does

let editFundAmntModal = document.querySelector(".edit-fund-amount-modal")

editFundButton.addEventListener("click", toggleEditFundAmntModal);

let closeButtonFundAmount = document.querySelector(".close-edit-fund-button")
closeButtonFundAmount.addEventListener("click", toggleEditFundAmntModal);
//see above


//update everything below
function editFundAmnt(event) {
    const editFundButton = event.target
    const fundIncrease = document.querySelector('#fundIncrAmnt').value; // deposit to add
    
    let fundBalanceBeforeIncrease = document.('data-fund-amount')

    fundBalanceBeforeIncrease.innerText = +fundBalanceBeforeIncrease.innerText + +fundIncrease


    console.log(fundBalanceBeforeIncrease)

    const xhrFundIncrease = new XMLHttpRequest()
    xhrFundIncrease.onreadystatechange = function() {
        if (xhrFundIncrease.readyState === 4 && xhrFundIncrease.status === 200) {
            console.log(xhrFundIncrease)
            const res = JSON.parse(xhrFundIncrease.response)

        }

    }
    xhrFundIncrease.open('PUT', '/increase-fund/account/1/' + fundId + '/' + fundAmount + '/'+ '?fundIncrease='+ encodeURI(fundIncrease), true)
    xhrFundIncrease.send()

}












//eventlistener assignment for fund incr amount
const editFundButton = document.querySelector('.amount-incr-button') 
editFundButton.addEventListener('click', editFundAmnt)

function toggleEditFundAmntModal() {
    modalDeposit.classList.toggle("show-edit-fund-modal");   
}

//make everything in here match with our edit fun button
let editFundButton = document.querySelector('.add__to__fund__button') // figure out what this does

let editFundAmntModal = document.querySelector(".edit-fund-modal")

editFundButton.addEventListener("click", toggleEditFundAmntModal);

let closeButtonFundAmount = document.querySelector(".close-edit-fund-button")
closeButtonFundAmount.addEventListener("click", toggleEditFundAmntModal);
//see above


//update everything below
//function editFundAmnt(event) {
//    const theButtonDeposit = event.target
//    const amountDeposit = document.querySelector('#amountDeposit').value; // deposit to add
//    
//    let accountBalanceBeforeDeposit = document.querySelector('.accntAmnt')
//
//    accountBalanceBeforeDeposit.innerText = +accountBalanceBeforeDeposit.innerText + +amountDeposit
//
//
//    console.log(accountBalanceBeforeDeposit)
//
//    const xhrDeposit = new XMLHttpRequest()
//    xhrDeposit.onreadystatechange = function() {
//        if (xhrDeposit.readyState === 4 && xhrDeposit.status === 200) {
//            console.log(xhrDeposit)
//            const res = JSON.parse(xhrDeposit.response)
//
//        }
//
//    }
//    xhrDeposit.open('PUT', '/edit-account/account/1?amountDeposit='+ encodeURI(amountDeposit), true)
//    xhrDeposit.send()

}












//eventlistener assignment for submit button
const submitDepositButton = document.querySelector('.amount-deposit-button')
submitDepositButton.addEventListener('click', editAccountDeposit)

const submitWithdrawButton = document.querySelector('.amount-withdraw-button')
submitWithdrawButton.addEventListener('click', editAccountWithdraw)


function toggleModalDeposit() {
    modalDeposit.classList.toggle("show-modal");   
}
function toggleModalWithdraw() {
 modalWithdraw.classList.toggle("show-modal");
}

//eventlistener assignment for modal (deposit, withdraw, miles-stone)
let depositButton = document.querySelector('#deposit')
let withdrawButton = document.querySelector('#withdraw')


let modalDeposit = document.querySelector(".modal-deposit")

let modalWithdraw = document.querySelector(".modal-withdraw")

depositButton.addEventListener("click", toggleModalDeposit);

withdrawButton.addEventListener("click", toggleModalWithdraw);
withdrawButton.addEventListener("click", withdrawModalPopulation);

let closeButtonDeposit = document.querySelector(".close-button-deposit")
closeButtonDeposit.addEventListener("click", toggleModalDeposit);


let closeButtonWithdraw = document.querySelector(".close-button-withdraw")
closeButtonWithdraw.addEventListener("click", toggleModalWithdraw);




function editAccountDeposit(event) {
    const theButtonDeposit = event.target
    const amountDeposit = document.querySelector('#amountDeposit').value; // deposit to add
    



    let accountBalanceBeforeDeposit = document.querySelector('.accntAmnt')
    

    accountBalanceBeforeDeposit.innerText = +accountBalanceBeforeDeposit.innerText + +amountDeposit


    console.log(accountBalanceBeforeDeposit)

    const xhrDeposit = new XMLHttpRequest()
    xhrDeposit.onreadystatechange = function() {
        if (xhrDeposit.readyState === 4 && xhrDeposit.status === 200) {
            console.log(xhrDeposit)
            const res = JSON.parse(xhrDeposit.response)
            console.log(res)
        }

    }
    xhrDeposit.open('PUT', '/edit-account-deposit/account/1?amountDeposit='+ encodeURI(amountDeposit), true)
    xhrDeposit.send()

}


function withdrawModalPopulation(event){

    const xhrPopulate = new XMLHttpRequest()
    xhrPopulate.onreadystatechange = function() {
        if (xhrPopulate.readyState === 4 && xhrPopulate.status === 200) {
            const res = JSON.parse(xhrPopulate.response)
            console.log(res)
            const modalContentWithdraw = document.querySelector('.modal-content-withdraw')
           
            modalContentWithdrawReplace = document.createElement('div')
            modalContentWithdrawReplace.classList.add('modal-funds-holder')

            res.forEach(function(res) {
            
            appendElement(modalContentWithdrawReplace, modalFundInformation(res))
            })
            console.log(modalContentWithdrawReplace)

           const toReplace = modalContentWithdraw.lastElementChild
           toReplace.replaceWith(modalContentWithdrawReplace)
        }

    }

    xhrPopulate.open('GET', '/edit-account-withdraw/populate/account/1', true)
    xhrPopulate.send()
}
function editAccountWithdraw(event) {
    const theButtonDeposit = event.target //submit button
    const amountWithdraw = document.querySelector('#amountWithdraw').value; // deposit to add
    //logic needed

    let accountBalanceBeforeWithdraw = document.querySelector('.accntAmnt')

    accountBalanceBeforeWithdraw.innerText = +accountBalanceBeforeWithdraw.innerText - +amountWithdraw


    console.log(accountBalanceBeforeWithdraw)

    const xhrWithdraw = new XMLHttpRequest()
    xhrWithdraw.onreadystatechange = function() {
        if (xhrWithdraw.readyState === 4 && xhrWithdraw.status === 200) {
            const res = JSON.parse(xhrWithdraw.response)
            console.log(res)
            console.log('here')
        }

      

    }
      xhrWithdraw.open('PUT', '/edit-account-withdraw/account/1?amountWithdraw='+ encodeURI(amountWithdraw), true)
      xhrWithdraw.send()
}


function modalFundInformation(res) {
            
            //individual fund div info
            const fundsModalInformationContainer = document.createElement('div') //1 indivi
            fundsModalInformationContainer.classList.add('indiv-fund')

            const fundModalInfo = document.createElement('p')
            fundModalInfo.innerText = 'Fund Name:' + res.fundName +  '\nAmount: $' + res.fundAmount
            //class name needed?
            appendElement(fundsModalInformationContainer,fundModalInfo)

            const fundLabel = document.createElement('label')
            fundLabel.innerText = 'Amount to Withdraw:'

            const fundInput = document.createElement('input')
            fundInput.setAttribute('id', res.fundName)
            fundInput.setAttribute('type', 'number')
            fundInput.setAttribute('required', 'required')
            fundInput.setAttribute('min', 1)
            fundInput.setAttribute('max', res.fundAmount)

            appendElement(fundLabel, fundInput)
            appendElement(fundsModalInformationContainer, fundLabel)

            console.log(fundsModalInformationContainer)
            return fundsModalInformationContainer
        }


function modalMilesStoneDepiction(){
    //add__to__mile__button




}










function createElement(elem, textValue) {
    const newElem = document.createElement(elem)
    newElem.innerText = textValue

    return newElem
}

function appendElement(parent, child) {
    parent.appendChild(child)

}

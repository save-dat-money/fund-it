//eventlistener assignment for submit button
const submitDepositButton = document.querySelector('.amount-deposit-button')
submitDepositButton.addEventListener('click', editAccountDeposit)

const submitWithdrawButton = document.querySelector('.amount-withdraw-button')
submitWithdrawButton.addEventListener('click', editAccountWithdraw)
//submit disable function here 
submitWithdrawButton.disabled = true;



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

//withdrawal blur event
const inputWithdrawal = document.querySelector('#amountWithdraw')
inputWithdrawal.addEventListener('change', withdrawalInnerText)//funcion
//event change onchange after each input is created



function editAccountDeposit(event) {
    const theButtonDeposit = event.target
    const amountDeposit = document.querySelector('#amountDeposit').value; // deposit to add

    
    if (amountDeposit<0){
        console.log('Value too small')
        //event to gray out submit
        //method needed in Java 
        return 

    }

 
    
    let accountBalanceBeforeDeposit = document.querySelector('.accntAmnt')
    
    let newAccntAmnt = +accountBalanceBeforeDeposit.innerText + +amountDeposit
    accountBalanceBeforeDeposit.innerText = newAccntAmnt.toFixed(2)

    console.log(accountBalanceBeforeDeposit)

    const xhrDeposit = new XMLHttpRequest()
    xhrDeposit.onreadystatechange = function() {
        if (xhrDeposit.readyState === 4 && xhrDeposit.status === 200) {
            console.log(xhrDeposit)
            const res = JSON.parse(xhrDeposit.response)
            console.log(res)
            
            let editAccntDepositModal = document.querySelector(".modal-deposit")
            editAccntDepositModal.classList.toggle("show-modal");
            
            document.querySelector('.defaultFundAmnt').textContent = res.unassignedFundAmount.toFixed(2)
            document.getElementById("amountDeposit").value = "";
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



            const unAssignedFundFinder = document.querySelector('.defaultFundAmnt')
            let innerTextToAdd = 'Unassigned Fund: $' + unAssignedFundFinder.innerText 
            let unAssignedFund =  createElement('p', innerTextToAdd)
            unAssignedFund.classList.add('unassigned-fund')
            

            console.log(modalContentWithdrawReplace)

            const toReplace = modalContentWithdraw.lastElementChild
            toReplace.replaceWith(modalContentWithdrawReplace)
            appendElement(modalContentWithdrawReplace, unAssignedFund)

        }

    }

    xhrPopulate.open('GET', '/edit-account-withdraw/populate/account/1', true)
    xhrPopulate.send()
}

function editAccountWithdraw(event) {
    const theButtonDeposit = event.target //submit button
    const amountWithdraw = document.querySelector('#amountWithdraw').value; // deposit to add

    let accountBalanceBeforeWithdraw = document.querySelector('.accntAmnt')// value in account balance

    //logic to ensure that we do not overdraft 
    if (amountWithdraw > +accountBalanceBeforeWithdraw.innerText){
        console.log('Value too large')
        //event to gray out submit
        //method needed in Java 
        return //exit function
    }

    //logic for fund allocation
    // on blur 
    
    let accountBalanceAfterWithdraw = +accountBalanceBeforeWithdraw.innerText - +amountWithdraw
    accountBalanceBeforeWithdraw.innerText = accountBalanceAfterWithdraw.toFixed(2)

    let requestParamsString = []
      //create form data object
    const requestParams = []

    //iterate through funds
    let fundsValue = document.querySelectorAll('.input_fund_value_modal')

    fundsValue.forEach(function(fund) {
        let fundId = fund.id
        let value = fund.value
        requestParams.push(fundId + '=' + value)// adds to an end array
       
        // console.log(fundId)
        // console.log(formData.get(fundId))
    }) 

     requestParamsString = requestParams.join('&') // take array of strings and cocatonate with &

    console.log(accountBalanceBeforeWithdraw)

    const xhrWithdraw = new XMLHttpRequest()
    xhrWithdraw.onreadystatechange = function() {
        if (xhrWithdraw.readyState === 4 && xhrWithdraw.status === 200) {
            const res = JSON.parse(xhrWithdraw.response)
            console.log(res)
            
            let editAccntWithdrawModal = document.querySelector(".modal-withdraw")
            editAccntWithdrawModal.classList.toggle("show-modal");

          document.querySelector('.defaultFundAmnt').textContent = res.unassignedFundAmount.toFixed(2)  
          document.getElementById("amountWithdraw").value = "";  
          window.location.reload()

        }

    }
    xhrWithdraw.open('PUT', '/edit-account-withdraw/account/1?amountWithdraw='+ encodeURI(amountWithdraw) + '&' + encodeURI(requestParamsString), true)
    xhrWithdraw.send()
}


function modalFundInformation(res) {

    //individual fund div info
    const fundsModalInformationContainer = document.createElement('div') //1 indivi
    fundsModalInformationContainer.classList.add('indiv-fund')



    const fundModalInfo = document.createElement('p')
    fundModalInfo.innerText = res.fundName +  '\nAmount: $' + res.fundAmount
    //class name needed?
    appendElement(fundsModalInformationContainer,fundModalInfo)

    const fundLabel = document.createElement('label')
    fundLabel.innerText = 'Amount to Withdraw:'

    const fundInput = document.createElement('input')
    fundInput.setAttribute('id', res.id)
    fundInput.setAttribute('class', 'input_fund_value_modal')
    fundInput.setAttribute('type', 'number')
    fundInput.setAttribute('required', 'required')
    fundInput.setAttribute('min', 1)
    fundInput.setAttribute('max', res.fundAmount)
    fundInput.addEventListener('change', withdrawalInnerText)


    appendElement(fundLabel, fundInput)
    appendElement(fundsModalInformationContainer, fundLabel)

    console.log(fundsModalInformationContainer)
    return fundsModalInformationContainer
}


function withdrawalInnerText(){
    // let withdrawUnassigned = document.querySelector('.unassigned-fund').innerText // value of unassigned
    let amountWithdraw = document.querySelector('#amountWithdraw').value; //amount to withdraw 

    let unAssignedFundFinder = document.querySelector('.defaultFundAmnt')
    let withdrawUnassigned = unAssignedFundFinder.innerText
    
    let amountNewWithdraw =  +withdrawUnassigned - +amountWithdraw
    //if negative turn unassigned funds to red and do not hit submit button
    
    const unAssignedFundToAdd = document.createElement('p')
    unAssignedFundToAdd.classList.add('unassigned-fund')

    let innerTextToAdd = 'Unassigned Fund: $' + amountNewWithdraw 
    unAssignedFundToAdd.innerText = innerTextToAdd



    if(0>+amountNewWithdraw){
        console.log(amountNewWithdraw)

        let modalAppend = document.querySelector('.modal-funds-holder')
        const lastChild = modalAppend.lastElementChild
        lastChild.replaceWith(unAssignedFundToAdd)
        
        unAssignedFundToAdd.style.color = "red"
        //submit unclickable --> function 
        submitWithdrawButton.disabled = true
        console.log('too much')
        const childrenOfModalFunds = document.querySelectorAll('.input_fund_value_modal') //array
        //functio for childrenOfModalFunds
        let fundSum = 0
        childrenOfModalFunds.forEach(function(elem){
          fundSum += +elem.value
        }) 

        console.log(fundSum)
        console.log(amountNewWithdraw)
        if (fundSum >= Math.abs(amountNewWithdraw)){


            submitWithdrawButton.disabled = false
            amountNewWithdraw +=fundSum
            console.log(+fundSum - -amountNewWithdraw)

            innerTextToAdd = 'Unassigned Fund: $' + amountNewWithdraw 
            unAssignedFundToAdd.innerText = innerTextToAdd
            unAssignedFundToAdd.style.color = "black"

            return
        } 

        //update
        if (fundSum < Math.abs(amountNewWithdraw)){
            amountNewWithdraw +=fundSum
            console.log(+fundSum - -amountNewWithdraw)

            innerTextToAdd = 'Unassigned Fund: $' + amountNewWithdraw 
            unAssignedFundToAdd.innerText = innerTextToAdd
        }
        return
    }

    let modalAppend = document.querySelector('.modal-funds-holder')
    const lastChild = modalAppend.lastElementChild
    lastChild.replaceWith(unAssignedFundToAdd)
    submitWithdrawButton.disabled = false

    console.log('event triggered')
    console.log(amountNewWithdraw)
}


function createElement(elem, textValue) {
    const newElem = document.createElement(elem)
    newElem.innerText = textValue

    return newElem
}

function createElementHTML(elem, textValue){
    const newElem = document.createElement(elem)
    newElem.innerHTML = textValue
    return newWithdraw


}

function appendElement(parent, child) {
    parent.appendChild(child)

}



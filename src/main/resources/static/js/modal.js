
     console.log('running')

     function toggleModalDeposit() {
        modalDepoist.classList.toggle("show-modal");
        
    }

      function toggleModalWithdraw() {
        modalWithdraw.classList.toggle("show-modal");
       
    }



 


//eventlistener assignment
let depositButton = document.querySelector('#deposit')
let withdrawButton = document.querySelector('#withdraw')

let modalDepoist = document.querySelector(".modal-depoist")
let modalWithdraw = document.querySelector(".modal-withdraw")

depositButton.addEventListener("click", toggleModalDeposit);
withdrawButton.addEventListener("click", toggleModalWithdraw);

let closeButtonDeposit = document.querySelector(".close-button-deposit")
closeButtonDeposit.addEventListener("click", toggleModalDeposit);


let closeButtonWithdraw = document.querySelector(".close-button-withdraw")
closeButtonWithdraw.addEventListener("click", toggleModalWithdraw);





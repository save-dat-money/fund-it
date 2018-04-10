// document.addEventListener("DOMContentLoaded", function() {
     console.log('running')
    let modal = document.querySelector(".modal");
    let testTrigger = document.querySelectorAll(".editButton") //an array
    let closeButton = document.querySelector(".close-button")

    testTrigger.forEach(function (elem){
        elem.addEventListener("click", toggleModal);
    })
    
     function toggleModal() {
        modal.classList.toggle("show-modal");
        console.log('Here')
    }


    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal()
        }
    }


    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

// });

 



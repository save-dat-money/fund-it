let modal = document.querySelector(".modal");
let trigger = document.querySelectorAll(".editButton") //an array
let closeButton = document.querySelector(".close-button");

trigger.forEach(function (elem){
    elem.addEventListener("click", toggleModal);
})

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
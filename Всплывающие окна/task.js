const modal = document.getElementById("modal_main");
modal.classList.add("modal_active")

const modalSuccess = document.getElementById("modal_success");


const close = document.querySelectorAll(".modal__close")
const success = document.querySelector(".show-success")

close.forEach(element => {
    element.onclick = function() {
    modal.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
    }
});


success.onclick = function() {
    modal.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}
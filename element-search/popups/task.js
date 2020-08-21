const mainModal = document.getElementById("modal_main");
mainModal.className = "modal modal_active";

const closeButton = Array.from(document.getElementsByClassName("modal__close modal__close_times"));
closeButton.forEach(button => {
    button.onclick = () => 
        button.parentElement.parentElement.className = "modal";
});

const successModalButton = document.getElementsByClassName("show-success").item(0);
const successModal = document.getElementById("modal_success");
console.log(successModalButton);
successModalButton.onclick = () => {
    closeButton[0].click();
    successModal.className = "modal modal_active";
    return false;
};

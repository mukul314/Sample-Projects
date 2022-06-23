const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input")

form.onsubmit = (e) =>{
    e.preventDefault();
    if(eInput.value ==""){
        eField.classList.add("shake");
    }
}

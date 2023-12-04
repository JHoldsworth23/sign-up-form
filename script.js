const inputElements = document.querySelectorAll("input");
const formSection = document.querySelector(".form-section");
const submit = document.querySelector("#submit-btn");

inputElements.forEach(input => {
    input.addEventListener("invalid", (e) => {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
    })

    input.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        if (isValid) {
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
        }
    });
});

function validateForm(input) {
    return input.checkValidity();
}

submit.addEventListener("click", () => {
    let inputArray = Array.from(inputElements);
    if (inputArray.every(validateForm)) {
        console.log("Your form is valid!");
    } else {
        // Find the input that is invalid
    }
});
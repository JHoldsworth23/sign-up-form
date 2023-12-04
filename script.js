const inputElements = document.querySelectorAll("input");
const submit = document.querySelector("button");

inputElements.forEach(input => {
    input.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        if (!isValid) {
            e.target.classList.remove("valid");
            e.target.classList.add("invalid");
        } else {
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
        }
    });
});

submit.addEventListener("click", (e) => {
    console.log("you clicked the button!");
});
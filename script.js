const inputElements = document.querySelectorAll('input');
const formSection = document.querySelector('.form-section');
const password = document.querySelector('#pwd');
const passwordConfirmation = document.querySelector('#pwd-confirm');
const passwordAlert = document.querySelector('#pwd-alert');
const submit = document.querySelector('#submit-btn');

inputElements.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.target.classList.remove('valid');
        e.target.classList.add('invalid');
    })

    input.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        if (isValid) {
            e.target.classList.remove('invalid');
            e.target.classList.add('valid');
        }
    });
});

passwordConfirmation.addEventListener('change', (e) => {
    if (password.value !== e.target.value) {
        passwordAlert.textContent = '* Passwords do not match';
        password.classList.replace('valid', 'invalid');
        password.value = '';
        e.target.classList.replace('valid', 'invalid');
        e.target.value = '';
    } else {
        passwordAlert.textContent = '';
    }
});

function validateForm(input) {
    return input.checkValidity();
}

submit.addEventListener('click', () => {
    let inputArray = Array.from(inputElements);
    if (inputArray.every(validateForm)) {
        console.log('Your form is valid!');
    } else {
        inputArray.forEach(function (inputHTML, index) {
            if (inputHTML.className === 'invalid') {
                const span = document.createElement('span');
                inputHTML.append(span);
            }
        })
    }
});
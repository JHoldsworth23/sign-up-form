const inputElements = document.querySelectorAll('input');
const formSection = document.querySelector('.form-section');
const divArray = Array.from(document.querySelectorAll('label + div'));
const password = document.querySelector('#pwd');
const passwordConfirmation = document.querySelector('#pwd-confirm');
const passwordAlert = document.querySelector('#pwd-alert');
const submit = document.querySelector('#submit-btn');

const FORM = formSection.innerHTML;

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
    if (!inputArray.every(validateForm)) {
        inputArray.forEach(function (inputHTML, index) {
            const spanArray = Array.from(document.querySelectorAll('.invalid-image'));
            if (inputHTML.className === 'invalid') {
                spanArray[index].style.setProperty('--narutomaki', 'url(image/narutomaki.png)');
            } else {
                spanArray[index].style.setProperty('--narutomaki', 'none');
            }
        })
    } else {
        formSection.innerHTML = `
          <div id="form-completed">
            <h2>Thank you!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident delectus commodi ad debitis facere atque eum architecto et unde vero saepe nemo, ab, pariatur perferendis similique libero error. Minima?</p>
            <button type="submit" id="home">Return</button>
          </div>
        `;
    }
});
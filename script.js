const inputElements = document.querySelectorAll('input');
const toggle = document.querySelector('#toggle');
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

toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const mode = root.className === 'dark' ? 'light' : 'dark';
    root.className = mode;
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
            inputHTML.className === 'invalid' 
            ? spanArray[index].style.setProperty('--narutomaki', 'url(image/narutomaki.png)') 
            : spanArray[index].style.setProperty('--narutomaki', 'none');
        })
    } else {
        formSection.innerHTML = `
          <div class="form-completed">
            <h2 class="form-subheading">Thank you!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident delectus commodi ad debitis facere atque eum architecto et unde vero saepe nemo, ab, pariatur perferendis similique libero error. Minima?</p>
            <button id="return">Return</button>
          </div>
        `;

        const returnHome = document.querySelector('#return');
        returnHome.addEventListener('click', () => {
            window.location.reload();
        });
    }
});

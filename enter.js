'use strict'

let emailEnter = document.querySelector('.enter-inputs__email_input');
let emailTitleEnter = document.querySelector('.enter-inputs__email_label');
let emailErrorValidEnter = document.querySelector('#valid-enter');

let passwordEnter = document.querySelector('.enter-inputs__password-input');
let passwordTitleEnter = document.querySelector('.enter-inputs__password_label');
let passwordErrorValidEnter = document.querySelector('.password-valid');

let validLoginPassword = document.querySelector('.emailOrPassword-valid');

let buttonEnter = document.querySelector('.enter__btn');

let checkBoxEnter = document.querySelector('#enter-check');
let checkEnterError = document.querySelector('#checkEnter-error');
let boxEnter = document.querySelector('#box-enter');

let starEmailEnter = document.querySelector('#starEmailEnter');
let starPasswordEnter = document.querySelector('#starPasswordEnter');
let starCheck = document.querySelector('#starCheckEnter');

let login = document.querySelector('.enter-inputs__email_input');
let password = document.querySelector('.enter-inputs__password-input');


let emailEnterContetnt = ''
let passwordEnterContetnt = ''
let checkInputEnter = null

emailEnter.addEventListener('input', (e) => {
    emailEnterContetnt = e.target.value.trim();
    emailErrorValidEnter.style.display = 'none';
    emailEnter.style.borderColor = '#787878';
    emailTitleEnter.style.color = '#787878';
    starEmailEnter.style.color = '#787878';
} )

passwordEnter.addEventListener('input', (e) => {
    passwordEnterContetnt = e.target.value.trim();
    passwordErrorValidEnter.style.display = 'none';
    passwordEnter.style.borderColor = '#787878';
    passwordTitleEnter.style.color = '#787878';
    starPasswordEnter.style.color = '#787878';
} )

checkBoxEnter.addEventListener('change', (e) => {
    checkInputEnter = e.target.checked;
    boxEnter.style.borderColor = '#787878';
    starCheck.style.color = 'initial';
    checkEnterError.style.display = 'none';
})

buttonEnter.addEventListener('click', (e) => {
    e.preventDefault();
    validEnter();
    validEmailPassword();
})

const validEnter = () => {
    if (emailEnterContetnt.length == '') {
        emailErrorValidEnter.style.display = 'block';
        emailEnter.style.borderColor = '#CB2424';
        emailTitleEnter.style.color = '#CB2424';
        starEmailEnter.style.color = '#CB2424';
    } else {
        emailErrorValidEnter.style.display = 'none';
        emailEnter.style.borderColor = '#787878';
        emailTitleEnter.style.color = '#787878';
    }

    if (passwordEnterContetnt.length == '') {
        passwordErrorValidEnter.style.display = 'block';
        passwordEnter.style.borderColor = '#CB2424';
        passwordTitleEnter.style.color = '#CB2424';
        starPasswordEnter.style.color = '#CB2424';
    } else {
        passwordErrorValidEnter.style.display = 'none';
        passwordEnter.style.borderColor = '#787878';
        passwordTitleEnter.style.color = '#787878';
    }

    if (!checkInputEnter) {
        checkEnterError.style.display = 'block';
        boxEnter.style.borderColor = '#CB2424';
        starCheck.style.color = '#CB2424';
    } else {
        checkEnterError.style.display = 'none';
        boxEnter.style.borderColor = '#787878';
        starCheck.style.color = 'initial';
    }
}

const validEmailPassword = () => {
    let users = JSON.parse(localStorage.getItem('user'));

    emailEnterContetnt = users.find(item => item.email == login.value);
    passwordEnterContetnt = users.find(item => item.password === password.value);

    if (!emailEnterContetnt || !passwordEnterContetnt) {
        validLoginPassword.style.display = 'block';
        emailEnter.style.borderColor = '#CB2424';
        emailTitleEnter.style.color = '#CB2424';
        starEmailEnter.style.color = '#CB2424';
        passwordEnter.style.borderColor = '#CB2424';
        passwordTitleEnter.style.color = '#CB2424';
        starPasswordEnter.style.color = '#CB2424';
    } else if (!checkInputEnter) {
        checkEnterError.style.display = 'block';
        boxEnter.style.borderColor = '#CB2424';
        starCheck.style.color = '#CB2424';
    } else {
        window.location.href = 'newPage.html'
    }
}




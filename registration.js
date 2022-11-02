'use strict'

let emailRegistration = document.querySelector('.registr-inputs__email_input');
let emailTitle = document.querySelector('.registr-inputs__email_label')
let emailErrorValid = document.querySelector('#valid-registr');
let emptyEmailRegistration = document.querySelector('.email-empty');

let passwordRegistration = document.querySelector('.registr-inputs__password-input');
let passwordTitle = document.querySelector('.registr-inputs__password_label');
let passwordLength = document.querySelector('.password-length');
let emptyPasswordRegistration = document.querySelector('.password-empty');

let buttonRegistration = document.querySelector('.registr__btn');

let checkboxRegistr = document.querySelector('#registr-check');
let checkMarkError = document.querySelector('#checkRegistr-error');
let box = document.querySelector('#box-registr');

let starEm = document.querySelector('#starEmail');
let starPass = document.querySelector('#starPassword');
let starCh = document.querySelector('#starCheck');

let emailContetnt = ''
let passwordContetnt = ''
let user = {}
let checkInput = null

let registrationLink = document.querySelector('.registration');
let enterLink = document.querySelector('.auth')
let registrationForm = document.querySelector('.registr');
let enterForm = document.querySelector('.enter');

let dataEmail, dataPassword, checkBox = false;

registrationLink.addEventListener('click', (e) => {
    e.preventDefault();
    linkRegistration();
})

const linkRegistration = () => {
    if (!registrationLink) {
        registrationForm.style.display = 'none';
    } else {
        registrationForm.style.display = 'block';
        enterForm.style.display = 'none';
    }
}

enterLink.addEventListener('click', (e) => {
    e.preventDefault();
    linkAuth();
})

const linkAuth = () => {
    if (!enterLink) {
        enterForm.style.display = 'none';
    } else {
        enterForm.style.display = 'block';
        registrationForm.style.display = 'none';
    }
}

// проверка на введенные значения
emailRegistration.addEventListener('input', (event) => {
    emailContetnt = event.target.value.trim();
    emptyEmailRegistration.style.display = 'none';
    emailRegistration.style.borderColor = '#787878';
    emailTitle.style.color = '#787878';
    starEm.style.color = '#787878';
} )

passwordRegistration.addEventListener('input', (event) => {
    passwordContetnt = event.target.value.trim();
    emptyPasswordRegistration.style.display = 'none';
    passwordRegistration.style.borderColor = '#787878';
    passwordTitle.style.color = '#787878';
    starPass.style.color = '#787878';
} )

checkboxRegistr.addEventListener('change', (event) => {
    checkInput = event.target.checked;
    checkMarkError.style.display = 'none';
    box.style.borderColor = 'initial';
    starCh.style.color = 'initial';
})


buttonRegistration.addEventListener('click', (event) => {
    event.preventDefault();
    validRegistration();
    validData();
})

const validRegistration = () => {
// проверка на пустой email
    if(emailContetnt.length == '') {
        emptyEmailRegistration.style.display = 'block';
        emailErrorValid.style.display = 'none';
        emailRegistration.style.borderColor = '#CB2424';
        emailTitle.style.color = '#CB2424';
        starEm.style.color = '#CB2424';
        dataEmail = false;
    } else {
        emptyEmailRegistration.style.display = 'none';
        emailRegistration.style.borderColor = '#787878';
        emailTitle.style.color = '#787878';
        
// проверка email на валдность
        if(!validDataEmail(emailContetnt) && emailContetnt.length != '') {
            emailErrorValid.style.display = 'block';
            emailRegistration.style.borderColor = '#CB2424';
            emailTitle.style.color = '#CB2424';
            starEm.style.color = '#CB2424';
        } else {
            emailErrorValid.style.display = 'none';
            starEm.style.color = '#787878';
            user.email = emailContetnt;
            dataEmail = true;
        }
    }
// проверка на пустой пароль
    if(passwordContetnt.length == '') {
        emptyPasswordRegistration.style.display = 'block';
        passwordLength.style.display = 'none';
        passwordRegistration.style.borderColor = '#CB2424';
        passwordTitle.style.color = '#CB2424';
        starPass.style.color = '#CB2424';
        dataPassword = false;
    } else {
        emptyPasswordRegistration.style.display = 'none';
        passwordRegistration.style.borderColor = '#787878';
        passwordTitle.style.color = '#787878';
        
// проверка на длину пароля
        if(passwordContetnt.length < 8 && passwordContetnt.length > 0) {
            passwordLength.style.display = 'block';
            passwordRegistration.style.borderColor = '#CB2424';
            passwordTitle.style.color = '#CB2424';
            starPass.style.color = '#CB2424';
        } else {
            passwordLength.style.display = 'none';
            starPass.style.color = '#787878';
            user.password = passwordContetnt;
            dataPassword = true;
        }
    }
//проверка на выбор чекбокса
    if(!checkInput) {
        checkMarkError.style.display = 'block';
        box.style.borderColor = '#CB2424'
        starCh.style.color = '#CB2424';
        checkBox = false;
    } else {
        checkMarkError.style.display = 'none';
        box.style.borderColor = 'initial';
        starCh.style.color = 'initial';
        checkBox = true;
    }

}
const validDataEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validData = () => {
    if(dataEmail && dataPassword && checkBox) {
        let getUser = JSON.parse(localStorage.getItem('user') || '[]');
        getUser.push(user);
        localStorage.setItem('user', JSON.stringify(getUser));
        console.log(getUser);
    } else {
        alert('Пожалуйста, вводите данные внимательно!');
    }
}




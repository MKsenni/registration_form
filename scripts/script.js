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
console.log(user)
let checkInput = null



// проверка на введенные значения
emailRegistration.addEventListener('input', (even) => {
    emailContetnt = even.target.value.trim();
} )

passwordRegistration.addEventListener('input', (even) => {
    passwordContetnt = even.target.value.trim();
} )

checkboxRegistr.addEventListener('change', (even) => {
    checkInput = even.target.checked;
})

let dateEmail, datePassword, checkBox = false;

buttonRegistration.addEventListener('click', (even) => {
    even.preventDefault();
    validRegistration();
    validDate();
    // console.log(even);
    // console.log(user);
})

const validRegistration = () => {
// проверка на пустой email
    if(emailContetnt.length == '') {
        emptyEmailRegistration.style.display = 'block';
        emailErrorValid.style.display = 'none';
        emailRegistration.style.borderColor = '#CB2424';
        emailTitle.style.color = '#CB2424';
        starEm.style.color = '#CB2424';
    } else {
        emptyEmailRegistration.style.display = 'none';
        emailRegistration.style.borderColor = '#787878';
        emailTitle.style.color = '#787878';
        
// проверка email на валдность
        if(!validateEmail(emailContetnt) && emailContetnt.length != '') {
            emailErrorValid.style.display = 'block';
            emailRegistration.style.borderColor = '#CB2424';
            emailTitle.style.color = '#CB2424';
            starEm.style.color = '#CB2424';
        } else {
            emailErrorValid.style.display = 'none';
            starEm.style.color = 'initial';
            user.email = emailContetnt;
            dateEmail = true;
        }
    }
// проверка на пустой пароль
    if(passwordContetnt.length == '') {
        emptyPasswordRegistration.style.display = 'block';
        passwordLength.style.display = 'none';
        passwordRegistration.style.borderColor = '#CB2424';
        passwordTitle.style.color = '#CB2424';
        starPass.style.color = '#CB2424';
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
            starPass.style.color = 'initial';
            user.password = passwordContetnt;
            datePassword = true;
        }
    }
//проверка на выбор чекбокса
    if(!checkInput) {
        checkMarkError.style.display = 'block';
        box.style.borderColor = '#CB2424'
        starCh.style.color = '#CB2424';
    } else {
        checkMarkError.style.display = 'none';
        box.style.borderColor = 'initial';
        starCh.style.color = 'initial';
        checkBox = true;
    }

}
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validDate = () => {
    if(dateEmail && datePassword && checkBox) {
        localStorage.setItem('user', user);
        localStorage.user = JSON.stringify(user);
        console.log(JSON.parse(localStorage.user));
    }
}




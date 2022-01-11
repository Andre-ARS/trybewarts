const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const counterText = document.querySelector('#counter');
let counter = 500;


submitButton.disabled = true;

function loginCheck() {
  if (userEmail.value === 'tryber@teste.com' && userPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginCheck);

function enableDisableSubmit() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', enableDisableSubmit);

document.getElementById('textarea').addEventListener('keyup', function () {
  counterText.innerText = counter - document.getElementById('textarea').textLength;
});
